const {Given, When, Then} = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert=require('assert')
const Joi = require("joi")
const createUserTest=require('./create-user')

const sandbox = sinon.createSandbox();

const getUsers = {
  createUserQuerydb: ()=> {
  }
};

createUserStub = sandbox.stub(getUsers, "createUserQuerydb");
createUserStub.callsFake((args)=> {
  expect(args).deep.equal({
    emailId: this.emailId,
    contactDetails: this.contactDetails,
    databaseName: this.databaseName,
    password: this.password
  })
  return {id: 1};
})


Given('User details emailId: {string}, contactDetails: {string}, databaseName: {string} and password: {string} to create new user',
    (emailId,contactDetails,databaseName,password) => {
      this.emailId = emailId;
      this.contactDetails = contactDetails;
      this.databaseName=databaseName;
      this.password = password
    }
);

When('Try to create new user', async () => {
  const createUserAction = createUserTest ({
    getUsers,
    Joi
  })
    try {
      // console.log(this.emailId,this.contactDetails,this.password,this.databaseName);
      this.result = await createUserAction({
        emailId: this.emailId,
        contactDetails: this.contactDetails,
        databaseName: this.databaseName,
        password: this.password
    });
    // console.log(this.result,'ressss');
    } catch (e) {
        // console.log(e,'eeerrr');
      this.resultError = {
        name: e.name,
      }
    }
  });

Then('It will create new user with details: {string}',(newUserDetails)=>{
    expect(this.result).deep.equal(JSON.parse(newUserDetails))
})

Then('It will throw error: {string} with message: "{string}" while creating new user',(error,message)=>{
    expect(this.resultError).deep.equal({
        name: error,
      });
})