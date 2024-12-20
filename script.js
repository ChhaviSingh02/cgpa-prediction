let selectedCollege = 0;

// Grading schemes for the colleges
//DTU
function calculateGradeCollege1(mark) {
  if (mark >= 91) return 10;
  if (mark >= 82) return 9;
  if (mark >= 73) return 8;
  if (mark >= 64) return 7;
  if (mark >= 55) return 6;
  if (mark >= 46) return 5;
  if(mark>=35) return 4;
  return 0;
}
//IGDTUW
function calculateGradeCollege2(mark) {
  if (mark >= 93) return 10;
  if (mark >= 85) return 9;
  if (mark >= 77) return 8;
  if (mark >= 66) return 7;
  if (mark >= 61) return 6;
  if (mark >= 53) return 5;
  if (mark >= 45) return 4;
  return 0;
}
//NSUT
function calculateGradeCollege3(mark) {
    if (mark >= 91) return 10;
    if (mark >= 81) return 9;
    if (mark >= 72) return 8;
    if (mark >= 63) return 7;
    if (mark >= 54) return 6;
    if (mark >= 45) return 5;
    if(mark>=35) return 4;
    return 0;
}

// Select the appropriate grading scheme
function calculateGrade(mark) {
  if (selectedCollege === 1) return calculateGradeCollege1(mark);
  if (selectedCollege === 2) return calculateGradeCollege2(mark);
  if (selectedCollege === 3) return calculateGradeCollege3(mark);
  return 0; // Default case (shouldn't happen)
}

function selectCollege(college) {
  selectedCollege = college;
  document.querySelector('.container').classList.add('hidden');
  document.querySelector('#form-container').classList.remove('hidden');
  document.querySelector('#college-name').textContent = college;
}

function generateFields() {
  const numSubjects = parseInt(document.getElementById('subjects').value);
  const marksContainer = document.getElementById('subject-marks');
  marksContainer.innerHTML = '';

  for (let i = 1; i <= numSubjects; i++) {
    marksContainer.innerHTML += `
      <div>
        <label for="subject-${i}">Marks for Subject ${i}:</label>
        <input type="number" id="subject-${i}" min="0" max="100" required>
      </div>`;
  }

  marksContainer.classList.remove('hidden');
  document.getElementById('calculate-btn').classList.remove('hidden');
}

function calculateCG() {
  const numSubjects = parseInt(document.getElementById('subjects').value);
  let totalGrades = 0;

  for (let i = 1; i <= numSubjects; i++) {
    const mark = parseInt(document.getElementById(`subject-${i}`).value);
    totalGrades += calculateGrade(mark);
  }

  const cgpa = (totalGrades / numSubjects).toFixed(2);
  document.getElementById('result').textContent = `Your CGPA is: ${cgpa}`;
  document.getElementById('result').classList.remove('hidden');
}
