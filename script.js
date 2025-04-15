let currentEnergy = 0;
const maxCapacity = 50;

function absorbSpell() {
  const spellLevel = parseInt(document.getElementById('spell-level').value);
  if (spellLevel < 1 || spellLevel > 9) {
    alert("Invalid spell level. Must be between 1 and 9.");
    return;
  }
  if (currentEnergy + spellLevel > maxCapacity) {
    alert("Cannot absorb spell. Rod is at or near maximum capacity.");
    return;
  }
  currentEnergy += spellLevel;
  updateEnergyDisplay();
  displayBreakdown(spellLevel);
}

function displayBreakdown(spellLevel) {
  const breakdownDiv = document.getElementById('breakdown');
  breakdownDiv.innerHTML = ''; // Clear previous breakdown
  for (let i = 1; i <= spellLevel; i++) {
    const slotDiv = document.createElement('div');
    slotDiv.className = 'slot';
    slotDiv.textContent = i;
    slotDiv.onclick = () => toggleSlot(slotDiv);
    breakdownDiv.appendChild(slotDiv);
  }
  updateSlotsDisplay();
}

function toggleSlot(slotDiv) {
  slotDiv.classList.toggle('checked');
}

function convertEnergy() {
  const slotLevel = parseInt(document.getElementById('slot-level').value);
  if (slotLevel < 1 || slotLevel > 5) {
    alert("Invalid spell slot level. Must be between 1 and 5.");
    return;
  }
  if (currentEnergy < slotLevel) {
    alert("Not enough energy to create this spell slot.");
    return;
  }
  currentEnergy -= slotLevel;
  updateEnergyDisplay();
  updateSlotsDisplay();
}

function updateEnergyDisplay() {
  document.getElementById('current-energy').textContent = currentEnergy;
}

function updateSlotsDisplay() {
  const slotsDiv = document.getElementById('slots');
  slotsDiv.innerHTML = ''; // Clear previous slots
  for (let i = 1; i <= maxCapacity; i++) {
    const slotIcon = document.createElement('div');
    slotIcon.className = 'slot-icon';
    slotIcon.textContent = i;
    if (i <= currentEnergy) {
      slotIcon.classList.add('used');
    }
    slotsDiv.appendChild(slotIcon);
  }
}
