module.exports = mongoose => {

    const schema = mongoose.Schema({
        nama_lengkap: String,
        usia: String,
        jk: String,
    }, {
        timestamps: true
    });

    return mongoose.model('mahasiswas',schema);
};