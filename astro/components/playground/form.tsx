import WASM from '@/lib/wasm/wasm.js'
import { Loader2 } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import ParsingResult, { type WASMResponse } from './result'
import styles from './styles/form.module.css'
import { useToast } from './ui/use-toast'

let wasm: {
  parse: (url: string) => WASMResponse & { delete: VoidFunction }
}

function toJS(obj: Record<string, any>): any {
  const result: Record<string, any> = {}
  for (const key of Object.keys(obj.__proto__)) {
    result[key] = typeof obj[key] === 'object' ? toJS(obj[key]) : obj[key]
  }
  return result
}

export default function PlaygroundForm() {
  //const router = useRouter()
  const { toast } = useToast()
  const { handleSubmit, register, formState } = useForm<{ url: string }>()
  const [output, setOutput] = useState<WASMResponse | undefined>()
  const searchParams = useMemo<URLSearchParams>(
    () => new URLSearchParams(window.location.search),
    [],
  )
  const defaultValue = useMemo<string>(() => {
    const search = searchParams.get('url')
    if (search) {
      return decodeURI(search)
    }
    return window.location.href
  }, [searchParams.get])
  const onSubmit = useCallback(
    async (data: { url: string }) => {
      try {
        wasm ??= await WASM()
        const result = wasm.parse(data.url)
        setOutput(toJS(result))
        result.delete()
        history.replaceState({}, '', `/playground?url=${encodeURIComponent(data.url)}`)
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: 'An error occurred',
            description: error.message,
            variant: 'destructive',
          })
        }
        setOutput(undefined)
      }
    },
    [toast],
  )

  useEffect(() => {
    onSubmit({ url: defaultValue })
  }, [defaultValue, onSubmit])

  return (
    <div className={`${styles.formContainer} not-content`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          required
          placeholder='Please enter a valid URL to parse through Ada'
          defaultValue={defaultValue}
          {...register('url', { required: true })}
          className={styles.Input}
        />

        <button type='button' disabled={formState.isLoading} className={styles.Button}>
          {formState.isLoading && <Loader2 className={styles.loader} />}
          Parse
        </button>
      </form>

      {output !== undefined ? <ParsingResult {...output} /> : null}
    </div>
  )
}
