import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;


const appUrl = 'https://zak-jobify.netlify.app';
const agent = chai.request.agent(appUrl);

describe('Login and Logout', () => {
  it('should login and logout user', async () => {

    // Visit landing page
    const landingRes = await chai.request(appUrl).get('/landing');
    expect(landingRes).to.have.status(200);

    // Login user
    const loginRes = await agent.post('/api/v1/auth/login').send({
      email: 'test4@example.com',
      password: 'test123',
    });
    expect(loginRes).to.have.status(200);

    // Log out user
    const logoutRes = await chai
      .request(appUrl)
      .get('/logout')
      .set('Cookie', loginRes.headers['set-cookie']);
    expect(logoutRes).to.have.status(200);

  }).timeout(5000);
});
