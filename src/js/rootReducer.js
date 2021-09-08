
import { combineReducers} from 'redux';
import expenseReducer from './components/ExpenseEntries/expensesReducer';
import incomeReducer from  './components/IncomeEntries/incomeReducer';

const rootReducer = combineReducers({
    expense: expenseReducer,
    income: incomeReducer
}); 


export default rootReducer;