import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRouterLink, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { fileTray, home } from 'ionicons/icons';
import React from 'react';

interface MainTabsProps { }

interface AppType {
  key: number | string,
  icon: string,
  name: string,
  path: string
}

const RootApp: React.FC<MainTabsProps> = () => {

  const apps = [
    { key: 1, icon: home, name: 'Caa', path: 'caa' },
    { key: 2, icon: fileTray, name: 'Thẩm định', path: 'tham-dinh' },
  ];

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>VB Workspace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid fixed={true}>
          <IonRow>
            {apps.map(({ icon, name, path, key }: AppType) =>
              <IonRouterLink routerLink={path} key={key}>
                <IonCol size="6">
                  <IonCard>
                    <IonCardHeader className="ion-text-center ion-align-items-center">
                      <IonIcon icon={icon} size="large" />
                    </IonCardHeader>
                    <IonCardContent className="ion-text-center">
                      <IonText>{name}</IonText>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRouterLink>
            )}
          </IonRow>
        </IonGrid>
      </IonContent >
    </IonPage >
  );
};

export default RootApp;
