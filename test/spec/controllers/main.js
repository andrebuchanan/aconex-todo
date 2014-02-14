'use strict';

describe('Controller: todoController', function () {

  // load the controller's module
  beforeEach(module('aconexTodoApp'));

  var todoController;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    todoController = $controller('todoController');
  }));

  // Ve schtart vit nuting!
  it('the controller should have no items at this point', function () {
    expect(todoController.items.length).toBe(0);
  });

  // Ve add vun.
  it('should have one item now', function() {
    todoController.addItem({ description: 'a task'});

    expect(todoController.items.length).toBe(1);
  });
});
