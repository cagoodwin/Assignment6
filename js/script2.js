//address type "other" hidden text box--------------------DONE
var dropSelectD = document.getElementById("addtypeD");
var extraD = document.getElementById("extraD");//hidden text input 

dropSelectD.addEventListener("change", function(){
    if (dropSelectD.value == "other"){
        extraD.setAttribute("class", "show");
    }else{
        extraD.setAttribute("class", "hidden");
    }
}, false);

var dropSelectB = document.getElementById("addtypeB");
var extraB = document.getElementById("extraB");//hidden text input 

dropSelectB.addEventListener("change", function(){
    if (dropSelectB.value == "other"){
        extraB.setAttribute("class", "show");
    }else{
        extraB.setAttribute("class", "hidden");
    }
}, false);




//display total charge box in corner-------------------------DONE
var build = document.getElementById("build");
var total = document.getElementById("total");

build.addEventListener("click", function(){
    total.setAttribute("class", "show");
})



//add drop down for pizza sizes
var dough1 = document.getElementById("dough1");
var selectSize = document.getElementById("size");
var handOpt = ["Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"];
            
for (var x in handOpt){
    console.log(handOpt[x])
    var xx = document.createElement("option").setAttribute("value", handOpt[x]);
    
};

dough1.addEventListener("click", function(e){   
     selectSize.appendChild(xx);
}, false);



//update total in corner
var cheese = document.getElementById("cheese");
var toppings = document.getElementById("toppings");
var t = 0

cheese.addEventListener("change", function(){
    if (cheese.value == "extra") {t += 2.99}
        else if (cheese.value == "double") {t += 3.99};
}, false);

toppings.addEventListener("click", function(){
    t += .99;
}, false);

console.log(t);

var currentTotal = document.createTextNode(t);
total.appendChild(currentTotal);



//reveal billing input after build pizza-------------------------------DONE
var btn1 = document.getElementById("finishBtn")
btn1.addEventListener("click", function(){
                var done = confirm("Are you ready to place your order?");
                event.preventDefault();
                if (done == true){
                    billing.setAttribute("class", "show");
                };
            }, false);



//copy delivery address to billing--------------------------------------DONE
var fnameD = document.getElementById("fnameD");
var fnameB = document.getElementById("fnameB");

var lnameD = document.getElementById("lnameD");
var lnameB = document.getElementById("lnameB");

var addtypeD = document.getElementById("addtypeD");
var addtypeB = document.getElementById("addtypeB");

var otherInputD = document.getElementById("other-inputD");
var otherInputB = document.getElementById("other-inputB");

var streetD = document.getElementById("streetD");
var streetB = document.getElementById("streetB");

var aptnumbD = document.getElementById("aptnumbD");
var aptnumbB = document.getElementById("aptnumbB");

var cityD = document.getElementById("cityD");
var cityB = document.getElementById("cityB");

var stateD = document.getElementById("stateD");
var stateB = document.getElementById("stateB");

var zipD = document.getElementById("zipD");
var zipB = document.getElementById("zipB");

var phoneD = document.getElementById("phoneD");
var phoneB = document.getElementById("phoneB");

var sameAs = document.getElementById("same-as");

sameAs.addEventListener("click", function(){
    fnameB.value = fnameD.value;
    lnameB.value = lnameD.value;
    addtypeB.value = addtypeD.value;
    otherInputB.value = otherInputD.value;
    streetB.value = streetD.value;
    aptnumbB.value = aptnumbD.value;
    cityB.value = cityD.value;
    stateB.value = stateD.value;
    zipB.value = zipD.value;
    phoneB.value = phoneD.value;
},false);




//complete form submit-----------------------------DONE
var submit = document.getElementById("submitBtn");

submit.addEventListener("click", function(){
    alert("Excellent, your pizza is on it's way!");
}, false);











