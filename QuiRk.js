var x = document.getElementById("igform");
var y = document.getElementById("linkform");
var z = document.getElementById("twform");
var a = document.getElementById("eform");
var b = document.getElementById("pform");
var c = document.getElementById("fbform");
a.style.display = "none";
b.style.display = "none";
c.style.display = "none";
x.style.display = "none";
y.style.display = "none";
z.style.display = "none";

contacts = ["a"];
//text = localStorage.getItem("QuiRkWebAppJSON");
//contacts = JSON.parse(text);

function igqr(){
  var tag = 'https://www.instagram.com/'+ localStorage.uname;
  var link = 'https://api.qrserver.com/v1/create-qr-code/?data='+tag+"&amp;size=100x100";
  document.getElementById("qrcode").innerHTML = "<img src="+ link+"/>"

};


function igsubmit(){
var user  = document.getElementById("igname").value;
localStorage.uname = user
console.log (localStorage.uname);
igqr()
};


function igShow() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";

    } else {
        x.style.display = "none";
    }
}

function linkqr(){
  var tag = 'linkedin.com/in/'+ localStorage.uname;
  var link = 'https://api.qrserver.com/v1/create-qr-code/?data='+tag+"&amp;size=100x100";
  document.getElementById("qrcode").innerHTML = "<img src="+ link+"/>"

};


function linksubmit(){
var user  = document.getElementById("lname").value;
localStorage.uname = user
console.log (localStorage.uname);
linkqr()
};


function linkShow() {
    if (y.style.display === "none") {
        y.style.display = "block";
        b.style.display = "none";
        x.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        c.style.display = "none";

    } else {
        y.style.display = "none";
    }
}
function twqr(){
  var tag = 'https://twitter.com/'+ localStorage.uname;
  var link = 'https://api.qrserver.com/v1/create-qr-code/?data='+tag+"&amp;size=100x100";
  document.getElementById("qrcode").innerHTML = "<img src="+ link+"/>"

};


function twsubmit(){
var user  = document.getElementById("tname").value;
localStorage.uname = user
console.log (localStorage.uname);
twqr()
};

function twShow() {
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";

    } else {
        z.style.display = "none";
    }
  }
  function fbqr(){
    var tag = 'https://www.facebook.com/'+ localStorage.uname;
    var link = 'https://api.qrserver.com/v1/create-qr-code/?data='+tag+"&amp;size=100x100";
    document.getElementById("qrcode").innerHTML = "<img src="+ link+"/>"

  };


  function fbsubmit(){
  var user  = document.getElementById("fname").value;
  localStorage.uname = user
  console.log (localStorage.uname);
  fbqr()
  };

  function fbShow() {
      if (c.style.display === "none") {
          c.style.display = "block";
          x.style.display = "none";
          y.style.display = "none";
          z.style.display = "none";
          a.style.display = "name";
          b.style.display = "none";

      } else {
          c.style.display = "none";
      }
    }


  function twShow() {
      if (z.style.display === "none") {
          z.style.display = "block";
          x.style.display = "none";
          y.style.display = "none";
          a.style.display = "none";
          b.style.display = "none";
          c.style.display = "none";


      } else {
          z.style.display = "none";
      }
    }

  function eShow() {
      if (a.style.display === "none") {
          a.style.display = "block";
          x.style.display = "none";
          y.style.display = "none";
          z.style.display = "none";
          b.style.display = "none";
          c.style.display = "none";

      } else {
          a.style.display = "none";
      }
    }

    function eSubmit(){
    var mail  = document.getElementById("ename").value;
    localStorage.email = mail
    console.log (localStorage.email);
    meqr()
    };

    function eqr(){
      var tag = localStorage.email;
      var link = 'https://api.qrserver.com/v1/create-qr-code/?data='+tag+"&amp;size=250x250";
      document.getElementById("qrcode").innerHTML = "<img src="+ link+"/>"
}



function pShow() {
    if (b.style.display === "none") {
        b.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "name";
        c.style.display = "none";

    } else {
        b.style.display = "none";
    }
  }

  function pSubmit(){
  var number  = document.getElementById("pname").value;
  localStorage.phone = number
  console.log (localStorage.phone);
  pqr()
  };

  function pqr(){
    var tag = localStorage.email;
    var link = 'https://api.qrserver.com/v1/create-qr-code/?data='+tag+"&amp;size=250x250";
    document.getElementById("qrcode").innerHTML = "<img src="+ link+"/>"
}
