const express = require('express');
const router = express.Router();
const roleController = require('../controllers/RoleController');

router.post('/create', roleController.createRole);
router.get('/all', roleController.getAllRoles);

module.exports = router;
