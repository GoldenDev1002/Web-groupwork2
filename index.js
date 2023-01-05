let express = require("express");
let app = express();
let cors = require("cors");


app.use(cors());

app.get("/lessons", (req, res)=> {
    app.set("json spaces", 3);
    let lessons= [
        {
        topic: "Math",
            location: "Brent Cross", 
            price: 100
           
        },
    
        {
            topic: "Math",
               location: "Brent Cross", 
               price: 100
              
           },
    
           
        {
            topic: "Math",
               location: "Brent Cross", 
               price: 100
              
           },

           
        {
            topic: "Math",
               location: "Brent Cross", 
               price: 100
              
           }
    ];
    res.json(lessons);
   // res.send("to the new file ");
})

app.get("/user", (req, res)=> {
    app.set("json spaces", 3);
    let userDetails = [
        {
            email: "user@email.com",
            password : "mypassword"
              
           },
    ]
    res.json(userDetails)
})

app.listen("2100", ()=> {
    console.log("this is to the port 2100");
})