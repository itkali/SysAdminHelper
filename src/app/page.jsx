import Link from 'next/link'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className={styles.conteiner}>
      <h1 className={styles.title}>Добро пожаловать в Web-приложение SysAdminHelper!</h1>
      <p className={styles.description}>Данное приложение скорее инструмент для <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%BE%D1%80" target='_blank'>Системных администраторов</a> в помощи создания учетных записей в информационных системах, программах и т.п., но его так же можно использовать и в простом быту, <Link href="/generator">сгенерировать надежный пароль</Link> для соц. сетей и т.д.</p>
      <p className={styles.description}>Еще в данном приложении есть <Link href="/translit">Транслит переводчик</Link>. С помощью него можно легко перевести например ФИО пользователя из кириллицы в латиницу, очень часто необходимо при создании почтового ящика или логина.</p>
    </div>
  )
}
