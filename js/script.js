


//set name of dog on start page
let dogName = "";
async function setName(e) {
    e.preventDefault();
    dogName = document.getElementById("inputName").value;
    $('#nameStatus').html(`${dogName}'s Status`);
    console.log(dogName);
    console.log(`${dogName}'s Status`)    
    $('#nameIt').html(`You have named your new best friend ${dogName}`);
    $("#dogPic").attr("src","../images/sitting-eyes-yellow.png");
    await new Promise(resolve => setTimeout(resolve, 3000));
    // wait 3 seconds after naming    
    $("#startPageOverlay").css("display", "none");
    $("#dogPic").attr("src","../images/sitting-cropped-yellow.png");
}
async function hideInstructions(e) {
    e.preventDefault();
    // await new Promise(resolve => setTimeout(resolve, 4000));
    $("#instructions").css("display", "none");
}


//turn lights on and off on main page
//when click the light switch, add
//box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
//to mainPage and statusWindow css
// let lightsOn=true;
// function turnLightsOn() {
//     $("#mainPage").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0)");
//     $("#statusWindow").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,0)");
//     lightsOn=true;
// }
// function turnLightsOff() {
//     $("#mainPage").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,.4)");
//     $("#statusWindow").css("box-shadow", "inset 0 0 0 1000px rgba(0,0,0,.4)");
//     lightsOn=false;
// }

// window.addEventListener('keydown',
// function(){lightsOn?turnLightsOff():turnLightsOn()} )

//first overlay, name it then hide overlay
$("form").on("submit", setName) 

//second overlay, instructions then confirm
document.getElementById("gotIt").addEventListener("click", function() {
    $("#instructions").css("display", "none");
});
// $("form").on("submit", showInstructions)


// $("light").on("click",)