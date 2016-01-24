let chai = require('chai');
let jsxChai = require('chai-equal-jsx');
global.using = require('jasmine-data-provider');

chai.should();
chai.use(jsxChai);
