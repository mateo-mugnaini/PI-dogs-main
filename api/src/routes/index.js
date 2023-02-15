const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Breed, Temperament } = require("../db");
const axios = require("axios");
const { where } = require("sequelize");

const { APIKEY } = process.env;

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", async function (req, res) {
  const { name, tempName, type = "All" } = req.query;
  if (name) {
    //
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${APIKEY}`
    );
    const data = response.data;
    const responseImage = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`
    );
    const elementWithImage = responseImage.data.filter(
      (el) => data[0]?.reference_image_id === el.reference_image_id
    );

    const nameDb = await Breed.findAll({
      where: {
        name: name,
      },
      attributes: ["name", "weight"],
      include: Temperament,
    });
    const allBreeds = [...elementWithImage, ...nameDb];

    res.json(
      type === "DB"
        ? nameDb
        : type === "API"
        ? elementWithImage
        : type === "All"
        ? allBreeds
        : []
    );
    // res.send(elementWithImage || nameDb)
  } else if (tempName) {
    const responseAPI = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`
    );
    const filteredBreeds = responseAPI.data.filter((e) =>
      e.temperament?.includes(tempName)
    );
    const BreedsDB = await Breed.findAll({
      include: Temperament,
    });
    const filteredBreedsDB = BreedsDB.filter((e) => {
      const objeto = e.temperaments.filter((f) => f.nombre === tempName);
      return objeto.length > 0;
    });
    const allBreeds = [...filteredBreedsDB, ...filteredBreeds];
    res.send(
      type === "DB"
        ? filteredBreedsDB
        : type === "API"
        ? filteredBreeds
        : type === "All"
        ? allBreeds
        : null
    );
    // res.send(allBreeds)
  } else {
    const breedDb = await Breed.findAll({
      attributes: ["name", "weight", "id"],
      include: Temperament,
    });
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`
    );
    const breedAPI = response.data;
    const allBreeds = [...breedAPI, ...breedDb];
    console.log(type, type.toString() === "DB");
    res.send(
      type === "DB"
        ? breedDb
        : type === "API"
        ? breedAPI
        : type === "All"
        ? allBreeds
        : null
    );
    // res.send(allBreeds)
  }
});

router.get("/dogs/:idRaza", async function (req, res) {
  const { idRaza } = req.params;
  const response = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`
  );
  const breedSelected = response.data.filter((w) => w.id === Number(idRaza));
  const nameDb = await Breed.findByPk(idRaza, {
    attributes: ["name", "weight", "height", "life_span"],
    include: Temperament,
  });
  console.log(nameDb);
  res.send(nameDb ? [nameDb] : breedSelected);
});

router.post("/dogs", async function (req, res) {
  const { nombre, altura, peso, anoDeVida, temperament } = req.body;
  const idFecha = new Date();
  const razas = await Breed.create({
    name: nombre,
    height: altura,
    weight: peso,
    life_span: anoDeVida,
    id: idFecha.getTime(),
  });
  await razas.setTemperaments([...temperament]);

  res.json(razas);
});

router.get("/temperament", async function (req, res) {
  const response = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`
  );
  const temperamentAPI = await response.data;
  const allTemperaments = [];
  temperamentAPI.map((temp) => {
    if (temp.temperament) {
      allTemperaments.push(...temp.temperament.split(", "));
    }
  });
  allTemperaments.forEach((temp) => {
    Temperament.findOrCreate({
      where: {
        nombre: temp,
      },
    });
  });
  const temperamentos = await Temperament.findAll();
  res.send(temperamentos);
});

module.exports = router;
