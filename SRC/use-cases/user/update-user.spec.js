const { Given, When, Then } = require('cucumber');
const sinon = require('sinon');
const expect = require('chai').expect;
const assert = require('assert')
const Joi = require("joi")
const updateUserTest = require('./update-user')

const sandbox = sinon.createSandbox();

const getUsers = {
    updateUserQuerydb: () => {
    }
};

updateUserStub = sandbox.stub(getUsers, "updateUserQuerydb");
updateUserStub.callsFake((args) => {
    expect(args).deep.equal({
        contactDetails: this.contactDetails,
        password: this.password,
        id: this.id,
        databaseName: this.databaseName
    })
    return { id: 1 };
})


Given('User details contactDetails: {string}, and password: {string}, id: {int}, databaseName: {string} to update user',
    (contactDetails, password, id, databaseName) => {
        this.contactDetails = contactDetails;
        this.password = password;
        this.id = id;
        this.databaseName = databaseName
    }
);

Given('User incorrect details contactDetails: {string}, and password: {string}, id: {string}, databaseName: {string} to update user',
    (contactDetails, password, id, databaseName) => {
        this.contactDetails = contactDetails;
        this.password = password;
        this.id = id;
        this.databaseName = databaseName
    }
);

When('Try to update user', async () => {
    const updateUserAction = updateUserTest({
        getUsers,
        Joi
    })
    try {
        this.result = await updateUserAction({
            id: this.id,
            password: this.password,
            contactDetails: this.contactDetails,
            databaseName: this.databaseName
        });
        // console.log(this.result, 'ressss');
    } catch (e) {
        // console.log(e,'eeerrr');
        this.resultError = {
            name: e.name,
        }
    }
});

Then('It will update user with details: {string}',(newUserDetails)=>{
    expect(this.result).deep.equal(JSON.parse(newUserDetails))
})

Then('It will throw error: {string} with message: "{string}" while updating user',(error,message)=>{
    expect(this.resultError).deep.equal({
        name: error,
      });
})