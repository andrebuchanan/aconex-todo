'use strict';

angular.module('aconexTodoApp')
  .controller('todoController', function (TaskItems) {

    // A place for our items to live.
    this.items = TaskItems;

    // Add a new item to the list of items.
    this.addItem = function(description)
    {
      if (description.length < 3) return;
      var newItem = {
        timestamp: new Date(),
        priority: 0,
        done: false,
        description: description
      };
      this.items.push(newItem);
      this.description = '';
      return newItem;
    };

    // Remove an item.
    this.removeItem = function(item)
    {
      this.items.splice(this.items.indexOf(item), 1);
    };

    // Mark item as done.
    this.setDone = function(item)
    {
      item.done = true;
    };
  });
