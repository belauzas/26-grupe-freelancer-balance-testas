function suma(selector, account) {
    
        const DOM = document.querySelector(selector);

        let incomeSum = 0;
        let expenseSum = 0;

        for (let i = 0; i < account.length; i++) {
            let {income} = account[i];
            incomeSum += income;
            let {expense} = account[i];
            expenseSum += expense;

        }
    
        let HTML = '';
    
                    HTML += `   <div class="cell"></div>
                                <div class="cell"></div>
                                <div class="cell">${incomeSum} Eur</div>
                                <div class="cell">${expenseSum} Eur</div>
                                <div class="cell">${incomeSum - expenseSum} Eur</div>
                              </div>`

                
                    DOM.innerHTML += HTML;
        }
    
        
export { suma }