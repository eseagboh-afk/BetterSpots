import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase/firebase-config";
import { useHistory } from "react-router-dom";

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

const userProfile: React.FC = () => {
    const [profileURL, setProfileURl] = useState<string | null>(null);
     const history = useHistory();

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
    }, []);

    const handleFindEvents = () =>
        {   
            history.push("/findEvents");
        }

    const handleMyEvents = () =>
    {
      history.push("/myEvents");
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">BetterSpots</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonAvatar style={{ margin: '0 auto', width: '120px', height: '120px' }}>
          {profileURL && <img src={profileURL} alt="Profile" />}
        </IonAvatar>

        <IonCard className="ion-margin-top">
          <IonCardContent>
            <h2>Test User</h2>
            <p>27 y/o</p>
            <p>Gender: Cis woman</p>
            <p>Interested in: women</p>
            <p>Height: 5'4"</p>
            <p>Hobbies: reading, hiking, tennis</p>
            <p>Occupation: Medical Resident - Emergency Medicine</p>
          </IonCardContent>
        </IonCard>

        
         <IonButton expand="block" onClick={handleFindEvents} className="ion-margin-top">
          Find Events
        </IonButton>
        <IonButton expand="block" onClick={handleMyEvents} fill="outline" className="ion-margin-top">
          My Events
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default userProfile;
