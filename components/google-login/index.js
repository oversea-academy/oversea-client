import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { GOOGLE_CLIENT_ID } from '../../constants';
import { mainRepository } from '../../repositories';

export default function GoogleLoginButton() {
  function onSuccess(res) {
    mainRepository
      .postLoginWithGoogle({
        tokenId: res.tokenId
      })
      .then((data) => {
        if (data.status) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        isSignedIn={false}
      />
    </div>
  );
}
