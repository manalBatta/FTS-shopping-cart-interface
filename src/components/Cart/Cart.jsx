import styles from "./Cart.module.css";

export default function Cart({ cartItems, handleDelete }) {
  return (
    <ul className={styles.cart}>
      {cartItems.map((item) => {
        if ("selected" in item && item.selected)
          return (
            <li
              className={styles.cartItem}
              key={item.id}
              onClick={() => handleDelete(item.id)}>
              {item.title}
            </li>
          );
      })}
    </ul>
  );
}
