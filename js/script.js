document.addEventListener("DOMContentLoaded", init, false);
        function init() {
            var dropSelect = document.getElementById("addtype");
            var extra = document.getElementById("extra");//hidden text box
            var btn1 = document.getElementById("finishBtn");
            var billing = document.getElementById("billing");
                        
//address type "other" hidden text box
            dropSelect.addEventListener("change", function() {
                if (dropSelect.options.value = "other"){
                    extra.setAttribute("class", "show");
                } else {
                    extra.setAttribute("class", "hidden");
                }
            }, false);
            
//finsih building pizza confirm to show billing section            
           btn1.addEventListener("click", function(){
                var done = confirm("All done?");
                if (done == true){
                    console.log(done);
                    //billing.setAttribute("class", "show");
                };
            }, false);
//add in drop down for pizza sizes
            var selectSize = document.getElementById("size");
            var handOpt = ["Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"];
            for (var x in handOpt){
                console.log(handOpt[x]);
                document.createElement("option").setAttribute("value", handOpt[x]);
                
            }
            selectSize.appendChild(handOpt[]);
            
            
            
            
    }//---------------------------------------------end of init function

//validate delivery form input
/*
var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
var ck_username = /^[A-Za-z0-9_]{1,20}$/;
var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;


submitBtn.addEventListener("click", validate(), false);
function validate(form){
var fname = form.fname.value;
var lname = form.lname.value;
var email = form.email.value;

var errors = [];
 
 if (!ck_name.test(fname)) {
  errors[errors.length] = "You must enter a valid name.";
 }
 if (!ck_email.test(email)) {
  errors[errors.length] = "You must enter a valid email 
address.";
 }
 
 
 if (errors.length > 0) {

  reportErrors(errors);
  return false;
 }
  return true;
};//end function validate
*/

//http://stackoverflow.com/questions/16015933/javascript-show-hidden-div-when-select-option-is-selected



