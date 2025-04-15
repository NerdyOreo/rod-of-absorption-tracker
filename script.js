const storedEnergyElement = document.getElementById('storedEnergy');
let storedEnergy = 0;

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const energyCost = parseInt(this.getAttribute('data-energy'));
        if (this.checked) {
            storedEnergy += energyCost;
        } else {
            storedEnergy -= energyCost;
        }
        storedEnergyElement.textContent = storedEnergy;
        updateSpellSlots();
    });
});

function updateSpellSlots() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        const energyCost = parseInt(checkbox.getAttribute('data-energy'));
        if (storedEnergy < energyCost) {
            checkbox.checked = true;
            checkbox.disabled = true;
        } else {
            checkbox.disabled = false;
        }
    });
}
