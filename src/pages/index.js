import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/src/sections/Home/Hero/Hero';
import TopBlogs from '@/src/sections/Home/TopBlogs/TopBlogs';
import Newsletter from '@/src/sections/Home/Newsletter/Newsletter';
import MidBlogs from '@/src/sections/Home/MidBlogs/MidBlogs';
import GetMission from '@/src/sections/Home/GetMission/GetMission';
import content from '@/src/utils/textContent';

const Home = () => {
  const { hero, topBlogs, newsletter, midBlogs, getMission } = content;
  return (
    <Layout>
      <Hero content={hero} />
      <TopBlogs content={topBlogs} />
      <Newsletter content={newsletter} />
      <MidBlogs content={midBlogs} />
      <GetMission content={getMission} />
    </Layout>
  );
};

export default Home;
