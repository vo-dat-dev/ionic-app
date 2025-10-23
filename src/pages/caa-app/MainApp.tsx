import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, documentOutline, grid } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import CameraComponent from '../CameraComponent';
import Dashboard from '../Dashboard';
import DashboardFilter from '../DashboardFilter';
import ProfileDetail from '../ProfileDetail';
import ProfileList from '../ProfileList';

interface MainTabsProps { }

const MainApp: React.FC<MainTabsProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/apps"></IonBackButton>
          </IonButtons>
          <IonTitle slot='start'>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonReactRouter>
          <IonTabs>

            <IonRouterOutlet>
              <Route path="/caa/dashboard" component={Dashboard} exact={true} />
              <Route path="/caa/dashboard/filters" component={DashboardFilter} />
              <Route path="/caa/camera" render={() => (<CameraComponent />)} exact={true} />
              <Route path="/caa/profiles" render={() => <ProfileList />} exact={true} />
              <Route path="/caa/profiles/:id" component={ProfileDetail} exact={true} />
              <Redirect exact path="/caa" to="/caa/dashboard" />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="dashboard" href="/caa/dashboard">
                <IonIcon icon={grid} />
                <IonLabel>Dashboard</IonLabel>
              </IonTabButton>

              <IonTabButton tab="camera" href="/caa/camera" >
                <IonIcon icon={add}
                  className="ion-text-center ion-align-self-center"
                  style={{
                    backgroundColor: 'var(--ion-color-primary)',
                    borderRadius: '50%',
                    padding: '8px',
                    color: 'white',
                    fontSize: '28px'
                  }}
                />
              </IonTabButton>

              <IonTabButton tab="profile" href="/caa/profiles">
                <IonIcon icon={documentOutline} />
                <IonLabel>profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

export default MainApp;
