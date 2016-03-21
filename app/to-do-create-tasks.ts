/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
// var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
// console.log("Here are Thor's tasks: ");
// for(var task of thorTasks){
//   console.log(task);
// }

$(function() {
  $('#all-tasks').append("<h2>Here are all of the Tasks: </h2><br><ul>");
  for(var task of tasks) {
    $('#all-tasks').append("<li>" + task.description + " - "+ task.priority + "</li>");
  }
  $('#thor-tasks').append("</ul>");

  var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
  $('#thor-tasks').append("<h2>Here are Thor's Tasks: </h2><br><ul>");

  for(var task of thorTasks) {
    $('#thor-tasks').append("<li>" + task + "</li>");
  }
  $('#thor-tasks').append("</ul>");
}); //end of when ready
