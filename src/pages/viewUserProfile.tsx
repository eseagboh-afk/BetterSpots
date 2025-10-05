import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase-config";


import 
{
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonAvatar,
  IonCard, 
  IonCardContent, 
} from '@ionic/react';

const viewUserProfile: React.FC = () => {
    const [profileURL, setProfileURl] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const url = await getDownloadURL(ref(storage, "users/user123/profile.jpg"));
                setProfileURl(url);
            } catch (error) {
                console.error('Failed to load profile picture', error);
            }
        };
        fetchProfilePicture();
    }, [])
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">MyApp</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonAvatar style={{ margin: '0 auto', width: '120px', height: '120px' }}>
          {profileURL && <img src={profileURL} alt="Profile" />}
        </IonAvatar>

        <IonCard className="ion-margin-top">
          <IonCardContent>
            <h2>John Doe</h2>
            <p>Email: john.doe@example.com</p>
            <p>Other info...</p>
          </IonCardContent>
        </IonCard>

        <IonButton expand="block" className="ion-margin-top">
          Edit Profile
        </IonButton>
        <IonButton expand="block" fill="outline" className="ion-margin-top">
          My Events
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default viewUserProfile