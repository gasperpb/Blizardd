import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <img src="/logo.png" alt="Logo da Blizzard" />
    <nav>
      <ul>
        <li>Jogos</li>
        <li>Esportes</li>
        <li>Loja</li>
        <li>Noticias</li>
        <li>Suporte</li>
      </ul>
    </nav>
  </header>
)
