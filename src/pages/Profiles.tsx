import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, documentOutline, grid } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import CameraComponent from './CameraComponent';
import Dashboard from './Dashboard';
import DashboardFilter from './DashboardFilter';
import ProfileDetail from './ProfileDetail';
import ProfileList from './ProfileList';
import './Profiles.scss';

interface ProfilesProps { }

const Profiles: React.FC<ProfilesProps> = () => {
  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/tabs/profiles/" to="/tabs/profiles/dashboard" />
            <Route path="/tabs/profiles/dashboard" render={() => <Dashboard />} exact={true} />
            <Route path="/tabs/profiles/dashboard/filters" component={DashboardFilter} />

            <Route path="/tabs/profiles/camera" render={() => (<CameraComponent />)} exact={true} />
            <Route path="/tabs/profiles/profile" render={() => <ProfileList />} exact={true} />
            <Route path="/tabs/profiles/profile/:id" component={ProfileDetail} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/tabs/profiles/dashboard">
              <IonIcon icon={grid} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>

            <IonTabButton tab="camera" href="/tabs/profiles/camera" >
              <IonIcon icon={add} className="circle-icon-tab" />
            </IonTabButton>

            <IonTabButton tab="profile" href="/tabs/profiles/profile">
              <IonIcon icon={documentOutline} />
              <IonLabel>profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default React.memo(Profiles); 