import React from 'react';

interface PostContentProps {
  content: string;
  imageUrl: string;
  caption: string;
}

export function PostContent({ content, imageUrl, caption }: PostContentProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={caption}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4">
        <p className="font-bold mb-2">{caption}</p>
        <p className="text-gray-800 whitespace-pre-wrap text-sm">{content}</p>
      </div>
    </div>
  );
}