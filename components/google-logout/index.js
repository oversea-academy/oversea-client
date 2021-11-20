import { GoogleLogout } from 'react-google-login';

const clientId = '213422843481-18129o9nb0b8f3feo8etv1i0f5lf8p9o.apps.googleusercontent.com';

export default function GoogleLogoutButton() {
  function onSuccess() {
    console.log('Logout Success ');
  }

  return (
    <div>
      <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} />
    </div>
  );
}
