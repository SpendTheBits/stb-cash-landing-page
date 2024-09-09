import styles from "./style.module.scss";

const Input = (props) => {
  return (
    <div className={styles.inputContainer}>
      <label>{props.label}</label>
      <div className={styles.inputBlock}>
        <input type={props.type} {...props.fieldProps} />
        {props.icon}
      </div>
    </div>
  );
};

export default Input;
