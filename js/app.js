window.onload = function () {

    // Launch Page Button Functionality
    document.getElementById('engage').addEventListener('click', function() {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('question1').style.display = 'block';
    });

    // Quiz Answer Functionality
    document.getElementById('answer-a').addEventListener('click', function() {
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
    });


    return false;
};
