import {
  IonPage
} from '@ionic/react';
import React from 'react';
import './DashboardFilter.scss';

interface DashboardFilterProps { }

export type StatusCardItem = {
  key: string | number;
  label: string;
  count: number;
  icon?: string;
};


const DashboardFilter: React.FC<DashboardFilterProps> = () => {
  return (
    <IonPage>
      kajdfklasjkfljslj
    </IonPage>
  );
};

export default React.memo(DashboardFilter);