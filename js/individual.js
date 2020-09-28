let totalWin = document.querySelector('.total_win_input');
let finish = document.querySelector('.finish');
let btnClub = document.querySelector('.btn_club');

let totalMathesFaceToFace = document.querySelector('.total_matches_faceToFace_input');
let totalWinFaceToFace = document.querySelector('.total_win_faceToFace_input');

let totalWinHome = document.querySelector('.totalWin_home_input');

let factorBK = document.querySelector('.factor_bk_input');
let finishBK = document.querySelector('.finish_BK');
let betValue = document.querySelector('.bet_value');




function outCome() {
    let winPercentage = Math.round(((totalWin.value * 100 / 20) + (
        totalWinFaceToFace.value * 100 / totalMathesFaceToFace.value) + (
        totalWinHome.value * 100 / 5)) / 3);

    let winPercentageBK = Math.round((1 / factorBK.value) * 100);    

    let percentageBetValue = Math.round((winPercentageBK * factorBK.value) - 100);

        if (winPercentage >= 70) {
            finish.innerHTML =   `процент прохода ставки на матч составляет ${winPercentage} %. Проходимость довольно большая`; 
        }else {
            finish.innerHTML =   `процент прохода ставки на матч составляет ${winPercentage} %. Проходимость не большая, лучше не рисковать`;
        }

        if(winPercentageBK >= 50) {
            finishBK.innerHTML =   `Процент прохода ставки по мнению букмекерской конторы составляет ${winPercentageBK}%, проходимость довольно большая`
        } else {
            finishBK.innerHTML = `Процент прохода ставки по мнению букмекерской конторы составляет ${winPercentageBK}%, проходимость не большая, лучше не рисковать`
        }

        if (percentageBetValue >= 0) {
            betValue.innerHTML =    `Ценность ставки состаляет ${percentageBetValue}%, ценность довольно большая`
        } else {
            betValue.innerHTML = `Ценность ставки составляет ${percentageBetValue}%, ценность ставки небольшая, ставить нет смысла`
        }

        if (totalWin.value > 20) {
            finish.innerHTML = `Вы ввели некоректные данные`
        }
        if (totalWinHome.value > 5) {
            finish.innerHTML = `Вы ввели некоректные данные`
        }

        if (totalWinFaceToFace.value > totalMathesFaceToFace.value) {
            finish.innerHTML = `Вы ввели некоректные данные`
        }

   
}

btnClub.addEventListener('click', outCome);