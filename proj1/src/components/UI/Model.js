import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Model.module.css";

const Model = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onErrorHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onErrorHandler}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default Model;
