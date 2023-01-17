import React, { createContext, useContext, useState,} from "react";
// import { toast } from "react-hot-toast";

const Context = createContext();


export default function StateContext() {
    const [showTransaction, setShowTransaction ] = useState(true);
  return (
    <Context.Provider value={{
        showTransaction,
        setShowTransaction,
    }}
    >
    
    </Context.Provider>
  )
}
export const useStateContext = () => useContext(Context);