let express = require("express");
let app = express();
let cors = require("cors");


app.use(cors());

app.get("/lessons", (req, res)=> {
    app.set("json spaces", 3);
    let lessons= [
        {
        topic: "math",
            location: "Brent Cross", 
            price: 100
           
        },
    
        {
            topic: "math",
               location: "Brent Cross", 
               price: 100
              
           },
    
           
        {
            topic: "math",
               location: "Brent Cross", 
               price: 100
              
           },

           
        {
            topic: "math",
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
            email: "firstuser1@gmail.com",
            password : "password134"
              
           },
    ]
    res.json(userDetails)
})