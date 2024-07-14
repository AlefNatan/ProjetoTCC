import React, { useState, useEffect, useRef } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  isPlatform,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonMenu,
  IonMenuButton,
} from '@ionic/react';
import { menuOutline, trash } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<number[]>([]);
  const page = useRef<number>(1);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newItems = Array.from({ length: 10 }, (_, index) => index + items.length);
      setItems([...items, ...newItems]);
      setIsLoading(false);
    }, 1000);
    page.current++;
  };

  useEffect(() => {
    fetchData();

  }, []);

  const handleScroll = (event: CustomEvent<void>) => {
    if (!isLoading) {
      fetchData();
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }
  };

  return (
    <>
    <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
          <IonButtons slot="end">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2 className="ion-padding">Minhas publicações:</h2>
        {items.map((item) => (
          <IonCard key={item}>
            <IonCardHeader>
              <IonCardTitle>Card Title {item}</IonCardTitle>
              <IonCardSubtitle>Serviço de Fretamento Local Necessário</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Procura-se fretista confiável e experiente para transportar uma mesa de Picos para Oeiras. A mesa é de tamanho médio e será embalada de forma segura para o transporte. Pagamento justo será oferecido. Preferência por fretistas locais com disponibilidade imediata. Entre em contato para mais detalhes e para discutir os arranjos de transporte. Obrigado!😊🌳🌞
            </IonCardContent>
            <IonButton fill="clear" href="clear">
              <IonIcon slot="icon-only" icon={trash} color="danger"></IonIcon>
            </IonButton>
          </IonCard>
        ))}

        <IonInfiniteScroll threshold="100px" onIonInfinite={handleScroll}>
          <IonInfiniteScrollContent loadingText="Carregando mais itens..." loadingSpinner="bubbles" />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Profile;
