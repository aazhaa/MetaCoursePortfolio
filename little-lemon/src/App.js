import './App.css';

import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './stylesheet.css';


function App() {
  return (
    <div className="grid-container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}


export default App;
