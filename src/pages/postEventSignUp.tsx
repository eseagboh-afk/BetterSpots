import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';


const postEventSignUp: React.FC = () => {
   return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>BetterSpots | Event Sign Up Confirmation</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                < IonText color="primary">
                <h1>Thanks for signing up!</h1>
                </IonText>

                <p>You've been added to the list.</p>
                
            </IonContent>
        </IonPage>
    );
};

export default postEventSignUp;