// import * as request from 'request-promise';
const {appl} = require("../src/2/app");

const request = require('request-promise');

fdescribe('Google search. ', () => {
    it('Open google.com', async () => {
        const {body, statusCode, statusMessage, complete} = await request({
            method: 'GET',
            url: 'http://google.com',
            qs: '',
            json: true,
            resolveWithFullResponse: true,
        });

        // console.log(await request({
        //     method: 'GET',
        //     url: 'http://google.com',
        //     qs: '',
        //     json: true,
        //     resolveWithFullResponse: true,
        // }))

        expect(body).toContain('<meta content="https://www.google.com/', 'Incorrect body.');
        expect(statusCode).toBe(200, 'Incorrect statusCode.');
        expect(statusMessage).toBe('OK', 'Incorrect statusMessage.');
        expect(complete).toBe(true, 'Incorrect statusMessage.');
        console.log(statusCode);
        // console.log(body);
    });

    afterAll(() => {
        process.exit(1);
    })
})
