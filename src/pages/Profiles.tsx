import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, fileTrayOutline, grid } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from '../data/connect';
import { setIsLoggedIn, setUsername } from '../data/user/user.actions';
import Dashboard from './Dashboard';
import ProfileList from './ProfileList';
import './Profiles.scss';

interface ProfilesProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

const Profiles: React.FC<ProfilesProps> = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="profiles" to="/profiles/dashboard" />
          <Route path="/profiles/dashboard" render={() => <Dashboard />} exact={true} />
          <Route path="/profiles/camera" render={() => (<h1>camera</h1>)} exact={true} />
          <Route path="/profiles/profile" render={() => <ProfileList />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/profiles/dashboard">
            <IonIcon icon={grid} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>

          <IonTabButton tab="camera" href="/profiles/camera" >
            <IonIcon icon={add} className="circle-icon-tab" />
          </IonTabButton>

          <IonTabButton tab="profile" href="/profiles/profile">
            <IonIcon icon={fileTrayOutline} />
            <IonLabel>profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>);
};

export default connect<{}, {}, ProfilesProps>({
  component: Profiles,
});
