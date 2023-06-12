const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

const corsOption = {
    origin: "*"
};

//register cors middleware
app.use(cors(corsOption));
app.use(express.json());

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//connect database
db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log('berhasil buat databases'))
    .catch((err) => {
        console.log(`gagal koneksi ${err.message}`);
        process.exit();
    });


//route
require('./routes/mahasiswa.routes')(app);

app.listen(5000,() => console.log('server berjalan di port 5000'));
