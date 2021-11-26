//when click the light switch, add
//box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
//to mainPage and statusWindow css

function setName() {
    const dogName = document.getElementById("inputName").value;
    $('#status').html(`${dogName}'s Status`);
    console.log(dogName);
    console.log(`${dogName}'s Status`)
}

$("form").on("submit", setName)