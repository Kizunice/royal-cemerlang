import Image from 'next/image';
import About from '@/components/Pages/About';
import Layout from '@/components/Layout/Layout';
import ParticlesComponent from '@/components/UI/Particles';

export default function AboutPage() {
  return (
    <>
      <Layout>
        <ParticlesComponent />
        <About />
      </Layout>
    </>
  );
}
