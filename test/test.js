/**
 * Created by Teddy on 4/15/2016.
 */
var assert = require('assert'),
    app = require('../app'),
    supertest = require('supertest');

var server = supertest.agent("http://localhost:3000");

describe('10-Substring result:', function() {

    it('should return an empty array for a non-numeric input', function (done) {
        server
            .get('/solution/abc')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = res.body;
                assert.equal(typeof result, 'object');
                assert.equal(result.length, 0);
                done();
            });
    });

    it('should return an empty array for a floating-point number input', function (done) {
        server
            .get('/solution/2.5')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                var result = res.body;
                assert.equal(typeof result, 'object');
                assert.equal(result.length, 0);
                done();
            });
    });

    it('should return a 404 NOT FOUND error if no input is supplied', function (done) {
        server
            .get('/solution/')
            .set('Accept', 'application/json')
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);

                var result = res.body;

                done();
            });
    });

    it('should return an empty array for non-numeric input with some numeric characters', function (done) {
            server
                .get('/solution/123x')
                .set('Accept', 'application/json')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);

                    var result = res.body;
                    assert.equal(typeof result, 'object');
                    assert.equal(result.length, 0);

                    done();
                });
    });

    it('should return an array of numbers where each number is made of digits with a sum of 10 for any arbitrary but normal and valid input', function (done) {
        var num = Math.random()*500+1;

        server
            .get('/solution/' + num)
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);


                var result = res.body;

                for(var i = 0; i < result.length; i++) {
                    assert.equal(app.digitsSumIs10(i), true);
                }

                done();
            });
    });

});