'use strict';

angular.module('aconexTodoApp')
  .controller('todoController', function (TaskItems) {

    // A place for our items to live.
    this.items = TaskItems.items;
    // Keep track of how many items are marked done.
    this.doneItems = TaskItems.doneItems;
    // Task filter. Link it to a service for persistence across /#/ stuff.
    this.tf = TaskItems.doneFilter;

    // Add a new item to the list of items.
    this.addItem = function(description)
    {
      if (description.length < 3) {return;}
      var newItem = {
        timestamp: new Date(), // Get a sortable number.
        priority: 0,
        done: false,
        description: description
      };
      TaskItems.add(newItem);
      this.description = '';
      // There is no real need to return this item, however, the testing
      // framework needed new item context. I'm probably breaking some sort
      // of golden rule here.
      return newItem;
    };

    // We might ordinarily ask for confirmation before proceeding.
    // Remove an item.
    this.removeItem = function(item)
    {
      TaskItems.remove(item);
      this.doneItems = TaskItems.doneItems;
    };

    // Mark item as done.
    this.setDone = function(item)
    {
      TaskItems.setDone(item);
      this.doneItems = TaskItems.doneItems;
    };

    // Adjust the priority of an item, relative to its current
    // Priority.
    this.adjustPriority = function(item, priority)
    {
      // Need to use the service to make an item least or most important.
      if (priority === true)
      {
        TaskItems.makeHighest(item, priority);
        return;
      }
      if (priority === false)
      {
        item.priority = 0;
        return;
      }

      // Otherwise just make a relative adjustment.
      item.priority += priority;
      if (item.priority < 0) item.priority = 0;
    };
  });
