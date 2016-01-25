let chai = require('chai');
let jsxChai = require('chai-equal-jsx');
global.using = require('jasmine-data-provider');
global.fetch = require('isomorphic-fetch');

chai.should();
chai.use(jsxChai);
