$(document).ready(function(){

    //Launch Page Button Functionality
    $('#engage').click(function() {
        $('#intro').css('display', 'none');
        $('#question1').css('display', 'block');
    });


    //Quiz Answer Functionality
    var finalAnswers = [];
    var correctAnswers = ['b', 'c', 'd', 'a', 'a'];
    var count = 0;
    var total = 5;

    //Question 1
    $('.answer-a1').on('click', function() {
        finalAnswers.push('a');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question1').css('display', 'none');
        $('#question2').css('display', 'block');
    });

    $('.answer-b1').on('click', function() {
        finalAnswers.push('b');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question1').css('display', 'none');
        $('#question2').css('display', 'block');
    });

    $('.answer-c1').on('click', function() {
        finalAnswers.push('c');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question1').css('display', 'none');
        $('#question2').css('display', 'block');
    });

    $('.answer-d1').on('click', function() {
        finalAnswers.push('d');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question1').css('display', 'none');
        $('#question2').css('display', 'block');
    });

    //Question 2
    $('.answer-a2').on('click', function() {
        finalAnswers.push('a');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question2').css('display', 'none');
        $('#question3').css('display', 'block');
    });

    $('.answer-b2').on('click', function() {
        finalAnswers.push('b');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question2').css('display', 'none');
        $('#question3').css('display', 'block');
    });

    $('.answer-c2').on('click', function() {
        finalAnswers.push('c');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question2').css('display', 'none');
        $('#question3').css('display', 'block');
    });

    $('.answer-d2').on('click', function() {
        finalAnswers.push('d');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question2').css('display', 'none');
        $('#question3').css('display', 'block');
    });

    //Question 3
    $('.answer-a3').on('click', function() {
        finalAnswers.push('a');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question3').css('display', 'none');
        $('#question4').css('display', 'block');
    });

    $('.answer-b3').on('click', function() {
        finalAnswers.push('b');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question3').css('display', 'none');
        $('#question4').css('display', 'block');
    });

    $('.answer-c3').on('click', function() {
        finalAnswers.push('c');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question3').css('display', 'none');
        $('#question4').css('display', 'block');
    });

    $('.answer-d3').on('click', function() {
        finalAnswers.push('d');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question3').css('display', 'none');
        $('#question4').css('display', 'block');
    });

    //Question 4
    $('.answer-a4').on('click', function() {
        finalAnswers.push('a');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question4').css('display', 'none');
        $('#question5').css('display', 'block');
    });

    $('.answer-b4').on('click', function() {
        finalAnswers.push('b');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question4').css('display', 'none');
        $('#question5').css('display', 'block');
    });

    $('.answer-c4').on('click', function() {
        finalAnswers.push('c');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question4').css('display', 'none');
        $('#question5').css('display', 'block');
    });

    $('.answer-d4').on('click', function() {
        finalAnswers.push('d');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question4').css('display', 'none');
        $('#question5').css('display', 'block');
    });

    //Question 5
    $('.answer-a5').on('click', function() {
        finalAnswers.push('a');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question5').css('display', 'none');
        $('.data').css('display', 'block');
    });

    $('.answer-b5').on('click', function() {
        finalAnswers.push('b');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question5').css('display', 'none');
        $('.data').css('display', 'block');
    });

    $('.answer-c5').on('click', function() {
        finalAnswers.push('c');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question5').css('display', 'none');
        $('.data').css('display', 'block');
    });

    $('.answer-d5').on('click', function() {
        finalAnswers.push('d');
        count++;
        console.log(count);
        console.log(finalAnswers);
        $('#question5').css('display', 'none');
        $('.data').css('display', 'block');
    });

});



//   /*grade = function(){
//     if(finalAnswers[0] != correctAnswers[0]){
//       total--
//     }
//     if(finalAnswers[1] != correctAnswers[1]){
//       total--
//     }
//     if(finalAnswers[2] != correctAnswers[2]){
//       total--
//     }
//     if(finalAnswers[3] != correctAnswers[3]){
//       total--
//     }
//     return alert('You Got ' + total + ' Correct Answers');
// }*/
//
//
////   document.getElementById('grade').onclick=grade
//
//
//
//
//    return false;
//};
//
