/* Instruments */
import { counterSlice } from './slices'
import { menuSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  menu: menuSlice.reducer,
}
