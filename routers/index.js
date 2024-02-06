const express=require('express');
const homeController=require('../controllers/home_controller');


const router=express.Router();
router.use(express.static('./assets'));
router.use('/job_seeker',require('./jobSeeker'));
router.use('/job_provider',require('./jobProvider'));

router.get('/',homeController.home);
router.get('/job_seeker_reg_form',homeController.job_seeker_reg_form);
router.get('/job_provider_reg_form',homeController.job_provider_reg_form);
router.get('/job_provider_login',homeController.job_provider_login);
router.get('/job_seeker_login',homeController.job_seeker_login);
router.post('/create_job_seeker',homeController.create_job_seeker);
router.post('/create_job_provider',homeController.create_job_provider);
router.post('/job_seeker_login',homeController.create_job_seeker_login);
router.post('/job_provider_login',homeController.create_job_provider_login);


module.exports=router;




