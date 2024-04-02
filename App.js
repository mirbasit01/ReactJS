// import logo from './logo.svg';
// import './App.css';
// import Navber from './components/Navber';
// import ProductList from   './components/ProductList'
// // import React,{useState} from 'react';
// import { useState } from 'react';

// function App() {
//   const productList = [
//     {
//       price: 9999,
//       name: "IPhone 10s Max",
//       quantity: 0,
//     },
//     {
//       price: 999,
//       name: "Redmi Note 10 Max",
//       quantity: 0,
//     }
//   ]

//   let [productList , setProductList] = useState(products)

//   const incrementQuantity = (index) => {
//     let newProductList = [...productList]
//     newProductList[index].quantity++
//     setProductList(newProductList);
//   }

//   return (
//    <>
//    <Navber/>

//    <main className='container mt-5' >
//    <ProductList  productList={productList} incrementQuantity={incrementQuantity} />

//    </main>
//    {/* <Footer/> */}
//    </>
//   );
// }

// export default App;
import logo from "./logo.svg";
import "./App.css";
import Navber from "./components/Navber";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import React, { useState } from "react";
 import AddItem from "./components/additem";
function App() {
  const initialProductList = [
    {
      price: 9999,
      name: "IPhone 10s Max",
      quantity: 0,
    },
    {
      price: 999,
      name: "Redmi Note 10 Max",
      quantity: 0,
    },
  ];

  const [products, setProducts] = useState(initialProductList);
  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    newProducts[index].quantity++;
    newTotalAmount += newProducts[index].price;
    setTotalAmount(newTotalAmount);
    setProducts(newProducts);
  };
  const decrementQuantity = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;

    if(newProducts[index].quantity-- > 0) {
      newProducts[index].quantity--;
      newTotalAmount -= newProducts[index].price;
    }
    // : (newProducts[index].quantity = 0);
    setTotalAmount(newTotalAmount);
    setProducts(newProducts);
  };

  const resetQuantity = () =>{
    let newProducts = [...products];
    newProducts.map((products)=>{
      products.quantity = 0
    })
    setProducts(newProducts);
    setTotalAmount(0);

  }
    
  const removeItem = (index) => {
    let newProducts = [...products];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProducts[index].quantity * newProducts[index].price;
    newProducts.splice(index,1)
    // console.log(newProducts);
    setProducts(newProducts);



  };

  const additem = (name,price) => {
    let newProducts = [...products];
    newProducts.push({
      price:price,
      name:name,
      quantity:0
    });


  }

  return (
    <>
      <Navber />
      <main className="container mt-5">
        <AddItem additem={additem}/>
         <ProductList
          productList={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
