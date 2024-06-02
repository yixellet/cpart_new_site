/* Instruments */
import { counterSlice, menuSlice, cardSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  menu: menuSlice.reducer,
  card: cardSlice.reducer,
}
