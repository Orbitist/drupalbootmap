// any element with id 'querystring' will render the current url querystring
function querystring() {
    document.getElementById("querystring").innerHTML =
    window.location.search;
}

// any anchor with id 'hrefquerystring' will add the current url querystring to the end of its href attribute
function hrefquerystring() { 
     var anchor = document.getElementById("hrefquerystring"); 
     anchor.href = anchor + window.location.search;
} 

// any anchor with id 'hrefquerystring2' (for 2nd instances) will add the current url querystring to the end of its href attribute
function hrefquerystring2() { 
     var anchor = document.getElementById("hrefquerystring2"); 
     anchor.href = anchor + window.location.search;
} 

// any anchor with id 'hrefquerystring3' (for 3nd instances) will add the current url querystring to the end of its href attribute
function hrefquerystring3() { 
     var anchor = document.getElementById("hrefquerystring3"); 
     anchor.href = anchor + window.location.search;
} 

// run both functions in 'querystrings' function
function querystrings() {
  querystring();
  hrefquerystring();
  hrefquerystring2();
  hrefquerystring3();
}

//run 'querystrings'
window.onload = querystrings;