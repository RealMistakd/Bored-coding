//for definitions on click
function thereDef() {
  alert(
    "adverb: 1. in, at, or to that place or position. 2. used in attracting someone's attention or calling attention to someone or something."
  );
}

function humanDef() {
  alert(
    "noun: a human being, especially a person as distinguished from an animal or (in science fiction) an alien."
  );
}

function helloDef() {
  alert("exclaimation: used as a greeting or to begin a phone conversation.");
}

function welcomeDef() {
  alert("exclaimation: used to greet someone in a glad or friendly way.");
}

function toDef() {
  alert(
    "preposition: expressing motion in the direction of (a particular location)."
  );
}

function myDef() {
  alert("possesive pronoun: belonging to or associated with the speaker.");
}

function playgroundDef() {
  alert(
    "noun: a place where a particular group of people choose to enjoy themselves."
  );
}

function changeContent() {
  document.getElementById("nothing").innerText = "something?";
}

setTimeout(function transparent() {
  let v = document.getElementById("id");
  v.style.color = "#3a3042";
}, 1520);
