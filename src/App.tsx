import './App.css';
import { Card } from './components/Card';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex h-screen justify-center items-center">
       <Card></Card>
       <Footer></Footer>
     </div>
  );
}

export default App;
