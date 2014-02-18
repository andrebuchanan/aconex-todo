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
      },
      makeHighest: function(item, priority)
      {
        var highest;
        // Get highest and lowest priority.
        this.items.forEach(function(itm)
        {
          if (!highest) highest = item.priority;
          if (itm.priority > highest) highest = itm.priority;
        });
        // Priority true = make item most important.
        if (priority)
        {
          item.priority = highest + 1;
          return;
        }
        // Priority false = make item least important.
        item.priority = 0;
      }
    };
  });
