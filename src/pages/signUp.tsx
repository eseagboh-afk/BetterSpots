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
  IonSelect,
  IonSelectOption,
  IonCheckbox
} from '@ionic/react';

import { MediaCapture, MediaFile, CaptureImageOptions } from "@ionic-native/media-capture";


const signUp: React.FC = () =>
{
    const [firstName, setFirstName] = useState(' ');
    const [dob, setDob] = useState(' ');
    const [gender, setGender] = useState(' ');
    const [interestedIn, setInterestedIn] = useState(' ');
    const [height, setHeight] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [selfie, setSelfie] = useState<MediaFile | null>(null);

    const captureSelfie = async () => 
    {
        try 
        {
            const options: CaptureImageOptions = { limit: 1 };
            const captured = await MediaCapture.captureImage(options) as MediaFile[];
            setSelfie(captured[0]); 

        }
        catch (error) 
        {
            console.error("We encountered an issue when taking your selfie!", error);
        }
    };

    const handleSubmit = () => 
    {
        console.log({
            firstName,
            dob, 
            gender, 
            interestedIn,
            height,
            email, 
            password, 
            selfie
        });
        alert("Form submitted. Check console for details.");
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign Up</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className = "ion-padding">
                <IonItem>
                    <IonLabel position="floating">First Name</IonLabel>
                    <IonInput value={firstName} onIonChange={e => setFirstName(e.detail.value!)} />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">Date of Birth (mm/dd/yyyy)</IonLabel>
                    <IonInput value={dob} onIonChange={e => setDob(e.detail.value!)} placeholder="MM/DD/YYYY" />
                </IonItem>

                 <IonItem>
                    <IonLabel>Gender</IonLabel>
                    <IonSelect value={gender} onIonChange={e => setGender(e.detail.value)}>
                        <IonSelectOption value="f">Female</IonSelectOption>
                        <IonSelectOption value="m">Male</IonSelectOption>
                        <IonSelectOption value="non-binary">Non Binary</IonSelectOption>
                    </IonSelect>
                </IonItem>

                <IonItem>
                    <IonLabel>Who are you interested in?</IonLabel>
                    <IonSelect value={interestedIn} onIonChange={e => setInterestedIn(e.detail.value)} multiple={true}>
                        <IonSelectOption value="f">Female</IonSelectOption>
                        <IonSelectOption value="m">Male</IonSelectOption>
                        <IonSelectOption value="non-binary">Non-binary</IonSelectOption>
                        <IonSelectOption value="all">All</IonSelectOption>
                        </IonSelect>
                </IonItem>


                <IonItem>
                    <IonLabel position="floating">How tall are you? (ft'In")</IonLabel>
                    <IonInput value={height} onIonChange={e => setHeight(e.detail.value!)} placeholder={`e.g. 5'9"`} />
                </IonItem>

                <IonItem>
                    <IonLabel position="floating">What's your email?</IonLabel>
                    <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)}/>
                </IonItem>

                 <IonItem>
                    <IonLabel position="floating">Choose a password</IonLabel>
                    <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)}/>
                </IonItem>

                <IonButton expand="block" onClick={captureSelfie}>Upload Selfie (required)</IonButton>

                {selfie && <p>Looking good!<br></br>
                Your selfie has been added as your profile pic.<br></br>
                We do this to ensure that you are who you say you are!<br></br>
                You can retake your selfie at anytime from your Settings page!</p>}

                <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>

            </IonContent>
        </IonPage>
    );

};

export default signUp