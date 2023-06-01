import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

const appUrl = 'https://zak-jobify.netlify.app';
const agent = chai.request.agent(appUrl);

export function testLoginAndLogout() {
  it('should login and logout user', async () => {

    // Visit landing page
    const landingRes = await chai.request(appUrl).get('/landing');
    expect(landingRes).to.have.status(200);
    console.log('landingRes:', landingRes);

    // Log in user
    const loginRes = await agent.post('/api/v1/auth/login').send({
      email: 'test4@example.com',
      password: 'test123',
    });
    expect(loginRes).to.have.status(200);
    console.log('loginRes:', loginRes);

    // Log out user
    const logoutRes = await chai
      .request(appUrl)
      .get('/logout')
      .set('Cookie', loginRes.headers['set-cookie']);
    expect(logoutRes).to.have.status(200);
    console.log('logoutRes:', logoutRes);
    
  }).timeout(5000);
}
