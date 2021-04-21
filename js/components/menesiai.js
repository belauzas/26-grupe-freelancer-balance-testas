function month(selector) {
    
    const DOM = document.querySelector(selector);

    const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis']

    let HTML = '';

    for (let i = 0; i < menesiai.length; i++) {
                HTML += `<div class="table-row">
                            <div class="cell"></div>
                                 <div class="cell">${menesiai[i]}</div>
                                 <div class="cell"></div>
                            <div class="cell">-</div>
                            <div class="cell"></div>
                        </div>`;
    }

    DOM.innerHTML += HTML;

}

export { month } 