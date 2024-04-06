import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';
import {settings} from 'ionicons/icons';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
 
      </IonContent>
    </IonPage>
  );
};

export default Profile;
