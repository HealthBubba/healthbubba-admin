import React from 'react'

export default function ({currentHealth}) {
    return (
        <div className='p-4 rounded-xl space-y-5 bg-gray-100 border'>
            <div className="space-y-2" >
                <div className='p-2 rounded-lg bg-gray-200'>
                    <p className='font-semibold' >Current Health Condition</p>
                </div>

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
                                <td>{current_health?.current_medical_conditions.join(', ') || 'None'}</td>
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
        </div>
    )
}
