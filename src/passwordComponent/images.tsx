import Check from "../assets/check.png";
import Error from "../assets/error.png";

export const ErrorImg = () => (
  <img src={Error} alt="error" style={{ width: 30, height: 30 }} />
);

export const CheckImg = () => (
  <img src={Check} alt="success" style={{ width: 30, height: 30 }} />
);