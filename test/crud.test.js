import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import { testLoginAndLogout } from './login.test';

describe('CRUD Operations', () => {
  // Logging user in
  testLoginAndLogout();

  it('should create a job', async () => {

  });

  it('should view a job', async () => {

  });

  it('should update a job', async () => {

  });

  it('should delete a job', async () => {

  });
});
