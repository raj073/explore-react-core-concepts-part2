import React from "react";
import "./User.css";

export default function User({ user }) {
  const { name, email } = user;
  return (
    <div className="box">
      <h3>User: {name}</h3>
      <p>E-mail: {email}</p>
    </div>
  );
}
