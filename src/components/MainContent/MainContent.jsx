import { useEffect, useState } from "react";
import styles from "./MainContent.module.css";
import MultiActionAreaCard from "../MultiActionAreaCard";
import Cart from "../Cart/Cart";

export default function MainContent() {
  const [products, setProducts] = useState([]);

  function handleClick(id) {
    const updatedProducts = products.map((prod) => {
      if (prod.id == id) {
        return { ...prod, selected: true };
      } else return prod;
    });
    setProducts(updatedProducts);
  }

  function handleDelete(id) {
    const isDeleteConfirmed = window.confirm(
      "Are you sure to delete from car?"
    );
    if (!isDeleteConfirmed) {
      return;
    }
    const updatedProducts = products.map((prod) => {
      if (prod.id == id) {
        return { ...prod, selected: false };
      } else return prod;
    });
    setProducts(updatedProducts);
  }
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

  return (
    <>
      <h1 style={{ color: "white" }}>Oline Product market</h1>
      <div className={styles.mainContainer}>
        <div className={styles.gridContainer}>
          {products.length > 0 &&
            products.map((product) => {
              if (!("selected" in product) || !product.selected)
                return (
                  <MultiActionAreaCard
                    handleClick={handleClick}
                    product={product}
                    key={product.id}></MultiActionAreaCard>
                );
            })}
        </div>
        <div className={styles.cart}>
          <h1 style={{ color: "white", padding: "0", margin: "0" }}>CART</h1>
          <Cart cartItems={products} handleDelete={handleDelete}></Cart>
        </div>
      </div>
    </>
  );
}
