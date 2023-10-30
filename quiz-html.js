let score = 0; // Make score 0 at first
        
        function returnScore() {
            // Add score if the value pick by user match with value inserted below
            if (document.querySelector('input[name="question0"]:checked').value === "A") {
                score++;
            }
            if (document.querySelector('input[name="question1"]:checked').value === "B") {
                score++;
            }
            if (document.querySelector('input[name="question2"]:checked').value === "A") {
                score++;
            }
            if (document.querySelector('input[name="question3"]:checked').value === "A") {
                score++;
            }
            if (document.querySelector('input[name="question4"]:checked').value === "B") {
                score++;
            }

            // Show the score
            if (score === 5) {
                alert("You got a perfect score of 5!");
            } else {
                alert("Your score is: " + score);
            }
        }

        document.getElementById('viewResults').addEventListener('click', returnScore);