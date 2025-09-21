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

const Welcome: React.FC = () => {
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
