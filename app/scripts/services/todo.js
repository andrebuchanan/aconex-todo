'use strict';
angular.module('aconexTodoApp')
  .factory('TaskItems', function()
  {
    return {
      // Something like this should be in own service, but is here for purposes of demo.
      doneFilter: { done: false },
      // Items service proper begins here.
      items: [],
      doneItems: 0,
      add: function(newItem)
      {
        this.items.push(newItem);
      },
      remove: function(item)
      {
        // If the item was done, reduce count.
        if (item.done) this.doneItems -= 1;
        this.items.splice(this.items.indexOf(item), 1);
      },
      setDone: function(item)
      {
        item.done = true;
        this.doneItems += 1;
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
