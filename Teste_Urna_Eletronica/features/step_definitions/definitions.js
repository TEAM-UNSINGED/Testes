const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');
const { Builder, By, Keys, Key, until } = require('selenium-webdriver');

var tiny_time = 500;
var short_time = 2500;
var long_time = 5000;

Given(/^Browse to web site "([^"]*)"$/, async function (url) {
    await driver.get(url);
});

Given("the {string} field is filled with {string}", async function (arg1, arg2) {

    await driver.sleep(short_time);
    return driver.findElement({ id: arg1 }).sendKeys(arg2);
});

Given("I press the {string} button", async function (arg1) {
    await driver.sleep(short_time);
    return driver.findElement({ id: arg1 }).click();
});

Then("the {string} page is load", async function (arg1) {
    await driver.sleep(long_time);
    return await driver.findElement({ id: arg1 });
});

When("I see {string} written on the requested page", async function (arg1) {
    await driver.sleep(short_time);
    await driver.findElement({className: arg1 }).getText();
    console.log(text);
    assert.equal(arg1, text); 

});