import Head from 'next/head';

export default function Layanan() {
  return (
    <div>
      <Head>
        <title>Oversea Academy | Syarat & Ketentuan Penggunaan</title>
        <meta name="description" content="Oversea Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <div className="w-full">
            <div className="w-full flex justify-center px-5">
              <div className="w-full md:w-9/12 lg:w-8/12 py-16">
                <p className="mb-2 lg:mb-3 text-primary font-bold">Oversea Academy</p>
                <h1 className="mb-9 text-2xl md:text-3xl lg:text-4xl font-bold">Syarat & Ketentuan Penggunaan</h1>
                <div>
                  <div className="my-3">
                    <p className="py-2">
                      Halaman Syarat dan Ketentuan Layanan Oversea Academy (“S&K”) ini mengatur perihal penggunaan
                      Pelanggan atas layanan yang dikelola oleh Oversea Academy (“Oversea Academy” atau “Kami”) meliputi
                      produk yang Oversea Academy tawarkan, serta mekanisme pemesanan, pembayaran atau penggunaan
                      layanan yang tersedia.
                    </p>
                    <p className="py-2">
                      Untuk dapat menggunakan layanan Oversea Academy, Pelanggan wajib untuk membaca dan memahami S&K
                      ini. Dengan membeli dan menggunakan layanan Oversea Academy, Pelanggan menyatakan bahwa telah
                      membaca, mengerti dan menyetujui untuk terikat secara hukum dan tunduk kepada seluruh ketentuan
                      dalam S&K ini dan dokumen-dokumen lain sebagaimana dimaksud di dalamnya.
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="text-lg font-bold py-2">1. KETENTUAN UMUM</p>
                    <ul className="list-disc py-2 px-4">
                      <li>
                        Produk yang sudah dibeli/dipesan tidak dapat dikembalikan dalam bentuk apapun dan dengan alasan
                        apapun.
                      </li>
                      <li>
                        Identitas maupun dokumen pribadi yang diberikan Pelanggan kepada Oversea Academy tidak akan
                        disalahgunakan untuk kepentingan lain dan akan dijaga kerahasiaannya dari pihak luar.
                      </li>
                      <li>
                        Pelanggan tidak dapat melakukan penukaran atas sebagian atau seluruh bagian dari produk yang
                        telah dibeli menjadi produk lain yang terdapat di dalam cakupan layanan Oversea Academy.
                      </li>
                      <li>
                        Pelanggan tidak dapat melakukan pemindahtanganan produk dari satu pihak ke pihak lainnya.
                        (Contoh: Memberikan 5 jam bimbingan yang tersisa kepada saudara)
                      </li>
                    </ul>
                  </div>
                  <div className="my-3">
                    <p className="text-lg font-bold py-2">2. PERUBAHAN MENGENAI SYARAT & KETENTUAN</p>
                    <p className="py-2">
                      Oversea Academy berhak untuk melakukan perubahan apapun terhadap seluruh S&K yang berlaku.
                      Perubahan tersebut akan diberitahukan kepada seluruh Pelanggan dan/atau Student yang masih aktif.
                    </p>
                  </div>
                  <div className="my-3">
                    <p className="text-lg font-bold py-2">3. PERSETUJUAN ATAS SYARAT & KETENTUAN</p>
                    <ul className="list-disc py-2 px-4">
                      <li>
                        Student tidak dapat menggunakan layanan bimbingan, kecuali jika Student telah menyetujui S&K
                        ini.
                      </li>
                      <li>
                        Jika layanan bimbingan dibeli dengan persetujuan wali Student, maka wali Student juga diharuskan
                        membaca dan menyetujui untuk mematuhi S&K ini.
                      </li>
                    </ul>
                  </div>
                  <div className="my-3">
                    <p className="py-2">Effective Date November 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
