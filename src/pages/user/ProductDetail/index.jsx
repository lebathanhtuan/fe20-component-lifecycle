import React from "react";
import { useParams } from "react-router-dom";

import * as S from "./styles";

const ProductDetail = ({ productList }) => {
  const { id } = useParams();

  const product = productList.find((item) => item.id.toString() === id);

  if (!product) return <div>404 Not Found</div>;
  return (
    <>
      <div>Tên: {product.name}</div>
      <div>Giá: {product.price.toLocaleString()} ₫</div>
      <S.CustomButton>Thêm vào giỏ</S.CustomButton>
    </>
  );
};

export default ProductDetail;
