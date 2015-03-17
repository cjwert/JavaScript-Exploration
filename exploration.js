//Christian Wert, Jacob Adelgren, Allison Crouch, Jin Oh
//exploration.js
document.writeln("\nNOTE: Anything highlighted in <font color=\"red\">RED</font> is generated by our JavaScript code and everything in BLACK is literal strings being printed from the JavaScript code.")
document.write("<h1>Dynamic Typing Example</h1>");
document.write("<h4>In this example a variable is declared as a string and then immediately changed to an int. This is an example of dynamic typing. Here is the code being executed in JavaScript:</h4>");
document.write("<code>var dynamic = \"Hello\";\ndynamic = 1234;</code>\n");
document.write("<h4>Result:</h4>")
var dynamic = "Hello";
document.writeln("Before: <span id='generated'>\"" + dynamic + "\"</span>");
dynamic = 1234;
document.writeln("After: <span id='generated'>" + dynamic + "</span>");

document.writeln("----------------------------------------------------------------------------------");

document.write("<h1>Switch Fallthrough Example</h1>");
var num = 1;
document.write("<h4>Case='1' no break statements:</h4>");
document.write("<span id='generated'>")
switch(num) {
	case 1:
		document.writeln("Case 1");
	case 2:
		document.writeln("Case 2");
	case 3:
		document.writeln("Case 3");
}
document.write("</span>")
document.write("<h4>Case='1' with break statements:</h4>");
document.write("<span id='generated'>")
switch(num) {
	case 1:
		document.writeln("Case 1");
		break;
	case 2:
		document.writeln("Case 2");
		break;
	case 3:
		document.writeln("Case 3");
		break;
}
document.write("</span>")

document.writeln("----------------------------------------------------------------------------------");

document.write("<h1>Prototype & Open Class Example</h1>");
document.write("<h4>Here is an example of a prototype:</h4>")
document.writeln("function Person(name, age, hometown){\n\tthis.name = name;\n\tthis.age = age;\n\tthis.hometown = hometown;\n}");
function Person(name, age, hometown){
	this.name = name;
	this.age = age;
	this.hometown = hometown;
}
document.write("<h4>This is how you would create an instance of a Person using the prototype:</h4>")
document.writeln("var me = new Person(\"Allen\", 21, \"Houston, TX\");")
var me = new Person("Allen", 21, "Houston, TX");

document.write("<h4>Now as you would probably expect, you can access the objects properties using the dot-operator.</h4>")
document.writeln("me.name prints: <span id='generated'>" + me.name + "</span>");
document.writeln("me.age prints: <span id='generated'>" + me.age + "</span>");
document.writeln("me.hometown prints: <span id='generated'>" + me.hometown + "</span>");


//open classes???
me.boom = "slam";
document.writeln(me.boom);
Person.prototype.nationality = "American";
document.writeln(me.nationality);
var jin = new Person("owief", 234, "South Korea");
document.writeln(jin.nationality);
me.nationality = "Canadian";
document.writeln(me.nationality);

document.writeln("----------------------------------------------------------------------------------");

document.write("<h1>Closure Example</h1>");
document.write("<h4>Here are some function definitions that make use of closures:</h4>")
document.writeln("function mult(x) {\n\treturn function(y) {\n\t\treturn x * y;\n\t};\n}\nvar mult5 = mult(5);\nvar mult10 = mult(10);");
function mult(x) {
  return function(y) {
    return x * y;
  };
}
var mult5 = mult(5);
var mult10 = mult(10);

document.write("<h4>Results of calling these functions:</h4>")
document.writeln("Calling \"mult5(2)\" returns: <span id='generated'>" + mult5(2) + "</span>");
document.writeln("Calling \"mult10(2)\" returns: <span id='generated'>" + mult10(2) + "</span>");

document.writeln("----------------------------------------------------------------------------------");

document.write("<h1>Inheritance Example</h1>");