import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonFooter,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';

const DashboardFilter: React.FC = () => {
  const [fromDate, setFromDate] = useState<string>('2025-10-24');
  const [toDate, setToDate] = useState<string>('2025-10-24');
  const [selectedRegion, setSelectedRegion] = useState<string>('Tất cả');
  const [selectedUnit, setSelectedUnit] = useState<string>('Tất cả');

  const regions = [
    { id: 1, name: 'Khu vực 1' },
    { id: 2, name: 'Khu vực 2' },
    { id: 3, name: 'Khu vực 3' },
    { id: 4, name: 'Khu vực 4' },
  ];

  const units = [
    { id: 1, name: 'Đơn vị 1' },
    { id: 2, name: 'Đơn vị 2' },
    { id: 3, name: 'Đơn vị 3' },
  ];

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {/* Từ ngày */}
          <IonItem>
            <IonLabel>Từ ngày</IonLabel>
            <IonDatetimeButton datetime="fromDate" />
            <IonModal keepContentsMounted={true}>
              <IonDatetime
                id="fromDate"
                presentation="date"
                value={fromDate}
                showDefaultButtons={true}
                doneText="OK"
                cancelText="Hủy"
                locale="vi"
                onIonChange={(e) => setFromDate(e.detail.value!)}
              />
            </IonModal>
          </IonItem>

          {/* Đến ngày */}
          <IonItem>
            <IonLabel>Đến ngày</IonLabel>
            <IonDatetimeButton datetime="toDate" />
            <IonModal keepContentsMounted={true}>
              <IonDatetime
                id="toDate"
                presentation="date"
                value={toDate}
                showDefaultButtons={true}
                doneText="OK"
                cancelText="Hủy"
                locale="vi"
                min={fromDate}
                onIonChange={(e) => setToDate(e.detail.value!)}
              />
            </IonModal>
          </IonItem>

          {/* Khu vực */}
          <IonItem id="open-region-modal" button>
            <IonLabel>Khu vực</IonLabel>
            <IonLabel slot="end" color="medium">
              {selectedRegion}
            </IonLabel>
          </IonItem>

          {/* Đơn vị */}
          <IonItem id="open-unit-modal" button>
            <IonLabel>Đơn vị</IonLabel>
            <IonLabel slot="end" color="medium">
              {selectedUnit}
            </IonLabel>
          </IonItem>

          {/* Modal chọn khu vực */}
          <IonModal
            trigger="open-region-modal"
            initialBreakpoint={0.75}
            breakpoints={[0, 0.25, 0.5, 0.75, 0.9]}
            handleBehavior="cycle"
          >
            <IonContent className="ion-padding">
              <IonList>
                {regions.map((region) => (
                  <IonItem
                    key={region.id}
                    button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRegion(region.name);
                      const modal = e.currentTarget.closest(
                        'ion-modal'
                      ) as HTMLIonModalElement;
                      modal?.dismiss();
                    }}
                  >
                    <IonLabel>{region.name}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonContent>
          </IonModal>

          {/* Modal chọn đơn vị */}
          <IonModal
            trigger="open-unit-modal"
            initialBreakpoint={0.75}
            breakpoints={[0, 0.25, 0.5, 0.75]}
            handleBehavior="cycle"
          >
            <IonContent className="ion-padding">
              <IonList>
                {units.map((unit) => (
                  <IonItem
                    key={unit.id}
                    button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedUnit(unit.name);
                      const modal = e.currentTarget.closest(
                        'ion-modal'
                      ) as HTMLIonModalElement;
                      modal?.dismiss();
                    }}
                  >
                    <IonLabel>{unit.name}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonContent>
          </IonModal>
        </IonList>
      </IonContent>

      {/* ✅ Footer */}
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonButton
                  expand="block"
                  color="medium"
                  fill="outline"
                  style={{ textTransform: 'uppercase' }}
                  onClick={() => {
                    setFromDate('2025-10-24');
                    setToDate('2025-10-24');
                    setSelectedRegion('Tất cả');
                    setSelectedUnit('Tất cả');
                  }}
                >
                  Xóa bộ lọc
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton
                  expand="block"
                  color="primary"
                  style={{ textTransform: 'uppercase' }}
                  onClick={() =>
                    console.log({
                      fromDate,
                      toDate,
                      selectedRegion,
                      selectedUnit,
                    })
                  }
                >
                  Áp dụng
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default DashboardFilter;
