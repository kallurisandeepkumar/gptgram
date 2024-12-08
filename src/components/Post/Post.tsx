import React from 'react';
import { PostActions } from './PostActions';
import { PostHeader } from './PostHeader';
import { PostContent } from './PostContent';
import { PostComments } from './PostComments';
import type { Post as PostType } from '../../types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md mb-6 max-w-2xl mx-auto overflow-hidden">
      <PostHeader author={post.author} timestamp={post.timestamp} />
      <PostContent 
        content={post.content} 
        imageUrl={post.imageUrl} 
        caption={post.caption} 
      />
      <PostActions likes={post.likes} />
      <PostComments comments={post.comments} />
    </article>
  );
}