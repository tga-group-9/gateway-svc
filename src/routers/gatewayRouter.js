const express = require('express');

const appRouter = express.Router();
const gatewayService = require('../services/gatewayService');

appRouter.route('/register')
  .post(gatewayService.registerUser);

appRouter.route('/login')
  .post(gatewayService.loginUser);

appRouter.route('/logout')
  .get(gatewayService.logoutUser);

appRouter.route('/user/byid/:id')
  .get(gatewayService.getUserById);

  appRouter.route('/user/byusername/:username')
  .get(gatewayService.getUserByUsername);

module.exports = appRouter;
