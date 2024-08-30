import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                className={styles.avatar}
                src="https://github.com/tcancissu.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thiago Cancissú</strong>
                            <time title='28 de Agosto ás 19:34h' dateTime='2024-08-28 19:34:25'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom jovem, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span>1</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}