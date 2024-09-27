import styles from "./Cart.module.css";

export default function Cart({ cartItems, handleDelete }) {
  let totalPrice = 0;
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
        <li
          className={styles.cartItem}
          style={{ width: "fit-content", background: "#5ac1ff" }}>
          Total Price = {Math.round(totalPrice)}$
        </li>
      </ul>
    </>
  );
}
