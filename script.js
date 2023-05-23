/* variables for navbar */
const navContainer = document.getElementById("navbarcontainer")
let viewportHeight = window.innerHeight - window.innerHeight/2.5; //gets viewport height minus 10% of viewrport height
/* event listener for navbar */
window.addEventListener("scroll", e => {  //think this is very resource intensive. Should maybe change to set interval or some other method instead?
    if (window.scrollY>viewportHeight) navContainer.classList.remove("hidden"); //shows navbar once you scroll to bottom of landing page
    else navContainer.classList.add("hidden");
})
/* variables for landing page */
const landingPast = document.getElementById("landingpast");
const landingFuture = document.getElementById("landingfuture");
const landingContainer = document.getElementById("landingpagecontainer")
const rewindSymbol = document.getElementById("rewind");
const ffwdSymbol = document.getElementById("ffwd");
const pastButton = document.getElementById("pastbutton");
const futureButton = document.getElementById("futurebutton");
/* Event listeners for landin page */
positionTimeSymbols();
function positionTimeSymbols() {  // positions rewind and ffwd symbols based on size of whento
    const whenTo = document.getElementById("whentotitle");
    console.log(ffwdSymbol.getBoundingClientRect())
    ffwdSymbol.style.left = (whenTo.getBoundingClientRect().width)*-1 + "px"  //moves ffwdsymbol left by width of whento
    rewindSymbol.style.left = (whenTo.getBoundingClientRect().width) + "px" //moves rewindsymbol right by width of whento
    ffwdSymbol.style.top = (whenTo.getBoundingClientRect().height + (whenTo.getBoundingClientRect().height)/2) + "px"   //moves ffwd top by height of whento
    rewindSymbol.style.top = (whenTo.getBoundingClientRect().height + (whenTo.getBoundingClientRect().height)/2)*-1 + "px" //moves rewind bottom by height of whento
}
landingPast.addEventListener("mouseover",e => {     //makes rewind image and background gradient move left on hover
    rewindSymbol.style.animation = "rewindpastanim 1s forwards";
    landingContainer.style.animation = "gradientscrollleft 1s forwards"
})
landingPast.addEventListener("mouseleave",e => {    //resets rewind image and backkground gradient to original positions
    rewindSymbol.style.animation = "none";
    landingContainer.style.animation = "none"
})

landingFuture.addEventListener("mouseenter",e => {  //makes rewind image and background gradient move left on hover
    ffwdSymbol.style.animation = "ffwdfutureanim 1s forwards";
    landingContainer.style.animation = "gradientscrollright 1s forwards"    
})
landingFuture.addEventListener("mouseleave",e => {  //resets rewind image and backkground gradient to original positions
    ffwdSymbol.style.animation = "none";
    landingContainer.style.animation = "none"
})
pastButton.addEventListener("click", e => document.getElementById("pastpage").scrollIntoView(true))  //scrolls page to element with id "pastpage"
futureButton.addEventListener("click", e => document.getElementById("futurepage").scrollIntoView(true))
