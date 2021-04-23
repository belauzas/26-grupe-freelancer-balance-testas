import { month } from './components/menesiai.js'; 
import { account } from './data.js';
import { suma } from './components/task-5.js';
import { pavadinimai } from './components/pavadinimai.js';


month('.table-content', account);
suma('.table-footer', account);
pavadinimai('.summary-list', account);