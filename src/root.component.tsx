/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Dhti` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Dhti from './dhti/dhti.component';
import styles from './root.scss';

const Root: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h3 className={styles.welcome}>{t('welcomeText', 'Welcome to the Dhti- O3 Template app')}</h3>
      <p className={styles.explainer}>
        {t('explainer', 'The following examples demonstrate some key features of the Dhti - O3 framework')}.
      </p>
      <Dhti />
    </div>
  );
};

export default Root;
