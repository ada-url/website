import PlaygroundForm from './form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Playground',
  description: 'A playground to test and run Ada URL parser',
}

export default function Playground() {
  return <PlaygroundForm />
}
