const TANK_CAPACITY = 100;
const CONSUMPTION = 12;
const REFILL_AMOUNT = 50;

let waterLevel = 100;
let totalOperations = 0;

const water = document.getElementById("water");
const tankPercent = document.getElementById("tankPercent");
const tankLitres = document.getElementById("tankLitres");
const waterStat = document.getElementById("waterStat");
const percentStat = document.getElementById("percentStat");
const operationsStat = document.getElementById("operationsStat");
const alertBox = document.getElementById("alertBox");
const criticalBox = document.getElementById("criticalBox");
const statusBadge = document.getElementById("statusBadge");
const terminal = document.getElementById("terminal");
const fetchButton = document.getElementById("fetchButton");

function getPercentage() {
    return (waterLevel / TANK_CAPACITY) * 100;
}

function addLog(message) {
    const log = document.createElement("p");
    log.textContent = new Date().toLocaleTimeString() + " - " + message;
    terminal.appendChild(log);
    terminal.scrollTop = terminal.scrollHeight;
}

function updateDashboard(){
    let percentage = getPercentage();
    water.style.height = percentage + "%";
    tankPercent.textContent = percentage + "%";
    tankLitres.textContent = waterLevel + "L";
    waterStat.textContent = waterLevel + "L";
    percentStat.textContent
}