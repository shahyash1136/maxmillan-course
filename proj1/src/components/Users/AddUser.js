import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Model from "../UI/Model";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [userName, setUserName] = useState("");
  //const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    //setUserName("");
    //setUserAge("");
  };

  /* const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  }; */

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Model
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            /* onChange={userNameHandler}
            value={userName} */
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            /* onChange={userAgeHandler}
            value={userAge} */
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
