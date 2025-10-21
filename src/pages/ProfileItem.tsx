import { IonCol, IonGrid, IonRow, IonText } from '@ionic/react';
import React from 'react';
import './ProfileItem.scss';

export interface ProfileItemType {
  Id: string,
  Name: string,
  Created: Date
}


export interface ProfileItemProps extends ProfileItemType { }

const ProfileItem: React.FC<ProfileItemProps> = ({ Id, Name, Created }: ProfileItemProps) => {
  return (
    <>
      <IonGrid inert={true}>
        <IonRow>
          <IonCol offset="6" offset-md="4" offset-lg="2">
            <IonText>
              {`Ma HS: ${Id}`}
            </IonText>
            <IonText>
              {`${Name}`}
            </IonText>
            <IonText>
              {/* {`${getDate(Created)}`} */}
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default ProfileItem;
