function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    let bmi = weight / (height ** 2);

    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
        document.getElementById("category").innerHTML = "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("category").innerHTML = "You are of normal weight.";
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById("category").innerHTML = "You are overweight.";
    } else {
        document.getElementById("category").innerHTML = "You are obese.";
    }
}
