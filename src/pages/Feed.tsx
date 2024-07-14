import React, { useState, useEffect, useRef } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/react';
import { logoWhatsapp, mail } from 'ionicons/icons';
import './Feed.css';

const Feed: React.FC = () => {
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>

        {items.map((item) => (
          <IonCard key={item}>
            <IonCardHeader>
              <IonCardTitle>Titulo{item}</IonCardTitle>
              <IonCardSubtitle>Subtitulo</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              Aqui uma pequena descrição do card. mais isso, mais aquilo.
            </IonCardContent>

            <IonButton fill="clear" href={`https://api.whatsapp.com/send?phone=5589999940315`}>
              <IonIcon slot="icon-only" icon={logoWhatsapp} color="success"></IonIcon>
            </IonButton>

            <IonButton fill="clear" href={`mailto:alefnatan.g32@gmail.com`}>
              <IonIcon slot="icon-only" icon={mail}></IonIcon>
            </IonButton>
          </IonCard>
        ))}

        <IonInfiniteScroll threshold="100px" onIonInfinite={handleScroll}>
          <IonInfiniteScrollContent loadingText="Carregando mais itens..." loadingSpinner="bubbles" />
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Feed;

