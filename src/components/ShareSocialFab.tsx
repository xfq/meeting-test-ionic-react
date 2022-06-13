import { IonLoading, IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/react"
import { shareSocial, logoWechat, logoTiktok, logoFacebook, logoGithub } from "ionicons/icons"
import React, { useState } from "react"

const ShareSocialFab: React.FC = () => {
  const [loadingMessage, setLoadingMessage] = useState('')
  const [showLoading, setShowLoading] = useState(false);

  const openSocial = (network: string) => {
    setLoadingMessage(`正在发布到${network}……`);
    setShowLoading(true);
  };

  return(
    <>
      <IonLoading
        isOpen={showLoading}
        message={loadingMessage}
        duration={2000}
        spinner="crescent"
        onDidDismiss={() => setShowLoading(false)}
      />
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={shareSocial} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton color="github" onClick={() => openSocial('GitHub')}>
            <IonIcon icon={logoGithub} />
          </IonFabButton>
          <IonFabButton color="wechat" onClick={() => openSocial('微信')}>
            <IonIcon icon={logoWechat} />
          </IonFabButton>
          <IonFabButton color="tiktok" onClick={() => openSocial('TikTok')}>
            <IonIcon icon={logoTiktok} />
          </IonFabButton>
          <IonFabButton color="facebook" onClick={() => openSocial('Facebook')}>
            <IonIcon icon={logoFacebook} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  )
};

export default ShareSocialFab;
