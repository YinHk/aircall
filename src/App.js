import React from "react";
import appStyle from './style/appStyle';
import Header from './components/Header';
import Activity from './components/Activity';

export default function App() {
  const classes = appStyle();


  return (
   <div className={classes.app}>
    <div className={classes.container}>
      <Header />
      <Activity />
    </div>
   </div>
  );
}

