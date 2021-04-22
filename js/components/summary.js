function summary(selector, data, month) {
    const DOM = document.querySelector(selector);

      // Nezinau, kaip padaryt.. :(


    DOM.innerHTML += `<div class="item">
                        <div id="minIncome" class="value">Balandis</div>
                        <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>
                      </div>
                      <div class="item">
                        <div id="maxIncome" class="value">Rugsejis</div>
                        <div class="title">mėnuo, kai buvo daugiausiai uždirbta</div>
                      </div>
                      <div class="item">
                        <div id="minExpense" class="value">Lapkritis</div>
                        <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui</div>
                      </div>
                      <div class="item">
                        <div id="maxExpense" class="value">Rugsejis</div>
                        <div class="title">mėnuo, kai buvo didžiausios išlaidos</div>
                      </div>`
}

export {summary};