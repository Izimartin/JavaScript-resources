const app = require();
const request = require('supertest')

it('GET /', () => {
    request(app).get('/').expect(200)
});
