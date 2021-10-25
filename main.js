
document.getElementById("calc").onclick =function(){
    var x =parseInt(document.getElementById("x").value);
    var y =parseInt(document.getElementById("y").value);
    var o =document.getElementById("o").value;
    
    if(o=='+'){
        document.getElementById("output").innerText=x+y;
        
    }
    else if(o=='-'){
        document.getElementById("output").innerText=x-y;
    }
    else if(o=='*'){
        document.getElementById("output").innerText=x*y;
    }
    else if(o=='/'){
        document.getElementById("output").innerText=x/y;
    }
    else{
        document.getElementById("output").innerText=x%y;
    }}
