const productPlugin = require('./productPlugin');
const sumPlugin = require('./sumPlugin');

const seneca = require('seneca');
const mathMicroservice = seneca({log:'test'});

mathMicroservice.use(productPlugin);
mathMicroservice.use(sumPlugin);

mathMicroservice.use('mesh', {base:true});