import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonTab,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
  IonLabel,
} from '@ionic/react';
import { Redirect, Route, useHistory } from 'react-router';
import './Dashboard.scss';
import { setIsLoggedIn, setUsername } from '../data/user/user.actions';
import { connect } from '../data/connect';
import { fileTrayOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

interface DashboardProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <IonTitle>lkasdjflsadjfkljklajfkljsl</IonTitle>
  );
};

export default connect<{}, {}, DashboardProps>({
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
  },
  component: Dashboard,
});
