import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    "_id": "626fe30ff5d861a0058ee74a",
    "username": "alabi",
    "email": "alabi@gmail.com",
    "password": "$2b$10$i.P5wy/PR4R0rqKAY67.f.3P2Vzyvs56M4.ra78o4eKBhYoRQZKmO",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [],
    "followings": [],
    "isAdmin": false,
    "createdAt": "2022-05-02T13:56:31.071Z",
    "updatedAt": "2022-05-02T13:58:47.309Z",
    "__v": 0,
    "city": "Lagos",
    "desc": "hey it's my updated description",
    "from": "Ondo",
    "relationship": 2
},
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
