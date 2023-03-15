import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import TradingView from './component/tradingView';
import TradingHistory from './component/tradingHistroy';
import BrandSearch from './component/brandSearch';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BrandSearch />
      <TradingView />
      <TradingHistory />
      <Footer />
    </div>
  );
}

export default App;
