import styles from './Header.module.css'
import { Balloon } from 'phosphor-react';

export function Header() {
    return (
        <header className={styles.header}>
            <Balloon size={35} color="#00875f" />
        </header>
    )
}