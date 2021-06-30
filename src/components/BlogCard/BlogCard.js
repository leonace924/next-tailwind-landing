import React from 'react';
import Image from 'next/image';

const BlogCard = ({ blog, portrait = false, featured = false, square = false, rounded = true }) => {
  const { featuredImage, label, title, description } = blog;

  return (
    <>
      <div
        className={`pb-landscape ${portrait ? 'lg:pb-portrait' : ''}  ${
          featured ? 'lg:pb-x-landscape' : ''
        } ${square ? 'lg:pb-square' : ''} ${
          rounded ? 'rounded overflow-hidden' : ''
        } relative mb-5 lg:mb-10`}
      >
        <Image src={featuredImage} alt={title} layout="fill" objectFit="cover" priority />
      </div>
      {label && <span className="text-base font-bold text-black uppercase">{label}</span>}
      <h3 className="my-3 text-3xl text-black leading-extra-tight lg:my-5 lg:text-4xl">{title}</h3>
      <p>{description}</p>
    </>
  );
};

export default BlogCard;
