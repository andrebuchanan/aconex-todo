'use strict';

angular.module('aconexTodoApp')
  .controller('todoController', function () {

    // A place for our items to live.
    this.items = [];

    // Add a new item to the list of items.
    this.addItem = function(item)
    {
      this.items.push(item);
    };

  });
