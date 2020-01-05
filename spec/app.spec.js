// import * as request from 'request-promise';
const request = require('request-promise');

describe('Requests', () => {
    // it('req obj', () => {
    //     const req = request({
    //         method: 'GET',
    //         url: 'http://localhost:3000',
    //         qs: '',
    //         json: true,
    //     });
    //
    //     expect(req.method).toBe('GET', 'Incorrect');
    //     console.log(JSON.stringify(req));
    // })

    it('Local app - resp', async () => {
        const resp = await request({
            method: 'GET',
            url: 'http://localhost:3000',
            qs: '',
            json: true,
        });

        expect(resp).toBe('dsfsd', 'Incorrect');
        console.log(resp);
    })
})
