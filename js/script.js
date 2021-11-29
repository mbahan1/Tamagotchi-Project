// ------------------------------------
//              DOG CLASS
// ------------------------------------
class Dog {
    constructor() {
        this.hunger = 2;
        this.boredom = 2;
        this.sleep = 2;
        this.age = 0;
        this.dogAge = 0;
        this.color = ""; //just in case I add choosing dog in intro later
        this.isPuppy = true;
        this.isOld = false;
    }
    feed() {
        if (this.hunger < 3) {
            this.hunger = 0;
        } else {
            this.hunger -= 3;
        }
    }
    play() {
        if (this.boredom < 3) {
            this.boredom = 0;
        } else {
            this.boredom -= 3;
        }
    }
    sleep() {
        if (this.sleep < 3) {
            this.sleep = 0;
        } else {
            this.sleep -= 3;
        }
    }
    getOlder() {
        $("#dog").css("width", "150px");
    }
};


// ------------------------------------
//           WRITE FUNCTIONS
// ------------------------------------

// 1. set name of dog on start page
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
// 2. confirm reading of care instructions
async function hideInstructions(e) {
    e.preventDefault();
    $("#instructions").css("display", "none");
}

// 3. code for changing status bars progress
function updateStatBar(statBar, percentage) {
    let barToChange = document.getElementById(`${statBar}`);
    if (percentage >= 0 && percentage <= 100) {
        barToChange.style.width = value + "%"; 
    }
}

// ------------------------------------
//           INVOKE FUNCTIONS
// ------------------------------------

// 0. Create dog :)
const puppy = new Dog;

// 1. first overlay, name it then hide overlay
$("form").on("submit", setName) 

// 2. second overlay, instructions then confirm
document.getElementById("gotIt").addEventListener("click", function() {
    $("#instructions").css("display", "none");
});







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

// $("light").on("click",)
