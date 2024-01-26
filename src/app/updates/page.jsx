import React from "react";
import styles from "./page.module.css";

const Updates = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список обновлений</h1>
      <div className={styles.updatesList}>
        <div className={styles.updates}>
          <h3 className={styles.updatesTitle}>
            (23.01.2024) Обновление Alpha v0.2
          </h3>
          <h2 className={styles.updateDes}>Добавлено</h2>
          <ul>
            <li>Страница обновлений</li>
          </ul>
          <h2 className={styles.updateDes}>Исправлено</h2>
          <ul>
            <li>
              Баг при открытии страницы Генератора паролей выскакивало сообщение
              о копировании вбифер обмена пароля
            </li>
            <li>
              Баг при активации чекбокса "Цифры", пароль не генерировался с
              цифрами
            </li>
            <li>Убраны символы "I, l, O, 0" из генерации пароля</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Updates;
