const express           =    require('express');
const app               =    express();
const mongoose          =    require('mongoose');
var bodyParser          =    require('body-parser');
const swaggerDoc        =    require('./Doc_Swagger');
const initEndPoints     =    require('./endPoints')
const keys              =    require('./config/keys')

app.use('/uploads',express.static('uploads'))

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));


//this will initialize the swagger for documenting
swaggerDoc(app);
initEndPoints(app);


//connecting to database and staring the server
mongoose.connect(keys.MONGO_URI,{useUnifiedTopology: true,  useNewUrlParser: true ,useCreateIndex: true })
.then(()=>{
    app.listen(8000,()=>{
        console.log("server up on the port number: 8000")
    })
})
.catch(err=>{
    throw err;
})

