import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar
                src="https://media.licdn.com/dms/image/v2/D4D03AQGXPHNwyOr2EA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707069540766?e=1730332800&v=beta&t=lOc2bx0PVsgupVwj9j-FreWHs-iKCnqbD8F_1sLft74" />
                
                <strong>Gabriel Pedroso</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}