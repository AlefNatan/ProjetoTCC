import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {settings} from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
          <IonIcon className='engrenagem' slot="end" icon={settings}/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
