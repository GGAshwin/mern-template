const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors= require('cors');

const mongoose= require('mongoose');
const DB=require('./Models/DB');
const { click } = require('@testing-library/user-event/dist/click');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const url = `mongodb+srv://<name:password>@cluster0.cjcyr.mongodb.net/MERN?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.get('/details',async(req,res)=>{
    const db= await DB.findOne({id:123})
    // console.log('saved');
    res.json({clicks:db.click})
})

app.post('/details',async(req,res)=>{
    // console.log(req.body.clicks);
    let db= await DB.findOneAndUpdate({id:123},{click:++req.body.clicks})
    db.save()
    db=await DB.findOne({id:123})
    res.json({clicks:db.click})
})

app.listen(3001,()=>{
    console.log('Listen on http://localhost:3001');
})