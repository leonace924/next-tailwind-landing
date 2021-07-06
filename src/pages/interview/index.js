import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/src/sections/Interview/Hero/Hero';
import MidBlogs from '@/src/sections/Interview/MidBlogs/MidBlogs';
import GetMission from '@/src/components/GetMission/GetMission';
import { articleContent, getMissionContent } from '@/src/utils/textContent';

const Home = () => {
  const { title, relatedTopics, articles } = articleContent;

  return (
    <Layout mode="black">
      <Hero title={title} relatedTopics={relatedTopics} />
      <MidBlogs content={articles} />
      <GetMission content={getMissionContent} />
    </Layout>
  );
};

export default Home;
