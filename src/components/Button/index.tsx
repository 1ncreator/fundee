import React from "react"
import "./button.css"
import { styled } from "styled-components"

const Button = ({ btntext, onClick, variant }: { btntext: string, onClick: () => void, variant: "purple-button" | "white-button" }) => (
  <button
    className={`button ${variant === "purple-button" ? "purple-button" : "white-button"}`}
    onClick={onClick}>
    <p>{btntext}</p>
  </button>
)

export default Button
