import styles from './header.module.css'
import AnchorTemporaryDrawer from './ui/drawer'
import ProfileIcon from './ui/avatar'

export function Header() {
    return (
        <main>
            <div className={styles.header}>
                <AnchorTemporaryDrawer />
        
                <span>AT Software Solutions</span>
            </div>
            <div className={styles.profileIcon}>
                <ProfileIcon />
            </div>
        </main>
    )
}