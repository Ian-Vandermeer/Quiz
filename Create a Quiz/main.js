// Create a Quiz

// Global Variable
let score = 0;

// Event Listener
document.getElementById("markquiz").addEventListener("click", checkquiz);


// Event Function
function checkquiz() {
    let quest1 = document.getElementById("quest1").value;
    quest1 = quest1.toLowerCase();

    let quest2 = document.getElementById("quest2").value;
    quest2 = quest2.toLowerCase();

    let quest3 = document.getElementById("quest3").value;
    quest3 = quest3.toLowerCase();

    if (quest1 == "may 17, 2009") {
        score = score + 1
        // document.getElementById("").innerHTML = "correct";
    }

    if (quest2 == "googoogaga") {
        score = score + 1
        // document.getElementById("").innerHTML = "correct";
    }
    if (quest3 == "k/da") {
        score = score + 1
        // document.getElementById("").innerHTML = "correct";
    }
}