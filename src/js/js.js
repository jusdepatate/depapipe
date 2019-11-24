function depapipe() {
    usr = document.getElementById("name").value;

    if(usr === "Jus de Patate" || usr === "jusdepatate" || usr === "jdp") {
        score = Math.ceil(Math.random() * 10)+10;
    } else if(usr === "MJ" || usr === "mj" || usr === "Mj" || usr === "mJ") {
        score = Math.ceil(Math.random() * 3);
    } else {
        score = Math.ceil(Math.random() * 10);
    }
    console.log(score);
    document.getElementById("result").innerHTML = score;
}