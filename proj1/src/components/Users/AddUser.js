import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Model from "../UI/Model";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

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
            onChange={userNameHandler}
            value={userName}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            onChange={userAgeHandler}
            value={userAge}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
