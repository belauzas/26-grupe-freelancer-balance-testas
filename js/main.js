import { footer } from './components/footer.js';
import { months } from './components/months.js';
import { yearBalance } from './components/yearBalance.js';
import { account } from './data.js';

yearBalance('.table-content', account, months);
footer('.table-footer', account);