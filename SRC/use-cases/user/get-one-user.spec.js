const { Given, When, Then } = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert = require('assert')
const Joi = require('joi')
const getOneUserTest = require('./get-one-user')

const sandbox = sinon.createSandbox();

const getUsers = {
  getOneUserQuerydb: () => {
  }
};

getOneUserStub = sandbox.stub(getUsers, "getOneUserQuerydb");
getOneUserStub.callsFake((args) => {
  expect(args).deep.equal({
    id: this.id,
    databaseName: this.databaseName
  })
  return this.id
})


Given('User details id: {int} and databaseName: {string} to get user',
  (id,databaseName) => {
    this.id = id;
    this.databaseName = databaseName
  }
);

Given('User details for unsuccessfull id: {string} and databaseName: {string} to get user',
    (id,databaseName) => {
      this.id = id;
      this.databaseName = databaseName
    },
);

When('Try to get user', async () => {
  const getOneUserAction = getOneUserTest({
    getUsers,
    Joi
  })
  try {
    this.result = await getOneUserAction({
      id: this.id,
      databaseName: this.databaseName
    });
    // console.log(this.id, 'resss');
  } catch (e) {
    // console.log(e.name, 'errooorrr');
    this.resultError = {
      name: e.name
    }
  }
});

Then('It will throw success with message: "{int} user fetched" while getting user', (id) => {
  expect(this.result).deep.equal(id)
})

Then('It will throw error with message: {string} errorname:{string} while getting user',(message,errorname)=>{
  expect(this.resultError).deep.equal({
    name: errorname,
  });
})