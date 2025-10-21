import { IonCard, IonCardContent, IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
import React from 'react';
import './ProfileItem.scss';

export interface ProfileItemType {
  MaHS: string;
  Name: string;
  CreatedDate: string;
  key: string;
  state: string;
}


export interface ProfileItemProps extends ProfileItemType { }

const tem: React.FC<ProfileItemProps> = ({ MaHS, Name, CreatedDate, state, key }: ProfileItemProps) => {
  return (
    <IonCard className="full-width-card no-shadow">
      <IonGrid>
        <IonRow className="ion-align-items-center">
          <IonCol size="12" sizeMd="8" sizeLg="8">
            <IonCardContent>
              <IonLabel>
                MÃ HS: {MaHS}
              </IonLabel>
              <br />
              <IonLabel>
                {Name}
              </IonLabel>
              <br />
              <IonLabel>
                Ngày tạo: {CreatedDate}
              </IonLabel>
            </IonCardContent>
          </IonCol>
          <IonCol size="12" sizeMd="4" sizeLg="4">
            <IonCardContent>
              <IonLabel>
                Trạng thái: {state}
              </IonLabel>
            </IonCardContent>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>);
};

export default tem;
