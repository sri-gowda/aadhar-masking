
let aadhaar = "";
let aadhaarStack = [];
let maskStack = [];
let flag = 0;

jQuery(function($) { // DOM ready and $ alias secured




$('#aadhaar').on('input',function(e){
console.log("this.value.length",this.value,this.value === " ");

let key = e.which || this.value.substr(-1).charCodeAt(0);
console.log("key",key)
if(key === 32){
aadhaarStack.pop();
maskStack.pop();
updateUi();
return;
} 
console.log("here also", this.value.length + ":" + aadhaarStack.length);
if(this.value.length < aadhaarStack.length){
 aadhaarStack.pop();
 maskStack.pop();

}else{
 key = String.fromCharCode(key);
      if(aadhaarStack.filter(i => i !== " ").length <= 11 && !isNaN(key)){
          if(aadhaarStack.length > 1 && (aadhaarStack.filter(i => i !== " ").length) % 4 === 0){
              aadhaarStack.push(" ");
              aadhaarStack.push(key);
              maskStack.push(" ");
              if(aadhaarStack.filter(i => i !== " ").length > 8){
                  maskStack.push(key);
              }else{
                  maskStack.push("X");
              }
          }else{
              aadhaarStack.push(key);
              if(aadhaarStack.filter(i => i !== " ").length > 8){
                  maskStack.push(key);
              }else{
                 maskStack.push("X");
              }
          }
      }
}

updateUi();

});

function updateUi(){
setTimeout(function(){
aadhaar = maskStack.join("");
$('#aadhaar').val(aadhaar);
},100);
}

});
function displayVal(){
alert(aadhaarStack.filter(i => i != " ").join(""));
}

