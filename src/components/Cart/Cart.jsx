import { useState } from "react";
import styles from "./Cart.module.css";
import Form from "../Form/Form";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
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
      <div className={styles.details}>
        <h4 className={styles.cartItem}>
          Total Price = {Math.round(totalPrice)}$
        </h4>
        {totalPrice != 0 && (
          <IconButton
            aria-label="pay"
            size="large"
            onClick={() => setShowForm(true)}>
            <LocalMallOutlinedIcon
              fontSize="inherit"
              color="primary"></LocalMallOutlinedIcon>
          </IconButton>
        )}
      </div>
      {showForm && (
        <Form
          showForm={showForm}
          handleButtonClick={() => setShowForm(true)}
          handleCloseForm={() => setShowForm(false)}
          handleSubmit={handleSubmit}></Form>
      )}

      <List>
        {filteredCartItems?.length &&
          filteredCartItems.map((item) => {
            const content = (
              <>
                {item.title}
                <br />
                <strong>{item.price}$</strong>
              </>
            );
            return (
              <ListItem
                sx={{
                  background: "#5ac1ff",
                  margin: "5px",
                  color: "black",
                  borderRadius: "5px",
                }}>
                <ListItemText
                  primary={content}
                  key={item.id}
                  onClick={() => handleDelete(item.id)}
                />
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
