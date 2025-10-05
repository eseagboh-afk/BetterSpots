import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';


const postSignUp: React.FC = () => {
   return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>BetterSpots | Sign Up Complete</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                < IonText color="primary">
                <h1>Thanks for signing up!</h1>
                </IonText>

                <p>Our team will review your profile and notify you once it's approved.</p>
                
            </IonContent>
        </IonPage>
    );
};

export default postSignUp;