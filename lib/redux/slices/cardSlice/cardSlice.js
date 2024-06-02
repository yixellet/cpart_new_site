/* Core */
import { createSlice } from '@reduxjs/toolkit'


const initialState = [
  {
    key: 1,
    type: 'Полное наименование',
    value: 'Государственное автономное учреждение Астраханской области "Центр пространственной аналитики и развития территорий"',
  },
  {
    key: 2,
    type: 'Сокращенное наименование',
    value: 'ГАУ АО "ЦПАРТ"',
  },
  {
    key: 3,
    type: 'ИНН',
    value: '3015096043',
  },
  {
    key: 4,
    type: 'ОГРН',
    value: '1123015001152',
  },
]

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
  },
})