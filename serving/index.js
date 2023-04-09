const path = require('path');
const express = require('express');


const app = express()

const hbs = require('hbs');

const port = process.env.PORT || 8000;

const mongoose = require('mongoose');
app.use(express.json());

const DB = "mongodb+srv://Nouman:ArfaCareem123@newathome.88tuh.mongodb.net/next?retryWrites=true&w=majority";
mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("connection successful yes");
}).catch((err)=>{
  console.log(err);

});


const Student = require("../serving/scr/schema/schema");
const connect = require("../serving/scr/db/connect");


app.use(express.urlencoded({extended:false}));


// You have to install hbs and express init

const templatePath = path.join(__dirname,'./template/views');
// upper line specifies the path to the views folder where main files are present like index files to serve and render


// const partialsPath = path.join(__dirname,"./template/partials");
// upper line specifies the path to the partials folder

app.set('views',templatePath);   
// upper line is for to change views folder with template


// hbs.registerPartials(partialsPath);
// upper line is for to register partials in the file


app.set('view engine','hbs');

const staticPath = path.join(__dirname,"../public");


app.use(express.static(staticPath));



app.get('/',(req,res)=>{
  res.render("index");
})

app.post("", async(req,res)=>{
  try{
    const schema = new Student({
      name:req.body.name,
      phone:req.body.phone,
            email:req.body.email,
            messege:req.body.messege,
          });
            
            const registered = await schema.save();
    
            console.log("Data Got");
    
            res.render("index");
          
        }catch(e){
          console.log(e);
          console.log("Data didnot save")
        
        }

})





app.get('*',(req,res)=>{
    res.send('404 Page not Found');
})



app.listen(port,()=>{
    console.log('listening to the port 8000');
});





