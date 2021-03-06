// import * as request from 'request-promise';
const {appl} = require("../src/2/app");

const request = require('request-promise');

describe('Requests', () => {
    beforeAll(async () => {
        await appl.listen(3000);
    })

    it('Local app - resp', async () => {
        const resp = await request({
            method: 'GET',
            url: 'http://localhost:3000',
            qs: '',
            json: true,
        });

        expect(resp).toBe('Hello!', 'Incorrect response.');
        console.log(resp);
        // console.log(statusCode);
        // console.log(body);
    });

    it('Local app - resolveWithFullResponse', async () => {
        const {body, statusCode, statusMessage} = await request({
            method: 'GET',
            url: 'http://localhost:3000',
            qs: '',
            json: true,
            resolveWithFullResponse: true,
        });

        expect(body).toBe('Hello!', 'Incorrect body.');
        expect(statusCode).toBe(200, 'Incorrect statusCode.');
        expect(statusMessage).toBe('test', 'Incorrect statusMessage.');
        console.log(statusCode);
        console.log(body);
    });

    afterAll(() => {
        process.exit(1);
    })
})
