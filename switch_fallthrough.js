
document.writeln("Switch Fallthrough example");
var num = 1;
document.writeln("Case='1' no break statements:");
switch(num) {
	case 1:
		document.writeln("Case 1");
	case 2:
		document.writeln("Case 2");
	case 3:
		document.writeln("Case 3");
}

document.writeln("Case='1' with break statements:");
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
