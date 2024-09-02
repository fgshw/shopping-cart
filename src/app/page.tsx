"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";
import styles from "./page.module.css";  // นำเข้าไฟล์ CSS

export default function Home() {
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleIncremental = (price: number) => {
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  const handleDecremental = (price: number) => {
    setTotalPrice((prevTotal) => (prevTotal > 0 ? prevTotal - price : 0));
  };

  const myItems = [
    { itemname: "iPhone 15 Pro", price: 41900, imageUrl: "/shopping-cart/iPhone 15 Pro.jpg" },
    { itemname: "iPhone 15", price: 32900, imageUrl: "/shopping-cart/iPhone 15.jpg" },
    { itemname: "iPad Pro", price: 39900, imageUrl: "/shopping-cart/iPad Pro.png" },
    { itemname: "iPad Air", price: 23900, imageUrl: "/shopping-cart/iPad Air.png" },
    { itemname: "iPad", price: 13900, imageUrl: "/shopping-cart/iPad.png" },
    { itemname: "iPad mini", price: 19900, imageUrl: "/shopping-cart/iPad mini.png" },
    { itemname: "MacBook Air", price: 34900, imageUrl: "/shopping-cart/MacBook Air.png" },
    { itemname: "MacBook Pro", price: 59900, imageUrl: "/shopping-cart/MacBook Pro.png" },
    { itemname: "iMac", price: 49900, imageUrl: "/shopping-cart/iMac.png" },
    { itemname: "Mac mini", price: 20900, imageUrl: "/shopping-cart/Mac mini.png" },
    { itemname: "Mac Studio", price: 74900, imageUrl: "/shopping-cart/Mac Studio.png" },
    // ...เพิ่มรายการสินค้าอื่น ๆ พร้อมกับ imageUrl
  ];

  return (
    <div className={styles.shoppingCart}>
      <h1 className={styles.heading}>Shopping Cart</h1>
      {myItems &&
        myItems.map((item) => (
          <ItemCart
            key={item.itemname}
            itemname={item.itemname}
            itemPrice={item.price}
            imageUrl={item.imageUrl}
            handleIncremental={handleIncremental}
            handleDecremental={handleDecremental}
          />
        ))}
      <Stack direction="row" spacing={2} className={styles.totalPrice}>
        <Typography variant="h4">Total Price of Your Order</Typography>
        <Typography variant="h4">{totalPrice.toLocaleString()} Thb</Typography>
      </Stack>
    </div>
  );
}
