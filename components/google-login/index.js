import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { refreshTokenSetup } from '../../utils/refresh-token';
import { GOOGLE_CLIENT_ID } from '../../constants';

export default function GoogleLoginButton() {
  function onSuccess(res) {
    console.log(res);
    console.log('Login Success ', res.profileObj);
    refreshTokenSetup(res);
  }

  function onFailure(res) {
    console.log('Login failed', res);
  }
  return (
    <div className="flex-grow">
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="btn btn-outline flex gap-1 capitalize w-full"
          >
            <FcGoogle className="text-xl" />
            <span>Google</span>
          </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}
