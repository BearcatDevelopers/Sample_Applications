//array of datatypes
var toDoList = ["Wake Up", "Brush Teeth", "Leave House"];

function addToArray(){
  //prompting users to add new info to the array and saving it to a variable
  var newInfo = document.getElementById('inputs').value;
  //adding said variable into the array
  toDoList.push(newInfo);
}

function printArray(){
    //clearing the div
    document.getElementById('outputs').innerHTML = "";
    //loops through the entire array
    for(i = 0; i < toDoList.length; i++){
      //alerts each position in array NEEDS TO CHANGE
      var div = document.getElementById('outputs');
      //adding the information to the div
      div.innerHTML = div.innerHTML + '<br/>' + i + ". " + toDoList[i];
    }
}

function removeFromDiv(){
  //ask the user what they want to delete
  var deleteItem = prompt("Enter number of item you want to remove: ");
  //removesfrom the array
  toDoList.splice(deleteItem , 1);
}
