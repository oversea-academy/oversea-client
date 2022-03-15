import { GoogleLogout } from 'react-google-login';

import { GOOGLE_CLIENT_ID } from '../../constants';

export default function GoogleLogoutButton() {
  function onSuccess() {
    console.log('Logout Success ');
  }

  return (
    <div>
      <GoogleLogout clientId={GOOGLE_CLIENT_ID} buttonText="Logout" onLogoutSuccess={onSuccess} />
    </div>
  );
}
