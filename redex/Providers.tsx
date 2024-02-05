"use client"
import {ReactNode} from "react";
import { store } from "@/redex/store";
import { Provider } from "react-redux";

export default ({children}:{children:ReactNode})=>{
    return <Provider store={store}>
        {children}
    </Provider>
}