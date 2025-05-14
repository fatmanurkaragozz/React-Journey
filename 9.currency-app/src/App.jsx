import './App.css'; // Stil dosyası
import Converter from './components/Converter'; // Ana bileşen

function App() {
  return (
    <div className="app">
      <h1 className="title">Currency Converter</h1>
      <Converter />
    </div>
  );
}

export default App;
