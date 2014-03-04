'use strict';
angular.module('aconexTodoApp')
  .factory('TaskItems', function() {
    return {
      // Something like this should be in own service, but is here for purposes of demo.
      doneFilter: { done: false },
      // Items service proper begins here.
      items: [],
      // Primitives are not watched / observed. Use object for proper reflection of changes back to DOM.
      doneItems: { count: 0 },
      addItem: function() {
        var newItem = {
          timestamp: Date.now(), // Get a sortable number.
          priority: 0,
          done: false,
          shares: []
        };
        this.items.push(newItem);
        return newItem;
      },
      remove: function(item) {
        var remIdx;
        if ((remIdx = this.items.indexOf(item)) !== -1) {
          // If the item was done, reduce count.
          if (item.done) {
            this.doneItems.count -= 1;
          }
          this.items.splice(remIdx, 1);
        }
      },
      setDone: function(item) {
        item.done = true;
        this.doneItems.count += 1;
      },
      makeHighest: function(item) {
        var highest = item.priority || 0;
        // Get highest priority.
        this.items.forEach(function(itm) {
          if (itm.priority > highest) {
            highest = itm.priority;
          }
        });
        item.priority = highest + 1;
      }
    };
  });
