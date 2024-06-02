/* Core */
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  about: {
    code: 'about',
    name: 'О нас',
    tabindex: 2,
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
    tabindex: 3,
    submenu: {
      fpd: {
        code: 'fpd',
        name: 'Фонд пространственных данных',
      },
      mapping: {
        code: 'mapping',
        name: 'Картография и ГИС',
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
    tabindex: 4,
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
    tabindex: 5,
  },
  articles: {
    code: 'articles',
    name: 'Статьи',
    tabindex: 6,
  },
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
  },
})