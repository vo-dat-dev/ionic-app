import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonButton, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const CameraComponent = () => {
  const [imagePath, setImagePath] = useState<string | undefined>(undefined);

  const openCamera = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90, // Image quality (0-100)
        source: CameraSource.Camera, // Use the device's camera
        resultType: CameraResultType.Uri, // Return the image URI
      });

      // Set the captured image path
      setImagePath(image.webPath); // Store the image URI
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div>
        <IonButton onClick={openCamera}>Open Camera</IonButton>
        {imagePath && <IonImg src={imagePath} />} {/* Display the image */}
      </div>

    </IonPage>
  );
};

export default CameraComponent;
