export const handleIncrease = (cartProduct, pid) => {
  const _cartProduct = [...(cartProduct || [])];
  const prod = _cartProduct.find((prod) => prod.productId === pid);
  if (!prod) {
    _cartProduct.push({ productId: pid, qty: 1 });
    return _cartProduct;
  } else {
    const pIdx = _cartProduct.indexOf(prod);
    prod.qty = ++prod.qty;
    _cartProduct[pIdx] = prod;
    return _cartProduct;
  }
};

export const handleDecrease = (cartProduct, pid) => {
  const _cartProduct = [...(cartProduct || [])];
  const prod = _cartProduct.find((prod) => prod.productId === pid);
  if (prod) {
    const pIdx = _cartProduct.indexOf(prod);
    if (prod.qty > 1) {
      prod.qty = --prod.qty;
      _cartProduct[pIdx] = prod;
    } else {
      _cartProduct.splice(pIdx, 1);
    }
    return _cartProduct;
  }
};
