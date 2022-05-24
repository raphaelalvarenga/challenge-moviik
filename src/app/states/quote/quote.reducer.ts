import { createReducer, on } from "@ngrx/store";
import { Quote } from "interfaces/quote.interface";
import { quoteAction } from "./quote.action";

const initialState: Quote[] = [];

export const quoteReducer = createReducer(
    initialState,
    on(quoteAction, (state: Quote[]) => {
        console.log(state);
        return state;
    })
);
