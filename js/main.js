import { months } from './months.js';
import { yearBalance } from './yearBalance.js';
import { yearTotal } from './yearTotal.js';
//import { yearSum } from './yearSum.js';
import { account } from './data.js';

console.log(months); 
yearBalance('.table-content', account, months); 
yearTotal('.table-footer', account);
//yearSum('.summary-list', account, months);