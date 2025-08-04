'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

// Dummy sales data for each day of the past week (including today)
const dailySalesData = [
  { date: 'Jul 29', sales: 400 },
  { date: 'Jul 30', sales: 650 },
  { date: 'Jul 31', sales: 580 },
  { date: 'Aug 01', sales: 720 },
  { date: 'Aug 02', sales: 900 },
  { date: 'Aug 03', sales: 850 },
  { date: 'Aug 04', sales: 970 }, // current day
]

export function DailySalesBarChart() {
  return (
    <Card className="min-w-[300px] w-[375px] max-h-[330px]">
      <CardHeader>
        <CardTitle>Daily Sales (Past Week)</CardTitle>
      </CardHeader>
      <CardContent className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailySalesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

