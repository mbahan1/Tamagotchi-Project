// ------------------------------------
//              DOG CLASS
// ------------------------------------
class Dog {
    constructor() {
        this.hunger = 0;
        this.boredom = 0;
        this.sleep = 0;
        this.age = 0;
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
        // let currentDogImage = $('#dog').attr('src');
        $("#dog").attr("src","./images/eatting.png");
        delay(1000).then(() => $("#dog").attr("src", currentDogImage));
    }
    play() {
        if (this.boredom < 3) {
            this.boredom = 0;
        } else {
            this.boredom -= 3;
        }
        document.getElementById('boredomBarFill').style.width = (puppy.boredom*10) + "%";
        // let currentDogImage = $('#dog').attr('src');
        $("#dog").attr("src","./images/playing.png");
        delay(1000).then(() => $("#dog").attr("src", currentDogImage));
    }
    bedtime() {
        if (this.sleep < 3) {
            this.sleep = 0;
        } else {
            this.sleep -= 3;
        }
        document.getElementById('sleepBarFill').style.width = (puppy.sleep*10) + "%";
        // let currentDogImage = $('#dog').attr('src');
        $("#dog").attr("src","./images/sleeping.png");
        delay(1000).then(() => $("#dog").attr("src", currentDogImage));
    }
    getOlder() {
        $("#evolution").html(`${dogName} the puppy has grown up, and is now ${dogName} the dog!`);
        delay(5000).then(() => $("#evolution").html(""));
        $("#dog").css("height", "225px");
    }
    getOld() {
        $("#evolution").html(`${dogName} is still a puppy at heart, but has gained some gray in the muzzle.`);
        delay(5000).then(() => $("#evolution").html(""));
        $("#dog").attr("src","./images/sitting-cropped-yellow-old.png");
        currentDogImage = $('#dog').attr('src');
    }
    died() {
        $("#deathText").html(`You have neglected to meet ${dogName}'s needs, so they have run away to go live out the rest of their life on a farm outside of the city.`)
        $("#mainPage").css("display", "none");
    }
    survived(){
        $("#deathText").html(`You have given ${dogName} a great life, they will be waiting for you across the rainbow bridge.`)
        $("#deathImg").attr("src","./images/sitting-eyes-yellow-old.png");
        $("#mainPage").css("display", "none");
    }
};


// ------------------------------------
//           WRITE FUNCTIONS
// ------------------------------------

// 1. set name of dog on start page declare lightsOn and make delay function
let dogName = "";
$("#dog").attr("src","./images/sitting-cropped-yellow.png"); 
// "../images/sitting-cropped-yellow.png"
let lightsOn = true;
let currentDogImage = $('#dog').attr('src');
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function setName(e) {
    e.preventDefault();
    dogName = document.getElementById("inputName").value;
    $('#nameStatus').html(`${dogName}'s Status`);
    console.log(dogName);
    console.log(`${dogName}'s Status`)    
    $('#nameIt').html(`You have named your new best friend ${dogName}`);
    $("#dogPic").attr("src","./images/sitting-eyes-yellow.png");
    // "../images/sitting-eyes-yellow.png"
    $("#deathText").html(`You have neglected to meet ${dogName}'s needs, so they have run away to go live out the rest of their life on a farm outside of the city.`)
    await new Promise(resolve => setTimeout(resolve, 3000));
    // wait 3 seconds after naming    
    $("#startPageOverlay").css("display", "none");
    $("#dogPic").attr("src","./images/sitting-cropped-yellow.png");
}
// 2. confirm reading of care instructions
async function hideInstructions(e) {
    e.preventDefault();
    $("#instructions").css("display", "none");
}

// 3. main game function
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

// 4. lightswitch for changing lights on or off
function lightSwitch() {
    if (lightsOn) {
        $("#lights").css("opacity", ".4");
        $("#light").attr("src","./images/lights-off.png");
        lightsOn = false;
    }
    else {
        $("#lights").css("opacity", "0");
        $("#light").attr("src","./images/lights.png");
        lightsOn = true;
    }
}


// ------------------------------------
//           INVOKE FUNCTIONS
// ------------------------------------

// 0. Create dog :)
const puppy = new Dog;
console.log(puppy);

// 1. first overlay, name it then hide adoption overlay
$("form").on("submit", setName) 

// 2. second overlay, instructions then confirm and start game
document.getElementById("gotIt").addEventListener("click", function() {
    $("#instructions").css("display", "none");
    if (puppy.age < 120 && puppy.isAlive) {
        setInterval('timePassing()', 3000);      
    }
});

// 3. listeners on interaction buttons
document.getElementById("bed").addEventListener("click", function() {
    puppy.bedtime();
    if (lightsOn = true) {
        lightSwitch();
        delay(1000).then(() => lightSwitch());
    }
});
document.getElementById("toy").addEventListener("click", function() {
    puppy.play();
});
document.getElementById("bowl").addEventListener("click", function() {
    puppy.feed();
});
document.getElementById("light").addEventListener("click", function() {
    lightSwitch();
});

// 4. end game reload
document.getElementById("reload").addEventListener("click", function() {
    document.location.reload(true);
});
