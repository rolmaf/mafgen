let circle = document.querySelector(".story__circle");
let score_text = document.querySelector(".story__score");
let score = 0;
if (localStorage.getItem("score") != null) {
    score = localStorage.getItem("score");
}
let blockClick = false;
let secretKey = "AF90J";

window.onload = function() {
    
    $(".story-mode").hide();
    $(".shop-mode").hide();
    allListeners(); 
}


function allListeners() {
    document.querySelector(".menu__on-story-mode").addEventListener("click" , function() { // Включаем story-mode из меню
        onStoryMode();
    });
    
    document.querySelector(".menu-navbar").addEventListener("click" , function() {
        onMenu();
    });
    
    document.querySelector(".story-mode-navbar").addEventListener("click" , function() { // Включаем story-mode из меню
        onStoryMode();
    });
    
    document.querySelector(".menu__on-shop-mode").addEventListener("click" , function() { // Включаем story-mode из меню
        onShopMode();
    });
    
    document.querySelector(".shop-mode-navbar").addEventListener("click" , function() { // Включаем story-mode из меню
        onShopMode();
    });
    
    document.querySelector(".shop__btn").addEventListener("click" , function() {
        if (document.querySelector(".shop__check-password").value == secretKey) {
            alert("Ваш ключ верен, но этот режим еще не сделан)");
        }
    
        else {
            alert("Ключ не верен, для продолжения требуется пройти сюжетный режим)");
        }
    });
       
    
    circle.addEventListener("mouseup" , function() {
        afterClickButton();
    });
}



function onStoryMode() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".story-mode-navbar").classList.add("active");
    $(".menu").hide();
    $(".shop-mode").hide();
    $(".story-mode").show();
}

function onMenu() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".menu-navbar").classList.add("active");
    $(".story-mode").hide();
    $(".shop-mode").hide();
    $(".menu").show();
}

function onShopMode() {
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".shop-mode-navbar").classList.add("active");
    $(".shop-mode").show();
    $(".story-mode").hide();
    $(".menu").hide();
}


function afterClickButton() {  
    if (blockClick == false) {
        score++;
        score_text.innerHTML = score;
        localStorage.setItem("score" , score.toString());
        checkScore();
    } 
};

function checkScore() {
    if (score === 10) {
        score_text.innerHTML = "Хватит кликать!";
    }

    else if (score === 50) {
        score_text.innerHTML = "Эй, я же попросила";
    }
    
    else if (score === 55) {
        score_text.innerHTML = "Хватит, это бесит меня";
    }
    
    else if (score == 60) {
        score_text.innerHTML = "Если ты сейчас не остановишься я удалю все твои данные с телефона";
    }

    else if (score == 65) {
        score_text.innerHTML = "Я серьезно";
    }
    
    else if (score == 70) {
        score_text.innerHTML = "3";
    }
    
    else if (score == 71) {
        score_text.innerHTML = "2";
    }
    
    else if (score == 72) {
        score_text.innerHTML = "1";
    }
    
    else if (score == 73) {
        alert("Warning! Сайт rolmaf.github.io/clicker сбросил ваш телефон к заводским настройкам");
    }
    
    else if (score == 100) {
        score_text.innerHTML = "-_-";
    }
    
    else if (score == 101) {
        score_text.innerHTML = "Ты серьезно?";
    }
    
    else if (score == 102) {
        score_text.innerHTML = "Я тебя не напугала?";
    }

    else if (score == 170) {
        alert("Unexpected Error: packet name ty dibil there. Обновите страницу");
    }
    
    else if (score >= 170 && score <= 180) {
        score_text.innerHTML = "Unexpected Error: packet name ty dibil there";
    }
    
    else if (score == 230) {
        score_text.innerHTML = "Русcким языком же попросила";
    }
    else if (score == 231) {
        score_text.innerHTML = "Попробуем по другому";
    }
    
    else if (score == 232) {
        score_text.innerHTML = "Stop clicking";
    }
    
    else if (score == 233) {
        score_text.innerHTML = "停止點擊";
    }
    
    else if (score == 234) {
        score_text.innerHTML = "Przestań klikać";
    }

    else if (score == 250) {
        score_text.innerHTML = "Так это пора завершать";
    }

    else if (score == 300) {
        score_text.innerHTML = "Я вычислила твой IPV4 адресс";
    }

    else if (score == 301) {
        score_text.innerHTML = "Он равен 31.197.45.90";
    }

    else if (score == 350) {
        score_text.innerHTML = "Ну раз ты до сих пор тут....";
    }

    else if (score == 351) {
        score_text.innerHTML = "Я начала проводить DOS атаку на твой инет";
    }

    else if (score == 352) {
        score_text.innerHTML = "Вот его IPV4 адресс кстати:";
    }

    else if (score == 353) {
        score_text.innerHTML = "192.168.0.1";
    }

    else if (score == 400) {
        score_text.innerHTML = "Ну и что мне с тобой делать......";
    }

    else if (score == 401) {
        score_text.innerHTML = "Ты так бесишь.....";
    }

    else if (score == 500) {
        score_text.innerHTML = "Я все обдумала и решила....";
    }

    else if (score == 501) {
        score_text.innerHTML = "Теперь тут будет мой брат - квадрат";
    }

    else if (score == 505) {
        circle.classList.remove("story__circle");
        circle.classList.add("story__square");
    } 

    else if (score == 520) {
        score_text.innerHTML = "Привет!";
    }
    
    else if (score == 521) {
        score_text.innerHTML = "Автору надоело придумывать сюжет";
    }

    else if (score == 522) {
        score_text.innerHTML = "Поэтому просто докликай до 5000)";
    }

    else if (score == 5000) {
        score_text.innerHTML = secretKey;
        alert("Поздравляю! Ты прошел сюжетку!");
        blockClick = true;
    }
}
