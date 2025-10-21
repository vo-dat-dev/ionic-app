import { IonItem, IonLabel, IonList, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonText } from '@ionic/react';
import React, { useState } from 'react';
import { connect } from '../data/connect';
import { setIsLoggedIn, setUsername } from '../data/user/user.actions';
import './Profile.scss';
import ProfileItem, { ProfileItemProps, ProfileItemType } from './ProfileItem';

interface ProfileProps {
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}


const Profile: React.FC<ProfileProps> = () => {
  const [segmentValue, setSegmentValue] = useState<string>('waiting');

  const handleSegmentChange = (e: CustomEvent) => {
    setSegmentValue(e.detail.value);
  };
  const mockData: ProfileItemProps[] = [
    { Id: '1', Name: 'Pokémon Yellow', Created: new Date('1998-10-18') },
    { Id: '2', Name: 'Mega Man X', Created: new Date('1993-08-06') },
    { Id: '3', Name: 'The Legend of Zelda', Created: new Date('1986-02-21') },
    { Id: '4', Name: 'Pac-Man', Created: new Date('1980-05-22') },
    { Id: '5', Name: 'Super Mario World', Created: new Date('1990-08-23') },
  ];

  return (
    <>
      <IonSegment value={segmentValue} onIonChange={handleSegmentChange}>
        <IonSegmentButton value="waiting" contentId="waiting">
          <IonText>Chờ duyệt</IonText>
        </IonSegmentButton>
        <IonSegmentButton value="draft" contentId="draft">
          <IonText>Lưu nháp</IonText>
        </IonSegmentButton>
        <IonSegmentButton value="returned" contentId="returned">
          <IonText>Trả về</IonText>
        </IonSegmentButton>
        <IonSegmentButton value="approved" contentId="approved">
          <IonText>Đã duyệt</IonText>
        </IonSegmentButton>
      </IonSegment>
      <IonSearchbar />
      <IonSegmentView>
        <IonSegmentContent id="waiting">
          <IonList>
            {mockData.map((game: ProfileItemType) => <ProfileItem {...game} />)}
          </IonList>        </IonSegmentContent>
        <IonSegmentContent id="draft">
          <IonList>
            <IonItem>
              <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Super Mario World</IonLabel>
            </IonItem>
          </IonList>
        </IonSegmentContent>
        <IonSegmentContent id="returned">
          Nội dung Trả về
        </IonSegmentContent>
        <IonSegmentContent id="approved">
          Nội dung Đã duyệt
        </IonSegmentContent>
      </IonSegmentView>
    </>
  );
};

export default connect<{}, {}, ProfileProps>({
  component: Profile,
});
