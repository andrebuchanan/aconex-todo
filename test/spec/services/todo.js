'use strict';

describe('Service: TaskItems', function()
{

  var todo;
  beforeEach(function()
  {
    module('aconexTodoApp');

    inject(function($injector)
    {
      todo = $injector.get('TaskItems');
    });

    todo.add({ description: 'task one', priority: 0 });
  });

  it('should set item priority to 1 more than current highest', function()
  {
    var newItem = { description: 'task two', priority: 0 };
    todo.add(newItem);
    todo.makeHighest(newItem, true);
    expect(newItem.priority).toEqual(1);
  });
});

