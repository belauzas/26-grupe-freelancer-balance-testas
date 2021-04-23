import { monthsData } from './data/monthsData.js';
import { months } from './components/months.js'
import { balance } from './components/balance.js';
import { summary } from './components/summary.js';
import { account } from './data.js';



months('.table-content', account, monthsData);
balance('.table-footer', account, monthsData);
summary('.summary-list', account, monthsData);
months;