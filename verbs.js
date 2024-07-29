let currentVerb = null;
let conjugationStage = 0;
let conjugations = [];

async function fetchRandomVerb() {
  try {
    const response = await fetch('/random-verb');
    currentVerb = await response.json();
    conjugations = [
      { pronoun: 'ich', present: currentVerb.present_ich, simplePast: currentVerb.simplePast_ich, presentPerfect: currentVerb.presentPerfect_ich },
      { pronoun: 'du', present: currentVerb.present_du, simplePast: currentVerb.simplePast_du, presentPerfect: currentVerb.presentPerfect_du },
      { pronoun: 'er/sie/es', present: currentVerb.present_er_sie_es, simplePast: currentVerb.simplePast_er_sie_es, presentPerfect: currentVerb.presentPerfect_er_sie_es },
      { pronoun: 'wir', present: currentVerb.present_wir, simplePast: currentVerb.simplePast_wir, presentPerfect: currentVerb.presentPerfect_wir },
      { pronoun: 'ihr', present: currentVerb.present_ihr, simplePast: currentVerb.simplePast_ihr, presentPerfect: currentVerb.presentPerfect_ihr },
      { pronoun: 'sie/Sie', present: currentVerb.present_sie_Sie, simplePast: currentVerb.simplePast_sie_Sie, presentPerfect: currentVerb.presentPerfect_sie_Sie }
    ];
    displayVerb(currentVerb);
    conjugationStage = 0;
    document.getElementById('next-verb').style.display = 'none';
  } catch (error) {
    console.error('Error fetching random verb:', error);
    document.getElementById('verb-display').innerHTML = `<p>Error fetching random verb.</p>`;
  }
}

function displayVerb(verb) {
  document.getElementById('verb-display').innerHTML = `
    <p><strong>Verb:</strong> ${verb.verb}</p>
    <p><strong>Meaning:</strong> ${verb.meaning}</p>
    <p><strong>Example:</strong> ${verb.example}</p>
  `;
  document.getElementById('conjugation-display').innerHTML = '';
  showConjugation();
}

function showConjugation() {
  const stages = ['Present', 'Simple Past', 'Present Perfect'];
  const subjects = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  if (conjugationStage < stages.length * subjects.length) {
    const stage = stages[Math.floor(conjugationStage / subjects.length)];
    const subject = subjects[conjugationStage % subjects.length];
    const conjugation = conjugations[conjugationStage % subjects.length][stage.toLowerCase()];
    document.getElementById('conjugation-display').innerHTML += `
      <p><strong>${subject}:</strong> ${conjugation} (${stage})</p>
    `;
    conjugationStage++;
  } else {
    document.getElementById('next-verb').style.display = 'block';
  }
}

document.getElementById('next-conjugation').addEventListener('click', showConjugation);
document.getElementById('next-verb').addEventListener('click', fetchRandomVerb);

window.onload = fetchRandomVerb;
