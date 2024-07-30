let currentVerb = null;
let conjugationStage = 0;
let conjugations = [];

async function fetchRandomVerb() {
  try {
    console.log("Fetching a random verb from server");
    const response = await fetch('/random-verb');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Received response from server for /random-verb");
    currentVerb = await response.json();
    console.log("Fetched verb:", currentVerb);

    conjugations = [
      { pronoun: 'ich', present: currentVerb.conjugation.Present[0], simplePast: currentVerb.conjugation['Simple Past'][0], presentPerfect: currentVerb.conjugation['Present Perfect'][0] },
      { pronoun: 'du', present: currentVerb.conjugation.Present[1], simplePast: currentVerb.conjugation['Simple Past'][1], presentPerfect: currentVerb.conjugation['Present Perfect'][1] },
      { pronoun: 'er/sie/es', present: currentVerb.conjugation.Present[2], simplePast: currentVerb.conjugation['Simple Past'][2], presentPerfect: currentVerb.conjugation['Present Perfect'][2] },
      { pronoun: 'wir', present: currentVerb.conjugation.Present[3], simplePast: currentVerb.conjugation['Simple Past'][3], presentPerfect: currentVerb.conjugation['Present Perfect'][3] },
      { pronoun: 'ihr', present: currentVerb.conjugation.Present[4], simplePast: currentVerb.conjugation['Simple Past'][4], presentPerfect: currentVerb.conjugation['Present Perfect'][4] },
      { pronoun: 'sie/Sie', present: currentVerb.conjugation.Present[5], simplePast: currentVerb.conjugation['Simple Past'][5], presentPerfect: currentVerb.conjugation['Present Perfect'][5] }
    ];

    displayVerb(currentVerb);
    conjugationStage = 0;
    document.getElementById('next-conjugation').style.display = 'block';
    document.getElementById('next-verb').style.display = 'none';
  } catch (error) {
    console.error('Error fetching random verb:', error);
    document.getElementById('verb-display').innerHTML = `<p>Error fetching random verb: ${error.message}</p>`;
  }
}

function displayVerb(verb) {
  console.log("Displaying verb:", verb);
  document.getElementById('verb-display').innerHTML = `
    <p><strong>Verb:</strong> ${verb.verb}</p>
    <p><strong>Meaning:</strong> ${verb.meaning}</p>
    <p><strong>Example:</strong> ${verb.example}</p>
  `;
  document.getElementById('conjugation-display').innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Pronoun</th>
          <th>Present</th>
          <th>Simple Past</th>
          <th>Present Perfect</th>
        </tr>
      </thead>
      <tbody>
        ${conjugations.map(conjugation => `
          <tr>
            <td>${conjugation.pronoun}</td>
            <td id="${conjugation.pronoun}_present"></td>
            <td id="${conjugation.pronoun}_simplePast"></td>
            <td id="${conjugation.pronoun}_presentPerfect"></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  //showConjugation();
}

function showConjugation() {
  console.log("Showing conjugation stage:", conjugationStage);
  const stages = ['present', 'simplePast', 'presentPerfect'];
  if (conjugationStage < stages.length * conjugations.length) {
    const stage = stages[Math.floor(conjugationStage / conjugations.length)];
    const conjugation = conjugations[conjugationStage % conjugations.length];
    document.getElementById(`${conjugation.pronoun}_${stage}`).innerText = conjugation[stage];
    conjugationStage++;
  } else {
    document.getElementById('next-verb').style.display = 'block';
    document.getElementById('next-conjugation').style.display = 'none';
  }
}

document.getElementById('next-conjugation').addEventListener('click', showConjugation);
document.getElementById('next-verb').addEventListener('click', fetchRandomVerb);

window.onload = fetchRandomVerb;
