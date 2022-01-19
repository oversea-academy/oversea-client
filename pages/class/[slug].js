import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Class() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  return (
    <div>
      <Head>
        <title>Oversea Academy | Class</title>
        <meta name="description" content="Oversea Academy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="cover">
          <div className="hero min-h-screen bg-class-img relative">
            <div className="w-full hero-content justify-start mb-32">
              <div className="max-w-lg ">
                <div className="text-2xl text-primary pb-5">Kelas Oversea</div>
                <div className="text-5xl lg:text-7xl text-primary pb-5">Kelas IELTS Regular</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
