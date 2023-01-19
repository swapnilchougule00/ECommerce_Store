import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./Loading";

function Feed() {
  const [loding, setLoding] = useState(true);

  const [products, setPoroduts] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();

  const fetchapi = async () => {
    setLoding(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoding(false);
      setPoroduts(data);
    } catch (error) {
      setLoding(false);
    }
  };

  const addToCart = (object) => {
    dispatch({ type: "addToCart", payload: object });
    dispatch({ type: "calculate" });
  };

  useEffect(() => {
    fetchapi();
  }, []);

  if (loding) {
    return <Loading />;
  }
  return (
    <div id="home" className="home flex  flex-wrap justify-center p-8">
      {products.map((value) => {
        const { id, title, price, image } = value;
        return (
          <div
            key={id}
            className="w-[200px] font-mono shadow-xl bg-white h-[220px] md:w-[300px] md:space-y-3 md:h-[320px] mt-6 flex flex-col
      items-center rounded-lg mx-4"
          >
            <img
              src={image}
              alt="product"
              className=" mt-3 border h-[50%] w-[80%] rounded-lg object-contain"
            />
            <div className="text-center mt-2">
              <h1 className="font-semibold tracking-wider md:text-xl">
                {title.slice(0, 11)}
              </h1>
              <p className="font-bold md:text-xl">price - ${price}</p>
            </div>
            <div className=" md:space-x-8 font-bold text-sm w-full flex justify-center  pt-2">
              <button
                onClick={() =>
                  addToCart({ title, id, image, price, quantity: 1 })
                }
                className="border rounded-2xl  border-black/50 px-4 md:p-2 bg-black text-white hover:bg-white hover:text-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feed;
