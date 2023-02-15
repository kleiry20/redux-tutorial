import React from "react";

export default function User(props) {
  console.log(props.data);
  const { data } = props;

  return (
    <div>
      User Component
      <h4>{data.name}</h4>
      <h4>{data.id}</h4>
    </div>
  );
}
