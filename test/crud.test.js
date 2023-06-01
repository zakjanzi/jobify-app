import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import { testLoginAndLogout } from './login.test.js';

chai.use(chaiHttp);
const expect = chai.expect;

const appUrl = 'https://zak-jobify.netlify.app'

describe('CRUD Operations', () => {
  let createdJobId; // Variable to store the created job ID

  // Logging user in
  testLoginAndLogout();

  it('should create a job', async () => {
    const jobData = {
      title: 'Software Engineer',
      description: 'Job description goes here',
      salary: 100000,
    };

    
    const createJobRes = await chai
      .request(appUrl)
      .post('/api/v1/jobs')
      .send(jobData)
      .set('Cookie', loginRes.headers['set-cookie']);

    expect(createJobRes).to.have.status(200);
    expect(createJobRes.body).to.have.property('job');
    expect(createJobRes.body.job.title).to.equal(jobData.title);
    expect(createJobRes.body.job.description).to.equal(jobData.description);
    expect(createJobRes.body.job.salary).to.equal(jobData.salary);

    createdJobId = createJobRes.body.job.id; // Store the created job ID
  });

  it('should view a job', async () => {
    const viewJobRes = await chai
      .request(appUrl)
      .get(`/api/v1/jobs/${createdJobId}`)
      .set('Cookie', loginRes.headers['set-cookie']);

    expect(viewJobRes).to.have.status(200);
    expect(viewJobRes.body).to.have.property('job');
    expect(viewJobRes.body.job.id).to.equal(createdJobId);
  });

  it('should update a job', async () => {
    const updatedJobData = {
      title: 'Senior Software Engineer',
      description: 'Updated job description',
      salary: 120000,
    };

    const updateJobRes = await chai
      .request(appUrl)
      .put(`/api/v1/jobs/${createdJobId}`)
      .send(updatedJobData)
      .set('Cookie', loginRes.headers['set-cookie']);

    expect(updateJobRes).to.have.status(200);
    expect(updateJobRes.body).to.have.property('job');
    expect(updateJobRes.body.job.id).to.equal(createdJobId);
    expect(updateJobRes.body.job.title).to.equal(updatedJobData.title);
    expect(updateJobRes.body.job.description).to.equal(updatedJobData.description);
    expect(updateJobRes.body.job.salary).to.equal(updatedJobData.salary);
  });

  it('should delete a job', async () => {
    const deleteJobRes = await chai
      .request(appUrl)
      .delete(`/api/v1/jobs/${createdJobId}`)
      .set('Cookie', loginRes.headers['set-cookie']);

    expect(deleteJobRes).to.have.status(200);
    expect(deleteJobRes.body).to.have.property('message');
    expect(deleteJobRes.body.message).to.equal('Job deleted successfully');
  });
});
