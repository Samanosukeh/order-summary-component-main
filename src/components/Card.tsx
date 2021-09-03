import cover from '../assets/images/illustration-hero.svg';
import icon from "../assets/images/icon-music.svg";

export function Card() {
    return (
      <div className="flex flex-col justify-center items-center text-center rounded-3xl bg-white shadow-xl">
        <img src={cover} alt="cover" className="rounded-t-3xl object-fill" />
        
        <div className="py-6">

            <h1 className="text-2xl font-bold ">Order Summary</h1> 

            <div className="text-grey-dark px-1 my-4">
                <p>You can now listen to millions of songs, </p>
                <p> audiobooks, and podcasts on any device</p>
                <p> anywhere you like!</p>
            </div>

            <div className="flex flex-wrap p-4 rounded-2xl bg-grey-pale my-3">
            <div className=" w-1/5">
                <img src={icon} alt="icon-music" className="bg-neutral-desaturated-blue rounded-full" />
            </div>
            <div className="w-3/5 text-left px-2 ">
                <h2 className="font-bold ">Annual Plan</h2>
                <p className="text-grey-dark ">$59.99/year</p>
            </div>
            <div className="w-1/5 text-sm text-primary-bright-blue m-auto">
                <button>Change</button>
            </div>
            </div>

            <button className="
                bg-primary-bright-blue 
                hover:bg-neutral-desaturated-blue 
                my-4 rounded-lg py-2 px-24 font-bold 
                text-sm text-primary-pale-blue
                shadow-xl">
            Proceed to Payment
            </button>
            <div/>
            
            <button className="text-neutral-desaturated-blue text-sm hover:text-black text-center ">
            Cancel Order
            </button>
        </div>
      </div>
    );
}