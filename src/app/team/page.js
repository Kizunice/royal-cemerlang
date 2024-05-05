import Image from 'next/image';
import Team from '@/components/Pages/Team';
import Layout from '@/components/Layout/Layout';
import ParticlesComponent from '@/components/UI/Particles';

export default function TeamPage() {
  return (
    <>
      <Layout>
        <ParticlesComponent />
        <Team />
      </Layout>
    </>
  );
}
