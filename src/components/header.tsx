import styles from './header.module.css'
import AnchorTemporaryDrawer from './ui/drawer'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

function stringAvatar(name: string) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
}

export function Header() {
    return (
        <main>
            <div className={styles.header}>
                <div className={styles.menuIcon}>
                    <AnchorTemporaryDrawer/>
                </div>
        
                <span className={styles.title}>AT Software Solutions</span>
            </div>

            <div className={styles.profileIcon}>
                <Stack direction="row" spacing={2} >
                    <Avatar {...stringAvatar('A T')} />
                </Stack>
            </div>
        </main>
    )
}