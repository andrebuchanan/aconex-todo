'use strict';

angular.module('aconexTodoApp')
  .controller('todoController', function (TaskItems) {

    // A place for our items to live.
    this.items = TaskItems;

    // Add a new item to the list of items.
    this.addItem = function(description)
    {
      var newItem = {
        timestamp: new Date(),
        priority: 0,
        done: false,
        description: description
      };
      this.items.push(newItem);
    };

    // Remove an item.
    this.removeItem = function(item)
    {
      console.log(this);
      this.items.splice(this.items.indexOf(item), 1);
    };
  });
