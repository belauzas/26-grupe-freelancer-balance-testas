function summary (selector, data){
    const DOM = document.querySelector(selector);
    let HTML = '';

    const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis'];

    for (let i = 0; i < data.length; i++){
        const {income} = data[i];
        const month = months[i];

        const minIncome = toString(income);
        console.log(minIncome);
    }
    
}

export { summary }