import { useState } from "react";
import styles from "./Cart.module.css";
import Form from "../Form/Form";

export default function Cart({ cartItems, handleDelete }) {
  let totalPrice = 0;
  const [showForm, setShowForm] = useState(false);
  function handleGetClick() {
    setShowForm(true);
  }

  //form handlers
  const handleButtonClick = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form when canceled or submitted
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., collect input values)
    console.log("Form submitted");
    handleCloseForm();
  };
  return (
    <>
      <ul className={styles.cart}>
        {cartItems.map((item) => {
          if ("selected" in item && item.selected) {
            totalPrice += item.price;
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
          }
        })}
      </ul>
      <div className={styles.details}>
        <h4 className={styles.cartItem}>
          Total Price = {Math.round(totalPrice)}$
        </h4>
        {totalPrice != 0 && (
          <button className={styles.cartItem} onClick={handleGetClick}>
            <strong>get Products</strong>
          </button>
        )}
      </div>
      {showForm && (
        <Form
          showForm={showForm}
          handleButtonClick={handleButtonClick}
          handleCloseForm={handleCloseForm}
          handleSubmit={handleSubmit}></Form>
      )}
    </>
  );
}
