import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Pages/Hero';
import About from '@/components/Pages/About';
import Service from '@/components/Pages/Service';
import Project from '@/components/Pages/Project';
import Team from '@/components/Pages/Team';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Service />
        <Project />
        <Team />
      </Layout>
    </>
  );
}
