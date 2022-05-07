// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import { Navigate } from "react-router-dom";

// const AuthRoute = ({ children }) => {
//   const { user } = useContext(UserContext);
//   return user ? <h1>{children}</h1> : <Navigate to="/login" />;
// };

// const UnAuthRoute = ({ children }) => {
//     const { user } = useContext(UserContext);
//     return !user ? <h1>{children}</h1> : <Navigate to="/account" />;
//   };
