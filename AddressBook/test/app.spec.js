const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('Functionnal Tests', () => {
    beforeEach(() => {
       // mongoimport
    });
    describe('Page Contact List', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});

