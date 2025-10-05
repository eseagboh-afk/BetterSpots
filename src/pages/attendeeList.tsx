import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import { useLocation } from 'react-router-dom';

interface LocationState {
  event: {
    id: string;
    title: string;
    date: string;
    attendees?: string[];
    coffeeShop?: {
      name: string;
      address: string;
    };
  };
}

function AttendeeList() {
  const location = useLocation<LocationState>();
  const event = location.state?.event;

  const [attendees, setAttendees] = useState<string[]>([]);

  useEffect(() => {
    if (!event?.attendees) return;
    setAttendees(event.attendees);
  }, [event]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Attendees for {event?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {attendees.length === 0 ? (
          <p>No one is attending yet.</p>
        ) : (
          <IonList>
            {attendees.map((uid, idx) => (
              <IonItem key={idx}>{uid}</IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
}

export default AttendeeList;
