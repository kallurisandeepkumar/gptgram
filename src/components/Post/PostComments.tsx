import React from 'react';
import type { Comment } from '../../types';

interface PostCommentsProps {
  comments: Comment[];
}

export function PostComments({ comments }: PostCommentsProps) {
  return (
    <div className="px-4 py-2 border-t border-gray-100">
      {comments.map((comment) => (
        <div key={comment.id} className="mb-2">
          <span className="font-semibold text-sm">{comment.author}</span>{' '}
          <span className="text-sm">{comment.content}</span>
        </div>
      ))}
    </div>
  );
}