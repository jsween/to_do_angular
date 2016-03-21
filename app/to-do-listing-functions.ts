/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksByType = function (taskCollection: Task[]): String[] {
    var homeDescriptions: String[] = [];
    var workDescriptions: String[] = [];
    var hobbyDescriptions: String[] = [];
    var descriptions: String[] = [homeDescriptions, workDescriptions, hobbyDescriptions];
    for(var task of taskCollection) {
      if(task.constructor.name === 'HomeTask'){
        homeDescriptions.push(task.description);
      } else if(task.constructor.name === 'WorkTask') {
        workDescriptions.push(task.description);
      } else {
        hobbyDescriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var getTasksByPriority = function (taskCollection: Task[]): String[] {
    var highPriority: String[] = [];
    var medPriority: String[] = [];
    var lowPriority: String[] = [];
    var priorities: String[] = [highPriority, medPriority, lowPriority];
    for(var task of taskCollection) {
      console.log(task.priority);
      if(task.priority === 'High') {
        highPriority.push(task.description);
      } else if(task.priority === 'Medium') {
        medPriority.push(task.description);
      } else {
        lowPriority.push(task.description);
      }
    }
    return priorities;
  }

  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  export var describeHighPriorityPerson = function(assignee: Iperson, taskCollection: Task[]): String[] {
    for(var task of taskCollection){
      if(task.priority === 'High' && task.assignedTo === assignee) {
        return task.description;
      }
    }
    return assignee.name + " does not currently have a high priority task.";
  }



}
