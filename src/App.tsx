import cover from './assets/images/illustration-hero.svg';
import icon from "./assets/images/icon-music.svg";
import './App.css';

function App() {
  return (
    <div className="flex h-screen justify-center items-center">

      {/* Card principal */}
      <div className="flex flex-col justify-center items-center text-center rounded-3xl bg-white">
        <img src={cover} alt="cover" className="rounded-t-3xl object-fill" />
        
        <div className="bg-white py-6">

          <h1 className="text-2xl font-bold bg-white">Order Summary</h1> 

          <p className="text-grey-dark px-1 my-4 bg-white">
            You can now listen to millions of songs, <br/>
            audiobooks, and podcasts on any device<br/>
            anywhere you like!
          </p>

          <div className="flex flex-wrap p-4 rounded-2xl bg-grey-pale my-3">
            <div className="bg-grey-pale w-1/5">
              <img src={icon} alt="icon-music" className="bg-neutral-desaturated-blue rounded-full" />
            </div>
            <div className="w-3/5 text-left px-2 bg-grey-pale">
              <h2 className="font-bold bg-grey-pale">Annual Plan</h2>
              <p className="text-grey-dark bg-grey-pale">$59.99/year</p>
            </div>
            <div className="w-1/5 text-sm text-primary-bright-blue m-auto bg-grey-pale">
              <a className="bg-grey-pale" href="#" rel="noopener noreferrer">Change</a>
            </div>
          </div>

          <button className="bg-primary-bright-blue hover:bg-neutral-desaturated-blue my-4 rounded-lg py-2 px-24 font-bold text-sm text-primary-pale-blue">
            Proceed to Payment
          </button>
          <div/>
          
          <button className="text-neutral-desaturated-blue text-sm hover:text-black text-center bg-white">
            Cancel Order
          </button>
        </div>
        
      </div>
      

      <footer className="absolute justify-center text-center bottom-0">
        <p className="attribution text-xs">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Samanosukeh">Samanosuke</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
