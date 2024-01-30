"use client"

import React from 'react'
import styles from "./page.module.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Translit = () => {
  
  const [inText, setInText] = useState("");
  const [outText, setOutText] = useState('');
  const [outputCheckBox, setOutputCheckBox] = useState(false);

  const Clear = () => {
    setOutText('');
    setInText('');
  }

  const copyText = async () => {
    const copiedText = await navigator.clipboard.readText();
    if(outText.length && copiedText !== outText){
      navigator.clipboard.writeText(outText);
      toast.success('Скопировано!', {
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
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let answer = '';

    const converter = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
      'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
      'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
      'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
      'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
      'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
      'э': 'e',    'ю': 'yu',   'я': 'ya',
   
      'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
      'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
      'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
      'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
      'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
      'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
      'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };

    for (var i = 0; i < inText.length; ++i ) {
      if (converter[inText[i]] == undefined){
        answer += inText[i];
      } else {
        answer += converter[inText[i]];
      }
    }
    
    setOutText(!outputCheckBox ? answer : answer.toLowerCase());
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Транслит переводчик</h1>
      <div className={styles.rusTextarea}>
        <div className={styles.title_btn}>
          <h4>Русский текст для перевода</h4>
          <button onClick={Clear}>Очистить</button>
        </div>
          <textarea name="" id="" cols="" rows="7" value={inText} onChange={e => setInText(e.target.value)}></textarea>
      </div>
      <div className={styles.enTextarea}>
      <div className={styles.title_btn}>
        <h4>Результат транслитерации</h4>
        <div className={styles.buttons}>
          <button onClick={handleSubmit}>Перевести</button>
          <button onClick={copyText}>Скопировать</button>
        </div>
      </div>
        <textarea name="" id="" cols="" rows="7" defaultValue={outText}></textarea>
        <div className={styles.checkBox}>
            <input
              type="checkbox"
              className={styles.inputCheckbox}
              name=""
              id=""
              checked={outputCheckBox}
              onChange={() => setOutputCheckBox(!outputCheckBox)}
            />
            <span onClick={() => setOutputCheckBox(!outputCheckBox)}>Результат в строчные буквы</span>
      </div>
      </div>
      
      <ToastContainer />
    </div>
  )
}

export default Translit