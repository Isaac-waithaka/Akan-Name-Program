var dayOfWeek = function(DD,MM,CCYR) {
return (((CC/4)-2*CC-1)+((5*YY/4)+((26*(MM+1)/10))+DD)mod7;
};
var DD = parseInt(prompt("Enter the Date of the day you were born"));
if (DD<=0 || DD>31) {
  console.log("Enter valid Day");}
    else {
var MM = parseInt(prompt("Enter the Date of the month you were born"));
}
 if (MM<=0 || m>12)  {
  console.log("Enter valid Month");}
  else{
var CCYY = parseInt(prompt("Enter your year of birth"));
}
var result = dayOfWeek(((CC/4)-2*CC-1)+((5*YY/4)+((26*(MM+1)/10))+DD)mod7;

var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var myGender = prompt("What is your Gender?");
if (myGender=Male) {
  var myName = maleAkanNames[result]
}
else {
  var myName = femaleAkanNames[result]
}
alert(myName[result]);
