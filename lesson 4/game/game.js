var money = 0;

for (var i=1; i<4; i++) {
    
    question = eval("questions.q" + i);
    
    var userAnswer = prompt(question.qu + question.a1 + question.a2 + question.a3 + question.a4 + '-1 - Выход из игры');
    
    if (isNaN(userAnswer) || !isFinite(userAnswer)) {
        alert('Вы ввели недопустимый символ');
    }
    
    else if (userAnswer < 1 || userAnswer > 4) {
        alert('Ответа с таким номером нет в списке');
    }

    else if (userAnswer == question.correct) {
        money+=100;
        alert('И это правильный ответ! На вашем счету: ' + money + ' рублей');
        
    }
    else {
        alert('Вы проиграли');
        break;
    }
}
