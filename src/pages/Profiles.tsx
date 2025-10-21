import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { fileTrayOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from '../data/connect';
import { setIsLoggedIn, setUsername } from '../data/user/user.actions';
import Dashboard from './Dashboard';
import Profile from './Profile';
import './Profiles.scss';

interface ProfilesProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

const Profiles: React.FC<ProfilesProps> = ({
  setIsLoggedIn,
  setUsername: setUsernameAction,
}) => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/dashboard" />
          {/*
          Use the render method to reduce the number of renders your component will have due to a route change.

          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
          <Route path="/profiles/dashboard" render={() => <Dashboard />} exact={true} />
          <Route path="/profiles/camera" render={() => (<h1>camera</h1>)} exact={true} />
          <Route path="/profiles/profile" render={() => <Profile />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/profiles/dashboard">
            <IonIcon icon={fileTrayOutline} />
            <IonLabel>Listen now</IonLabel>
          </IonTabButton>

          <IonTabButton tab="camera" href="/profiles/camera">
            <IonIcon icon={fileTrayOutline} />
            <IonLabel>camera</IonLabel>
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
  mapDispatchToProps: {
    setIsLoggedIn,
    setUsername,
  },
  component: Profiles,
});
