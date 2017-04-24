const seneca = require('seneca');

const baseMicroservice = seneca();

baseMicroservice.use('mesh',{base:true});