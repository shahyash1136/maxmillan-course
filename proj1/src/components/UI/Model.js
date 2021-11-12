import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Model.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrorHandler} />;
};

const ModelOverlay = (props) => {
  return (
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
  );
};

const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onErrorHandler={props.onErrorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay
          title={props.title}
          message={props.message}
          onErrorHandler={props.onErrorHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Model;
