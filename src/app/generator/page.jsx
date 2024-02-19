"use client";
import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const numbersList = "123456789";
const symbolsList = "!@#$%";
const uppercaseList = "QWERTYUPASDFGHJKLZXCVBNM";
const lowercaseList = "qwertyuiopasdfghjkzxcvbnm";

const Generator = () => {
  const [password, setPassword] = useState("");
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [passwordLenght, setPasswordLenght] = useState(8);

  const generatePassword = () => {
    let charactedList = "";
    if (upperCase) {
      charactedList += uppercaseList;
    }
    if (lowerCase) {
      charactedList += lowercaseList;
    }
    if (numbers) {
      charactedList += numbersList;
    }
    if (symbols) {
      charactedList += symbolsList;
    }

    let tempPassword = "";
    const charactedListLenght = charactedList.length-1;
    function genpass() {
      for (let i = 0; i < passwordLenght; i++) {
        const charactedIndex = Math.round(Math.random() * charactedListLenght);
        tempPassword += charactedList.charAt(charactedIndex);
      }
    }
    genpass();

    if (numbers && !tempPassword.match(/\d/g)) {
      tempPassword = "";
      genpass();
    }
    setPassword(tempPassword);
  };

  const copyPassword = async () => {
    const copiedText = await navigator.clipboard.readText();
    if (password.length && copiedText !== password) {
      navigator.clipboard.writeText(password);
      toast.success("Скопировано!", {
        position: "top-right",
        autoClose: 300,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Генератор случайных паролей</h1>
      <div className={styles.inputField}>
        <input
          type="text"
          className={styles.inputPassword}
          value={password}
          onClick={copyPassword}
          readOnly
        />
        <button className={styles.btnCopy} onClick={copyPassword}>
          <MdContentCopy />
          <ToastContainer />
        </button>
      </div>
      <div className={styles.settingsPassword}>
        <div className={styles.blockRange}>
          <h4>Длина пароля:</h4>
          <div className={styles.settingsRange}>
            <input
              type="text"
              value={passwordLenght}
              className={styles.inputLeghtPassword}
              readOnly
            />
            <input
              type="range"
              className={styles.inputRange}
              min={6}
              max={22}
              defaultValue={passwordLenght}
              onChange={(event) => setPasswordLenght(event.currentTarget.value)}
            />
          </div>
        </div>
        <div className={styles.checkBoxs}>
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              className={styles.inputCheckbox}
              name="numbers"
              id="numbers"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            <span onClick={() => setNumbers(!numbers)}>Цифры</span>
          </div>
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              className={styles.inputCheckbox}
              name="upper"
              id="upper"
              checked={upperCase}
              onChange={() => setUpperCase(!upperCase)}
            />
            <span onClick={() => setUpperCase(!upperCase)}>Большие буквы</span>
          </div>
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              className={styles.inputCheckbox}
              name="lower"
              id="lower"
              checked={lowerCase}
              onChange={() => setLowerCase(!lowerCase)}
            />
            <span onClick={() => setLowerCase(!lowerCase)}>
              Маленькие буквы
            </span>
          </div>
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              className={styles.inputCheckbox}
              name="symbols"
              id="symbols"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
            <span onClick={() => setSymbols(!symbols)}>
              Специальные символы
            </span>
          </div>
        </div>
      </div>
      <button className={styles.btnGenerator} onClick={generatePassword}>
        Сгенерировать
      </button>
    </div>
  );
};

export default Generator;
