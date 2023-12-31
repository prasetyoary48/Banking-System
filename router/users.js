const express = require('express');
const router = express.Router();
// const { get, getById, create, update, destroy } = require('../app/controller/users')

const controller = require('../app/controller')

// router.get('/users', get);
// router.get('/users/:id', getById);
// router.post('/users', create);
// router.put('/users/:id',update);
// router.delete('/users/:id',destroy);

router.get('/users', controller.users.get);
router.get('/users/:id', controller.users.getById);
router.post('/users', controller.users.create);
router.put('/users/:id',controller.users.update);
router.delete('/users/:id',controller.users.destroy);

router.get('/v1/users', controller.usersV2.get);
router.get('/v1/users/:id', controller.usersV2.getById);
router.post('/v1/users', controller.usersV2.create);
router.put('/v1/users/:id',controller.usersV2.update);
router.delete('/v1/users/:id',controller.usersV2.destroy);

module.exports = router;