import { useEffect, useState } from "react";
import Header from "../Header/Header";

const Home = () => {
  const [allCard, setAllCard] = useState([]);
  const [addToCart, setAddToCart] = useState([]);
  const [totalPrice, setTotalPrice] =useState(0);
  const [selectName , setSelectName] = useState([]);
  const [restPrice, setRestPrice] =useState(0)

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCard(data));
  }, []);

  const handleClickBtn = (item) => {
    const isExit = selectName.find(
      (items) => items.name === item.name
    );
    if (isExit) {
      return alert ("Already added this item");
      
    }
    setRestPrice(totalPrice)

    setAddToCart([...addToCart, item]);
    setTotalPrice((totalPrice + item.price))
    setSelectName([...selectName, item])

  };

  return (
    
    <div className="">
          <Header 
       addToCart={addToCart}
       totalPrice={totalPrice.toFixed(2)}
       selectName={selectName}
      restPrice={restPrice}
      ></Header>

      {/* Card container */}
      <div className="container mx-auto   grid md:grid-cols-2 lg:grid-cols-4">
        {allCard.map((item) => (
          <div
            key={item.id}
            className="bg-slate-200 rounded-lg p-5 m-5 text-center  border border-slate-300 space-y-2"
          >
            <div className="h-52 w-full">
              <img className="mx-auto h-52 w-60" src={item.image} />
            </div>
            <h2 className="font-semibold text-2xl ">{item.name}</h2>
            <p className="text-xl">Price: $ {item.price}</p>
            <button
              onClick={() => handleClickBtn(item)}
              className="bg-black py-2 px-6 text-white text-lg font-bold mb-10 rounded-lg"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
