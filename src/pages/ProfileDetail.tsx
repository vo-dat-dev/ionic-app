import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import {
  businessOutline,
  imageOutline,
  mapOutline,
  peopleOutline
} from 'ionicons/icons';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import { addFavorite, removeFavorite } from '../data/sessions/sessions.actions';
import { Session } from '../models/Schedule';
import './ProfileDetail.scss';
import ProfileInfo from './caa-app/components/ProfileInfo';

interface OwnProps extends RouteComponentProps { }

interface StateProps {
  session?: Session;
  favoriteSessions: number[];
}

interface DispatchProps {
  addFavorite: typeof addFavorite;
  removeFavorite: typeof removeFavorite;
}

type SessionDetailProps = OwnProps & StateProps & DispatchProps;

export interface CategoryItem {
  icon: string;  // or just "any" if you're using icons directly
  title: string;
  count: number;
}

const ProfileDetail: React.FC<SessionDetailProps> = () => {
  const exampleProfile: any = { key: '1', MaHS: 'HS001', Name: 'Nguyễn Văn A', CreatedDate: '2025-10-10' }

  const categories: CategoryItem[] = [
    { icon: peopleOutline, title: 'Pháp lý khách hàng', count: 5 },
    { icon: mapOutline, title: 'Địa điểm kinh doanh', count: 0 },
    { icon: businessOutline, title: 'Tài sản tích lũy', count: 0 },
    { icon: imageOutline, title: 'Khác', count: 0 },
  ];


  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Nguyễn Văn B');

  return (
    <IonPage id="session-detail-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chi tiết hồ sơ</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/profiles"></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ProfileInfo {...exampleProfile} />

        <IonCard style={{ '--box-shadow': 'none' }}>
          <IonCardHeader>
            <IonCardTitle>Thông tin khách hàng</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList className='ion-no-padding'>
              <IonItem>
                <IonLabel>CIF</IonLabel>
                <IonText slot="end">123456</IonText>
              </IonItem>

              <IonItem>
                <IonLabel>Họ và tên</IonLabel>
                <IonText slot="end">Nguyễn Văn A</IonText>
              </IonItem>

              <IonItem>
                <IonLabel>Ngày sinh</IonLabel>
                <IonText slot="end">10/10/1995</IonText>
              </IonItem>

              <IonItem>
                <IonLabel>Số CMND/CCCD</IonLabel>
                <IonText slot="end">0123456789</IonText>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard style={{ '--box-shadow': 'none' }}>
          <IonCardHeader>
            <IonCardTitle>Danh mục hình ảnh</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>

            <IonList>
              {categories.map(({ title, count, icon }: CategoryItem, index) => (
                <IonItem>
                  <IonIcon aria-hidden="true" icon={icon} slot="start" />
                  <IonLabel>{title}</IonLabel>
                  <IonNote slot="end" color="medium">
                    {count} ảnh
                  </IonNote>

                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonButton
                  expand="block"
                  color="primary"
                  fill="outline"
                  style={{ textTransform: 'uppercase' }}
                >
                  Chỉnh sửa
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton
                  id="present-alert"
                  expand="block"
                  color="primary"
                  style={{ textTransform: 'uppercase' }}
                  onClick={() => setIsOpen(true)}
                >
                  Chuyển duyệt
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>

      <IonAlert
        trigger="present-alert"
        isOpen={isOpen}
        header="Chuyển duyệt"
        buttons={['quay lại', 'đồng ý']}
        inputs={[
          {
            type: 'textarea',
            placeholder: 'A little about yourself',
          },
        ]}
      />
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state, ownProps) => ({
    session: selectors.getSession(state, ownProps),
    favoriteSessions: state.data.favorites
  }),
  mapDispatchToProps: {
    addFavorite,
    removeFavorite,
  },
  component: ProfileDetail,
});
