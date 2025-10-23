import {
  IonBadge,
  IonCol,
  IonLabel,
  IonRow
} from "@ionic/react";

interface ProfileInfoProps {
  MaHS: string;
  Creator: string;
  CreatedDate: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  MaHS,
  Creator,
  CreatedDate,
}) => {
  return (
    <IonRow className="ion-align-items-center ion-justify-content-between "
      style={{
        padding: 8,
        borderBottom: "1px solid gray"
      }}>
      <IonCol size="9" className="ion-text-start">
        <IonLabel color="primary" className="ion-text-uppercase ion-margin-bottom">
          <strong>MÃ HS: {MaHS}</strong>
        </IonLabel>
        <br />
        <IonLabel className="ion-text-wrap ion-text-start">
          Người tạo: <strong>{Creator}</strong>
        </IonLabel>
        <br />
        <IonLabel color="medium">Ngày tạo: {CreatedDate}</IonLabel>
      </IonCol>

      <IonCol size="auto" className="ion-text-right">
        <IonBadge
          color="primary"
        >
          Lưu nháp
        </IonBadge>
      </IonCol>
    </IonRow>
  );
};

export default ProfileInfo;
