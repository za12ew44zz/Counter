var x = 0;



function upnumber(){
    x += 1;
    document.getElementById("test").innerHTML = x;
}


function denumber(){
    x -= 1;
    document.getElementById("test").innerHTML =  x;

    if(x <= 0){
        x = 0;
        document.getElementById("test").innerHTML = x;
    }
}


function resetnumber(){
    x = 0;
    document.getElementById("test").innerHTML = x;
    
}