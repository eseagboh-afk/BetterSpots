import 
{
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton, 
    IonText
} from '@ionic/react'
import { useEffect } from "react";
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ExploreContainer from '../components/ExploreContainer';

const Welcome: React.FC = () => {

      useEffect(() => {
        const testFirebase = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "test"));
            console.log("It works!");
          }
          catch (error) {
            console.error("This doesn't work: ", error)
          }
        } 
        testFirebase();
      }, []);
      //Test that Firebase connection is working successfully 
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>BetterSpots</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                < IonText color="primary">
                <h1>Welcome to BetterSpots!</h1>
                </IonText>

                <p>In Real Life dating for intentional singles</p>

                <IonButton expand="block" routerLink="/signUp">
                Get Started
                </IonButton>

                <p>Already have an account?</p>

                <IonButton expand="block" routerLink="/signIn" fill="outline">
                Sign In
                </IonButton>
                
            </IonContent>
        </IonPage>
    );
};

export default Welcome  
