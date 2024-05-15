import { Suspense } from 'react';
import Hero from '@/components/Pages/Hero';
import About from '@/components/Pages/About';
import Service from '@/components/Pages/Service';
import Project from '@/components/Pages/Project';
import Team from '@/components/Pages/Team';
import Loading from './loading';

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Hero />
      <About />
      <Service />
      <Project />
      <Team />
    </Suspense>
  );
}
