document.getElementById("bmiform").addEventListener('submit', function(e) {
   e.preventDefault(); // Prevent form submission

   // Get values
   const gender = document.getElementById("gender").value;
   const age = parseInt(document.getElementById("age").value);
   const ft = parseInt(document.getElementById("height-ft").value);
   const inch = parseInt(document.getElementById("height-in").value);
   const weight = parseFloat(document.getElementById("weight").value);

   // Ensure all inputs are valid
   if (gender && age && ft && inch && weight) {
       // Convert height to meters
       let heightInMeters = ((ft * 12) + inch) * 0.0254;

       // Calculate BMI
       const bmi = weight / (heightInMeters * heightInMeters);

       // Determine BMI category
       let category = "";
       if (bmi < 18.5) {
           category = "Underweight";
       } else if (bmi >= 18.5 && bmi < 24.9) {
           category = "Normal weight";
       } else if (bmi >= 25 && bmi < 29.9) {
           category = "Overweight";
       } else {
           category = "Obese";
       }

       // Display result
       let resultMessage = "Your BMI: " + bmi.toFixed(2) + "<br>";
       resultMessage += "Category: " + category;

       document.getElementById("result").innerHTML = resultMessage;
   } else {
       alert("Please enter all the required fields correctly.");
   }
});
