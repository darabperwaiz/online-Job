const express=require('express');
const multer=require('multer');
const path=require('path');
resumePath=path.join(__dirname,'../resume');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, resumePath)
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() 
//       cb(null, file.fieldname + '-' + uniqueSuffix + '.pdf')
//     }
//   });
  
//   const upload = multer({ 
//     storage: storage ,
//     limits: {
      
//       // TODO: Change this line after compression
//       fileSize: 1500, // 150 KB for a 1080x1080 JPG 90
//   }
  
//   }).single('resume');

const router=express.Router();
const job_seeker_controller=require('../controllers/job_seeker_controller');

router.get('/job_seeker_home',job_seeker_controller.home);
router.get('/top_job',job_seeker_controller.top_job);
router.get('/show_job_details',job_seeker_controller.show_job_details);
router.post('/show_job_details/apply_job',job_seeker_controller.apply_job);
router.get('/logout',job_seeker_controller.logout);
router.post('/search_job',job_seeker_controller.search_job);

module.exports=router;
