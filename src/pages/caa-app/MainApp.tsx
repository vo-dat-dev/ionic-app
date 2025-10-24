import { IonPage, IonRouterOutlet } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router';
import MainTabs from './MainTab';

interface MainTabsProps { }

const MainApp: React.FC<MainTabsProps> = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route path="/caa" exact render={() => <MainTabs />} />
      </IonRouterOutlet>
    </IonPage>
  );
};

export default MainApp;
