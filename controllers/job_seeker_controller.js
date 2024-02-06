const con = require("../config/dbconnection");
const mysql = require("mysql");
const path = require("path");
const resumePath = path.join(__dirname, "../resume");
console.log(resumePath);
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, resumePath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, file.fieldname + "-" + uniqueSuffix + ".pdf");
    },
});

const upload = multer({
    storage: storage,
   
    fileFilter: (req, file, cb) => {
       
        if (file.mimetype == 'application/pdf') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error("Only .pdf file is allowed"));
        }
    },
    limits: {
        // TODO: Change this line after compression
        fileSize: 150000, // 150 KB for a 1080x1080 JPG 90
    }
}).single("resume");

module.exports.home = function (req, res) {
    res.render("job_seeker_home");
    return;
};

module.exports.show_job_details = function (req, res) {
    console.log(req.query);

    // const id=parseInt(req.query.id);
    const sql = `SELECT * FROM jobs where jobid = ` + mysql.escape(req.query.id);
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.render("show_job_details", {
                result: result,
               
            });
        }
    });

    return;
};
module.exports.apply_job = function (req, res) {
    console.log(req.file);
    

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError)
         {
            // A Multer error occurred when uploading.
            console.log(err.code);

            res.send(err.code);
            return;



        } 
        else if (err) {
            // An unknown error occurred when uploading.
            console.log(err);
            console.log(2);
           

            res.send(err.message);
            return;
            
           



        } 
        else 
        {
            // const jobid = req.query.jobid;
            const jobid = req.body.jobid;
            // Everything went fine.
            console.log(resumePath);
            const a = req.file.filename;
            const actualPath = path.join(resumePath, a);
            console.log(actualPath);
            console.log(req.file.fieldname);
            const userid = req.cookies.user_id;

            // console.log(jobid);

            const query =
                `select * from application where userid=` +
                mysql.escape(userid) +
                `and jobid=` +
                mysql.escape(jobid);
            con.query(query, function (err, result) {
                if (err) {
                    throw err;
                } else {
                    if (result.length != 0) {
                        console.log(result);
                        res.send("<h1>Already Applied<h1>");
                    } else {
                        const sql =
                            "insert into application (userid,jobid,resume_destination) values (?,?,?)";
                        con.query(sql, [userid, jobid, actualPath], function (err, result) {
                            if (err) {
                                throw err;
                            } else {
                                res.send("<h1>Job Applied done");
                            }
                        });
                    }
                }
            });

           
        }
       
    });

   
};

module.exports.logout = function (req, res) {
    res.clearCookie("user_id");
    res.redirect("/");
    return;
};
module.exports.top_job = function (req, res) {
    const sql = "select * from jobs order by salary";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            res.render("top_job", {
                result: result,
            });
        }
    });

    return;
};

module.exports.search_job = function (req, res) {
    const value = req.body.search;
    console.log(value);
    const sql = `select * from jobs where title like ` + `'` + `%` + value + `%` + `'` + ` union ` + `select * from jobs where skills like ` + `'` + `%` + value + `%` + `'` + ` union ` + `select * from jobs where description like ` + `'` + `%` + value + `%` + `'` + ` union ` + `select * from jobs where salary = ` + `'` + value + `'` +` union ` + `select * from jobs where location like ` + `'` + `%` + value + `%` + `'` + ` union ` + `select * from jobs where description like ` + `'` + `%` + value + `%` + `'`;

    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result)
            res.render("top_job", {
                result: result,
            });
        }
    });
};
