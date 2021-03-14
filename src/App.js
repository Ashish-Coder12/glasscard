import './App.css';
import Video from "./video-1.mp4";
import { SiMastercard } from 'react-icons/si';

function App() {
  return (
    <div className="App">
      <video className='Video' src={Video} alt='Video here' autoPlay muted loop/>
      <div className='container'>
        <div className='Card'>
          <div className='top'>
            <h1>VISA</h1>
            <p><SiMastercard/></p>
          </div>
          <h2>4530 2894 8483 8402</h2>
          <div className='down'>
          <h1>Ashish Garg</h1>
          <p> 05/27 </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
