import "bootstrap/dist/css/bootstrap.min.css"
import AddExpense from "./components/AddExpense";
import Expenses from "./components/Expenses";
import Footer from "./components/Footer";
import Header from './components/Header';
import ExpenseContextProvider from "./contexts/ExpenseContexts";

function App() {
  return (
    <div className="App">
      <ExpenseContextProvider>
        <Header />
        <Expenses />
        <AddExpense />
        <Footer />
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
