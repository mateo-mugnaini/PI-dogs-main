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
    const { name } = req.query
    if (name) {
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${ name }`);
        const data = response.data;
        const nameDb = await Breed.findAll({
            where: {
                nombre: name
            },
            attributes: ['nombre', 'peso'],
            include: Temperament,
        });    
        res.send(data || nameDb)
    } else {
        const breedDb = await Breed.findAll({
            attributes: ["nombre", "peso"],
            include: Temperament,
        });
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`);
        const breedAPI = response.data;
        const allDogs = [...breedAPI, ...breedDb];
        // console.log (response, APIKEY)
        res.send(allDogs);
    }
});

router.get('/dogs/:idRaza', async function (req, res) {
    const { idRaza } = req.params;
    const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`);
    const breedSelected = response.data.filter(w => w.id === Number(idRaza))
    const nameDb = await Breed.findByPk(idRaza,{
        attributes: ['nombre', 'peso', 'altura', 'anoDeVida'],
        include: Temperament,
      });
      res.send(nameDb || breedSelected)
})

router.post ('/dogs', async function(req, res){
     const { nombre, altura, peso, anoDeVida, temperament} = req.body;
     const idFecha = new Date()
     const razas = await Breed.create({
         nombre: nombre,
         altura: altura,
         peso: peso,
         anoDeVida: anoDeVida,
         id: idFecha.getTime()
    })
     await razas.setTemperaments([...temperament])

     res.json(razas)
})


router.get('/temperament', async function(req, res){

const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${APIKEY}`);
        const temperamentAPI = await response.data;
        const allTemperaments = [];
        temperamentAPI.map(temp => {
            if (temp.temperament) {
                allTemperaments.push(...temp.temperament.split(','))
            }
        }); 
        allTemperaments.forEach(temp => {
            Temperament.findOrCreate({
            where: {
                nombre: temp,
            }
        })
        
    }) 
    const temperamentos = await Temperament.findAll()
    console.log(allTemperaments, temperamentos)
    res.send(temperamentos)
})




module.exports = router;
