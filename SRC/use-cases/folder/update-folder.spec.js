const {Given, When, Then} = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert=require('assert')
const Joi=require('joi')
const updateFolderTest =require('./update-folder')

const sandbox = sinon.createSandbox();

const getAllFolder = {
  updateFolderQuerydb: ()=> {
  }
};

updateUserStub = sandbox.stub(getAllFolder, "updateFolderQuerydb");
updateUserStub.callsFake((args)=> {
  expect(args).deep.equal({
    folderid: this.folderid,
    folderName: this.folderName,
    databaseName: this.databaseName
  })
  return '{"id": 1}'
})


Given('User details folderid: {string} , folderName: {string} ,databaseName: {string} to update folder',
    (folderid,folderName,databaseName) => {
      this.folderid = folderid;
      this.folderName=folderName;
      this.databaseName=databaseName
    },
);

Given('invalid User details folderid: {string} , folderName: {string} ,databaseName: {string} to update folder',
    (folderid,folderName,databaseName) => {
      this.folderid = folderid;
      this.folderName = folderName;
      this.databaseName = databaseName
    },
);

When('Try to update folder', async () => {
  // console.log(this.id);
  const updateFolderAction = updateFolderTest ({
    getAllFolder,
    Joi
  })
    try {
      this.result = await updateFolderAction({
        folderid: this.folderid,
        folderName: this.folderName,
        databaseName: this.databaseName
      });
      // console.log(this.result,'resss');
    } catch (e) {
      // console.log(e,'errooorrr');
      this.resultError ={
        name: e.name
      }
    }
  });
  
Then('It will throw success with message: "{string}" while updating folder',(id)=>{
    expect(this.result).deep.equal((id))
})

Then('It will throw error with message: {string} error:{string} while updating folder',(message,errorname)=>{
    // console.log(this.result);
  expect(this.resultError).deep.equal({
    name: errorname,
  });
})