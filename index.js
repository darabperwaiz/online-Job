const express=require('express');
const dbconnection=require('./config/dbconnection');
const cookieParser=require('cookie-parser');

const port=process.env.PORT || 8008
const app=express();

//cookie setup

app.use(cookieParser());

//view engine setup
app.set('view engine','ejs');
app.set('views','./views');

//to collect form data

app.use(express.urlencoded());

//set assets


app.use(express.static('./assets'));

app.use('/',require('./routers'));
app.get('*',(req,res)=>{
    res.send("Page not Found");
    return;
})


app.listen(port,function(err){
    if(err){
        console.log(`Error in running server ${err}`);
        return ;
    }

    console.log(`Server is runing at port no ${port}`);
})