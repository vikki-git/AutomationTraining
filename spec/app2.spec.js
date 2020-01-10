const {server} = require("../src/2/app2");
const request = require('request-promise');

describe('Requests. App2', () => {
    beforeAll(async () => {
        await server.listen(3001);
    })

    it('url === /', async () => {
        const {body, statusCode, statusMessage} = await request({
            method: 'GET',
            url: 'http://localhost:3001/',
            qs: '',
            json: true,
            resolveWithFullResponse: true,
        });

        expect(body).toBe('Home page!', 'Incorrect body.');
        expect(statusCode).toBe(200, 'Incorrect statusCode.');
        expect(statusMessage).toBe('test root page.', 'Incorrect statusMessage.');
    });

    it('url === /users', async () => {
        const {body, statusCode, statusMessage} = await request({
            method: 'GET',
            url: 'http://localhost:3001/users',
            qs: '',
            json: true,
            resolveWithFullResponse: true,
        });

        expect(body).toBe('User list!', 'Incorrect body.');
        expect(statusCode).toBe(200, 'Incorrect statusCode.');
        expect(statusMessage).toBe('test users', 'Incorrect statusMessage.');
    });

    it('url === /users', function (done) {
        request({
            method: 'GET',
            url: 'http://localhost:3001/users',
            qs: '',
            json: true,
            resolveWithFullResponse: true,
        }).then(res => {
            console.log(res.body)
            expect(res.body).toBe('User list!', 'Incorrect body.');
            expect(res.statusCode).toBe(200, 'Incorrect statusCode.');
            expect(res.statusMessage).toBe('test users', 'Incorrect statusMessage.');
            done();
        });
    });

    afterAll(() => {
        process.exit(1);
    })
})
