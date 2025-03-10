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
    const [state, setState] = useState({
        verified: 0,
        unverified: 0,
        pending: 0
    })

    const [filter, setFilter] = useState(filters.year)

    const options = useMemo(() => {
        return {
            options: {
                chart: {
                    id: "consultants-bar",
                    type: "bar",
                },
                colors: ['#6667FA', '#CC27DD', '#546E7A', '#E91E63', '#FF9800']
            },
            series: [{
                data: [
                    {
                        x: "Unverified",
                        y: state.unverified,
                    },
                    {
                        x: "Pending Verification",
                        y: state.pending,
                    },
                    {
                        x: "Verified",
                        y: state.verified,
                    },
                ]
            }],
        }
    }, [dates, state])

    const items = useCallback(() => {
        axios.get(route('dashboard.trends.consultants', {filter}))
            .then(val => setState(val.data))
    }, [filter])

    useEffect(() => {
        items()
    }, [filter])

    return (
        <div className='space-y-3' >
            <div className="md:flex justify-between items-center">
                <h3 className='font-semibold'>Consultants</h3>

                {/* <div>
                    <button className="btn card p-2 text-xs font-semibold"><FilePlusIcon /> Export PDF</button>
                </div> */}
            </div>

            <div>
                <Chart
                    options={options.options}
                    series={options.series}
                    height={200}
                    type='bar'
                />
            </div>
        </div>
    )
}
