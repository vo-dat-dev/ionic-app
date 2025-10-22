import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { checkmarkCircleOutline, documentText, hourglass, refresh } from 'ionicons/icons';
import React from 'react';
import './Dashboard.scss';

interface DashboardProps { }

export type StatusCardItem = {
  key: string | number;
  label: string;
  count: number;
  icon?: string;
};


const Dashboard: React.FC<DashboardProps> = () => {
  const statusCards: StatusCardItem[] = [
    {
      key: 1,
      label: "Chờ duyệt",
      count: 12,
      icon: hourglass
    },
    {
      key: 2,
      label: "Đã duyệt",
      count: 99,
      icon: checkmarkCircleOutline
    },
    {
      key: 3,
      label: "Trả về",
      count: 5,
      icon: refresh
    },
    {
      key: 4,
      label: "Hồ sơ mới",
      count: 36,
      icon: documentText
    }
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profiles"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid fixed>
          <IonRow>
            {statusCards?.map((item: StatusCardItem) => (
              <IonCol size="6" size-md="6" key={item.key}>
                <IonCard style={{ padding: '8px' }}>
                  <IonCardContent style={{ padding: '4px' }}>
                    <IonRow className="ion-align-items-center" style={{ display: "flex", alignItems: "center" }}>
                      <IonCol size="4" className="ion-text-center">
                        <div className="icon-container">
                          <IonIcon icon={item.icon} />
                        </div>
                      </IonCol>
                      <IonCol size="8">
                        <IonLabel style={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                          {item.count}
                        </IonLabel>
                        <br />
                        <IonLabel style={{ fontSize: '14px', color: 'gray', whiteSpace: 'nowrap' }}>
                          {item.label}
                        </IonLabel>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>

                </IonCard>

              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Dashboard);