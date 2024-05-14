let totalPoints = localStorage.getItem("totalPoints") ? parseInt(localStorage.getItem("totalPoints")) : 0;

function nextQuestion(questionNumber, totalQuestions) {
  let radios = document.querySelector(`input[name="q${questionNumber}"]:checked`);
  if (radios) {
    totalPoints += parseInt(radios.value);
    localStorage.setItem("totalPoints", totalPoints);
    if (questionNumber < totalQuestions) {
      window.location.href = `question${questionNumber + 1}.html`;
    } else {
      window.location.href = "results.html";
    }
  }
}
  
  document.addEventListener("DOMContentLoaded", function() {
    let resultText = "";
    if (totalPoints <= 8) {
      resultText = "Your Aesthetic is CUTE!";
    } else if (totalPoints <= 16) {
      resultText = "Your Aesthetic is NATURAL!";
    } else if (totalPoints <= 24) {
        resultText = "Your Aesthetic is URBAN!";
    } else {
      resultText = "Your Aesthetic is GOTH!";
    }
    document.getElementById("result").textContent = resultText;
  });