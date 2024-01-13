import React from "react";
import styles from "./styles.module.css";

export default function Select({ onChange, data, initalValue }) {
  return (
    <div className={styles.customSelect}>
      <select className={styles.selectOption} onChange={onChange}>
        {initalValue && (
          <option className={styles.optionspecial} value="" selected disabled>
            {initalValue}
          </option>
        )}
        {data?.map((value) => (
          <option key={value.id} value={value.id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
}
