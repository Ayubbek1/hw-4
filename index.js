let month = parseInt(prompt("1-12"))

if(month>=1 && month<=2 || month===12){
    alert("winter")
}else if(month>=3 && month<=5){
    alert("spring")
}else if(month>=6 && month<=8){
    alert("summer")
}else if(month>=9 && month<=11){
    alert("autumn")
}else{
    alert("erorr 405")
}

let decada = parseInt(prompt("1-30"))

if(decada>=1 && decada<=10){
    alert("first")
}else if(decada>=11 && decada<=20){
    alert("second")
}else if(decada>20 && decada<32){
    alert("third")
}