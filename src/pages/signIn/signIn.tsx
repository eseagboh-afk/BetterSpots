import React, { useState } from "react"
import 
{
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem, 
  IonLabel,
  IonButton,
} from '@ionic/react';

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";//

const signIn: React.FC = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const handleSubmit = async () => {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert(`Welcome back, ${user.email}!`);
      // TODO: Redirect to user profile page if needed
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
};

 return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput 
            value={email} 
            onIonChange={e => setEmail(e.detail.value!)} 
            type="email"
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput 
            value={password} 
            onIonChange={e => setPassword(e.detail.value!)} 
            type="password"
          />
        </IonItem>
        <IonButton expand="block" onClick={handleSubmit}>Sign In</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default signIn 