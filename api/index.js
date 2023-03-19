const express = require('express');
const cors = require('cors');
const app = express();
const {Users} = require("./users")
app.use(cors())

app.get("/", (req,res) => {
    const {q} = req.query;
    
    const keys = ["first_name", "last_name", "email"]

    const search = (data) => {
        return data.filter((item) => 
        keys.some((key) => item[key].toLowerCase().includes(q)) 
        );
    }
   res.json(search(Users).splice(0,10))
})

app.listen(5000, () => {
    console.log("Api is working")
})