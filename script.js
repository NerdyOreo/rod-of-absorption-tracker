const storedEnergyElement = document.getElementById('storedEnergy');
const spellSlotsElement = document.getElementById('spellSlots');
const characterLevelElement = document.getElementById('characterLevel');
let storedEnergy = 0;

document.getElementById('absorbSpell').addEventListener('click', function() {
    const spellLevel = parseInt(document.getElementById('spellLevel').value);
    if (spellLevel >= 1 && spellLevel <= 9) {
        storedEnergy += spellLevel;
        storedEnergyElement.textContent = storedEnergy;
        updateSpellSlots();
    }
});

characterLevelElement.addEventListener('change', updateSpellSlots);

function updateSpellSlots() {
    spellSlotsElement.innerHTML = '';
    const characterLevel = parseInt(characterLevelElement.value);
    const maxSpellLevel = getMaxSpellLevel(characterLevel);
    for (let level = 1; level <= maxSpellLevel; level++) {
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

function getMaxSpellLevel(characterLevel) {
    if (characterLevel >= 17) return 5;
    if (characterLevel >= 15) return 5;
    if (characterLevel >= 13) return 5;
    if (characterLevel >= 11) return 5;
    if (characterLevel >= 9) return 5;
    if (characterLevel >= 7) return 4;
    if (characterLevel >= 5) return 3;
    if (characterLevel >= 3) return 2;
    return 1;
}

updateSpellSlots();

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});
