document.onload = timeTravel(); {
    document.getElementById("elem").innerHTML = "Click Here";
    object.addEventListener("click", timeTravel);
}
function timeTravel() {
    let maxYear = 2900 //max year we'll accept
    let year = Math.random() * maxYear;
    var pet = ["cat", "mouse", "rat", "dog", "wolverine", "parakeet", "rabbit", "lama", "T-Rex", "gerbil", "hamster", "gold fish", "mongoose"];
    var randomAnimal = pet[Math.floor(Math.random() * pet.length)];
    var pet = randomAnimal;
    document.write('Your ' + pet + ' is traveling through time to the year ' + Math.floor(year) + '!');
}
