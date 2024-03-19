import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AddIcon from '@mui/icons-material/Add'
import { CreateMetricsForm } from './create-metrics-form'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid none',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

export function ModalCreateMetrics() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <div title="Adicione uma metrica">
        <AddIcon onClick={handleOpen} sx={{ cursor: 'pointer'}}/>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800 }}>
          <CreateMetricsForm />
        </Box>
      </Modal>
    </div>
  )
}