/**
 * Components that make queries delegate the query-making logic to a
 * `.resource.ts` function. This component leverages the`usePatient`
 * hook to fetch a patient from the backend. When the button is clicked,
 * the `patientName` variable is set to "test", which triggers the hook
 * to make a request to the backend. The hook returns patient data from the
 * request, which is then rendered in the UI. The hook also returns a boolean
 * property called `isLoading` that is set to true while the request is being
 * made. This component renders a loading indicator while `isLoading` is true.
 */

import React, { useState } from 'react';
import { Button, InlineLoading, Tile } from '@carbon/react';
import { useTranslation } from 'react-i18next';
import { usePatient } from '../hooks/usePatient';

function PatientGetter() {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');
    const [patientName, setPatientName] = useState('');
    const { patient, isLoading } = usePatient(patientName);

    const handleSearch = (e) => {
        e.preventDefault();
        setPatientName(inputValue.trim());
    };

    return (
        <div
            style={{
                maxWidth: '800px',
                margin: '20px auto',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
        >
            <h5>{t('dataFetching', 'Data fetching')}</h5>
            <p>{t('patientGetterExplainer', 'Enter a patient name and search to fetch a patient from the backend')}:</p>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder={t('patientName', 'Patient name')}
                    style={{ flex: 1, padding: '8px', fontSize: '16px', borderRadius: '3px', border: '1px solid #ccc' }}
                    aria-label={t('patientName', 'Patient name')}
                />
                <Button type="submit" disabled={!inputValue || isLoading}>
                    {t('search', 'Search')}
                </Button>
            </form>
            {isLoading ? <InlineLoading description={t('loading', 'Loading') + '...'} role="progressbar" /> : null}
            {patient ? (
                <Tile style={{ marginTop: '20px' }}>
                    {Array.isArray(patient.name) && patient.name.length > 0
                        ? `${patient.name[0].given} ${patient.name[0].family} / ${patient.gender} / ${patient.birthDate}`
                        : t('noPatientName', 'No patient name available')}
                </Tile>
            ) :
                patientName && !isLoading ? (
                    <div style={{ color: '#c62828', marginTop: '20px' }}>
                        {t('noPatientFound', 'No patient found.')}
                    </div>
                ) : null
            }
        </div>
    );
}

export default PatientGetter;