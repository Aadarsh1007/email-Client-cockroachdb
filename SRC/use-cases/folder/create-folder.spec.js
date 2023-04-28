const {Given, When, Then} = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert=require('assert')
const Joi = require("joi")
const createFolderTest=require('./create-folder')

const sandbox = sinon.createSandbox();

const getAllFolder = {
  createFolderQuerydb: ()=> {
  }
};

createFolderStub = sandbox.stub(getAllFolder, "createFolderQuerydb");
createFolderStub.callsFake((args)=> {
  expect(args).deep.equal({
    id: this.id,
    folderName: this.folderName,
    databaseName: this.databaseName
  })
  return {id: 1};
})


Given('folder details id: {int}, folderName: {string}, databaseName: {string} to create new folder',
    (id,folderName,databaseName) => {
      this.id = id;
      this.folderName = folderName;
      this.databaseName = databaseName
    }
);

Given('folder invalid details id: {string}, folderName: {string}, databaseName: {string} to create new folder',
    (id,folderName,databaseName) => {
      this.id = id;
      this.folderName = folderName;
      this.databaseName = databaseName
    }
);

When('Try to create new folder', async () => {
  const createFolderAction = createFolderTest ({
    getAllFolder,
    Joi
  })
    try {
      this.result = await createFolderAction({
        folderName: this.folderName,
        id: this.id,
        databaseName: this.databaseName
    });
    } catch (e) {
      this.resultError = {
        name: e.name,
      }
    }
  });

Then('It will create new folder with details: {string}',(newUserDetails)=>{
    expect(this.result).deep.equal(JSON.parse(newUserDetails))
})

Then('It will throw error: {string} with message: "{string}" while creating new folder',(error,message)=>{
    expect(this.resultError).deep.equal({
        name: error,
      });
})