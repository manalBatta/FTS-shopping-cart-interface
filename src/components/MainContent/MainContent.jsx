import { useEffect, useState } from "react";
import styles from "./MainContent.module.css";
import MultiActionAreaCard from "../MultiActionAreaCard";
import Cart from "../Cart/Cart";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
export default function MainContent() {
  const [products, setProducts] = useState([]);

  function updateProducts(id, select) {
    setProducts((prev) =>
      prev.map((prod) => {
        if (prod.id === id) {
          return { ...prod, selected: select };
        } else return prod;
      })
    );
  }

  function handleDelete(id) {
    const isDeleteConfirmed = window.confirm(
      "Are you sure to delete from car?"
    );
    if (!isDeleteConfirmed) {
      return;
    }
    updateProducts(id, false);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          //TO DO:use the material notes
          alert("something broke try again later");
          throw new Error("error in api");
        }
        const json = await res.json();
        setProducts(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const notSelectedProducts = products.filter(
    (product) => !("selected" in product) || !product.selected
  );

  return (
    <>
      <h1 style={{ color: "white" }}>
        Oline Product market
        <strong>
          <CheckroomOutlinedIcon
            style={{ fontSize: "2rem" }}></CheckroomOutlinedIcon>
        </strong>
      </h1>
      <div className={styles.mainContainer}>
        <div className={styles.gridContainer}>
          {products?.length > 0 &&
            notSelectedProducts.map((product) => {
              return (
                <MultiActionAreaCard
                  handleClick={updateProducts}
                  product={product}
                  key={product.id}></MultiActionAreaCard>
              );
            })}
        </div>
        <div className={styles.cart}>
          <h1 style={{ color: "white", padding: "0", margin: "0" }}>
            <AddShoppingCartOutlinedIcon></AddShoppingCartOutlinedIcon>CART
          </h1>
          <Cart cartItems={products} handleDelete={handleDelete}></Cart>
        </div>
      </div>
    </>
  );
}
