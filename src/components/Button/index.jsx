import React from "react"

const Button = ({ text, onClick, variant }) => (
  <button
    className={`button ${variant === "blue" ? "blue" : "white-button"}`}
    onClick={onClick}>
    <p>{text}</p>
  </button>
)

export default Button
