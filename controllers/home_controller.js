const con = require('../config/dbconnection');
const mysql = require('mysql');
module.exports.home = function (req, res) {
    res.render('home');
    return;
}

module.exports.job_seeker_reg_form = function (req, res) {
    res.render('job_seeker_reg_form');
    return;
}

module.exports.job_provider_reg_form = function (req, res) {
    res.render('job_provider_reg_form');
    return;
}

module.exports.job_seeker_login = function (req, res) {
    res.render('job_seeker_login');
    return;
}
module.exports.job_provider_login = function (req, res) {
    res.render('job_provider_login');
    return;
}
module.exports.create_job_seeker = function (req, res) {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const location = req.body.location;
    const skill = req.body.skill;
    const experience = parseInt(req.body.experience);
    const qualification = req.body.qualification;
    const type = 2;
    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    //     con.query(sql, function (err, result) {
    //       if (err) throw err;
    //       console.log("1 record inserted");
    //     });
    //   });
    console.log(req.body);
    var sql1 = `select * from user where email=` + mysql.escape(email);
    con.query(sql1, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log(result);
            if (result.length==0) {

                var sql = `INSERT INTO user (fname,lname,phone,email,password,location,skill,experience,qualification,type) VALUES (?,?,?,?,?,?,?,?,?,?)`;
                con.query(sql, [fname, lname, phone, email, password, location, skill, experience, qualification, type], function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("1 record inserted");
                        return res.redirect('/job_seeker_login');

                    }


                })

            }
            else{
                res.send('User already exists')
                res.redirect('back');
            }
        }
    })





}

module.exports.create_job_provider=function(req,res){
    const fname=req.body.fname;
    const lname=req.body.lname;
    const phone=req.body.phone;
    const email=req.body.email;
    const experience=req.body.experience;
    const password=req.body.password;
    const company=req.body.company;
    const type=1;
    console.log(req.body);
    var sql1 = `select * from employer where email=` + mysql.escape(email);
    con.query(sql1, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log(result);
            if (result.length==0) {

                var sql = `INSERT INTO employer (fname,lname,phone,email,password,experience,company,type) VALUES (?,?,?,?,?,?,?,?)`;
                con.query(sql, [fname, lname, phone, email, password, experience,company, type], function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("1 record inserted");
                        return res.redirect('/job_provider_login');

                    }


                })

            }
            else{
                res.send('User already exists');
                res.redirect('back');
            }
        }
    })






}

module.exports.create_job_provider_login=function(req,res){
    const email=req.body.email;
    const password=req.body.password;
    console.log(req.body);

    const query=`select * from employer where email=`+mysql.escape(email);
    con.query(query,function(err,result){
        if(err){
            throw err;
        }
        else{
            console.log(result);
            if(result.length!=0 && result[0].password==password){
                res.cookie("emp_id",result[0].empid);
                res.redirect('/job_provider/job_provider_home');
                return;
            }
            else{
                console.log(1);
    
                res.redirect('job_provider_login');
                return;
            }
        }
    })

}



module.exports.create_job_seeker_login=function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    const query=`select * from user where email=`+mysql.escape(email);
    con.query(query,function(err,result){
        if(err){
            throw err;
        }
        else{
            if(result.length!=0 && result[0].password==password){
                res.cookie("user_id",result[0].userid);
                res.redirect('job_seeker/job_seeker_home');
                return;
            }
            else{
                res.redirect('job_seeker_login');
                return;
            }
        }
    })
}