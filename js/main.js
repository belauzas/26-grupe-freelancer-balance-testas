import { months } from './months.js';
import { yearBalance } from './yearBalance.js';
import { yearTotal } from './yearTotal.js';
import { account } from './data.js';

console.log(months); 
yearBalance('.table-content', account, months); 
yearTotal('.table-footer', account);