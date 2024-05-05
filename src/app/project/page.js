import Image from 'next/image';
import Project from '@/components/Pages/Project';
import Layout from '@/components/Layout/Layout';
import ParticlesComponent from '@/components/UI/Particles';

export default function ProjectPage() {
  return (
    <>
      <Layout>
        <ParticlesComponent />
        <Project />
      </Layout>
    </>
  );
}
