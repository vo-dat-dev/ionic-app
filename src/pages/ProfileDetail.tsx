import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from '../data/connect';
import * as selectors from '../data/selectors';
import { addFavorite, removeFavorite } from '../data/sessions/sessions.actions';
import { Session } from '../models/Schedule';
import './SessionDetail.scss';

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

const ProfileDetail: React.FC<SessionDetailProps> = () => {
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
        klajfldjasdfjj
      </IonContent>
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
