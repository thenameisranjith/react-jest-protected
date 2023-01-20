import { useState } from "react";

const LoginTest = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <div>
      {!isLogin ? (
        <button onClick={() => setLogin(true)}>Login</button>
      ) : (
        <button>Start Learning</button>
      )}
    </div>
  );
};

export default LoginTest;
