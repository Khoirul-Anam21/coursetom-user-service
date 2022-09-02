const AdminController = require("../../controllers/admin");
const accountMngmntRoute = require("express").Router();
const authMiddleware = require("../../middlewares/auth_middleware");

const adminController = new AdminController();

accountMngmntRoute.get(
  "/students",
  authMiddleware,
  adminController.getStudents
); // tambah query
accountMngmntRoute.put("/bio", authMiddleware, adminController.updateBio); // update biodata
accountMngmntRoute.get('/bio', authMiddleware, adminController.getBio().getBioAdmin)

module.exports = accountMngmntRoute;
