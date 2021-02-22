const express = require("express")
const PORT = 2000

const app = express();




app.listen(PORT, ()=>{
    console.log(`looking to port${PORT}`);
})