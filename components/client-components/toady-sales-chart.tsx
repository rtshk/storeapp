'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const dummySalesData = [
  { time: '08:00', sales: 120 },
  { time: '09:00', sales: 300 },
  { time: '10:00', sales: 450 },
  { time: '11:00', sales: 500 },
  { time: '12:00', sales: 600 },
  { time: '13:00', sales: 750 },
  { time: '14:00', sales: 800 },
  { time: '15:00', sales: 950 },
  { time: '16:00', sales: 1000 },
  { time: '17:00', sales: 1100 },
]

export function SalesChart() {
  return (
    <Card className="min-w-[300px] w-[375px] max-h-[330px]">
      <CardHeader>
        <CardTitle>Sales(Today)</CardTitle>
      </CardHeader>
      <CardContent className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dummySalesData}>
            <XAxis dataKey="time"/>
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#4f46e5"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

