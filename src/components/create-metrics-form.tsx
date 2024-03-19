import { SelectNumber } from './ui/select'
import { ButtonSave } from './ui/button'
import styles from './create-metrics-form.module.css'
import { BasicDatePicker } from './ui/date-picker'

export function CreateMetricsForm () {
    return (
      <>  
        <div className={styles.titleForm}>
            <h2>Adicionar registro</h2>
            
            <div className={styles.subTitleForm}>
                <span>Prencha os campos abaixo e clique em salvar</span>
            </div>

        </div>
        <div className={styles.formColum}>
          <div className={styles.labelReact}>
              <label htmlFor="title">React</label>
              <SelectNumber />
          </div>

          <div>
              <label htmlFor="title">Angular</label>
              <SelectNumber />
          </div>

          <div>
              <label htmlFor="title">Vue</label>
              <SelectNumber />
          </div>   
          
        </div>

        <div className={styles.dateForm}>
            <label htmlFor="title">Data</label>
            <BasicDatePicker />
        </div>

        <div className={styles.buttonSave}>
            <ButtonSave />
        </div>
      </>
    )
}