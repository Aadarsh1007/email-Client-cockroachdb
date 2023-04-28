const {Given, When, Then} = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert=require('assert')
const Joi=require('joi')
const deleteFolderTest =require('./delete-folder')

const sandbox = sinon.createSandbox();

const getAllFolder = {
  deleteFolderQuerydb: ()=> {
  }
};

deleteUserStub = sandbox.stub(getAllFolder, "deleteFolderQuerydb");
deleteUserStub.callsFake((args)=> {
  expect(args).deep.equal({
    id: this.id,
    databaseName: this.databaseName
  })
  return this.id
})


Given('User details id: {int} ,databaseName: {string} to delete folder',
    (id,databaseName) => {
      this.id = id;
      this.databaseName = databaseName
    },
);

Given('User details for unsuccessfull id: {string} ,databaseName: {string} to delete folder',
    (id,databaseName) => {
      this.id = id;
      this.databaseName = databaseName
    },
);

When('Try to delete folder', async () => {
  const deleFolderAction = deleteFolderTest ({
    getAllFolder,
    Joi
  })
    try {
      this.result = await deleFolderAction({
        id: this.id,
        databaseName: this.databaseName
      });
      // console.log(this.result,'resss');
    } catch (e) {
    //   console.log(e,'errooorrr');
      this.resultError ={
        name: e.name
      }
    }
  });
  
Then('It will throw success with message: "{int} user deleted" while deleting folder',(id)=>{
    // console.log(this.result,'resuuu');
    expect(this.result).deep.equal(id)
})

Then('It will throw error with message: {string} errorname:{string} while deleting folder',(message,errorname)=>{
  expect(this.resultError).deep.equal({
    name: errorname,
  });
})