import { account } from './data.js';
import { months } from './data.js';
import { yearsBalance } from './components/yearsBalance.js';
import { footerSums } from './components/footerSums.js';


yearsBalance('.table-content', account, months);
footerSums ('.table-footer', account);





