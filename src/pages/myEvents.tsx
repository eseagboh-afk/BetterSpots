import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonItem, IonButton } from '@ionic/react';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { getAuth } from "firebase/auth";

function MyEvents() {
  const [myEvents, setMyEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const currentUser = auth.currentUser; 
  const uid = currentUser?.uid; 

  useEffect(() => {
    async function fetchMyEvents() {
      if (!uid) return; 

      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsList: any[] = [];

        for (const docSnap of querySnapshot.docs) {
          const eventData = docSnap.data();

          
          if (eventData.attendees && eventData.attendees.includes(uid)) {

            
            const coffeeShopSnap = await getDoc(doc(db, "coffeeShops", eventData.coffeeShopID));
            eventData.coffeeShop = coffeeShopSnap.exists() ? coffeeShopSnap.data() : null;

            eventsList.push({
              id: docSnap.id,
              ...eventData
            });
          }
        }

        setMyEvents(eventsList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user events:", error);
      }
    }

    fetchMyEvents();
  }, [uid]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BetterSpots | My Events</IonTitle>
        </IonToolbar>
      </IonHeader>

    {loading ? (
        <p>Loading your events...</p>
      ) : myEvents.length === 0 ? (
        <p>You are not signed up for any events yet!</p>
      ) : (
        myEvents.map(event => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
            <p><strong>Spots Left:</strong> {event.capacity - (event.attendees?.length || 0)}</p>
            {event.coffeeShop && (
              <>
                <p><strong>Location:</strong> {event.coffeeShop.name}</p>
                <p>{event.coffeeShop.address}</p>
              </>
            )}
          </div>
        ))
      )}

      <IonItem>
        <IonButton expand="block" routerLink="/findEvents">Back to Find Events</IonButton>
        <IonButton expand="block" routerLink="/userProfile">Back to User Profile</IonButton>
      </IonItem>
    </IonPage>
  );
}

export default MyEvents;
