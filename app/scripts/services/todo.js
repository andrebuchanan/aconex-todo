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
      adjustPriority: function(item, priority)
      {
        var highest, lowest;
        // Get highest and lowest priority.
        this.items.forEach(function(itm)
        {
          if (!highest) highest = item.priority;
          if (!lowest) lowest = item.priority;
          if (itm.priority > highest) highest = itm.priority;
          if (itm.priority < lowest) lowest = itm.priority;
        });
        // Priority true = make item most important.
        if (priority)
        {
          item.priority = highest;
          return;
        }
        // Priority false = make item least important.
        item.priority = lowest;
      }
    };
  });
