import Navbar from '../navbar';
import Footer from '../footer';
import ModalLogin from '../modal-login';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ModalLogin />
    </>
  );
}
