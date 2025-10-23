import { IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
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

const ProfileItem: React.FC<ProfileItemProps> = ({ MaHS, Name, CreatedDate, key }: ProfileItemProps) => {
  return (
    <IonGrid key={key}>
      <IonRow className="ion-align-items-center ion-text-nowrap">
        <IonCol size="auto"> <IonLabel color="primary">MÃ HS: {MaHS}</IonLabel> </IonCol> <IonCol size="auto">
          <IonLabel>{Name}</IonLabel> </IonCol> <IonCol size="auto"> <IonLabel>Ngày tạo: {CreatedDate}</IonLabel>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
};

export default ProfileItem;
