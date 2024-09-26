import styles from "./Product.module.css";

export default function Product({ product }) {
  return (
    <div className={styles.productContainer}>
      <img src={product.image} alt={product.title} className={styles.photo} />
      <h1>{product.title}</h1>
      <div className={styles.description}>
        <p>{product.description}</p>
      </div>
      <h4>
        <strong>{product.price}$</strong>
      </h4>
      <button>Add to Cart</button>
    </div>
  );
}
