'use strict';
describe('user story testing', function () {
  describe('index', function () {
    browser.get('/');
    it('should allow the user to enter a new task', function () {

      element(by.model('todo.description')).sendKeys('This is a new task');
      element(by.id('btnNewTask')).click();

      var newItem = element(by.repeater('item in todo.items').row(0).column('description'));

      expect(newItem.getText()).toEqual('This is a new task');
    });
  });
});