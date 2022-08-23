const AdminController = require('../../controllers/admin');

const accountMngmntRoute = require('express').Router();

const adminController = new AdminController();

accountMngmntRoute.get('/students', adminController.getStudents) // tambah query
accountMngmntRoute.put('/bio', adminController.updateBio) // update biodata

module.exports = accountMngmntRoute;