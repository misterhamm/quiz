$(document).ready(function(){

    //Launch Page Button Functionality
    $('.engage').on('click', function() {
        $('.intro').addClass('hide').hide();
        $('.question1').removeClass('hide').show();
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
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
            $('.question' + count).addClass('hide').hide();
            if (score == 5) {
                $('.data').removeClass('hide').show();
            }
            else if (score == 4) {
                $('.kirk').removeClass('hide').show();
            }
            else if (score == 3) {
                $('.morn').removeClass('hide').show();
            }
            else if (score == 2) {
                $('.klingon').removeClass('hide').show();
            }
            else if (score == 1) {
                $('.dog').removeClass('hide').show();
            }
            else {
                $('.wars').removeClass('hide').show();
            }
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
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
                  $('.question' + count).addClass('hide').hide();
            if (score == 5) {
                $('.data').removeClass('hide').show();
            }
            else if (score == 4) {
                $('.kirk').removeClass('hide').show();
            }
            else if (score == 3) {
                $('.morn').removeClass('hide').show();
            }
            else if (score == 2) {
                $('.klingon').removeClass('hide').show();
            }
            else if (score == 1) {
                $('.dog').removeClass('hide').show();
            }
            else {
                $('.wars').removeClass('hide').show();
            }
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
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
                  $('.question' + count).addClass('hide').hide();
            if (score == 5) {
                $('.data').removeClass('hide').show();
            }
            else if (score == 4) {
                $('.kirk').removeClass('hide').show();
            }
            else if (score == 3) {
                $('.morn').removeClass('hide').show();
            }
            else if (score == 2) {
                $('.klingon').removeClass('hide').show();
            }
            else if (score == 1) {
                $('.dog').removeClass('hide').show();
            }
            else {
                $('.wars').removeClass('hide').show();
            }
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
            $('.question' + count).removeClass('hide').show();
        }
        else if (count == 5){
                  $('.question' + count).addClass('hide').hide();
            if (score == 5) {
                $('.data').removeClass('hide').show();
            }
            else if (score == 4) {
                $('.kirk').removeClass('hide').show();
            }
            else if (score == 3) {
                $('.morn').removeClass('hide').show();
            }
            else if (score == 2) {
                $('.klingon').removeClass('hide').show();
            }
            else if (score == 1) {
                $('.dog').removeClass('hide').show();
            }
            else {
                $('.wars').removeClass('hide').show();
            }
        }
    });

$('.play-again').on('click', function() {
    $('.final').addClass('hide').hide();
    $('.intro').removeClass('hide').show();
    score = 0
});



});
