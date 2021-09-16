const express = require("express");
const app= express();
const port= 8000;
var faker= require('faker');

class User{
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName= faker.name.firstName();
        this.lastName= faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.email= faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id= faker.datatype.uuid();
        this.name= faker.company.companyName();
        this.address= [faker.address.streetName(), faker.address.cityName(), faker.address.state(), faker.address.country()];
    }
}

app.get("/api/users/new", (req, res) => {
    let newUser= new User()
    res.json({data: newUser})
})

app.get("/api/companies/new", (req, res) =>{
    let newCompany = new Company();
    res.json({data: newCompany});
})

app.get("/api/user/company", (req,res) =>{
    let newUser= new User();
    let newCompany = new Company();
    res.json({data: newCompany, newUser});
})

app.listen( port, () => console.log(`Listening on port: ${port}`));