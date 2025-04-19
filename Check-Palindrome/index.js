const ele = document.getElementById("inputString")

function checker() {
    const value = ele.value;

    const reverse = value.split("").reverse().join("");

    if(value===reverse){
        alert("P A L I N D R O M E !!");
    } else{
        alert("Sorry, not a palindrome. Try again!!");
    }
    ele.value = "";
}