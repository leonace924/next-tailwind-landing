import React from 'react';
import BlogCard from '@/components/BlogCard/BlogCard';
import styles from './TopBlogs.module.scss';

const TopBlogs = ({ content }) => {
  return (
    <div className="px-6 mt-20 mb-12 lg:px-20 md:px-12 lg:mt-36 lg:mb-25">
      <div className="w-full mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="xl:col-start-1 xl:col-span-12 xl:grid-cols-12 lg:col-start-2 lg:col-span-10 lg:grid lg:grid-cols-10 lg:gap-5 lg:gap-y-25 lg:items-center">
            {content.blogs?.map((blog, id) => (
              <div className={styles.blog} key={id}>
                <BlogCard blog={blog} portrait={id === 1 || id === 2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlogs;
