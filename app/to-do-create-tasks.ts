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

$(function() {
  $('#all-tasks').append("<h2>Here are all of the Tasks: </h2><br><ul>");
  for(var task of tasks) {
    $('#all-tasks').append("<li>" + task.description + " - "+ task.priority + "</li>");
  }
  $('#thor-tasks').append("</ul>");

  var allTasks = ToDoList.describeTasksByType(tasks);
  var homeTasks = allTasks[0];
  var workTasks = allTasks[1];
  var hobbyTasks = allTasks[2];

  $('#HomeTask').append("<h2>Home Tasks: </h2><br><ul>");

  for(var task of homeTasks) {
    $('#HomeTask').append("<li>" + task + "</li>");
  }

  $('#WorkTask').append("<h2>Work Tasks: </h2><br><ul>");

  for(var task of workTasks) {
    $('#WorkTask').append("<li>" + task + "</li>");
  }

  $('#HobbyTask').append("<h2>Hobby Tasks: </h2><br><ul>");

  for(var task of hobbyTasks) {
    $('#HobbyTask').append("<li>" + task + "</li>");
  }

  var allTasksPriority = ToDoList.getTasksByPriority(tasks);
  var highPriority = allTasksPriority[0];
  var medPriority = allTasksPriority[1];
  var lowPriority = allTasksPriority[2];

  $('#highPriority').append("<h2>Hi Priority Tasks: </h2><br><ul>");

  for(var priority of highPriority) {
    $('#highPriority').append("<li>" + priority + "</li>");
  }

  $('#medPriority').append("<h2>Medium Priority Tasks: </h2><br><ul>");

  for(var priority of medPriority) {
    $('#medPriority').append("<li>" + priority + "</li>");
  }

  $('#lowPriority').append("<h2>Low Priority Tasks: </h2><br><ul>");

  for(var priority of lowPriority) {
    $('#lowPriority').append("<li>" + priority + "</li>");
  }

  var dianeTasks = ToDoList.describeTasksForPerson(people.diane, tasks);
  console.log(dianeTasks);
  var lokiTasks = ToDoList.describeTasksForPerson(people.loki, tasks);
  var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
  console.log("Thor's tasks are: " + thorTasks);

  var dianeHighTask = ToDoList.describeHighPriorityPerson(people.diane, tasks);
  $('#dianeHighTask').append("<h2>Here is Diane's 1st High Priority Task: </h2><ul>").append("<li>" + dianeHighTask + "</li></ul>");

  var lokiHighTask = ToDoList.describeHighPriorityPerson(people.loki, lokiTasks);
  $('#lokiHighTask').append("<h2>Here's Loki's 1st High Priority Task: </h2><ul>").append("<li>" + lokiHighTask + "</li></ul>");

  $('#thor-tasks').append("<h2>Here are Thor's Tasks: </h2><br><ul>");

  for(var task of thorTasks) {
    $('#thor-tasks').append("<li>" + task + "</li>");
  }
  $('#thor-tasks').append("</ul>");


}); //end of when ready
