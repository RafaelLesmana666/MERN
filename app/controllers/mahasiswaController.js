const db = require('../models');
const Mahasiswa = db.mahasiswa;

exports.create = (req, res) => {
    Mahasiswa.create(req.body)
    .then(() => {
        res.json({message: "data berhasil"});
    })
    .catch(err => res.status(400).json({ message: err.message}));
}

exports.read = (req, res) => {
    Mahasiswa.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ message: err.message }));
};

exports.show = (req, res) => {
    const id = req.params.id;
    Mahasiswa.findById(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ message: err.message }));
}

exports.update = (req, res) => {
    const id = req.params.id;
    Mahasiswa.findByIdAndUpdate(id,req.body,{ useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'tidak dapat mengupdate' });
        }
        res.json({ message: "data berhasil diupdate "});
    })
    .catch(err => res.status(500).json({ message: err.message }));
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Mahasiswa.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
            res.status(404).json({ message: 'tidak dapat menghapus data' });
        }
        res.json({ message: "data berhasil dihapus "});
    })
    .catch(err => res.status(500).json({ message: err.message }));
}