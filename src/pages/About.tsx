import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonMenuButton, IonButton, IonIcon, IonDatetime, IonList, IonItem, IonLabel, IonPopover, IonText } from '@ionic/react';
import './About.scss';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import AboutPopover from '../components/AboutPopover';
import { format, parseISO } from 'date-fns';
import { zhCN } from 'date-fns/locale'


interface AboutProps { }

const About: React.FC<AboutProps> = () => {

  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState<MouseEvent>();
  const [location, setLocation] = useState<'seattle'>('seattle');
  const [conferenceDate, setConferenceDate] = useState('2021-07-24T14:00:00+08:00');

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  function displayDate(date: string, dateFormat: string) {
    return format(parseISO(date), dateFormat, { locale: zhCN });
  }

  return (
    <IonPage id="about-page">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={presentPopover}>
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div className="about-header">
          {/* Instead of loading an image each time the select changes, use opacity to transition them */}
          <div className="about-image seattle" style={{'opacity': location === 'seattle' ? '1' : undefined}}></div>
        </div>
        <div className="about-info">
          <h3 className="ion-padding-top ion-padding-start">测试</h3>

          <p className="ion-padding-start ion-padding-end">
            <a href="https://www.w3.org/2018/chinese-web-ig/index.zh-Hans.html">W3C Web中文兴趣组</a> 沉浸式 Web 线上研讨会将于<strong>2021年7月24日</strong>举行，请于<strong>7月22日（周四）</strong>前注册参会。
          </p>

          <p className="ion-padding-start ion-padding-end">
            This is the meeting page for the <a href="https://www.w3.org/2018/chinese-web-ig/">W3C Chinese Web Interest Group (CWIG)</a> virtual meeting on Immersive Web, on 24 July 2021. Please register before 22 July (Thursday).
          </p>

          <p className="ion-padding-start ion-padding-end">
            <strong>本次会议对<a href="https://www.w3.org/groups/ig/chinese-web/participants" rel="nofollow">Web中文兴趣组成员</a>、<a href="https://www.w3.org/Consortium/Member/List" rel="nofollow">W3C会员</a>和受邀嘉宾开放，请在<a href="https://labs.w3.org/beihang/signup/2021-chinese-ig-xr" rel="nofollow">这里</a>注册。</strong>
          </p>

          <p className="ion-padding-start ion-padding-end">
            <strong>The meeting is open to the <a href="https://www.w3.org/groups/ig/chinese-web/participants" rel="nofollow">group participants</a>, <a href="https://www.w3.org/Consortium/Member/List" rel="nofollow">W3C members</a>, and invited guests. Please <a href="https://labs.w3.org/beihang/signup/2021-chinese-ig-xr" rel="nofollow">register online</a>.</strong>
          </p>

          <h3 className="ion-padding-top ion-padding-start">详情</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>
                地点
              </IonLabel>
                <IonText className="ion-text-end">
                  线上
                </IonText>
            </IonItem>
            <IonItem button={true} id="open-date-input">
              <IonLabel>
                日期
              </IonLabel>
              <IonText slot="end">{displayDate(conferenceDate, 'yyyy年MM月dd日')}</IonText>
              <IonPopover id="date-input-popover" trigger="open-date-input" showBackdrop={false} side="top" alignment="end">
                <IonDatetime
                  max="2056"
                  value={conferenceDate}
                  onIonChange={(e) => setConferenceDate(e.detail.value!)}
                  presentation="date">
                </IonDatetime>
              </IonPopover>
            </IonItem>
          </IonList>

          <h3 className="ion-padding-top ion-padding-start">互联网</h3>

          <IonList lines="none">
            <IonItem>
              <IonLabel>
                WLAN
              </IonLabel>
              <IonLabel className="ion-text-end">
                w3c{ displayDate(conferenceDate, 'y') }
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
               密码
              </IonLabel>
              <IonLabel className="ion-text-end">
                w3cbeihang
              </IonLabel>
            </IonItem>
          </IonList>

        </div>
      </IonContent>

      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(About);
