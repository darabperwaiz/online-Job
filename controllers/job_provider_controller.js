const con = require('../config/dbconnection');
const mysql = require('mysql');
module.exports.home = function (req, res) {
    res.render('job_provider_home');
    return;
}

module.exports.categorie = function (req, res) {
    res.render('add_categorie');
    return;
}

module.exports.logout=function(req,res){
    res.clearCookie('emp_id');
    res.redirect('/');
    return;
}

module.exports.job_post = function (req, res) {
    const sql = "select * from categories";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log(result);
            res.render('job_post', {
                result: result
            });

        }

    })

    return;

}

module.exports.create_job_post = function (req, res) {
    console.log(req.body);
    const title = req.body.title;
    const location = req.body.location;
    const experience = parseInt(req.body.experience);
    const categorie = parseInt(req.body.categorie);
    const skill = req.body.skill;
    const time = req.body.time;
    const salary = req.body.salary;
    const empid = parseInt(req.cookies.emp_id);
    const description = req.body.job_description;

    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    //     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    //     con.query(sql, function (err, result) {
    //       if (err) throw err;
    //       console.log("1 record inserted");
    //     });
    //   });



    var sql = `INSERT INTO jobs (title,location,experience,catid,skills,timing,salary,empid,description) VALUES (?,?,?,?,?,?,?,?,?)`;
    con.query(sql, [title,location,experience,categorie,skill,time,salary,empid,description], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log("1 record inserted");
            return res.redirect('job_post');

        }


    })









    
    return;
}
module.exports.show_categorie = function (req, res) {
    const sql = "select * from categories";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log(result);
            res.render('show_categorie', {
                result: result
            });

        }

    })

    return;
}

module.exports.create_categorie = function (req, res) {
    const categorie = req.body.categorie;
    console.log(req.body);
    var sql1 = `select * from categories where name=` + mysql.escape(categorie);
    con.query(sql1, function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log(result);
            if (result.length == 0) {

                var sql = `INSERT INTO categories (name) VALUES (?)`;
                con.query(sql, [categorie], function (err, result) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    else {
                        console.log("1 record inserted");
                        res.redirect('back');

                    }


                })

            }
            else {
                res.redirect('back');
            }
        }
    })



}