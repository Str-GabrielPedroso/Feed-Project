import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGXPHNwyOr2EA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707069540766?e=1730332800&v=beta&t=lOc2bx0PVsgupVwj9j-FreWHs-iKCnqbD8F_1sLft74" />

                    <div className={styles.authorInfo}>
                        <strong>Gabriel Pedroso</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='28 de Agosto ás 17:14h' dateTime='2024-08-28 17:14:32'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Eai galeraa!</p>
                <p>
                    Acabei de subir um projeto de feed para o
                    <a href="https://github.com/Str-GabrielPedroso"> GitHub</a>,
                    deem uma olhada lá e já me sigam também
                </p>
                <p><a href="https://str-gabrielpedroso.github.io/Feed-Project/">Feed-Project</a></p>
                <p>
                    <a href="#">#NovoProjeto</a>{' '}
                    <a href="#">#RedeSocial</a>{' '}
                    <a href="#">#Feed</a>{' '}
                    <a href="#">#React</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Comentar</strong>

                <textarea
                    placeholder='Adicionar comentário'
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}