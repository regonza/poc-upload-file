const mongoose = require('mongoose');
const multer  = require('multer')
const uploadService = require('../services/upload')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        console.log(file)
        cb(null, './upload')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}.pdf`)
    }
})
const upload = multer({storage: storage})


exports.upload = upload.single('myFile'), (req, res) => {
    // req.file es el nombre de tu archivo en el formulario anterior, en este caso 'uploaded_file'
    // req.body contendrá los campos de texto, si los hubiera.
    console.log(req.file, req.body)
 };

exports.uploadFile = async (req, res) => {
    // TODO storage dinamico.
    const data = await pdfToText('./upload/1675026166443.pdf', 1);
    console.log(`la data: ${data}`)
    res.send(data);
}

async function pdfToText(src) {
    const result = await uploadService.getItems(src, 1);
    return result;
}