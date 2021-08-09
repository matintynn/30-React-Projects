import Header from "./components/Header";
import FruitList from "./components/FruitList"
import FruitContextProvider from "./contexts/FruitContext";
import FruitForm from "./components/FruitForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="calculator-body">
          <Header />
          <FruitContextProvider>
            <FruitList />
            <FruitForm />
          </FruitContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
