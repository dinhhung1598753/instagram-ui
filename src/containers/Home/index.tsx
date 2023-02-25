import Header from '@/layout/Header';
import NewFeed from './NewFeed';
import Info from './Info';
import Head from 'next/head';
import suggestions from '~/mocks/suggestion.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
      </Head>
      <Header />
      <div className="flex justify-center mt-20 mb-5">
        <div>
          <NewFeed />
        </div>
        <div className="hidden lg:block">
          <Info suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
}
