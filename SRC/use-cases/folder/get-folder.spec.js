const { Given, When, Then } = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert = require('assert')
const Joi = require('joi')
const getFolderTest = require('./get-folder')


const sandbox = sinon.createSandbox();

const getAllFolder = {
  getFolderQuerydb: () => {
  }
};

getOneUserStub = sandbox.stub(getAllFolder, "getFolderQuerydb");
getOneUserStub.callsFake((args) => {
  expect(args).deep.equal({
    id: this.id,
    databaseName: this.databaseName
  })
  return this.id
})


Given('folder details id: {int} ,databaseName: {string} to get folder',
  (id,databaseName) => {
    this.id = id;
    this.databaseName = databaseName
  }
);

Given('folder details for unsuccessfull id: {string} ,databaseName: {string} to get folder',
    (id,databaseName) => {
      this.id = id;
      this.databaseName = databaseName
    },
);

When('Try to get folder', async () => {
  const getFolderAction = getFolderTest({
    getAllFolder,
    Joi
  })
  try {
    this.result = await getFolderAction({
      id: this.id,
      databaseName: this.databaseName
    });
    // console.log(this.id, 'resss');
  } catch (e) {
    // console.log(e, 'errooorrr');
    this.resultError = {
      name: e.name
    }
  }
});

Then('It will throw success with message: "{int} user fetched" while getting folder', (id) => {
  expect(this.result).deep.equal(id)
})

Then('It will throw error with message: {string} errorname:{string} while getting folder',(message,errorname)=>{
  expect(this.resultError).deep.equal({
    name: errorname,
  });
})