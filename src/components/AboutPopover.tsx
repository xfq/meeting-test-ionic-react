import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

interface AboutPopoverProps {
  dismiss: () => void;
};

const AboutPopover: React.FC<AboutPopoverProps> = ({dismiss}) => {

  const close = (url: string) => {
    window.open(url, '_blank');
    dismiss();
  };

  return (
    <IonList>
      <IonItem button onClick={() => close('https://www.chinaw3c.org/about.html')}>
        <IonLabel>关于W3C</IonLabel>
      </IonItem>
      <IonItem button onClick={() => close('https://www.w3.org/2018/chinese-web-ig/index.zh-Hans.html')}>
        <IonLabel>Web中文兴趣组</IonLabel>
      </IonItem>
      <IonItem button onClick={() => close('https://www.chinaw3c.org/contact.html')}>
        <IonLabel>联系我们</IonLabel>
      </IonItem>
    </IonList >
  )
}

export default AboutPopover;
