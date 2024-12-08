import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSubmit: (message: string) => void;
}

export function ChatInput({ onSubmit }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4"
    >
      <div className="max-w-2xl mx-auto flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask ChatGPT something..."
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 transition-colors"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}