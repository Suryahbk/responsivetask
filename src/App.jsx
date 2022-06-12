import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
