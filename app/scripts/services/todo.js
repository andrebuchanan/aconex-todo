'use strict';
angular.module('aconexTodoApp')
  .factory('TaskItems', function()
  {
    return {
      items: [],
      add: function(newItem)
      {
        this.items.push(newItem);
      },
      remove: function(item)
      {
        this.items.splice(this.items.indexOf(item), 1);
      }
    };
  });
