var currentslide
function scrollFunction(){
    if(document.documentElement.scrollTop <= 0){
        if(document.getElementById("headercontainer").classList.contains("headernoback")){

        } else {
            document.getElementById("headercontainer").classList += " headernoback"
        }
    } else if (document.documentElement.scrollTop >= 1){
        document.getElementById("headercontainer").classList = "header headerback"
    }
}

function featuredslide(a){

    const size = document.getElementById("featured-0").getBoundingClientRect()
    var width = size.right - size.left + 20;
    var multiplier = width
    document.getElementById("featuredslide").style.transform = "translate3d(-" + a * multiplier + "px,0,0)"
    const dotnavitems = document.getElementsByClassName("dotnav-item");
    for(x=0;x<dotnavitems.length;x++){
        dotnavitems[x].classList.remove("current")
    }
    dotnavitems[a].classList.add("current")
    currentslide = a;

    console
    if(currentslide == 0){
        document.getElementById("paddlenavprev").classList.add("inactive")
    } else {
        document.getElementById("paddlenavprev").classList.remove("inactive")
    }
    if (currentslide == dotnavitems.length - 1){
        document.getElementById("paddlenavnext").classList.add("inactive")
    } else {
        document.getElementById("paddlenavnext").classList.remove("inactive")
    }
}

function paddlenav(a){
    if(currentslide == undefined){
        currentslide = 0
    }
    if(a==0){
        if(currentslide > 0){
            console.log(0)
            currentslide--
            featuredslide(currentslide)
        }
    } else if(a==1){
        console.log(currentslide)
        if(currentslide < 2){
            console.log(1)

            currentslide++
            featuredslide(currentslide)
        }
    }
}