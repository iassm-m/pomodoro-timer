const timeElement = document.querySelector('.time');  //declara uma constante que seleciona o elemento no html com a classe "time", onde o tempo restante será exibido
const controlButton = document.querySelector(".timer-control"); //botão para controlar o timer (iniciar/pausar)
const resetButton = document.querySelector(".reset-button");  //botão para resetar o timer
const workTimeElement = document.querySelector("#work-time-options");  //elemento para configurar o tempo de trabalho
const turnElement = document.querySelector(".turns");  //elemento para exibir o turno atual (trabalho ou descanso)
const totalTurnsElement = document.querySelector("#total-turns-options");  //elemento para exibir o número total de turnos
const timeModeElement = document.querySelector(".time-mode");  //elemento para exibir o modo atual (trabalho ou descanso)
const notificationSound = document.querySelector("#notification");  //elemento de áudio para tocar uma notificação quando o turno mudar

controlButton.addEventListener("click", toggleStartPause);  //adiciona um evento de clique ao botão de controle
resetButton.addEventListener("click", reset);  //adiciona um evento de clique ao botão de reset

let timeRemaining = 0; //variável para armazenar o tempo restante em segundos
let timer = null;    //variável para armazenar o ID do timer
let isRunning = false; //variável para indicar se o timer está em execução ou não
let isBreakTime = false; //variável para indicar se é hora de descanso ou não
let workTime = 0; //variável para armazenar o tempo de trabalho em segundos
let breakTime = 0; //variável para armazenar o tempo de descanso em segundos
let longBreakTime = 0; //variável para armazenar o tempo de descanso longo em segundos
let totalTurns = 0; //variável para armazenar o número total de turnos (trabalho + descanso)
let currentTurn = 1; //variável para armazenar o número do turno atual (inicia em 1)
let totalTime = 0; //variável para armazenar o tempo total gasto em trabalho e descanso (em segundos)

document.getElementById("toggle-config").addEventListener("click", () => {  //
    const config = document.getElementById("drop-content");  //seleciona o elemento com o ID "drop-content", que contém as configurações do timer
    config.style.display = config.style.display === "none" || !config.style.display ? "flex" : "none";  //alterna a exibição do elemento entre "flex" e "none" quando o botão é clicado
});

function toggleStartPause() {  //função para alternar entre iniciar e pausar o timer
    isRunning ? pause() : start();  //se o timer estiver em execução, chama a função de pausa; caso contrário, chama a função de início
}

function reset() {  //função para resetar o timer
    pause();  //pausa o timer para garantir que ele pare antes de resetar
    initTimerSettings();
    updateTimerDisplay();  //atualiza a exibição do timer para refletir o tempo resetado
    updateTurnDisplay();  //atualiza a exibição do turno para refletir o reset
    start();  //reinicia o timer após resetar as configurações
}

function initTimerSettings() {
    const workValue = parseInt(workTimeElement.value);  //obtém o valor do tempo de trabalho configurado pelo usuário e converte para um número inteiro
    const turnsValue = parseInt(totalTurnsElement.value);  //obtém o valor do número total de turnos configurado pelo usuário e converte para um número inteiro
    isRunning = false;  //reinicia o estado do timer para não em execução
    isBreakTime = false;
    workTime = workValue * 60;  //converte o tempo de trabalho de minutos para segundos
    breakTime = (workValue / 5) * 60;  //calcula o tempo de descanso como um quinto do tempo de trabalho e converte para segundos
    longBreakTime = (workValue - 10) * 60;  //calcula o tempo de descanso longo como o tempo de trabalho menos 10 minutos e converte para segundos
    totalTurns = turnsValue;  //armazena o número total de turnos configurado pelo usuário
    currentTurn = 1;  //reinicia o número do turno atual para 1
    totalTime = workTime;
    timeRemaining = totalTime;  //inicializa o tempo para o valor configurado pelo usuário (em minutos)
    timer = null;      //reinicia o timer
}

function updateTimerDisplay() {  //função para atualizar a exibição do timer
    const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0'); //calcula os minutos restantes
    const seconds = (timeRemaining % 60).toString().padStart(2, '0');  //calcula os segundos restantes e formata com zero à esquerda
    timeElement.innerText = `${minutes}:${seconds}`;   //atualiza o conteúdo do elemento de tempo com o formato MM:SS, que significa minutos e segundos
}

function updateTurnDisplay() {  //função para atualizar a exibição do turno atual
    const mode = isBreakTime ? (currentTurn < totalTurns ? "Descanso" : "Descanso Longo") : "Trabalho";  //determina o modo atual (trabalho ou descanso) com base na variável isBreakTime

    timeModeElement.innerText = mode;  //atualiza o conteúdo do elemento de modo de tempo para exibir se é trabalho ou descanso
    turnElement.innerText = `${currentTurn} / ${totalTurns}`;  //atualiza o conteúdo do elemento de turno para exibir o turno atual e o número total de turnos
}

function nextTurn() {
    if (isBreakTime) {
        // Se estava em descanso, volta para trabalho
        isBreakTime = false;
        totalTime = workTime;
        showNotification("Hora de Trabalhar!", "VocÊ está quase lá, é hora de focar no trabalho!");  //mostra uma notificação quando chegar ao trabalho
    } else {
        // Se estava em trabalho, vai para descanso
        isBreakTime = true;
        if (currentTurn < totalTurns) {
            totalTime = breakTime;
            showNotification("Hora de Descansar", "Faça uma pausa rápida!");
        } else {
            totalTime = longBreakTime;
            showNotification("Descanso Longo", "Ótimo trabalho, aproveite alguns minutos para descansar!");
        }
        currentTurn++;  //avança para o próximo turno
    }
    timeRemaining = totalTime;
    updateUI(); // atualiza imediatamente a interface
}

function showNotification(title, body) {  //função para mostrar uma notificação no navegador
    if (Notification.permission === "granted") {  //verifica se o usuário concedeu permissão para mostrar notificações
        const notification = new Notification(title, { body });  //cria uma nova notificação com o título e corpo fornecidos
        setTimeout(() => notification.close(), 4000);  //fecha a notificação após 5 segundos
    }
}

function playNotificationSound(duration = 3000) { // duração em ms
    notificationSound.play();
    setTimeout(() => {
        notificationSound.pause();
        notificationSound.currentTime = 0; // volta ao início
    }, duration);
}

function finishTurn() {  //função para finalizar o turno atual e iniciar o próximo 
    playNotificationSound(5000); // toca por 5 segundos
    nextTurn();  //chama a função para avançar para o próximo turno
    updateUI();  //atualiza a interface do usuário para refletir as mudanças no turno e no timer
}

function updateTimer() {  //função para atualizar o timer a cada segundo
    if (timeRemaining > 0) {  //verifica se ainda há tempo restante[
        timeRemaining--;  //decrementa o tempo restante em um segundo
        updateTimerDisplay();  //atualiza a exibição do timer
    } else {
        finishTurn();  //se o tempo restante chegar a zero, chama a função para avançar para o próximo turno
    }
}

function updateUI() {
    updateTimerDisplay();  //atualiza a exibição do timer
    updateTurnDisplay();  //atualiza a exibição do turno atual
}

function start() {  //função para iniciar o timer
   // pede permissão logo no início
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
    isRunning = true;
    controlButton.innerText = "Pausar";
    timer = setInterval(updateTimer, 1000); // tempo corre em 1 segundo
}

function pause() {  //função para pausar o timer
    isRunning = false;  //define o estado do timer como não em execução
    controlButton.innerText = "Iniciar";
    clearInterval(timer);  //limpa o intervalo do timer para parar a contagem
}

initTimerSettings();  //chama a função para inicializar as configurações do timer
start();  //chama a função para iniciar o timer

