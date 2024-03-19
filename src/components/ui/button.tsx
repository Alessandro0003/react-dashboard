import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import styles from './button.module.css'

export function ButtonSave() {
  return (
    <div className={styles.button}>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Salvar</Button>
      </Stack>
    </div>
  );
}