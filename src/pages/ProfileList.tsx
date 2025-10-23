import { IonBadge, IonCol, IonGrid, IonIcon, IonItem, IonList, IonPage, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonText } from '@ionic/react';
import React, { useMemo, useState } from 'react';
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
      state: "waiting"
    },
    {
      MaHS: "HS20250915-21",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "2",
      state: "draft"
    },
    {
      MaHS: "HS20250915-22",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "3",
      state: "returned"
    },
    {
      MaHS: "HS20250915-23",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "4",
      state: "approved"
    },
    {
      MaHS: "HS20250915-24",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "5",
      state: "waiting"
    },
    {
      MaHS: "HS20250915-25",
      Name: "KH: Phan Thị Thùy Dung",
      CreatedDate: "09/09/2025",
      key: "6",
      state: "draft"
    },
  ];

  const segmentConfigs = [
    { id: 'draft', label: 'Lưu nháp', badgeText: 'Lưu nháp', color: 'medium' },
    { id: 'waiting', label: 'Chờ duyệt', badgeText: 'Chờ duyệt', color: 'warning' },
    { id: 'returned', label: 'Trả về', badgeText: 'Trả về', color: 'danger' },
    { id: 'approved', label: 'Đã duyệt', badgeText: 'Đã duyệt', color: 'success' },
    { id: 'completed', label: 'Hoàn thành', badgeText: 'Hoàn thành', color: 'success' },
  ];

  const filterProfilesByState = useMemo(() => profiles.filter((profile) => profile.state === segmented), [profiles, segmented])

  return (
    <IonPage>
      <IonSegment value={segmented} onIonChange={handleSegmentChange} scrollable>
        {segmentConfigs.map(({ id, label }) => (
          <IonSegmentButton key={id} value={id} contentId={id}>
            <IonText>{label}</IonText>
          </IonSegmentButton>
        ))}
      </IonSegment>
      <IonSearchbar />
      <IonSegmentView>
        {segmentConfigs.map(({ id, badgeText, color }) => (
          <IonSegmentContent id={id} key={id}>
            <IonList>
              {filterProfilesByState.length > 0 ? (
                filterProfilesByState.map(({ key, ...profile }: ProfileItemType, index: number) => (
                  <IonItem
                    key={index}
                    routerLink={`${index}`}
                  >
                    <ProfileItem key={profile.MaHS} {...profile} />
                    <IonBadge slot="end" color={color} className="ion-text-white" style={{ color: "#fff" }}>
                      <IonText className="ion-text-white">{badgeText}</IonText>
                    </IonBadge>
                  </IonItem>
                ))
              ) : (
                <IonItem lines="none">
                  <IonGrid className="ion-text-center ion-padding">
                    <IonRow className="ion-justify-content-center">
                      <IonCol size="12">
                        <IonIcon
                          icon="folder-open-outline"
                          color="medium"
                          style={{ fontSize: '48px' }}
                        />
                        <IonText color="medium">
                          <h6>Không có hồ sơ nào</h6>
                        </IonText>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              )}
            </IonList>
          </IonSegmentContent>
        ))}
      </IonSegmentView>
    </IonPage>
  );
};

export default React.memo(ProfileList);
