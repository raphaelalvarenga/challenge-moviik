import { createAction, props } from "@ngrx/store";
import { Quote } from "interfaces/quote.interface";

export const quoteAction = createAction("GET Actions", props<{ quotes: Quote[] }>());
