

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
 
}

//show specific feature


const feature=["face1", "face2", "face3"]

/*function f1() {
  var elem = document.getElementById("types").value;
  console.log(document.getElementById("3").value)
  console.log(elem);
  console.log(feature.indexOf('face1'));
  for(i=0;i<feature.length;i++){
    console.log("q")
    document.getElementById("types").value;
    console.log(document.getElementById("types").value)
    if(document.getElementById("types").value==feature[i]){
      console.log("work")
      
      var x = feature[i]
      if (x.style.display == "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
        
      }
    }
    }
  }*/
//features, collapsable

function myFunction() {
  document.getElementById("grid-item").style.boxShadow = "8px 8px yellow";
}

function f1() {
  var x = document.getElementById("face1");
  var y = document.getElementById("iconF1");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";

  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function f2() {
  var x = document.getElementById("face2");
  var y = document.getElementById("iconF2");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function f3() {
  var x = document.getElementById("face3");
  var y = document.getElementById("iconF3");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function f4() {
  var x = document.getElementById("face4");
  var y = document.getElementById("iconF4");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function f5() {
  var x = document.getElementById("face5");
  var y = document.getElementById("iconF5");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function f6() {
  var x = document.getElementById("face6");
  var y = document.getElementById("iconF6");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function f7() {
  var x = document.getElementById("face7");
  var y = document.getElementById("iconF7");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function f8() {
  var x = document.getElementById("face8");
  var y = document.getElementById("iconF8");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}

function h1() {
  var x = document.getElementById("hair1");
  var y = document.getElementById("iconH1");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function h2() {
  var x = document.getElementById("hair2");
  var y = document.getElementById("iconH2");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function h3() {
  var x = document.getElementById("hair3");
  var y = document.getElementById("iconH3");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function h4() {
  var x = document.getElementById("hair4");
  var y = document.getElementById("iconH4");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function h5() {
  var x = document.getElementById("hair5");
  var y = document.getElementById("iconH5");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function h6() {
  var x = document.getElementById("hair6");
  var y = document.getElementById("iconH6");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function h7() {
  var x = document.getElementById("hair7");
  var y = document.getElementById("iconH7");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function h8() {
  var x = document.getElementById("hair8");
  var y = document.getElementById("iconH8");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}

function e1() {
  var x = document.getElementById("eyes1");
  var y = document.getElementById("iconE1");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function e2() {
  var x = document.getElementById("eyes2");
  var y = document.getElementById("iconE2");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function e3() {
  var x = document.getElementById("eyes3");
  var y = document.getElementById("iconE3");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function e4() {
  var x = document.getElementById("eyes4");
  var y = document.getElementById("iconE4");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function e5() {
  var x = document.getElementById("eyes5");
  var y = document.getElementById("iconE5");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function e6() {
  var x = document.getElementById("eyes6");
  var y = document.getElementById("iconE6");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function e7() {
  var x = document.getElementById("eyes7");
  var y = document.getElementById("iconE7");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function e8() {
  var x = document.getElementById("eyes8");
  var y = document.getElementById("iconE8");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}

function n1() {
  var x = document.getElementById("nose1");
  var y = document.getElementById("iconN1");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function n2() {
  var x = document.getElementById("nose2");
  var y = document.getElementById("iconN2");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function n3() {
  var x = document.getElementById("nose3");
  var y = document.getElementById("iconN3");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function n4() {
  var x = document.getElementById("nose4");
  var y = document.getElementById("iconN4");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function n5() {
  var x = document.getElementById("nose5");
  var y = document.getElementById("iconN5");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function n6() {
  var x = document.getElementById("nose6");
  var y = document.getElementById("iconN6");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function n7() {
  var x = document.getElementById("nose7");
  var y = document.getElementById("iconN7");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function n8() {
  var x = document.getElementById("nose8");
  var y = document.getElementById("iconN8");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}

function m1() {
  var x = document.getElementById("mouth1");
  var y = document.getElementById("iconM1");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function m2() {
  var x = document.getElementById("mouth2");
  var y = document.getElementById("iconM2");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function m3() {
  var x = document.getElementById("mouth3");
  var y = document.getElementById("iconM3");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function m4() {
  var x = document.getElementById("mouth4");
  var y = document.getElementById("iconM4");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function m5() {
  var x = document.getElementById("mouth5");
  var y = document.getElementById("iconM5");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function m6() {
  var x = document.getElementById("mouth6");
  var y = document.getElementById("iconM6");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function m7() {
  var x = document.getElementById("mouth7");
  var y = document.getElementById("iconM7");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}
function m8() {
  var x = document.getElementById("mouth8");
  var y = document.getElementById("iconM8");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.backgroundColor ="yellow";
    y.style.boxShadow="8px 8px blue";
  } else {
    x.style.display = "none";
    y.style.backgroundColor ="white";
    y.style.boxShadow="8px 8px black";
  }
}