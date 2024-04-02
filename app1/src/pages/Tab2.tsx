import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTextarea,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
          <IonCardTitle>
          <IonTextarea
            placeholder="Escreva seu título"
            counter={true}
            maxlength={50}
            autoGrow={true}
          onIonChange={(e) => {
            const textarea = e.target as HTMLIonTextareaElement;
            textarea.style.height = 'auto';
          }}
          ></IonTextarea>

          </IonCardTitle>
          <IonCardSubtitle>
          <IonTextarea 
              placeholder="Escreva o subtitulo"
              counter={true}
              maxlength={80}
              autoGrow={true}
            onIonChange={(e) => {
              const textarea = e.target as HTMLIonTextareaElement;
              textarea.style.height = 'auto';
            }}                
            ></IonTextarea>
          </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <IonTextarea 
              placeholder="Escreva os detalhes"
              counter={true}
              maxlength={280}       
              autoGrow={true}
              rows={1}
            onIonChange={(e) => {
              const textarea = e.target as HTMLIonTextareaElement;
              textarea.style.height = 'auto';
            }}         
            ></IonTextarea>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
