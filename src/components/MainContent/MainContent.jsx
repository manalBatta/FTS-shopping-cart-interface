import { useEffect, useState } from "react";
import styles from "./MainContent.module.css";
import Product from "../Product/Product";
import MultiActionAreaCard from "../MultiActionAreaCard";

export default function MainContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setProducts(json); // Update state with fetched products
      } catch (error) {
        console.log(error); // Handle error
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <h1 style={{ color: "white" }}>Oline Product market</h1>
      <div className={styles.mainContainer}>
        <div className={styles.gridContainer}>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <MultiActionAreaCard
                  product={product}
                  key={product.id}></MultiActionAreaCard>
              );
            })}
        </div>
        <div className={styles.cart}>
          <h1>hello to the cart</h1>
          <div className={styles.cartItems}></div>
        </div>
      </div>
    </>
  );
}
