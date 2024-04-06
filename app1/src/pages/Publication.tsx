import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTextarea, IonButton, IonIcon} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {checkbox, checkboxOutline, checkboxSharp, checkmark, logoWhatsapp, trash } from 'ionicons/icons';
import './Publication.css';

const Publication: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Publicação</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Publicação</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
          <IonCardTitle>
          <IonTextarea
            placeholder="Escreva o título"
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IonButton color="danger">
          Apagar
            <IonIcon slot="end" icon={trash}></IonIcon>
          </IonButton>
          <IonButton>
          Publicar
            <IonIcon slot="end" icon={checkmark}></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Publication;
