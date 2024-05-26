"use client"

import { useState } from 'react';

import styles from './RequestForm.module.css';

import {tips} from './tips';

export default function RequestForm(props) {
  const [type, setType] = useState("");
  
  function handleChangeType(e) {
    setType(e.target.value);
  }

  console.log(type)
  
  return (
    <div className={styles.wrapper}>
      <button onClick={props.closeFunction} className={styles.close_button}>Закрыть</button>
      <div className={styles.content}>
        <div className={styles.list}>
          <div className={styles.list_content}>
            <table className={styles.table}>
              <tbody className={styles.tbody}>
                <tr className={styles.tr}>
                  <td className={styles.td1} colSpan="3" rowSpan={6}>
                  1. Запрос о предоставлении пространственных данных и материалов из 
                  фонда пространственных данных Астраханской области в
                  государственное автономное учреждение Астраханской области 
                  «Центр пространственной аналитики и развития территорий»
                  </td>
                  <td className={styles.td2} colSpan="2">
                  2. Заполняется специалистом фондодержателя
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td2} colSpan="2">
                  2.1. Регистрационный №_____
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td2} colSpan="2">
                  2.2. Количество листов заявления _____
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td2} colSpan="2">
                  2.3. Количество прилагаемых документов ____/ листов в них _____
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td2} colSpan="2">
                  2.4. Подпись _______________
                  </td>
                </tr>
                <tr className={styles.tr}>
                  <td className={styles.td2} colSpan="2">
                  2.5. Дата "___" ____________ ____ г.
                  </td>
                </tr>
                <tr>
                  <td className={styles.td_number}>3.</td>
                  <td className={styles.td} colSpan="5">
                  Прошу предоставить пространственные данные и материалы из 
                  регионального фонда пространственных данных Астраханской области
                  </td>
                </tr>
                <tr>
                  <td className={styles.td_number}></td>
                  <td className={styles.td_number} ></td>
                  <td className={styles.td2} colSpan="3">
                    <select value={type} onChange={handleChangeType}>
                      <option value="" disabled>Выберите тип данных</option>
                      {
                        Object.values(tips.types).map(type => 
                          <option key={type.code} value={type.code}>{type.name}</option>
                        )
                      }
                    </select>
                    <p>{tips.types[type].desc}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.list}></div>
        <div className={styles.list}></div>
      </div>
    </div>
  )
}