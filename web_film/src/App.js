import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./styles/landingPage.css"


function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
