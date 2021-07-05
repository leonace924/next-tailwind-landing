import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/src/sections/Work/Hero/Hero';
import WorkContent from '@/src/sections/Work/Content/Content';
import GetMission from '@/src/components/GetMission/GetMission';
import { workContent, getMissionContent } from '@/src/utils/textContent';

const Home = () => {
  const { hero } = workContent;

  return (
    <Layout>
      <Hero content={hero} />
      <WorkContent />
      <GetMission content={getMissionContent} />
    </Layout>
  );
};

export default Home;
