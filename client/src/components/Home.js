import {
  NotificationBell,
  NovuProvider,
  PopoverNotificationCenter,
} from '@novu/notification-center';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onNotificationClick = (notification) => {
    navigate(notification.cta.data.url);
  };
  //...other statements

  return (
    <div className='home'>
      <nav className='navbar'>
        <h2>Notify</h2>
        <NovuProvider
          subscriberId={'<YOUR_SUBSCRIBER_ID>'}
          applicationIdentifier={'<YOUR_APP_ID>'}
        >
          <PopoverNotificationCenter onNotificationClick={onNotificationClick}>
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} colorScheme='light' />
            )}
          </PopoverNotificationCenter>
        </NovuProvider>
      </nav>
      <main className='homeContainer'>...</main>
    </div>
  );
};

export default Home;
