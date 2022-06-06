import React, { useState, useEffect } from "react";
import "./orderOnline.css";
import PaneerDum from "../../../../images/paneerDum.webp";
import ProductData from "../../../../data/data";
import Coocking from "../../../../images/cooking.png";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../../../redux/actions/actions";

const ProductsInCart = ({ item, setCartItems, CartItems }) => {
  const dispatch=useDispatch()
  const [qty, setqty] = useState(1);
  const handleDelete = (id) => {
    const newList = CartItems.filter((item) => item.id !== id);
    setCartItems(newList);
    dispatch(setCartItem(newList));
  };
  return (
    <div className="cartItems">
      <div className="cartProductImg"></div>
      <p>{item.name}</p>
      <div className="quantity">
        <button onClick={() => setqty(qty - 1)}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <input type="text" value={qty} readOnly={true} />
        <button onClick={() => setqty(qty + 1)}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <i
        className="fa-solid fa-trash-can"
        onClick={() => handleDelete(item.id)}
      ></i>
    </div>
  );
};

const CartItemContainer = ({ CartItems, setCartItems }) => {
  return (
    <div className="cart">
      {CartItems.length === 0 ? (
        <div>
          <h1>Cart Empty</h1>
          <img src={Coocking} alt="" />
          <span>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </span>
        </div>
      ) : (
        <div>
          <h1> Total {CartItems.length}</h1>
          <div>
            {CartItems.map((item, idx) => (
              <ProductsInCart
                key={idx}
                item={item}
                setCartItems={setCartItems}
                CartItems={CartItems}
              />
            ))}
          </div>
          <button className="checkout">Checkout</button>
        </div>
      )}
    </div>
  );
};

const listData = [
  "Recommended",
  "Everyday BiryANY Combos(Save upto 18%)",
  "Single Serves",
  "Hyderabadi Biryani",
  "Lucknowi Biryani",
  "Kolkata Biryani",
  "Korma & Curries",
  "Kebabs",
  "Platter",
  "Weekdays Value Combos Starting @199",
  "Celebration Combos (Save Upto 31%)",
  "Desserts & Beverages",
  "Breads & Extras",
];

const OrderOnline = () => {
  const dispatch = useDispatch();
  const [active, setactive] = useState(0);
  const [selectedCategory, setselectedCategory] = useState(listData[active]);
  const [CartItems, setCartItems] = useState([]);
  const [Products, setProducts] = useState(ProductData);
  const setactiveCategory = (idx, data) => {
    setactive(idx);
    setselectedCategory(data);
  };
  const setToCart = (data) => {
    if (CartItems.length !== 0) {
      const found = CartItems.some((item) => item.id === data.id);
      if (found) return;
    }

    let cartItem = [];
    cartItem.push(...CartItems, { ...data });
    setCartItems(cartItem);
    dispatch(setCartItem(cartItem));
  };

  useEffect(() => {
    const newList = ProductData.filter(
      (product) => product.category === selectedCategory
    );
    setProducts(newList);
  }, [setProducts, selectedCategory]);

  return (
    <div className="orderOnline">
      <ul>
        {listData.map((data, idx) => (
          <li
            key={idx}
            onClick={() => setactiveCategory(idx, data)}
            className={idx === active ? "activeCategory" : ""}
          >
            {data}
          </li>
        ))}
      </ul>
      <div className="selectedCategory">
        <h4>{selectedCategory}</h4>
        {Products.map((data, idx) => {
          return (
            <div className="product" key={idx}>
              <div className="productHeader">
                <div>
                  <div className="bestSeller">
                    <i className="fa-solid fa-circle-stop"></i>{" "}
                    <i className="fa-solid fa-star"></i>
                    <span>Bestseller</span>{" "}
                  </div>
                  <div className="productName">
                    <span>{data.name}</span>
                  </div>
                  <div className="productPrice">
                    <span>Rs {data.price}</span>
                    <span>{data.off}</span>
                    <span>USE TRYNEW</span>
                  </div>
                </div>
                <div className="productImage">
                  <img src={PaneerDum} alt="" />
                  <div className="addToCart" onClick={() => setToCart(data)}>
                    <p>add to cart</p>
                  </div>
                </div>
              </div>
              <div className="productDescription">
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <CartItemContainer CartItems={CartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default OrderOnline;
