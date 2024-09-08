function calculateTaxCategory() {
    const income = document.getElementById('income').value;
    const result = document.getElementById('result');

    if (income === '') {
        result.textContent = "Please enter your income.";
        result.style.color = 'red';
        return;
    }

    let category = '';

    if (income <= 250000) {
        category = "No Tax";
    } else if (income > 250000 && income <= 500000) {
        category = "10% Tax Bracket";
    } else if (income > 500000 && income <= 1000000) {
        category = "20% Tax Bracket";
    } else if (income > 1000000) {
        category = "30% Tax Bracket";
    }

    result.textContent = `You fall under the ${category}.`;
    result.style.color = 'green';
}
