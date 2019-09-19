function enterFunction() {
    var calInfo =  document.getElementById("input").value;
    var addSym = calInfo.includes("+");
    var subSym = calInfo.includes("-");
	var multSym = calInfo.includes("*");
	var divSym = calInfo.includes("/");
    if(addSym) {
        var symPos = calInfo.indexOf("+");
        var firstElem = calInfo.substring(0,symPos);
        var secElem = calInfo.substring(symPos + 1,);
        var sol = parseInt(firstElem) + parseInt(secElem);
    }
    else if(subSym) {
        var symPos = calInfo.indexOf("-");
        var firstElem = calInfo.substring(0,symPos);
        var secElem = calInfo.substring(symPos + 1,);
        var sol = parseInt(firstElem) - parseInt(secElem);
    }
	else if(multSym) {
        var symPos = calInfo.indexOf("*");
        var firstElem = calInfo.substring(0,symPos);
        var secElem = calInfo.substring(symPos + 1,);
        var sol = parseInt(firstElem) * parseInt(secElem);
    }
	else if(divSym) {
        var symPos = calInfo.indexOf("/");
        var firstElem = calInfo.substring(0,symPos);
        var secElem = calInfo.substring(symPos + 1,);
        var sol = parseInt(firstElem) / parseInt(secElem);
    }
    document.getElementById("input").value = sol.toString();
}