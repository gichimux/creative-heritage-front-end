// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

////self type header text


let i=0
let x=0
 ,intro = "With"
 ,next = "Yours Trully."
 ,doc = document.getElementById("text1")
 ,doc_next = document.getElementById("text2");

const selfType1 = ()=>{
  if(i<intro.length){
    doc.innerHTML += intro.charAt(i);
    i++;
    setTimeout(selfType1,10);
    }
  }
const selfType2 = ()=>{
    if(x<next.length){
      doc_next.innerHTML += next.charAt(x);
      x++;
      setTimeout(selfType2,100);
      }
    }
 selfType1();
 selfType2();

