import { React, useState } from "react";

export default function UseAuth(initialValue) {
  const [isAuth, setIsAuth] = useState(initialValue);
  const logIn = () => {
    setTimeout(() => {
      setIsAuth(true);
    }, 1000);
  };
  const logOut = () => {
    setTimeout(() => {
      setIsAuth(false);
    }, 1000);
  };
  return [isAuth, logIn, logOut];
}
