const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

describe('User', ()=>{
    
    const baseUrl = 'https://reqres.in'

    it('Success add user', async ()=>{

        const body ={
            name: 'John Doe',
            job: 'QA'
        }

        await request(baseUrl)
            .post('/api/users')
            .send(body)
            .expect(201)
            .expect((res) => {
                console.log(res.body);
                userId = res.body.id
                expect(res.body).to.have.property('name', 'John Doe');
              })

    })

    it('Success get user by id', async ()=>{

        await request(baseUrl)
            .get(`/api/users/1`)
            .expect(200)
            .expect((res) => {
                console.log(res.body);
              })

    })
})