import React, { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorage";

export const AppContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useLocalStorageState("cartItems", []);

  const addCart = (parcel, count) => {
    console.log(parcel);
    const exist = cart.find((item) => item.id === parcel.id);
    if (!exist) {
      setCart([...cart, { ...parcel, qty: count ? count : parcel.qty }]);
      alert(`${parcel.name} added to cart`);
    } else {
      alert("Item Already In Cart");
    }
  };

  const onIncrease = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === parcel.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    }
  };

  const onDecrease = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (exist) {
      if (exist.qty === 1) return;
      setCart(
        cart.map((item) =>
          item.id === parcel.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const onRemove = (parcel) => {
    if (window.confirm("Are you sure you want to remove this item")) {
      // console.log(parcel);
      // console.log(cart);
      setCart(cart.filter((item) => item.id !== parcel.id));
    }
  };

  const onClear = () => {
    if (window.confirm("Are you sure you want to clear the cart")) {
      setCart([]);
    }
  };

  const itemPrice = cart && cart.reduce((a, c) => a + c.qty * c.price, 0);
  const delieveryPrice = "3000";
  // eslint-disable-next-line
  const totalPrice =
    parseInt(itemPrice) + (itemPrice && parseInt(delieveryPrice));

  return (
    <AppContext.Provider
      value={{
        cart,
        onRemove,
        addCart,
        onIncrease,
        onDecrease,
        onClear,
        itemPrice,
        delieveryPrice,
        totalPrice,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
