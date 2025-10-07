import React from 'react';
import { Geolocation } from "@capacitor/geolocation";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonItem, IonList, IonButton, IonAlert } from '@ionic/react';
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, getDoc, doc, getDocs, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { useHistory } from "react-router-dom";

function findEvents() 
{
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState<{lat: number, lng: number} | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showAlert, setShowAlert] = useState(false);
  const auth = getAuth();
  const uid = auth.currentUser?.uid;
  const history = useHistory();


  useEffect(() => {
    async function getLocation(){
      const position = await Geolocation.getCurrentPosition();
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }
    getLocation();
  }, []);

  useEffect(() => 
  {
    async function fetchEvents ()
    {
      try 
      {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsList: any[] = [];

        for (const docSnap of querySnapshot.docs) 
        {
          const eventData = docSnap.data();
          let coffeeShopData = null;
          if (eventData.coffeeShopID) 
          {
            const coffeeShopSnap = await getDoc(doc(db, "coffeeShops", eventData.coffeeShopID));
            if (coffeeShopSnap.exists()) {
              coffeeShopData = coffeeShopSnap.data();
            }
          }
        

          eventsList.push(
            {
              id: docSnap.id, 
              ...eventData,
              coffeeShop: coffeeShopData,
            });
        }
        setEvents(eventsList);
        setLoading(false);

      } catch(error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();




  }, []);

  const handleEventClick = (event: any) => {
  setSelectedEvent(event);
  setShowAlert(true);
};
const joinEvent = async () => {
  if (!selectedEvent || !uid) return;
  history.push("/postEventSignUp");

  const eventRef = doc(db, "events", selectedEvent.id);

  try {
    await updateDoc(eventRef, {
      attendees: arrayUnion(uid)
    });

    // update local state to reflect new attendee
    setEvents(prevEvents =>
      prevEvents.map(ev =>
        ev.id === selectedEvent.id
          ? { ...ev, attendees: [...(ev.attendees || []), uid] }
          : ev
      )
    );
    

    setShowAlert(false);
  } catch (error) {
    console.error("Error joining event:", error);
  }
};

const seeWhosGoing = () => {
  if (!selectedEvent) return;
  const attendeeIds = selectedEvent.attendees || [];
  alert(`Attendees: ${attendeeIds.join(", ") || "No one yet!"}`);

  history.push("/attendeeList");
};

return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
         <IonTitle> BetterSpots | Events</IonTitle>
          </IonToolbar>
    </IonHeader>

    

    <IonHeader>Upcoming Events Near You</IonHeader>
    {events.length === 0 ? (
      <p>There are no events near you at this time! Check back soon for updates</p>
    ) : (
      events.map((event) => (
        <div key={event.id} className="event-card">
          <h2>{event.title}</h2>
          <p><strong>Date:</strong>{new Date(event.date).toLocaleString()}</p>
          <p><strong>Spots Left:</strong>{event.capacity}</p>
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
      <IonButton expand="block" routerLink="/userProfile">Back to Profile</IonButton>
    </IonItem>

    <IonAlert>
      isOpen={showAlert}
      onDidDismiss={() => setShowAlert(false)}
      header={selectedEvent?.title}
      buttons={[
        {
          text: "See who's going",
          handler: seeWhosGoing
        },
        {
          text: "Join Event",
          handler: joinEvent
        },
        {
          text: "Cancel",
          handler: "cancel"
        }, 
      ]}
      
    </IonAlert>
  </IonPage>
  );
}
export default findEvents;