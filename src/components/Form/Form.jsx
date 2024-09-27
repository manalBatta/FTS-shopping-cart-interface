import React, { useState } from "react";
import styles from "./Form.module.css"; // Import the CSS module

export default function Form({
  showForm,
  handleButtonClick,
  handleCloseForm,
  handleSubmit,
}) {
  return (
    <div>
      <button onClick={handleButtonClick}>Open Form</button>

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                className={styles.btn}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
