'use strict';

angular.module('aconexTodoApp')
  .controller('todoController', function (TaskItems, $modal) {

    // A place for our items to live.
    this.items = TaskItems.items;
    // Keep track of how many items are marked done.
    this.doneItems = TaskItems.doneItems;
    // Task filter. Link it to a service for persistence across /#/ stuff.
    this.tf = TaskItems.doneFilter;

    // Add a new item to the list of items.
    this.addItem = function(description) {
      // Basic validation. Do this at form level please.
      if (!description || description.length < 3) {
        return;
      }

      // Use service to do create new task item.
      var newItem = TaskItems.addItem();
      newItem.description = description;

      // Reset the description so that new task entry is uninterrupted.
      this.description = '';
      return newItem;
    };

    // We might ordinarily ask for confirmation before proceeding.
    // Remove an item.
    this.removeItem = function(item) {
      TaskItems.remove(item);
      // this.doneItems = TaskItems.doneItems;
    };

    // Mark item as done.
    this.setDone = function(item) {
      TaskItems.setDone(item);
      // this.doneItems = TaskItems.doneItems;
    };

    // Make the item the most important in the list.
    this.adjustPriority = function(item) {
      // Need to use the service to make an item most important.
      TaskItems.makeHighest(item);
    };

    // Demote item to not important.
    this.adjustPriorityDown = function(item) {
      item.priority = 0;
    };
    // Share a task.
    this.shareItem = function(task) {
      this.modalInstance = $modal.open({
        templateUrl: 'shareTaskDialog.html',
        controller: 'ShareTaskCtrl as shareCtrl',
        resolve: {
          task: function() {
            return task;
          }
        }
      });

      this.modalInstance.result.then(function(emailAddress) {
        task.shares.push(emailAddress);
        console.log(task.shares);
      });
    };
  })
  // Controller for modal
  .controller('ShareTaskCtrl', function($modalInstance, task)
  {
    this.task = task;
    this.shareItem = function() {
      $modalInstance.close(this.shareEmail);
    };

    this.close = function() {
      $modalInstance.close();
    };
  });
