$(document).ready(function(){

    //Launch Page Button Functionality
    $('.engage').on('click', function() {
        $('.intro').addClass('hide').hide();
        $('.question1').removeClass('hide').show();
        $('#current-question').removeClass('hide').show();
    });


    //Quiz Answer Functionality
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
            d: 'Kuvah''magh'
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

    var count = 1;

    $('#current-question').html(count + '/5')

    var answera = $('answer-a' + count).html(answers[count].a),
        answerb = $('answer-b' + count).html(answers[count].b),
        answerc = $('answer-c' + count).html(answers[count].c),
        answerd = $('answer-d' + count).html(answers[count].d);

    var correctAnswerCount;

    $('.answers').on('click', function() {
        this = Self;
        var type = $(Self).data('type');
        correctAnswerCount = $('.answers [data-type='1']').length;
        console.log('correctAnswerCount: ', correctAnswerCount);
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
