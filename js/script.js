// ------------------------------------
//              DOG CLASS
// ------------------------------------
class Dog {
    constructor() {
        this.hunger = 0;
        this.boredom = 0;
        this.sleep = 0;
        this.age = 0;
        // this.dogAge = 0;
        // this.color = ""; just in case I add choosing dog in intro later
        this.isPuppy = true;
        this.isOld = false;
        this.isAlive = true;
        this.start = false;
    }
    feed() {
        if (this.hunger < 3) {
            this.hunger = 0;
        } else {
            this.hunger -= 3;
        }
        document.getElementById('hungerBarFill').style.width = (puppy.hunger*10) + "%"; 
    }
    play() {
        if (this.boredom < 3) {
            this.boredom = 0;
        } else {
            this.boredom -= 3;
        }
        document.getElementById('boredomBarFill').style.width = (puppy.boredom*10) + "%";
    }
    bedtime() {
        if (this.sleep < 3) {
            this.sleep = 0;
        } else {
            this.sleep -= 3;
        }
        document.getElementById('sleepBarFill').style.width = (puppy.sleep*10) + "%";
    }
    getOlder() {
        $("#dog").css("width", "150px");
    }
    getOld() {
        $("#dog").attr("src","../images/sitting-cropped-yellow-old.png");
    }
    died() {
        $("#deathText").html(`You have neglected to meet ${dogName}'s needs, so they have run away to go live out the rest of their life on a farm outside of the city.`)
        $("#mainPage").css("display", "none");
    }
    survived(){
        $("#deathText").html(`You have given ${dogName} a great life, they will be waiting for you across the rainbow bridge.`)
        $("#deathImg").attr("src","../images/sitting-eyes-yellow-old.png");
        $("#mainPage").css("display", "none");
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
    $("#deathText").html(`You have neglected to meet ${dogName}'s needs, so they have run away to go live out the rest of their life on a farm outside of the city.`)
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
// function updateStatBar(statBar, percentage) {
//     let barToChange = document.getElementById(`${statBar}`);
//     if (percentage >= 0 && percentage <= 100) {
//         barToChange.style.width = percentage + "%"; 
//     }
// }
// 4. code for when you have let a bar reach max and the dog dies
// function itDied() {
//     document.getElementById('death').style.zIndex = 10;
// }
// 5. main game functions
async function timePassing() {
    if (puppy.hunger < 10 && puppy.boredom < 10 && puppy.sleep < 10 && puppy.age < 120) {
        puppy.age += 1;        
        document.getElementById('years').innerHTML = puppy.age;
        console.log(puppy.age)
        puppy.hunger++;
        document.getElementById('hungerBarFill').style.width = (puppy.hunger*10) + "%"; 
        puppy.boredom++;
        document.getElementById('boredomBarFill').style.width = (puppy.boredom*10) + "%";
        puppy.sleep++;
        document.getElementById('sleepBarFill').style.width = (puppy.sleep*10) + "%";
    }
    if (puppy.age === 14){
        puppy.getOlder();
    }
    if (puppy.age === 70){
        puppy.getOld();
    }
    if (puppy.hunger === 10 || puppy.boredom === 10 || puppy.sleep === 10) {
        puppy.died();
        puppy.isAlive = false;
        return;
    }
    if (puppy.age >= 120) {
        puppy.survived();
        puppy.isAlive = false;
        return;
    }
}
async function mainGame() {
    if (puppy.age < 120 && puppy.isAlive && puppy.start) {
        setInterval('timePassing()', 3000);      
    }
}



// ------------------------------------
//           INVOKE FUNCTIONS
// ------------------------------------

// 0. Create dog :)
const puppy = new Dog;
console.log(puppy);

// 1. first overlay, name it then hide overlay
$("form").on("submit", setName) 

// 2. second overlay, instructions then confirm
document.getElementById("gotIt").addEventListener("click", function() {
    $("#instructions").css("display", "none");
    if (puppy.age < 120 && puppy.isAlive) {
        setInterval('timePassing()', 3000);      
    }
});

document.getElementById("bed").addEventListener("click", function() {
    puppy.bedtime();
});

document.getElementById("toy").addEventListener("click", function() {
    puppy.play();
});

document.getElementById("bowl").addEventListener("click", function() {
    puppy.feed();
});

// if (puppy.age < 120 && puppy.isAlive) {
//     setInterval('timePassing()', 3000);      
// }
  
document.getElementById("reload").addEventListener("click", function() {
    document.location.reload(true);
});


// mainGame()





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
