const tempoDisplay = document.querySelector(".tempo");
const tempoText = document.querySelector(".tempo-text");
const decreaseTempoBtn = document.querySelector(".decrease-tempo");
const increaseTempoBtn = document.querySelector(".increase-tempo");
const tempoSlider = document.querySelector(".slider");
const startStopBtn = document.querySelector(".start-stop");
const subtractBeats = document.querySelector(".subtract-beats");
const addBeats = document.querySelector(".add-beats");
const measureCount = document.querySelector(".measure-count");

let bpm = 140;
let beatsPerMeasure = 4;
let tempoTextString = "Medium";
decreaseTempoBtn.addEventListener("click", () => {
  if (bpm <= 20) {
    return;
  }
  bpm--;
  validateTempo();
  updateMetronome();
});

increaseTempoBtn.addEventListener("click", () => {
  if (bpm > 20) {
    return;
  }
  bpm++;
  validateTempo();
  updateMetronome();
});

tempoSlider.addEventListener("input", () => {
  bpm = tempoSlider.value;
  validateTempo();
  updateMetronome();
});

subtractBeats.addEventListener("click", () => {
  if (beatsPerMeasure <= 2) {
    return;
  }
  beatsPerMeasure--;
  measureCount.textContent = beatsPerMeasure;
});

addBeats.addEventListener("click", () => {
  if (beatsPerMeasure >= 12) {
    return;
  }
  beatsPerMeasure++;
  measureCount.textContent = beatsPerMeasure;
});

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.value = bpm;

  if(bpm <= 40) {tempoTextString = 'Super low'};
  if(bpm >= 40 && bpm < 80) {tempoTextString = 'Slow'};
  if(bpm >= 80 && bpm < 120) {tempoTextString = 'getting there'};
  if(bpm >= 120 && bpm < 180) {tempoTextString = 'Nice and Steady'};
  if(bpm >= 180 && bpm < 220) {tempoTextString = 'Rock and Roll'};
  if(bpm >= 220 && bpm < 240) {tempoTextString = 'Funky Stuff'};
  if(bpm >= 240 && bpm < 260) {tempoTextString = 'Relax Dude'};
  if(bpm >= 260 && bpm <= 280) {tempoTextString = 'Eddie Van Halen'};

  tempoText.textContent = tempoTextString;
}
function validateTempo() {
  if (bpm <= 20) {
    return;
  }
  if (bpm >= 280) {
    return;
  }
}
