const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

describe('Nearest Store', ()=> {

    it('Nearest Store', async () => {
        const body = {
            storeCode: "TCRB",
            mode: "DELIVERY",
            latitude: -6.841805700000001,
            longitude: 107.9205937,
            districtId: 141202016
        };
    
        await request('https://api-klik-uat.edts.id')
          .post('/catalog-xpress/api/internal/store/find-store-selected')
          .set('Content-Type', 'application/json')
          .send(body)
          .expect(200)
          .expect((res) => {
            console.log(res.body);
            expect(res.body).to.have.property('status', '00');
            expect(res.body).to.have.property('message', 'Success');
          })
          
      });
    
})