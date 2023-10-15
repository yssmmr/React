import React from "react";

//propsとはコンポーネントに渡す引数のようなもの
//App.jsxに記載している条件をpropsが受取り、表示される。
const ColorfullMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfullMessage;
