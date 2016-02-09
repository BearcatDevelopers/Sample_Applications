//array of datatypes
var dataTypes = ["string", "char", "integer", "float", "boolean", "array"];

//function to add things to datatype array
/*function addToArray(){
  //prompting users to add new info to the array and saving it to a variable
  var newInfo = prompt("Tell me another data type: ");
  //adding said variable into the array
  dataTypes.push(newInfo);
  //prints new array
  printArray();
}

function printArray(){
  var arrayString = ""

    //loops through the entire array
    for(i = 0; i < dataTypes.length; i++){
      //alerts each position in array NEEDS TO CHANGE
      arrayString = arrayString + dataTypes[i] + ", ";
    }
    alert(arrayString);
} */



function addToArray2(){
  //prompting users to add new info to the array and saving it to a variable
  var newInfo = document.getElementById('inputs').value;
  //adding said variable into the array
  dataTypes.push(newInfo);
  //prints new array
  printArray2();

}

function printArray2(){
    //loops through the entire array
    for(i = 0; i < dataTypes.length; i++){
      //alerts each position in array NEEDS TO CHANGE
      var div = document.getElementById('outputs');
      div.innerHTML = div.innerHTML + '<br/>' + dataTypes[i];
    }
}

function clearDiv() {
  document.getElementById('outputs').innerHTML = "";
}
