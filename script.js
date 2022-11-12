'use strict';

// ================================================
// ======== E L E M E N T S =======================
// ================================================

// Buttons
const resetBtn = document.querySelector('.btn_reset');
const addParticipanddBtn = document.querySelector('.btn--add_participate');
const addOptionBtn = document.querySelector('.btn--add_option');
const removeOptionBtn = document.querySelector('.btn--remove_option');
const removeParticipantBtn = document.querySelector('.btn--remove_participant');
const decideBtn = document.querySelector('.btn_decide');

// Messages
const betwenMessage = document.querySelector('.between');

// Decision
const labelDecision = document.querySelector('.label-decision');

// Text
const inputParticipant = document.querySelector('.option_participant');
const inputOption = document.querySelector('.option');
// ================================================
// ======== E L E M E N T S =======================
// ================================================

let participants = [
  'Luz',
  'Felipe',
  'Willbert',
  'Ricardo',
  'Ian',
  'Aldo',
  'Kevin',
];
let options = ['Lunes 21', 'Miercoles 23', 'Jueves 24'];

betwenMessage.textContent = `(Between ${participants.length} participants and ${options.length} options)`;

let randomOption = 0;
let randomParticipant = 0;
// ================================================
// ======== F U N  C  T  I O N S ==================
// ================================================

const random = function (participants, options) {
  randomParticipant = Math.trunc(Math.random() * participants.length) + 1;
  randomOption = Math.trunc(Math.random() * options.length) + 1;
  console.log(randomParticipant);
  console.log(randomOption);
  labelDecision.textContent = `${participants[randomParticipant - 1]} --> ${
    options[randomOption - 1]
  }`;
};

const removeOption = function (options, randomOption) {
  options.splice(randomOption, 1);
  betwenMessage.textContent = `(Between ${participants.length} participants and ${options.length} options)`;
  console.log(options);
};

const removeParticipant = function (participants, randomParticipant) {
  participants.splice(randomParticipant, 1);
  betwenMessage.textContent = `(Between ${participants.length} participants and ${options.length} options)`;
  console.log(participants);
};

const addParticipant = function (participants, newParticipant) {
  console.log(participants);
  participants.push(newParticipant);
  console.log(participants);
};

const addOption = function (options, newOption) {
  options.push(newOption);
};

// ================================================
// ======== E V E N T S H A N D L E R S ===========
// ================================================

decideBtn.addEventListener('click', function (e) {
  e.preventDefault();
  random(participants, options);
});

removeOptionBtn.addEventListener('click', function (e) {
  e.preventDefault();
  removeOption(options, randomOption - 1);
});

removeParticipantBtn.addEventListener('click', function (e) {
  e.preventDefault();
  removeParticipant(participants, randomParticipant - 1);
});

addOptionBtn.addEventListener('click', function (e) {
  e.preventDefault();
  addOption(options, inputOption.value);
});

addParticipanddBtn.addEventListener('click', function (e) {
  e.preventDefault();
  addParticipant(participants, inputParticipant.value);
});
