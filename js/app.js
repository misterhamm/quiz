window.onload = function () {

    // Launch Page Button Functionality
    document.getElementById('engage').addEventListener('click', function() {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('question1').style.display = 'block';
    });

    // Quiz Answer Functionality
    var finalAnswers = [];
    var correctAnswers = ['b', 'c'];
    var total = 2;
    var count = 0;

    function answerQuestion(answerA, answerB, answerC, answerD) {
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        console.log(this);
    }

    var question1 = function() {
        self = this;
        self.answerA = function(){
            finalAnswers.push('a');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
            return finalAnswers;
        }
        self.answerB = function(){
            finalAnswers.push('b');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
            return finalAnswers;
        }
        self.answerC = function(){
            finalAnswers.push('c');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
            return finalAnswers;
        }
        self.answerD = function(){
            finalAnswers.push('d');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
            return finalAnswers;
        }
        return self;
    }();

    var question2 = function() {
        self = this;
        self.answerA = function(){
            finalAnswers.push('a');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question2').style.display = 'none';
            document.getElementById('question3').style.display = 'block';
            return finalAnswers;
        }
        self.answerB = function(){
            finalAnswers.push('b');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question2').style.display = 'none';
            document.getElementById('question3').style.display = 'block';
            return finalAnswers;
        }
        self.answerC = function(){
            finalAnswers.push('c');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question2').style.display = 'none';
            document.getElementById('question3').style.display = 'block';
            return finalAnswers;
        }
        self.answerD = function(){
            finalAnswers.push('d');
            console.log(finalAnswers)
            count++
            console.log(count)
            document.getElementById('question2').style.display = 'none';
            document.getElementById('question3').style.display = 'block';
            return finalAnswers;
        }
        return self;
    }();

//console.log(question1.);

    var q = question1;

    document.getElementById('answer-a').onclick=q.answerA
   document.getElementById('answer-b').onclick=q.answerB
   document.getElementById('answer-c').onclick=q.answerC
   document.getElementById('answer-d').onclick=q.answerD






//   document.getElementsByClass('')[0].onclick=answerA

   grade = function(){
     if(finalAnswers[0] != correctAnswers[0]){
       total--
     }
     if(finalAnswers[1] != correctAnswers[1]){
       total--
     }
     if(finalAnswers[2] != correctAnswers[2]){
       total--
     }
     if(finalAnswers[3] != correctAnswers[3]){
       total--
     }
     return alert('You Got ' + total + ' Correct Answers');
 }


//   document.getElementById('grade').onclick=grade




    return false;
};
