// import * as request from 'request-promise';
const request = require('request-promise');

fdescribe('Requests', () => {
    it('Local app', () => {
        const req = await request({
            method: 'GET',
            url: 'http://localhost:3000',
            qs: '',
            json: true,
        });

        expect(req.method).toBe('GET', 'Incorrect');
        console.log(JSON.stringify(req));
    })

    // it('Local app', () => {
    //     const resp = request({
    //         method: 'GET',
    //         url: 'http://localhost:3000',
    //         qs: '',
    //         json: true,
    //     }).then(resp => {
    //         console.log(resp)
    //     });
    //
    //     // expect(resp).toBe('GET', 'Incorrect');
    //     // expect(resp.method).toBe('GET', 'Incorrect');
    //     console.log(resp);
    // })
})
