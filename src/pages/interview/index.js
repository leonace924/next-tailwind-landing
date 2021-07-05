import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/src/sections/Interview/Hero/Hero';
import { articleContent } from '@/src/utils/textContent';

const Home = () => {
  const { title, relatedTopics, articles } = articleContent;

  return (
    <Layout>
      <Hero title={title} relatedTopics={relatedTopics} />
    </Layout>
  );
};

export default Home;
