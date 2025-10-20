import React from "react"
import './button.css'
import styled from "styled-components"

const Button = ({ btntext, onClick, variant }) => (
  <button
    className={`button ${variant === "purple-button" ? "purple-button" : "white-button"}`}
    onClick={onClick}>
    <p>{btntext}</p>
  </button>
)

export default Button