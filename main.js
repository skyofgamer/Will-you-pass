function check(event){
    event.preventDefault();
    if (document.getElementById("code").value === "5514") {
        console.log("correct");
        done();
      } else {
        alert("You are wrong. Press OK to try again.");
      }
}

function done(){
window.location.href = "https://forms.gle/6nYA69kZ9e5BNcwE7"
}