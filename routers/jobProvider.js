const express=require('express');
const router=express.Router();
const job_provider_controller=require('../controllers/job_provider_controller');

router.get('/job_provider_home',job_provider_controller.home);
router.get('/categorie',job_provider_controller.categorie);
router.post('/create_categorie',job_provider_controller.create_categorie);
router.get('/show_categorie',job_provider_controller.show_categorie);
router.get('/job_post',job_provider_controller.job_post);
router.post('/create_job_post',job_provider_controller.create_job_post);
router.get('/logout',job_provider_controller.logout);

module.exports=router;