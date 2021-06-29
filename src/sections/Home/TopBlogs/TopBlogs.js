import React from 'react';
import Image from 'next/image';
import styles from './TopBlogs.module.scss';

const BlogCard = ({ blog }) => {
  const { featuredImage, label, title, description } = blog;

  return (
    <div className={styles.blog}>
      <div className={`${styles.blogImage} relative rounded overflow-hidden mb-5 lg:mb-10`}>
        <Image src={featuredImage} alt={title} layout="fill" objectFit="cover" priority />
      </div>
      <span className="text-base font-bold text-black uppercase">{label}</span>
      <h3 className="my-3 text-3xl text-black leading-extra-tight lg:my-5 lg:text-4xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const TopBlogs = ({ content }) => {
  return (
    <div className="px-6 mt-20 mb-12 lg:px-20 md:px-12 lg:mt-36 lg:mb-25">
      <div className="w-full mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="xl:col-start-1 xl:col-span-12 xl:grid-cols-12 lg:col-start-2 lg:col-span-10 lg:grid lg:grid-cols-10 lg:gap-5 lg:gap-y-25 lg:items-center">
            {content.blogs?.map((blog, id) => (
              <BlogCard blog={blog} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlogs;
