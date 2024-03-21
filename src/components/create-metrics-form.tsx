import styles from './create-metrics-form.module.css'
import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { ButtonSave } from './ui/button'
import { Loader2 } from 'lucide-react'

const createMetricsSchema = z.object({
    timestamp: z.date(),
    angular: z.number(),
    react: z.number(),
    vue: z.number()
})

type CreateMetricsSchema = z.infer<typeof createMetricsSchema>

export function CreateMetricsForm() {
    const queryClient = useQueryClient()
    
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateMetricsSchema>()

    const { mutateAsync } = useMutation<void, Error, CreateMetricsSchema>({
        mutationFn: async (formData) => {
            //delay 2
            await new Promise(resolve => setTimeout(resolve, 2000))

            await fetch('http://localhost:3001/frameworks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-metrics']
            })
        }
    })

    const onSubmit = async (data: CreateMetricsSchema) => {
        await mutateAsync(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.titleForm}>
                <h2>Adicionar registro</h2>
                <div className={styles.subTitleForm}>
                    <span>Preencha os campos abaixo e clique em salvar</span>
                </div>
            </div>
            <div className={styles.formColum}>
                <div>
                    <label htmlFor="react" className={styles.labelFrameworks}>React</label>
                    <input
                        {...register('react', { required: true })}
                        id="react"
                        type="number"
                        min={0}
                        max={9}
                    />
                    {errors.react && <span className={styles.error}>Forneça um dado</span>}
                </div>
                <div>
                    <label htmlFor="angular"  className={styles.labelFrameworks}>Angular</label>
                    <input
                        {...register('angular', { required: true })}
                        id="angular"
                        type="number"
                        min={0}
                        max={9}
                    />
                    {errors.angular && <span className={styles.error}>Forneça um dado</span>}
                </div>
                <div >
                    <label htmlFor="vue"  className={styles.labelFrameworks}>Vue</label>
                    <input
                        {...register('vue', { required: true })}
                        id="vue"
                        type="number"
                        min={0}
                        max={9}
                    />
                    {errors.vue && <span className={styles.error}>Forneça um dado</span>}
                </div>
            </div>
                
            <div className={styles.dateForm}>
                <label htmlFor="timestamp">Data</label>
                <input
                    className={styles.dateInput}
                    id='timestamp'
                    type='date'
                    {...register('timestamp', { required: true })}
                />  
                 {errors.timestamp && <span className={styles.error}>Forneça um data</span>}
            </div>
            <div className={styles.buttonSave}>
                <ButtonSave type='submit' disabled={isSubmitting}>
                    {isSubmitting? <Loader2 className={styles.loaderIcon} /> : ''}
                    Salvar
                </ButtonSave>
            </div>
        </form>
    )
}