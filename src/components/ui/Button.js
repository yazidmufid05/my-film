import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  margin: 0.4rem;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease; /* Tambahkan efek transisi */

  background: ${function (props) {
    if (props.variant === "primary") {
      return "linear-gradient(90deg, #123b5b 16%, #000 45%, #427d41 63%)";
    } else if (props.variant === "secondary") {
      return "linear-gradient(90deg, #123b5b 16%, #000 41%, #9e0404 63%)";
    } else {
      return "#6c6c6c838";
    }
  }};

  &:hover {
    background: ${function (props) {
      if (props.variant === "primary") {
        return "linear-gradient(90deg, #123b5b 16%, #000 55%, #427d41 73%)";
      } else if (props.variant === "secondary") {
        return "linear-gradient(90deg, #123b5b 16%, #000 51%, #9e0404 73%)";
      } else {
        return "#6c6c6c";
      }
    }};
    transform: scale(1.05); 
  }
`;

export default Button;
