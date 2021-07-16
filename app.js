const {sequelize} = require('./db'); // brings in Sequelize the entire library
const express = require('express'); //brings in express lib???
const {Restaurant, Menu} = require("./index");

const app = express(); //invoke express and set it to app variable

app.use(express.json()); //allows send post request

const port = 8001; // setting port to listen on 

app.get('/', (req, res) => { //testing first route
    res.send('This is a test. Hello World!')
})

app.get('/allrestaurants', async (req, res) => {
    let allrestaurants = await Restaurant.findAll()
    res.json({ allrestaurants });
})

app.listen(port, async () => {
    await seed()
    console.log(`Server is listening on http://localhost:${port}`);
})

app.get('/allrestaurants/:id', async (req, res) => {
    let restaurant = await Restaurant.findByPk(req.params.id, {include : Menu});
    res.json({ restaurant })
})

//Adds Restaurants to database
async function seed(){
	await sequelize.sync({ force: true });

	let feliciasuzanne = await Restaurant.create({name : 'Felicia Suzanne', tableid: 1,type : 'Southern',rating : 5 + ' Stars'})
    let  duck   = await Menu.create({description: 'Plates for sharing',menu_item : ' Duck Rillette w/ Creole Mustard ', cost: '28'})
    let porchandparlor = await Restaurant.create({name : 'Porch and Parlor', type : 'Southern Steakhouse', rating : 5 + ' Stars'})
    let  A5   = await Menu.create({description: 'Prime Cuts Wagyu Snake River Farms. USA ',menu_item : ' Japanese A5 Ribeye ', cost:'24' + ' per oz'})
    let babaluo = await Restaurant.create({name : 'BABALUO', type : 'Cuban', tableid: 3,rating : 4 + ' Stars'})
    
    let curynjerk = await Restaurant.create({name : 'Curry N Jerk', tableid: 4,type : 'Caribbean', rating : 4 + ' Stars'})
   
    let hyderabad = await Restaurant.create({name : 'Hyderabad Biryani and More', tableid: 5, type : 'Indian', rating : 5 + ' Stars'})
    // create a menu  call .addmenu 

    await feliciasuzanne.addMenu(duck);

    await porchandparlor.addMenu(porchandparlor);
    
    await babaluo.addMenu(babaluo);
    
    await curynjerk.addMenu(curynjerk);
    
    await hyderabad.addMenu(hyderabad);
	



	console.log("db seeded!!")

}