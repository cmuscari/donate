import './App.css';
import Album from './components/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <main> 
      <Header></Header>
      <div>
        <Album></Album>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
