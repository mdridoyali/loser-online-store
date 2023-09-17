import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

const Header = ({ addToCart, totalPrice, selectName, restPrice }) => {
    

  const [money , setMoney] = useState(600);
  const [inputValue, setInputValue] = useState('');
//   const [taka, setTaka] = useState('')

  const btnSubmit = () => {
    const btnElement = document.getElementById("btn");
    btnElement.classList.add("invisible");
    if(inputValue === '106#'){
       setMoney(money + 500)

    }
    else{
         alert ('Incorrect Coupon ')
    }
   
  };

  const btnCart = () => {
    const btnCartElement = document.getElementById("btnCart");
    btnCartElement.classList.remove("hidden");
  };

  const buyNow = () => {
    const btnCartElement = document.getElementById("btnCart");
    btnCartElement.classList.add("hidden");
    alert ('Purchase Done')
  };

  return (
    <div>
      <header className="bg-slate-800 p-7 shadow-xl text-gray-100 shadow-white md:flex  items-center justify-between w-full  fixed top-0">
        <h1 className="text-gray-400 flex-1 text-4xl font-bold">
          LOSER ONLINE STORE
        </h1>
        <div className="flex-1 flex items-center  justify-end gap-10">
          <h2 className="text-3xl font-bold text-lime-500">Wallet : {money}.00$</h2>
          <button onClick={btnCart} className="text-5xl text-yellow-600">
            <FaCartPlus />
          </button>
          {/* cart */}
          <div
            id="btnCart"
            className="absolute top-24 right-2 w-96 h-96 p-5  text-black border-4 border-orange-500 bg-yellow-50 text-center space-y-2 text-2xl font-bold rounded-xl hidden "
          >
            <h2>Your Cart </h2>
            <ul>
              {selectName.map((item, idx) => (

                <li className="text-lg text-left" key={idx}>{idx+1}. {item.name}</li>
              ))}
            </ul>

           <div className="flex gap-5 bg-slate-200 p-5 rounded-lg text-lg justify-center items-baseline relative bottom-">
           <p>Total Price: {totalPrice}</p>
            <button
              onClick={buyNow}
              className="border border-slate-400 bg-blue-400 text-white text rounded-md px-4"
            >
              Buy Now
            </button>
           </div>
          </div>
        </div>
        <div className="bg-green-500 w-5 h-5 rounded-full relative top-[-15px] left-[-15px]"></div>
      </header>

      <div id="btn" className="flex justify-center pt-4 mt-28 items-center">
        <p className="text-xl mr-5">Get 500$ wallet use '106#'</p>
        <input
        onChange={(event) => setInputValue(event.target.value)}
          className="border border-slate-400 mr-5 rounded-md"
          type="text"
          name="name"
          placeholder="Type here"
        />
        <button
          onClick={btnSubmit}
          className="border border-slate-400 bg-blue-400 text-white text-xl rounded-md px-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Header;
