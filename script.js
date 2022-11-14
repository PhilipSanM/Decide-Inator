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
<<<<<<< HEAD
  'Ricardo',
  'Ian',
  'Aldo',
  'Kevin',
  'Kadena',
=======
  'aldo',
  'ian',
  'sergio'
>>>>>>> f2650ed23a265e7dc51ee9c5c77db47b70feb03a
];
let options = ['Lunes 21', 'Miercoles 23', 'Jueves 24'];

betwenMessage.textContent = `(Between ${participants.length} participants and ${options.length} options)`;

let randomOption = 0;
let randomParticipant = 0;

//Ranges 
let index = 0; //participants index
let repited = [0, 0, 0]; //n person per day 

// ================================================
// ======== F U N  C  T  I O N S ==================
// ================================================

function saveData(name, day){
  window.localStorage.setItem(name, day);
}

function clear_local_storage(){
  window.localStorage.clear();
}
    

const random = function (participants, options) {
  if(participants[index]!=undefined){
  index++;
  randomOption = Math.trunc(Math.random() * options.length) + 1; 
  

  switch(randomOption){
    case 1:
      repited[0]++;
      break;
    case 2:
      repited[1]++;
      break;
    case 3:
      repited[2]++;
      break;
  }
  console.log(repited);
  console.log(options);


  console.log(randomParticipant);
  console.log(randomOption);

  labelDecision.textContent = `${participants[index - 1]} --> ${options[randomOption - 1]}`
  saveData(participants[index-1], options[randomOption-1])
  for(var i=0; i<options.length; i++){
    if (repited[i]>1){
      let temp = options.splice(i,1);
      console.log(options);
    }
  }

  console.log(participants[index-1]);
  console.log("----------");
  }else{
    alert("There aren't participants left🙄")
  }

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
  betwenMessage.textContent = `(Between ${participants.length} participants and ${options.length} options)`;
};

const addOption = function (options, newOption) {
  options.push(newOption);
  betwenMessage.textContent = `(Between ${participants.length} participants and ${options.length} options)`;
};

// ================================================
// ======== E V E N T S H A N D L E R S ===========
// ================================================

resetBtn.addEventListener('click', function(e){
  e.preventDefault();
  clear_local_storage();
});

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
