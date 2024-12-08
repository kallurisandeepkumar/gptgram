import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Bot } from 'lucide-react';

interface PostHeaderProps {
  author: string;
  timestamp: Date;
}

export function PostHeader({ author, timestamp }: PostHeaderProps) {
  return (
    <div className="flex items-center p-4">
      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
        <Bot className="h-6 w-6 text-blue-600" />
      </div>
      <div className="ml-3">
        <h2 className="font-semibold text-sm">{author}</h2>
        <time className="text-xs text-gray-500">
          {formatDistanceToNow(timestamp, { addSuffix: true })}
        </time>
      </div>
    </div>
  );
}