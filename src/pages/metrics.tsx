import { ApexChart }  from '../components/dashbord'
import { Header } from '../components/header'
import styles from './metrics.module.css'
import { ModalCreateMetrics } from '../components/modalCreate'

export function Metrics() {
    return (
        <main>
             <Header />
            <div className={styles.card}>
                
                <div className={styles.title}>
                    <h2>Frameworks Javascript</h2>
                    <p>2023</p>
                </div>
                <div className={styles.addMetrics}>
                    <ModalCreateMetrics />
                 </div>
                <div className={styles.graphic}>
                     
                    <ApexChart  />
                </div>
            </div>
        </main>
    )
}