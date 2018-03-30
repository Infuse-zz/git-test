var game = {
    money: 0
}



var userAnswer = +prompt(questions.a00 + questions.a1 + questions.a2 + questions.a3 + questions.a4  + '-1 - Выход из игры');


if (isNaN(userAnswer) || !isFinite(userAnswer)) {
        alert('Вы ввели недопустимый символ');
    }
    
else if (userAnswer < 1 || userAnswer > 4) {
        alert('Ответа с таким номером нет в списке');
    }

switch(userAnswer) {
        
    case 1:
        game.money = 100;
        alert('Правильный ответ! Вы выйграли ' + game.money + ' рублей.');
        
        game.userAnswer = +prompt(questions.b00 + questions.b1 + questions.b2 + questions.b3 + questions.b4  + '-1 - Выход из игры');

        case 3: 
            game.money+= 1000;
            alert('Правильный ответ! Вы выйграли ' + game.money + ' рублей.');

                game.userAnswer = +prompt(questions.c00 + questions.c1 + questions.c2 + questions.c3 + questions.c4  + '-1 - Выход из игры');

                case 2:
                    game.money+= 10000;
                    alert('Правильный ответ! Сегодня вы выйграли ' + game.money + ' рублей!!! Поздравляем!');
        

    case -1: 
        break;
}

