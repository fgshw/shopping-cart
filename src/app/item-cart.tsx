"use client";
import { IconButton, Stack, Typography, Grid2 as Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
  itemname,
  itemPrice,
  imageUrl,
  handleIncremental,
  handleDecremental,
}: {
  itemname: string;
  itemPrice: number;
  imageUrl: string; // เพิ่มพารามิเตอร์ imageUrl
  handleIncremental: (price: number) => void;
  handleDecremental: (price: number) => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setTotalPrice(newCount * itemPrice);
    handleIncremental(itemPrice);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setTotalPrice(newCount * itemPrice);
      handleDecremental(itemPrice);
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid size={{ xs: 6, md: 8 }}>
        <Typography variant="h6">{itemname}</Typography>
        <img src={imageUrl} alt={itemname} width="100" /> {/* แสดงรูปภาพสินค้า */}
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={handleRemoveItemClick}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={handleAddItemClick}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">
            {totalPrice.toLocaleString()} Thb
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
