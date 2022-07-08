import './App.css';
import Login from './pages/Login';




import Album from './components/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <main> 
      <Header></Header>
      <div>
        <Login/>
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
