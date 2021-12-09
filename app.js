//importaciones

const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const { createWorker } = require("tesseract.js");
const worker = createWorker();
//almacenamiento de imagenes
const storage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, './uploads');
    }
});

const upload = multer({storage: storage}).single("tanjiro");
app.set("view engine", "ejs");


//rutas
app.get("/", (req, res) =>{
    res.render("index");
});

app.post("/upload", (req, res) =>{
    upload(req,res,err =>{
        console.log(req.file);
    })
});

//iniciar servidor
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});