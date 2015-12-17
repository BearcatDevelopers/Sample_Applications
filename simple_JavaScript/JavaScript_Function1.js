// This is my first full Javascript function.
// to declare (create) a function in Javascript, the syntax is "function <NAME_OF_FUNCTION>(parameter1, parameter2 ... parameterN)"


//Here is the syntax: I declared a function by typing "function".
// Then I named the function "First_Function". I don't need any parameters for what I am trying to accomplish. I'll add some in the next function
function First_Function() {
    //document gets the HTML document that is calling the Javascript into play
    //"getElementBy<XYZ>" tells the type or types of html tags that will be affected by the function.
    // Make sure to match up the ID tag with the ID tag in the HTML file. Go  find it in the sample_JS_HTML.html file!
    document.getElementById("first").innerHTML="This is my first function. It returns this string";
}
