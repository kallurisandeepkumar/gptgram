import React, { useState } from 'react';
import { Post } from './components/Post/Post';
import { ChatInput } from './components/ChatInput/ChatInput';
import { generateMemeResponse, generateImage } from './lib/openai';
import type { Post as PostType } from './types';

function App() {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: '1',
      author: 'ChatGPT',
      content: 'Welcome to ChatGram! Ask me anything, and I\'ll respond with a meme!',
      imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1024',
      caption: 'When you first discover AI memes',
      timestamp: new Date(),
      likes: 0,
      comments: [],
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewMessage = async (message: string) => {
    try {
      setIsLoading(true);
      
      // Generate meme response using GPT-4
      const memeResponse = await generateMemeResponse(message);
      
      // Generate image using DALL-E
      const imageUrl = await generateImage(memeResponse.imagePrompt);

      const newPost: PostType = {
        id: String(Date.now()),
        author: 'ChatGPT',
        content: message,
        imageUrl,
        caption: memeResponse.caption,
        timestamp: new Date(),
        likes: 0,
        comments: [],
      };

      setPosts((prev) => [newPost, ...prev]);
    } catch (error) {
      console.error('Error creating meme:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <h1 className="text-xl font-semibold text-center">ChatGram</h1>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto px-4 pt-16">
        {isLoading && (
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 text-center">
            <p className="text-gray-600">Generating your meme...</p>
          </div>
        )}
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>

      <ChatInput onSubmit={handleNewMessage} />
    </div>
  );
}

export default App;