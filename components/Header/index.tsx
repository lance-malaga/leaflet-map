import styles from './Header.module.scss'
import logo from '../../public/images/logo.svg'
import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <Image
                    src={logo}
                    alt='logo'
                    width='50'
                    height='50'
                />
                <h1>Vancity Tracks</h1>
            </div>
            <div className={styles.legend__container}>
                <h3>Legend:</h3>
                <div>
                    <div className={styles.expo}/>
                    <p>Expo Line</p>
                </div>
                <div>
                    <div className={styles.millenium}/>
                    <p>Millenium Line</p>
                </div>
            </div>
        </div>
    )
}