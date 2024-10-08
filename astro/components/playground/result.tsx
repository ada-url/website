import * as Tabs from '@radix-ui/react-tabs'
import { Terminal } from 'lucide-react'
import styles from './styles/result.module.css'

export type WASMResponse =
  | {
      components: {
        hash_start: number
        host_end: number
        host_start: number
        pathname_start: number
        port: number
        protocol_end: number
        search_start: number
        username_end: number
      }
      href: string
      result: 'success'
      type: number
    }
  | {
      result: 'fail'
    }

function getDiagram(props: WASMResponse) {
  if (props.result === 'fail') {
    return null
  }

  const { components } = props

  const omitted = 4294967295
  const lines: string[][] = [props.href.split(''), new Array(props.href.length).fill(' ')]

  const omittable_values = [components.hash_start, components.search_start]

  for (const value of omittable_values) {
    if (value !== omitted) {
      lines[1][value] = '|'
    }
  }

  const non_omittable_values = [
    components.pathname_start,
    components.host_end,
    components.host_start,
    components.username_end,
    components.protocol_end,
  ]

  for (const value of non_omittable_values) {
    if (value !== props.href.length) {
      lines[1][value] = '|'
    }
  }

  const line2 = lines[1].slice()
  if (components.hash_start !== omitted) {
    line2[components.hash_start] = '`'

    for (let i = components.hash_start + 1; i < line2.length; i++) {
      line2[i] = '-'
    }
    line2.push(` hash_start ${components.hash_start}`)
    lines.push(line2)
  }

  const line3 = lines[1].slice()
  if (components.search_start !== omitted) {
    line3[components.search_start] = '`'

    for (let i = components.search_start + 1; i < line3.length; i++) {
      line3[i] = '-'
    }
    line3.push(` search_start ${components.search_start}`)
    lines.push(line3)
  }

  const line4 = lines[1].slice()
  if (components.pathname_start !== props.href.length) {
    line4[components.pathname_start] = '`'
    for (let i = components.pathname_start + 1; i < line4.length; i++) {
      line4[i] = '-'
    }
    line4.push(` pathname_start ${components.pathname_start}`)
    lines.push(line4)
  }

  const line5 = lines[1].slice()
  if (components.host_end !== props.href.length) {
    line5[components.host_end] = '`'

    for (let i = components.host_end + 1; i < line5.length; i++) {
      line5[i] = '-'
    }
    line5.push(` host_end ${components.host_end}`)
    lines.push(line5)
  }

  const line6 = lines[1].slice()
  if (components.host_start !== props.href.length) {
    line6[components.host_start] = '`'

    for (let i = components.host_start + 1; i < line6.length; i++) {
      line6[i] = '-'
    }

    line6.push(` host_start ${components.host_start}`)
    lines.push(line6)
  }

  const line7: string[] = lines[1].slice()
  if (components.username_end !== props.href.length) {
    line7[components.username_end] = '`'

    for (let i = components.username_end + 1; i < line7.length; i++) {
      line7[i] = '-'
    }
    line7.push(` username_end ${components.username_end}`)
    lines.push(line7)
  }

  const line8 = lines[1].slice()
  if (components.protocol_end !== props.href.length) {
    line8[components.protocol_end] = '`'

    for (let i = components.protocol_end + 1; i < line8.length; i++) {
      line8[i] = '-'
    }
    line8.push(` protocol_end ${components.protocol_end}`)
    lines.push(line8)
  }
  return lines.map((line) => line.join('')).join('\n')
}

export default function ParsingResult(props: WASMResponse) {
  const alert = (
    <div role='alert' className={styles.Alert}>
      <Terminal className={styles.Terminal} />
      <h5 className={styles.AlertTitle}>
        {props.result === 'success' ? 'Parsing successful!' : 'Parsing failed!'}
      </h5>
      <p className={styles.AlertDescription}>
        {props.result === 'success'
          ? `Input resolved into "${props.href}"`
          : 'We could not parse this input. It is invalid.'}
      </p>
    </div>
  )

  if (props.result !== 'success') {
    return alert
  }

  return (
    <>
      {alert}

      <Tabs.Root defaultValue='diagram' className={styles.Root}>
        <Tabs.List className={styles.TabsList}>
          <Tabs.Trigger className={styles.TabsTrigger} value='diagram'>
            Diagram
          </Tabs.Trigger>
          <Tabs.Trigger className={styles.TabsTrigger} value='raw'>
            Raw Output
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className={styles.TabsContent} value='diagram'>
          <pre>{getDiagram(props)}</pre>
        </Tabs.Content>
        <Tabs.Content className={styles.TabsContent} value='raw'>
          <pre>{JSON.stringify(props, null, 2)}</pre>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
