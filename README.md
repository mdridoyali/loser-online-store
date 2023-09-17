
[
      {
        "id": "1",
        "name": "K32 Headphone wireless",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlokG66JBSCD0e3vq5ZQizY-gBjbGuIcb_0HejOiYYSHcNfzWkCIJy1Aa5w8Hqogx8muk&usqp=CAU",
        "price": 19.99,
        "description": "This is the description for Product 1. It is a great product for your needs."
      },
      {
        "id": "2",
        "name": "Asus Rog Gaming Mouse",
        "image": "https://www.kindpng.com/picc/m/722-7229860_hama-gaming-mouse-urage-reaper-hd-png-download.png",
        "price": 29.99,
        "description": "Product 2 is a high-quality item with many features. Get it now!"
      },
      {
        "id": "3",
        "name": "Golden Soccer Ball",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW5FU8Uy-LvmPZCm2GzcE159UxHDXWVQ51Q&usqp=CAU",
        "price": 17,
        "description": "Introducing Product 3. Affordable and reliable."
      },
      {
        "id": "4",
        "name": "Toy RC Yellow Car",
        "image": "https://www.kindpng.com/picc/m/4-45556_toy-car-png-car-toy-transparent-background-png.png",
        "price": 30.99,
        "description": "Introducing Product 3. Affordable and reliable."
      },
      {
        "id": "5",
        "name": "Comfortable Pink t-shirt",
        "image": "https://www.kindpng.com/picc/m/58-586650_4-20-tee-shirts-active-shirt-hd-png.png",
        "price": 10,
        "description": "Introducing Product 3. Affordable and reliable."
      },
      {
        "id": "6",
        "name": "Canon EOS Z1",
        "image": "https://www.pngmart.com/files/6/DSLR-Camera-Transparent-Background.png",
        "price": 339,
        "description": "Introducing Product 3. Affordable and reliable."
      },
      {
        "id": "7",
        "name": "Winter Casual Jacket",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRD7th6w1UECyE8jsTHKMkt9w_-y9CBL2--MFcY1vgdNvGJGF93fTzxlTqf0uUFzz0_g&usqp=CAU",
        "price": 35.99,
        "description": "Introducing Product 3. Affordable and reliable."
      },
      {
        "id": "8",
        "name": "Asus ROG 165Hz Monitor",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKh7ykFqi_CWygcSiN72yt2JBF9J2lmPLUbWQKnUaw8dRGZImK2R8sgiMiMlIHSZFeK1M&usqp=CAU",
        "price": 229,
        "description": "Introducing Product 3. Affordable and reliable."
      }
      ,
      {
        "id": "9",
        "name": "Red Skull cap",
        "image": "https://www.kindpng.com/picc/m/20-206647_under-armour-stretch-fit-mesh-panel-custom-baseball.png",
        "price": 6,
        "description": "Introducing Product 3. Affordable and reliable."
      }
      ,
      {
        "id": "10",
        "name": "Walton Fruit juicer",
        "image": "https://www.kindpng.com/picc/m/61-613814_kitchen-appliances-blender-hd-png-download.png",
        "price": 45,
        "description": "Introducing Product 3. Affordable and reliable."
      }
      ,
      {
        "id": "11",
        "name": "High speed table fan",
        "image": "https://www.kindpng.com/picc/m/329-3290127_table-fan-png-table-fan-png-hd-transparent.png",
        "price": 25,
        "description": "Introducing Product 3. Affordable and reliable."
      }
      ,
      {
        "id": "12",
        "name": "Lays 10 pieces",
        "image": "https://www.kindpng.com/picc/m/326-3264918_lays-gaymak-otly-cipsy-80gr-png-download-lays.png",
        "price": 2,
        "description": "Introducing Product 3. Affordable and reliable."
      }
  
    ]

    import { FaCartPlus } from "react-icons/fa";

const Header = ({ addToCart }) => {
  console.log(addToCart);

  const btnClick = () => {
    document.getElementById("btn").classList.add("hidden");
  };

  const btnCart = () => {
    document.getElementById("btnCart").classList.remove("hidden");
  };
  const buyNow = () => {
    document.getElementById("btnCart").classList.add("hidden");
  };

  return (
    <div>
      <header className="bg-slate-800 p-7 shadow-xl text-gray-100 shadow-white md:flex  items-center justify-between  sticky top-0">
        <h1 className="text-gray-400 flex-1 text-4xl font-bold">
          LOSER ONLINE STORE
        </h1>
        <div className="flex-1 flex items-center justify-end gap-10">
          <h2 className="text-3xl font-bold text-lime-500">Wallet : 500.00$</h2>
          <button onClick={btnCart} className="text-5xl text-yellow-600">
            <FaCartPlus />
          </button>
          {/* cart */}
          <div
            id="btnCart"
            className="absolute top-24 right-2 w-52 border text-black border-slate-200 bg-slate-200 h-52 text-center space-y-2 text-2xl font-bold hidden"
          >
            <h2>Your Cart</h2>
            <ul>
              {addToCart.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>

            <p>Total Price: </p>
            <button
              onClick={buyNow}
              className="border border-slate-400 bg-blue-400 text-white text-xl rounded-md px-4"
            >
              Buy Now
            </button>
          </div>
        </div>
      </header>
      <div id="btn" className=" flex justify-center pt-4 items-center ">
        <p className="text-xl mr-5">Get 2000$ wallet use '106#'</p>
        <input
          className="border border-slate-400 mr-5 rounded-md"
          type="text"
          name="name"
          placeholder="Type here"
        />
        <button
          onClick={btnClick}
          className="border border-slate-400 bg-blue-400 text-white text-xl rounded-md px-4"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Header;
