import styles from "./Cart.module.css";

export default function Cart({ cartItems }) {
  return (
    <ul className={styles.cart}>
      {cartItems.map((item) => {
        if ("selected" in item)
          return (
            <li className={styles.cartItem} key={item.id}>
              {item.title}
            </li>
          );
      })}
    </ul>
  );
}
