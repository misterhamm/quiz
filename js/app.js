$(document).ready(function(){

    //Launch Page Button Functionality
    $('.engage').on('click', function() {
        $('.intro').addClass('hide').hide();
        $('.question1').removeClass('hide').show();
        $('#current-question').removeClass('hide').show();
    });


    // Answer Key
    var answers = [
        'placeholder',
        {
            a: 'Voyager',
            b: 'The Next Generation',
            c: 'Enterprise',
            d: 'Deep Space Nine'
        },
        {
            a: 'Grand Nagus',
            b: 'High Priest/Priestess',
            c: 'Kai',
            d: 'Kuvah\'magh'
        },
        {
            a: 'Nagilum',
            d: 'Degra',
            c: 'Species 8472',
            d: 'Armus'
        },
        {
            a: 'Vidiians',
            b: 'Cardassians',
            c: 'Xindi',
            d: 'Calamarain'
        }]

    // Current Question Count
    var count = 1;

    $('#current-question').html(count + '/5');

    // Dynamically fill answers
    /*var answera = $('answer-a' + count).html(answers[count].a),
        answerb = $('answer-b' + count).html(answers[count].b),
        answerc = $('answer-c' + count).html(answers[count].c),
        answerd = $('answer-d' + count).html(answers[count].d);*/

    // Button Functionality
    var answerChecker;
    var score = 0;

        // Answer A Click
    $('.answers').on('click', '.a', function() {
        answerChecker = $('.answer-a' + count).data('type');
        console.log('answerChecker: ', answerChecker);
        if (answerChecker == 1) {
            score++
        }
        console.log(score);
        if (count < 5){
            $('.question' + count).addClass('hide').hide();
            count++
            $('#current-question').html(count + '/5');
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
            $('.question' + count).addClass('hide').hide();
            $('.data').removeClass('hide').show();
            // Fix below notification to show score
            $('#current-question').html('Your final score was: ' + count + '/5');
        }
    });

    // Answer B Click
    $('.answers').on('click', '.b', function() {
        answerChecker = $('.answer-b' + count).data('type');
        console.log('answerChecker: ', answerChecker);
        if (answerChecker == 1) {
            score++
        }
        console.log(score);
        if (count < 5){
            $('.question' + count).addClass('hide').hide();
            count++
            $('#current-question').html(count + '/5');
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
            $('.question' + count).addClass('hide').hide();
            $('.data').removeClass('hide').show();
            // Fix below notification to show score
            $('#current-question').html('Your final score was: ' + count + '/5');
        }
    });

    //Answer C Click
    $('.answers').on('click', '.c', function() {
        answerChecker = $('.answer-c' + count).data('type');
        console.log('answerChecker: ', answerChecker);
        if (answerChecker == 1) {
            score++
        }
        console.log(score);
        if (count < 5){
            $('.question' + count).addClass('hide').hide();
            count++
            $('#current-question').html(count + '/5');
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
            $('.question' + count).addClass('hide').hide();
            $('.data').removeClass('hide').show();
            // Fix below notification to show score
            $('#current-question').html('Your final score was: ' + count + '/5');
        }
    });

    //Answer D Click
    $('.answers').on('click', '.d', function() {
        answerChecker = $('.answer-d' + count).data('type');
        console.log('answerChecker: ', answerChecker);
        if (answerChecker == 1) {
            score++
        }
        console.log(score);
        if (count < 5){
            $('.question' + count).addClass('hide').hide();
            count++
            $('#current-question').html(count + '/5');
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
            $('.question' + count).addClass('hide').hide();
            $('.data').removeClass('hide').show();
            // Fix below notification to show score
            $('#current-question').html('Your final score was: ' + count + '/5');
        }
    });



    //Question 1
   /* $('.answer-a1').on('click', function() {
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


*/
});
