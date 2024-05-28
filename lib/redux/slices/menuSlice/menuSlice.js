/* Core */
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  about: {
    code: 'about',
    name: 'О нас',
    submenu: {
      history: {
        code: 'history',
        name: 'История',
      },
      head: {
        code: 'head',
        name: 'Директор',
      },
      contacts: {
        code: 'contacts',
        name: 'Контакты',
      },
    },
  },
  work: {
    code: 'work',
    name: 'Деятельность',
    submenu: {
      fund: {
        code: 'fund',
        name: 'Фонд пространственных данных',
      },
      mapping: {
        code: 'mapping',
        name: 'Картография',
      },
      cadaster: {
        code: 'cadaster',
        name: 'Землеустройство и кадастр',
      },
      survey: {
        code: 'survey',
        name: 'Геодезия и аэрофотосъёмка',
      },
      passports: {
        code: 'passports',
        name: 'Паспорта участков акватории',
      },
      gochs: {
        code: 'gochs',
        name: 'Учебный центр ГО ЧС',
      },
    },
  },
  docs: {
    code: 'docs',
    name: 'Документы',
    submenu: {
      card: {
        code: 'card',
        name: 'Карта партнёра',
      },
      org_docs: {
        code: 'org_docs',
        name: 'Учредительные документы',
      },
      licenses: {
        code: 'licenses',
        name: 'Лицензии, сертификаты, свидетельства',
      },
      for_applicants: {
        code: 'for_applicants',
        name: 'Для заявителей',
      },
      gochs: {
        code: 'gochs',
        name: 'Учебный центр по ГО и ЧС',
      },
    },
  },
  news: {
    code: 'news',
    name: 'Новости',
  },
  articles: {
    code: 'articles',
    name: 'Статьи',
  },
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
  },
})