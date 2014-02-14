'use strict';

describe('Controller: todoController', function () {

  // load the controller's module
  beforeEach(module('aconexTodoApp'));

  var todoController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    todoController = $controller('todoController');
  }));

  // We start with nothing.
  it('the controller should have no items at this point', function () {
    expect(todoController.items.length).toBe(0);
  });

  describe('Adding Items', function()
  {
    // Before each test, add one item to the store.
    beforeEach(function()
    {
      todoController.addItem({ description: 'a task'});
    });

    // A task is added.
    it('should have one item now', function()
    {
      expect(todoController.items.length).toBe(1);
    });

    // The task should have a description field.
    it('should have a description field for the newly inserted task', function()
    {
      expect(todoController.items[0].description).not.toBeUndefined();
    });

    // Newly added items should have a timestamp (localisation!).
    it('should have a current-ish timestamp field', function()
    {
      expect(todoController.items[0].timestamp).not.toBeUndefined();
    });
  });

});
