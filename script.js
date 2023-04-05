// Function to calculate BMI and store the data in localStorage
function calculateBMI() {
    // Get input values
    let name = document.getElementById("name").value;
    let height = document.getElementById("height").value / 100; // Convert height from cm to m
    let weight = document.getElementById("weight").value;
    let age = document.getElementById("age").value;
  
    // Calculate BMI
    let bmi = weight / (height * height);
  
    // Round BMI to 1 decimal place
    bmi = bmi.toFixed(1);
  
    // Determine BMI category based on BMI value
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    // Display BMI result
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `${name}, your BMI is ${bmi} (${category}).`;
  
    // Display exercise and diet recommendations based on BMI category
    let recommendationsDiv = document.getElementById("recommendations");
    if (category === "Underweight") {
      recommendationsDiv.innerHTML = `To gain weight, try increasing your calorie intake and doing strength training exercises.`;
    } else if (category === "Normal weight") {
      recommendationsDiv.innerHTML = `To maintain your weight, continue with your current exercise and diet routine.`;
    } else if (category === "Overweight") {
      recommendationsDiv.innerHTML = `To lose weight, try reducing your calorie intake and doing cardio exercises.`;
    } else {
      recommendationsDiv.innerHTML = `To improve your health, try reducing your calorie intake and doing a combination of cardio and strength training exercises.`;
    }
  
    // Get user data from localStorage or create a new data object if no data exists
    let userData = JSON.parse(localStorage.getItem(name)) || { bmis: [], dates: [] };
  
    // Add new BMI data and date to the user's data object
    userData.bmis.push(bmi);
    userData.dates.push(new Date());
  
    // Store updated user data in localStorage
    localStorage.setItem(name, JSON.stringify(userData));
  }
  
  // Function to compare and display changes in BMI over time for a user
  function compareBMI() {
    // Get user data from localStorage
    let name = document.getElementById("name").value;
    let userData = JSON.parse(localStorage.getItem(name));
  
    // Check if user data exists in localStorage
    if (!userData || userData.bmis.length < 2) {
      alert(`No BMI data found for user ${name}. Please calculate BMI at least twice to compare changes.`);
      return;
    }
  
    // Calculate and display changes in BMI over time
    let bmis = userData.bmis;
    let dates = userData.dates;
    let trend = "";
    let diff = bmis[0] - bmis[1];
    if (diff > 0) {
      trend = "down";
    } else if (diff < 0) {
      trend = "up";
      diff = Math.abs(diff);
    } else {
      trend = "stable";
    }
    let changeDiv = document.getElementById("change");
    changeDiv.innerHTML = `Your BMI has gone ${trend} by ${diff.toFixed(1)} units since your last measurement on ${dates[1].toLocaleDateString()}.`;
  }
  