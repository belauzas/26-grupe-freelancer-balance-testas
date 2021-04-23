function pavadinimai(selector, account) {

    let min = account[0].income;
    let max = account[0].income;

    for (let i = 0; i < account.length; i++) {
        let v = account[i].income;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    }

    const DOM = document.querySelector(selector);

    let HTML = '';

    HTML += `<div class="item">
    <div id="minIncome" class="value">Mėnesio pavadinimas</div>
    <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>
</div>
<div class="item">
    <div id="maxIncome" class="value">Mėnesio pavadinimas</div>
    <div class="title">mėnuo, kai buvo daugiausiai uždirbta</div>
</div>
<div class="item">
    <div id="minExpense" class="value">Mėnesio pavadinimas</div>
    <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui</div>
</div>
<div class="item">
    <div id="maxExpense" class="value">Mėnesio pavadinimas</div>
    <div class="title">mėnuo, kai buvo didžiausios išlaidos</div>`
    

        DOM.innerHTML += HTML;

    }


export { pavadinimai }