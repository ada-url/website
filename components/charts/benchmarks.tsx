'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'

type BarLabelProps = {
  x: number
  y: number
  width: number
  value: number
}
function BarLabel({ x, y, width, value }: BarLabelProps) {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill='#666'
      textAnchor='middle'
      dy={-6}
      className='text-sm font-bold'
    >{`${value}ns`}</text>
  )
}

export type BenchmarkChartProps = {
  data: {
    name: string
    value: number
  }[]
}

export function BenchmarkChart({ data }: BenchmarkChartProps) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart width={150} height={40} data={data} layout='vertical' barSize={40}>
        <Bar
          dataKey='value'
          fill='#8884d8'
          radius={[0, 10, 10, 0]}
          label={BarLabel}
          legendType='none'
          unit='ns'
        />
        <XAxis type='number' hide />
        <YAxis type='category' width={150} dataKey='name' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5' horizontal={false} />
      </BarChart>
    </ResponsiveContainer>
  )
}
