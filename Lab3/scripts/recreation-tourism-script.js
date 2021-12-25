function MakeSmall(id){
    document.getElementById(id).style.fontSize = "14px";
    document.getElementById(id).style.color = "#61210F";
}

function MakeBig(id){
    document.getElementById(id).style.fontSize = "18px";
    document.getElementById(id).style.color = "red";
}

document.getElementById('button-1').onclick = function (){
    document.getElementById('first-page').style.visibility = "visible";
    document.getElementById('second-page').style.visibility = "hidden";
    document.getElementById('third-page').style.visibility = "hidden";
    MakeBig("button-1");
    MakeSmall("button-2");
    MakeSmall("button-3");
}

document.getElementById('button-2').onclick = function (){
    document.getElementById('first-page').style.visibility = "hidden";
    document.getElementById('second-page').style.visibility = "visible";
    document.getElementById('third-page').style.visibility = "hidden";
    MakeSmall("button-1");
    MakeBig("button-2");
    MakeSmall("button-3");
}

document.getElementById('button-3').onclick = function (){
    document.getElementById('first-page').style.visibility = "hidden";
    document.getElementById('second-page').style.visibility = "hidden";
    document.getElementById('third-page').style.visibility = "visible";
    MakeSmall("button-1");
    MakeSmall("button-2");
    MakeBig("button-3");
}