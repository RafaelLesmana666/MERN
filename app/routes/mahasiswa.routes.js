module.exports = app => {

    const mahasiswa = require('../controllers/mahasiswaController');
    const r = require('express').Router();

    r.get('/', mahasiswa.read);
    r.get('/:id',mahasiswa.show);
    r.post('/tambah', mahasiswa.create);
    r.put('/:id',mahasiswa.update);
    r.delete('/:id',mahasiswa.delete);
    

    app.use('/mahasiswa',r); 

}