import React from 'react'
import { Tab } from '@headlessui/react';
import Pagination from '@/Components/Pagination';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { router } from '@inertiajs/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ({currentHealth, pastConditions}) {

    const [categories] = React.useState({
        'Current Health': currentHealth,
        'Past Conditions': pastConditions,
    });

    return (
        <>
            {/* <Tab.Group>
                <Tab.List className="flex space-x-1 border-b">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'px-4 py-2 text-sm font-medium leading-5 focus:outline-none',
                                    selected
                                        ? 'border-b-2 border-primary text-primary'
                                        : 'text-muted hover:text-primary'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="overflow-x-auto">
                            <table className='border-b'>
                                <thead>
                                    <tr>
                                        <th>Activity Level</th>
                                        <th>Medical Conditions</th>
                                        <th>Lifestyle</th>
                                        <th>Last Updated</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentHealth?.map((current_health) => (
                                        <tr key={current_health.id}>
                                            <td>{current_health?.physical_activity_level || 'Not specified'}</td>
                                            <td>{current_health?.current_medical_conditions || 'None'}</td>
                                            <td>
                                                <div>Smokes: {current_health?.smokes ? 'Yes' : 'No'}</div>
                                                <div>Drinks: {current_health?.drinks ? 'Yes' : 'No'}</div>
                                            </td>
                                            <td>{current_health?.updated_at ? new Date(current_health.updated_at).toLocaleDateString() : 'Never'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {currentHealth?.length < 1 && (
                                <p className='text-center py-3'>No records found</p>
                            )}
                        </div>
                    </Tab.Panel>

                    <Tab.Panel>
                        <div className="overflow-x-auto">
                            <table className='border-b'>
                                <thead>
                                    <tr>
                                        <th>Treatment Status</th>
                                        <th>Medical History</th>
                                        <th>Allergies</th>
                                        <th>Last Checkup</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pastConditions?.map((past_condition) => (
                                        <tr key={past_condition.id}>
                                            <td>
                                                <div>Under Treatment: {past_condition?.is_under_treatment ? 'Yes' : 'No'}</div>
                                                <div className="text-sm text-muted">{past_condition?.treatment_conditions || 'None'}</div>
                                            </td>
                                            <td>
                                                <div>Heart/BP Issues: {past_condition?.has_heart_or_bp_issues ? 'Yes' : 'No'}</div>
                                                <div>Asthma: {past_condition?.has_asthma ? 'Yes' : 'No'}</div>
                                                <div>Seizure History: {past_condition?.has_seizure_history ? 'Yes' : 'No'}</div>
                                            </td>
                                            <td>{past_condition?.has_allergies ? past_condition.allergies : 'None'}</td>
                                            <td>{past_condition?.last_medical_checkup_date || 'Not available'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {pastConditions?.length < 1 && (
                                <p className='text-center py-3'>No records found</p>
                            )}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group> */}
            
        </>
    )
}
