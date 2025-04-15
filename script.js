const storedEnergyElement = document.getElementById('storedEnergy');
const spellSlotsElement = document.getElementById('spellSlots');
let storedEnergy = 0;

document.getElementById('absorbSpell').addEventListener('click', function() {
    const spellLevel = parseInt(document.getElementById('spellLevel').value);
    if (spellLevel >= 1 && spellLevel <= 5) {
        storedEnergy += spellLevel;
        storedEnergyElement.textContent = storedEnergy;
        updateSpellSlots();
    }
});

function updateSpellSlots() {
    spellSlotsElement.innerHTML = '';
    for (let level = 1; level <= 5; level++) {
        const energyCost = level;
        const numSlots = Math.floor(storedEnergy / energyCost);
        const slotContainer = document.createElement('div');
        slotContainer.className = 'spell-slot';
        const label = document.createElement('label');
        label.textContent = `Level ${level}:`;
        slotContainer.appendChild(label);
        for (let i = 0; i < numSlots; i++) {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.energy = energyCost;
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    storedEnergy -= energyCost;
                } else {
                    storedEnergy += energyCost;
                }
                storedEnergyElement.textContent = storedEnergy;
                updateSpellSlots();
            });
            slotContainer.appendChild(checkbox);
        }
        spellSlotsElement.appendChild(slotContainer);
    }
}

updateSpellSlots();
