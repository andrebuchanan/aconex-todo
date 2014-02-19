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

  describe('Adding Items', function() {
    // Before each test, add one item to the store.
    beforeEach(function() {
      todoController.addItem({ description: 'a task'});
    });

    // A task is added.
    it('should have one item now', function() {
      expect(todoController.items.length).toBe(1);
    });
    // The task should have a description field.
    it('should have a description field for the newly inserted task', function() {
      expect(todoController.items[0].description).not.toBeUndefined();
    });
    // Newly added items should have a timestamp (localisation!).
    it('should have a current-ish timestamp field', function() {
      expect(todoController.items[0].timestamp).not.toBeUndefined();
    });
    // Newly added items should have a priority field.
    it('should have a priority field', function() {
      expect(todoController.items[0].priority).not.toBeUndefined();
    });
    // New added items should have a done=false field.
    it('should have a done field set to false', function() {
      expect(todoController.items[0].done).not.toBeUndefined();
      expect(todoController.items[0].done).toBe(false);
    });
  });

  // Item manipulation.
  describe('Changing Items', function() {
    var item = { description: 'a new hope', priority: 0 };
    // We should be able to mark items as done.
    it('should allow an item to be marked as done', function() {
      todoController.setDone(item);
      expect(item.done).toBe(true);
    });

    it('should delete an item when asked to', function() {
      var newItem = todoController.addItem(item.description);
      expect(todoController.items.length).toBe(1);
      todoController.removeItem(newItem);
      expect(todoController.items.length).toBe(0);
    });

    it('should set priority to max + 1', function() {
      var item1 = todoController.addItem({ description: '1'});
      var item2 = todoController.addItem({ description: '2'});

      todoController.adjustPriority(item2, true);
      // Zero + 1 = 1;
      expect(item2.priority).toEqual(1);
      todoController.adjustPriority(item1, true);
      // Zero + max (1) + 1 = 2;
      expect(item1.priority).toEqual(2);
    });

    it('should set priority to zero', function() {
      var item = { description: 'sleep!', priority: 100000000 };
      // Oh no you don't!
      todoController.adjustPriorityDown(item);
      expect(item.priority).toEqual(0);
    });
  });
});
