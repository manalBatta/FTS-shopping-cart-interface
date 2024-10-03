import { useState } from "react";
import styles from "./Cart.module.css";
import Form from "../Form/Form";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
export default function Cart({ cartItems, handleDelete }) {
  let totalPrice = 0;
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    //can use validation library
    event.preventDefault();
    setShowForm(false);
  };
  const filteredCartItems = cartItems.filter((item) => {
    if ("selected" in item && item.selected) {
      totalPrice += item.price;
      return true;
    }
    return false;
  });

  return (
    <>
      <ul className={styles.cart}>
        {filteredCartItems?.length &&
          filteredCartItems.map((item) => {
            return (
              <li
                className={styles.cartItem}
                key={item.id}
                onClick={() => handleDelete(item.id)}>
                {item.title}
                <br />
                <strong>{item.price}$</strong>
              </li>
            );
          })}
      </ul>
      <div className={styles.details}>
        <h4 className={styles.cartItem}>
          Total Price = {Math.round(totalPrice)}$
        </h4>
        {totalPrice != 0 && (
          <button className={styles.cartItem} onClick={() => setShowForm(true)}>
            <LocalMallOutlinedIcon
              style={{
                fontSize: "1.5rem",
                lineHeight: "1",
              }}></LocalMallOutlinedIcon>
          </button>
        )}
      </div>
      {showForm && (
        <Form
          showForm={showForm}
          handleButtonClick={() => setShowForm(true)}
          handleCloseForm={() => setShowForm(false)}
          handleSubmit={handleSubmit}></Form>
      )}
    </>
  );
}
