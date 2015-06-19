window.onload = function () {

    // Launch Page Button Functionality
    document.getElementById('engage').addEventListener('click', function() {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('question1').style.display = 'block';
    });

    // Quiz Answer Functionality

    function answerQuestion(answerA, answerB, answerC, answerD) {
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        console.log(this);
    }

    question1 = new answerQuestion(0, 1, 0, 0);




   /* document.getElementById('answer-a').addEventListener('click', function() {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    });
    document.getElementById('answer-b').addEventListener('click', function() {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    });
    document.getElementById('answer-c').addEventListener('click', function() {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    });
    document.getElementById('answer-d').addEventListener('click', function() {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    }); */


    return false;
};
