import React from 'react';
import BlogCard from '@/components/BlogCard/BlogCard';
import styles from './BottomBlogs.module.scss';

const BottomBlogs = ({ content }) => {
  return (
    <div className="px-6 mt-20 mb-12 lg:px-20 md:px-12 lg:my-25">
      <div className="w-full mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="xl:col-start-2 xl:col-span-10 xl:grid-cols-10 lg:col-start-1 lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-5 lg:gap-y-25">
            {content.landscapeBlogs?.map((blog, id) => (
              <div className={styles.landscapeBlog} key={id}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 mb-12 lg:my-25">
          <div>
            <h2 className="mb-5 text-3xl text-black leading-extra-tight lg:text-5xl lg:mb-9">
              {content.viceFeatures.title}
            </h2>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-9">
            {content.viceFeatures.features?.map((blog, id) => (
              <div className={styles.viceFeature} key={id}>
                <BlogCard blog={blog} square rounded={false} />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="xl:col-start-2 xl:col-span-10 xl:grid-cols-10 lg:col-start-1 lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-5 lg:gap-y-25">
            {content.portraitBlogs?.map((blog, id) => (
              <div className={styles.landscapeBlog} key={id}>
                <BlogCard blog={blog} portrait />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBlogs;
