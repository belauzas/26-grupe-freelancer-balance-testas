import { yearBalance } from "./components/footerContent.js";
import { summaryList } from "./components/summaryList.js";
import { tableContent } from "./components/tablecontent.js";
import { account} from "./data.js";
import { months } from "./months.js";

tableContent('.table-content', account);
account;
months;
yearBalance ('.table-footer', account);
summaryList ('.summary-list', account);