const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../app');
const Contact = require('../models/contact');
require('sinon-mongoose');


chai.use(chaiHttp);

describe('Functionnal Tests', () => {
    beforeEach(() => {
       // mongoimport
    });
    describe('Page Contact List', () => {
        it('should return status 200', (done) => {
            chai.request(app)
                .get('/contacts')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.text).to.contains('Steve'); // Ma collection contient Steve Jobs
                    done();
                });
        });

        it('Mock Mongoose', (done) => {
            sinon.mock(Contact)
                .expects('find')
                .yields(null, [{id: 2, prenom: 'John', nom: 'Doe'}]);

            chai.request(app)
                .get('/contacts')
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    expect(res.text).to.contains('John'); // sinon.mock retourne John Doe
                    done();
                });
        });
    });
});

