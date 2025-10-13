import React from "react"
import './button.css'

const Button = ({ btntext, onClick, variant }) => (
  <button
    className={`button ${variant === "purple-button" ? "purple-button" : "white-button"}`}
    onClick={onClick}>
    <p>{btntext}</p>
  </button>
)

export default Button
