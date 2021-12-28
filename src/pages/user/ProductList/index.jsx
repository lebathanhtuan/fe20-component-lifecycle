import React, { useState, useEffect } from "react";
import { InputNumber, Space } from "antd";

import Item from "./components/Item";
import * as S from "./styles";

// productList = [1, 2, 3, 4, 5]
// productList = [1, 2]
// productList = [1, 2]

function ProductList({ productList, setSelectedProduct }) {
  const [pin1, setPin1] = useState(0);
  const [pin2, setPin2] = useState(0);
  const [pin3, setPin3] = useState(0);
  const [pin4, setPin4] = useState(0);

  useEffect(() => {
    console.log("Hello ProductList");

    return () => {
      console.log("Rời khỏi ProductList");
    };
  }, []);

  useEffect(() => {
    console.log("Updation");
    if (pin1 === 5 && pin2 === 9 && pin3 === 2) {
      console.log("Bạn đã unlock!");
    }
  }, [pin1, pin2, pin3]);

  const renderProductList = () => {
    return productList.map((item, index) => {
      return (
        <Item key={index} item={item} setSelectedProduct={setSelectedProduct} />
      );
    });
  };

  return (
    <>
      <Space>
        <InputNumber value={pin1} onChange={(value) => setPin1(value)} />
        <InputNumber value={pin2} onChange={(value) => setPin2(value)} />
        <InputNumber value={pin3} onChange={(value) => setPin3(value)} />
        <InputNumber value={pin4} onChange={(value) => setPin4(value)} />
      </Space>
      <S.Title>Danh sách sản phẩm</S.Title>
      <S.List>{renderProductList()}</S.List>
    </>
  );
}

export default ProductList;
