fetch('data.json')
.then(res => res.json())
.then(data => {

  document.getElementById('name').innerText = data.name;
  document.getElementById('title').innerText = data.title;
  document.getElementById('summary').innerText = data.summary;

  // Experience
  let expHTML = '';
  data.experience.forEach(e => {
    expHTML += `
      <div class="card">
        <h4>${e.role} - ${e.company}</h4>
        <p>${e.duration}</p>
        <ul>
          ${e.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    `;
  });
  document.getElementById('experience').innerHTML = expHTML;

  // Skills
  data.skills.forEach(s => {
    document.getElementById('skills').innerHTML += `<li>${s}</li>`;
  });

  // Certifications
  data.certifications.forEach(c => {
    document.getElementById('certifications').innerHTML += `<li>${c}</li>`;
  });

  // Awards
  data.awards.forEach(a => {
    document.getElementById('awards').innerHTML += `<li>${a}</li>`;
  });

});

// Download CV
function downloadCV() {
  window.open('cv.pdf', '_blank');
}