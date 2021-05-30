const express = require('express');
const knex = require('knex');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postpassgresword1427',
        database: 'proiect_sisteme'
    }
})

app.use(bodyParser.json());
app.use(cors());

app.post('/add-car', async (req, res) => {
    try {
        const { 
            nrmasina, 
            marca, 
            tip, 
            seriemotor, 
            seriecaroserie, 
            carburant, 
            culoare, 
            capacitatecilindrica, 
            preteuro 
        } = req.body;

        db.insert({
            nrvehicul: nrmasina,
            marca: marca,
            tip: tip,
            seriemotor: seriemotor,
            seriecaroserie: seriecaroserie,
            carburant: carburant,
            culoare: culoare,
            capacitatecil: capacitatecilindrica,
            preteuro: preteuro
        }).into('vehicul')
            .returning('*')
            .then(vehicle => {
                console.log(vehicle);
            })

    } catch (err) {
        console.log(err);
    }
})

app.get('/masini', async (req, res) => {
    try {       
        const masina = await db.select('*').from('vehicul');  
        res.json({
            masina
        }).status(200);
    } catch (err) {
        console.log(err);
    }
})

app.get('/get-car', async (req, res) => {
    try {
        const getCar = await db.count('marca').from('vehicul');
        const getManufacturer = await db.select('marca').from('vehicul');
        res.json({
            getCar,
            getManufacturer
        }).status(200);
    } catch (err) {
        console.log(err);
    }
})

app.get('/cart', async (req, res) => {
    try {
        const cart = req.headers['cart'];
        const getCar = await db.select('marca', 'seriecaroserie', 'preteuro').from('vehicul').where('seriecaroserie', '=', cart);
        const data = getCar[0];
        const marca = data.marca;
        const serieCaroserie = data.seriecaroserie;
        const pretEuro = data.preteuro;
        res.json({
            marca,
            serieCaroserie,
            pretEuro
        }).status(200);
    } catch (err) {
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON ${port}`)
})