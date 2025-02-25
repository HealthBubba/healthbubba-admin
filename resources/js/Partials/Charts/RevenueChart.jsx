import FilePlusIcon from '@/Icons/FilePlusIcon';
import { router } from '@inertiajs/react';
import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Chart from "react-apexcharts";

const filters = {
    year: 365,
    half_year: 180,
    month: 30,
    week: 7
}

export default function () {

    const [dates, setDates] = useState([])
    const [transactions, setTransactions] = useState(0)

    const [filter, setFilter] = useState(filters.year)

    const options = useMemo(() => {
        return {
            options: {
                chart: {
                    id: "basic-bar",
                    type: "area",
                    toolbar: {
                        show: true,
                    },
                },
                xaxis: {
                    categories: dates,
                    label: {
                        datetimeFormatter: {
                            year: 'yyyy',
                            month: "MMM 'yy",
                            day: 'dd MMM',
                            hour: 'HH:mm',
                            minute: 'HH:mm:ss',
                            second: 'HH:mm:ss',
                        },
                    }
                },
                stroke: {
                    curve: 'smooth',
                },
                colors: ['#6667FA', '#CC27DD', '#546E7A', '#E91E63', '#FF9800']
            },
            series: [
                {
                    name: "Revenue",
                    data: transactions,
                }
            ],
        }
    }, [dates, transactions])

    const items = useCallback(() => {
        axios.get(route('dashboard.trends.revenue', {filter}))
            .then(val => {
                setDates(val.data.transactions.map(transaction => transaction.date))
                setTransactions(val.data.transactions.map(transaction => transaction.aggregate))
            })
    }, [filter])

    useEffect(() => {
        items()
    }, [filter])

    return (
        <div className='space-y-3' >
            <div className="md:flex justify-between items-center">
                <h3 className='font-semibold'>Revenue</h3>

                {/* <div>
                    <button className="btn card p-2 text-xs font-semibold"><FilePlusIcon /> Export PDF</button>
                </div> */}
            </div>

            <div className='flex flex-wrap md:space-x-2 '>
                <button onClick={() => setFilter(filters.year)} className={`btn card hover:border-[#A1A1AA] hover:border p-2 text-xs ${filter == filters.year ? 'border border-[#A1A1AA] font-semibold' : 'border-0 text-muted' }`}>12 Months</button>
                <button onClick={() => setFilter(filters.half_year)} className={`btn card  hover:border-[#A1A1AA] hover:border p-2 text-xs ${filter == filters.half_year ? 'border border-[#A1A1AA] font-semibold' : 'border-0 text-muted' }`}>6 Months</button>
                <button onClick={() => setFilter(filters.month)} className={`btn card hover:border-[#A1A1AA] hover:border p-2 text-xs ${filter == filters.month ? 'border border-[#A1A1AA] font-semibold' : 'border-0 text-muted' }`}>30 Days</button>
                <button onClick={() => setFilter(filters.week)} className={`btn card hover:border-[#A1A1AA] hover:border p-2 text-xs ${filter == filters.week ? 'border border-[#A1A1AA] font-semibold' : 'border-0 text-muted' }`}>7 Days</button>
            </div>

            <div>
                <Chart
                    options={options.options}
                    series={options.series}
                    height={200}
                    type='area'
                />
            </div>
        </div>
    )
}
