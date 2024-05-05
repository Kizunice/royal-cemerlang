import Image from 'next/image';
import Service from '@/components/Pages/Service';
import Layout from '@/components/Layout/Layout';
import ParticlesComponent from '@/components/UI/Particles';

export default function ServicePage() {
  return (
    <>
      <Layout>
        <ParticlesComponent />
        <Service />
      </Layout>
    </>
  );
}
