'use strict';

describe('Service: TaskItems', function() {
  var todo;
  beforeEach(function() {
    module('aconexTodoApp');

    inject(function($injector) {
      todo = $injector.get('TaskItems');
    });
  });

  it('should set item priority to 1 more than current highest', function() {
    var newItem = todo.addItem();
    todo.makeHighest(newItem);
    expect(newItem.priority).toEqual(1);
  });

  it('should increment the done counter when an item is marked as done', function() {
    var newItem = todo.addItem();
    expect(todo.doneItems.count).toEqual(0);
    todo.setDone(newItem);
    expect(todo.doneItems.count).toEqual(1);
  });

  it('should decrement done counter when done item is removed', function() {
    var newItem = todo.addItem();
    todo.setDone(newItem);
    expect(todo.doneItems.count).toEqual(1);
    todo.remove(newItem);
    expect(todo.doneItems.count).toEqual(0);
  });
});

