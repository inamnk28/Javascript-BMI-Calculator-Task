const button = document.getElementById('mybtn');
const massCondition = document.getElementById('state');
const theOutput = document.getElementById('output')

function calculation() {
    const theHeight = document.getElementById('myheight').value / 100;
    const theWeight = document.getElementById('myweight').value;

    const answer = theWeight / (theHeight*theHeight).toFixed(1);
    theOutput.value = answer.toFixed(1);

    if(answer.toFixed(1) <= 20) {
        massCondition.innerText = "UNDERWEIGHT RANGE💔";
    } else if(answer.toFixed(1) >= 20 && answer.toFixed(1) <= 25) {
        massCondition.innerText = "Healthy Weight Range☺️";
    } else if(answer.toFixed(1) >= 25 && answer.toFixed(1) <= 30) {
        massCondition.innerText = "Overweight Range😵";
    } else if(answer.toFixed(1) >= 30) {
        massCondition.innerText = "OBESITY RANGE🥺"
    }
}