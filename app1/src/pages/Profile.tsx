import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon, IonButtons, IonButton, IonCard, IonCardHeader, IonCardSubtitle,IonCardTitle, IonCardContent, isPlatform } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';
import {settings, trash} from 'ionicons/icons';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
          {isPlatform('android') && (
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={settings} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
            {isPlatform('ios') && (
            <IonButtons slot="end">
              <IonButton>
                <IonIcon slot="icon-only" icon={settings} />
              </IonButton>
            </IonButtons>
          )}
          </IonToolbar>
        </IonHeader>
        <h2 className="ion-padding">Minhas publicações:</h2>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Procura-se Fretista para Transportar Mesa de Picos a Oeiras</IonCardTitle>
            <IonCardSubtitle>Serviço de Fretamento Local Necessário</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Procura-se fretista confiável e experiente para transportar uma mesa de Picos para Oeiras. A mesa é de tamanho médio e será embalada de forma segura para o transporte. Pagamento justo será oferecido. Preferência por fretistas locais com disponibilidade imediata. Entre em contato para mais detalhes e para discutir os arranjos de transporte. Obrigado!😊🌳🌞</IonCardContent>
          <a href="clear">
          <IonButton fill="clear">
            <IonIcon slot="icon-only" icon={trash} color="danger"></IonIcon>
          </IonButton>
          </a>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Procura-se Fretista para Transportar Mesa de Picos a Oeiras</IonCardTitle>
            <IonCardSubtitle>Serviço de Fretamento Local Necessário</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Procura-se fretista confiável e experiente para transportar uma mesa de Picos para Oeiras. A mesa é de tamanho médio e será embalada de forma segura para o transporte. Pagamento justo será oferecido. Preferência por fretistas locais com disponibilidade imediata. Entre em contato para mais detalhes e para discutir os arranjos de transporte. Obrigado!😊🌳🌞</IonCardContent>
          <a href="clear">
          <IonButton fill="clear">
            <IonIcon slot="icon-only" icon={trash} color="danger"></IonIcon>
          </IonButton>
          </a>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Procura-se Fretista para Transportar Mesa de Picos a Oeiras</IonCardTitle>
            <IonCardSubtitle>Serviço de Fretamento Local Necessário</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Procura-se fretista confiável e experiente para transportar uma mesa de Picos para Oeiras. A mesa é de tamanho médio e será embalada de forma segura para o transporte. Pagamento justo será oferecido. Preferência por fretistas locais com disponibilidade imediata. Entre em contato para mais detalhes e para discutir os arranjos de transporte. Obrigado!😊🌳🌞</IonCardContent>
          <a href="clear">
          <IonButton fill="clear">
            <IonIcon slot="icon-only" icon={trash} color="danger"></IonIcon>
          </IonButton>
          </a>
        </IonCard>     
      </IonContent>
    </IonPage>
  );
};

export default Profile;
