import { IonItem, IonList, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonText } from '@ionic/react';
import React, { useState } from 'react';
import './Profile.scss';
import ProfileItem, { ProfileItemType } from './ProfileItem';

interface ProfileProps { }

const ProfileList: React.FC<ProfileProps> = () => {
  const [segmented, setSegmented] = useState<string>('waiting');

  const handleSegmentChange = (e: CustomEvent) => {
    setSegmented(e.detail.value);
  };

  const profiles: ProfileItemType[] = [
    {
      MaHS: "HS20250915-19",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "1",
      state: "Active"  // Example state
    },
    {
      MaHS: "HS20250915-21",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "2",
      state: "Inactive"  // Example state
    },
    {
      MaHS: "HS20250915-22",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "3",
      state: "Active"  // Example state
    },
    {
      MaHS: "HS20250915-23",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "4",
      state: "Pending"  // Example state
    },
    {
      MaHS: "HS20250915-24",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "5",
      state: "Active"  // Example state
    },
    {
      MaHS: "HS20250915-25",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "6",
      state: "Inactive"  // Example state
    }
  ];


  return (
    <IonPage>
      <IonSegment value={segmented} onIonChange={handleSegmentChange}>
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
            {profiles.map((profile: ProfileItemType) => (
              <IonItem routerLink={`/tabs/profiles/profile/${profile.key}`}>
                <ProfileItem {...profile} />
              </IonItem>
            ))}
          </IonList>
        </IonSegmentContent>
        <IonSegmentContent id="draft">
          <IonList>
            {profiles.map((profile: ProfileItemType) => (
              <IonItem routerLink={`/tabs/profiles/profile/${profile.key}`}>
                <ProfileItem {...profile} />
              </IonItem>
            ))}
          </IonList>
        </IonSegmentContent>
        <IonSegmentContent id="returned">
          <IonList>
            {profiles.map((profile: ProfileItemType) => (
              <IonItem routerLink={`/tabs/profiles/profile/${profile.key}`}>
                <ProfileItem {...profile} />
              </IonItem>
            ))}
          </IonList>
        </IonSegmentContent>
        <IonSegmentContent id="approved">
          <IonList>
            {profiles.map((profile: ProfileItemType) => (
              <IonItem routerLink={`/tabs/profiles/profile/${profile.key}`}>
                <ProfileItem {...profile} />
              </IonItem>
            ))}
          </IonList>
        </IonSegmentContent>
      </IonSegmentView>
    </IonPage>
  );
};

export default React.memo(ProfileList);
