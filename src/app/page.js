import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Pages/Hero';
import About from '@/components/Pages/About';
import Service from '@/components/Pages/Service';
import Project from '@/components/Pages/Project';
import Team from '@/components/Pages/Team';
import Loading from './loading';

const ParticlesComponent = dynamic(() => import('../components/UI/Particles'), {
  ssr: false,
});

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <ParticlesComponent />
        <Hero />
        <About />
        <Service />
        <Project />
        <Team />
      </Layout>
    </Suspense>
  );
}
