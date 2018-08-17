var contacts = [ { id_number: idNumb, first_name: firstName, last_name: lastName, job_name: jobName, phone_number: phoneNumber, email_address: emailAddress }];
text = localStorage.getItem("QuiRkWebAppJSON");
contacts = JSON.parse(text);


function qrcoding(){
  var tag = "https://londonlady.github.io/quirk/QuiRkWebApp_Contacts";
  var link = 'https://api.qrserver.com/v1/create-qr-code/?data='+tag+"&amp;size=100x100";
  document.getElementById("qrcode").innerHTML = "<img src="+link+"/>";
  document.getElementById("first_name").innerHTML = "<p> First Name: " + localStorage.fname + "</p>";
  document.getElementById("last_name").innerHTML = "<p> Last Name: " + localStorage.lname + "</p>";
  document.getElementById("job_name").innerHTML = "<p> Job: " + localStorage.job + "</p>";
  document.getElementById("email").innerHTML = "<p> E-Mail: " + localStorage.email +"</p>";
  document.getElementById("phone_number").innerHTML = "<p> Phone Number: " + localStorage.phone + "</p>";

};


function submitform(){

//text = localStorage.getItem("QuiRkWebAppJSON");
//contacts = JSON.parse(text);
//console.log(contacts)
console.log ("TEST 1");

var firstName = document.getElementById("fname").value;
var lastName = document.getElementById("lname").value;
var jobName = document.getElementById("jname").value;
var phoneNumber = document.getElementById("pnumber").value;
var emailAddress = document.getElementById("ename").value;
  
console.log ("TEST 2");

var obj = { first_name: firstName, last_name: lastName, job_name: jobName, phone_number: phoneNumber, email_address: emailAddress};
var frst = obj ["first_name"];
var lst = obj ["last_name"];
var fInit = frst.charAt(0);
var lInit = lst.charAt(0);
var initials = fInit + lInit
var phonenum = obj ["phone_number"];
var idNumb = initials + phonenum.slice(phonenum.length-5, phonenum.length-1);
var obj = { id_number: idNumb, first_name: firstName, last_name: lastName, job_name: jobName, phone_number: phoneNumber, email_address: emailAddress };
console.log (obj);
contacts.push (obj);
var myJSON = JSON.stringify(contacts);
localStorage.setItem("QuiRkWebAppJSON", myJSON);
localStorage.id = idNumb;
localStorage.fname = frst;
localStorage.lname = lst;
localStorage.job = jobName;
localStorage.phone = phoneNumber;
localStorage.email = emailAddress;
console.log (localStorage.id);
console.log ("TEST 3");
};

