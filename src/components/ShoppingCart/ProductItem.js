function ProductItem({ product, addToCart }) {
    return (
      <div>
        {product.name} - ${product.price}
        <button onClick={() => addToCart(product)}>Pridėti į krepšelį</button>
      </div>
    );
  }

  export default ProductItem;