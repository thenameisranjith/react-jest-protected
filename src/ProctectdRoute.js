import { React } from "react";
import { Route, Redirect } from "react-router-dom";

const ProctectdRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component />;
        if (!auth)
          return (
            <Redirect to={{ path: "/", state: { from: props.location } }} />
          );
      }}
    />
  );
};

export default ProctectdRoute;

// import React from "react";

// export const ProctectdRoute = (props) => {
//   console.log("LINE NO 24 ", props);
//   return <div>ProctectdRoute</div>;
// };
// export default ProctectdRoute;
