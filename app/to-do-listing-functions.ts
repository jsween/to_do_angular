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

  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
