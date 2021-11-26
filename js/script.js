


//set name of dog on start page
let dogName = "";
async function setName(e) {
    e.preventDefault();
    dogName = document.getElementById("inputName").value;
    $('#nameStatus').html(`${dogName}'s Status`);
    // console.log(dogName);
    // console.log(`${dogName}'s Status`)
    //Just to check it works
    $('#nameIt').html(`You have named your new best friend ${dogName}`);
}
//turn lights on and off on main page
//when click the light switch, add
//box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
//to mainPage and statusWindow css
let lightsOn=true;
function turnLightsOn() {
    $("#mainPage").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0)");
    $("#statusWindow").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0)");
    lightsOn=true;
}
function turnLightsOff() {
    $("#mainPage").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,.4)");
    $("#statusWindow").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,.4)");
    lightsOn=false;
}

window.addEventListener('keydown',
function(){lightsOn?turnLightsOff():turnLightsOn()} )


$("form").on("submit", setName)

$("light").on("click",)