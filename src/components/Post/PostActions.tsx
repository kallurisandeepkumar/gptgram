import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { clsx } from 'clsx';

interface PostActionsProps {
  likes: number;
}

export function PostActions({ likes: initialLikes }: PostActionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(prev => prev + (isLiked ? -1 : 1));
    setIsLiked(prev => !prev);
  };

  return (
    <div className="px-4 py-2">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLike}
          className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
        >
          <Heart
            className={clsx(
              'h-6 w-6',
              isLiked && 'fill-red-500 text-red-500'
            )}
          />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
          <MessageCircle className="h-6 w-6" />
        </button>
        <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
          <Share2 className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}