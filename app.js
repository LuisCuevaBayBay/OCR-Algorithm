const express = require('express');
const app = express();
const fs = require("fs");
const multer = require('multer');
const { TesseractWorker } = require('tesseract.js');

const worker = new TesseractWorker();

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null,"./uploads");
    },
    filename:(req, file, cb) => {
        cb(null,req.file);
    }
});


const uploads = multer({storage:storage}).single("avatar");
app.set("view engine", "ejs");

//Iniciar Servidor
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log('Hey funciono!!!'));
