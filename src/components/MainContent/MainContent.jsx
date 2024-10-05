import { useEffect, useState } from "react";
import styles from "./MainContent.module.css";
import MultiActionAreaCard from "../MultiActionAreaCard";
import Cart from "../Cart/Cart";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid2";

export default function MainContent() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
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
          setIsError(true);
          throw new Error("error in api");
        }
        setIsError(false);
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isError}
        message="sorry Error fetching Products Try again later"
        key={"123"}
      />

      <h1 style={{ color: "white" }}>
        Oline Product market
        <strong>
          <CheckroomOutlinedIcon
            style={{ fontSize: "2rem" }}></CheckroomOutlinedIcon>
        </strong>
      </h1>
      <div className={styles.mainContainer}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch">
          {products?.length > 0 &&
            notSelectedProducts.map((product) => {
              return (
                <Grid size={4}>
                  <MultiActionAreaCard
                    handleClick={updateProducts}
                    product={product}
                    key={product.id}></MultiActionAreaCard>
                </Grid>
              );
            })}
        </Grid>
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
