import React from 'react';
import { IonItem, IonList, IonButton } from '@ionic/react';
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase-config";



const findEvents: React.FC = () => 
{
  return (
    <IonList>
      <IonItem>
        <IonButton>Thump Coffee Roasters - Oct 7, 2025, 9am</IonButton>
      </IonItem>
      <IonItem>
        <IonButton>Thump Coffee Roasters - Oct 7, 2025, 9am</IonButton>
      </IonItem>
      <IonItem>
        <IonButton>Thump Coffee Roasters - Oct 7, 2025, 9am</IonButton>
      </IonItem>
      <IonItem>
        <IonButton>Thump Coffee Roasters - Oct 7, 2025, 9am</IonButton>
      </IonItem>
      <IonItem>
        <IonButton>Thump Coffee Roasters - Oct 7, 2025, 9am</IonButton>
      </IonItem>
    </IonList>
  );
}
export default findEvents;