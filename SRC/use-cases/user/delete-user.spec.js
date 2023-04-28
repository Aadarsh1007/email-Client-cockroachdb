const {Given, When, Then} = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert=require('assert')
const Joi=require('joi')
const deleteUserTest =require('./delete-user')

const sandbox = sinon.createSandbox();

const getUsers = {
  deleteUserQuerydb: ()=> {
  }
};

deleteUserStub = sandbox.stub(getUsers, "deleteUserQuerydb");
deleteUserStub.callsFake((args)=> {
  expect(args).deep.equal({
    id: this.id,
    databaseName: this.databaseName
  })
  return this.id
})


Given('User details id: {int} and databaseName: {string} to delete user',
    (id,databaseName) => {
      this.id = id;
      this.databaseName = databaseName
    },
);

Given('User details for unsuccessfull id: {string} and databaseName: {string} to delete user',
    (id,databaseName) => {
      this.id = id;
      this.databaseName = databaseName
    },
);

When('Try to delete user', async () => {
  // console.log(this.id);
  const deleUserAction = deleteUserTest ({
    getUsers,
    Joi
  })
    try {
      this.result = await deleUserAction({
        id: this.id,
        databaseName: this.databaseName
      });
      // console.log(this.id,'resss');
    } catch (e) {
      // console.log(e,'errooorrr');
      this.resultError ={
        name: e.name
      }
    }
  });
  
Then('It will throw success with message: "{int} user deleted" while deleting user',(id)=>{
    expect(this.result).deep.equal(id)
})

Then('It will throw error with message: {string} errorname:{string} while deleting user',(message,errorname)=>{
  expect(this.resultError).deep.equal({
    name: errorname,
  });
})