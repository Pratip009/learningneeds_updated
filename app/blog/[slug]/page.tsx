/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, User, Heart } from 'lucide-react';
import { useParams } from 'next/navigation';

interface Blog {
  id: number;
  user_image: string;
  username: string;
  title: string;
  long_description: string;
  reaction: number;
  cover_image: string;
  created_at: string;
}

// All dummy blogs data
const allBlogs: Blog[] = [
  {
    id: 1,
    user_image: "/images/blog/dp.jpg",
    username: "Pratip Kayal",
    title: "The Future of Web Development: Trends to Watch in 2025",
    long_description: `
      <h2>Introduction to Modern Web Development</h2>
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move into 2025, developers need to stay ahead of the curve to remain competitive and build cutting-edge applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how we write code. From intelligent code completion to automated testing and bug detection, AI tools are becoming indispensable companions for developers. These tools not only increase productivity but also help maintain code quality and consistency across large projects.</p>
      
      <h3>Key Benefits of AI in Development</h3>
      <ul>
        <li>Faster code generation and completion</li>
        <li>Automated code review and optimization</li>
        <li>Intelligent bug detection and fixing</li>
        <li>Enhanced documentation generation</li>
      </ul>
      
      <h2>The Rise of New JavaScript Frameworks</h2>
      <p>While established frameworks like React, Vue, and Angular continue to dominate, new players are entering the scene with fresh approaches to building web applications. These frameworks focus on performance, developer experience, and reducing bundle sizes.</p>
      
      <blockquote>The future of web development lies in creating faster, more efficient, and more accessible applications for everyone.</blockquote>
      
      <h3>Performance Optimization</h3>
      <p>Modern frameworks are prioritizing performance from the ground up. Features like automatic code splitting, lazy loading, and edge rendering are becoming standard rather than optional. This shift ensures that applications load faster and provide better user experiences across all devices and network conditions.</p>
      
      <h2>The Importance of TypeScript</h2>
      <p>TypeScript has become the de facto standard for large-scale JavaScript applications. Its static typing system catches errors early in the development process, making codebases more maintainable and less prone to runtime errors. As applications grow in complexity, TypeScript's benefits become increasingly apparent.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By embracing new technologies, staying curious, and continuously learning, developers can build amazing experiences that push the boundaries of what's possible on the web. The key is to remain adaptable and open to change while maintaining a solid foundation in core principles.</p>
    `,
    reaction: 1247,
    cover_image: "/images/blog/b1.jpg",
    created_at: "2024-11-28T10:30:00Z"
  },
  {
    id: 2,
    user_image: "/images/blog/dp.jpg",
    username: "Pratip Kayal",
    title: "Building Scalable Applications with Modern Architecture",
    long_description: `
      <h2>Understanding Scalability</h2>
      <p>Scalability is the ability of a system to handle growing amounts of work by adding resources. In modern web applications, this means designing architectures that can accommodate millions of users without degrading performance.</p>
      
      <h2>Microservices Architecture</h2>
      <p>Breaking down monolithic applications into smaller, independent services allows teams to scale different parts of the application independently. Each microservice can be developed, deployed, and scaled separately.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Single responsibility per service</li>
        <li>Independent deployment</li>
        <li>Decentralized data management</li>
        <li>Failure isolation</li>
      </ul>
      
      <h2>Containerization and Orchestration</h2>
      <p>Docker and Kubernetes have become essential tools for deploying scalable applications. Containers provide consistency across environments, while orchestration platforms automate deployment, scaling, and management.</p>
      
      <blockquote>Scalability isn't just about handling more users—it's about maintaining performance and reliability as your system grows.</blockquote>
    `,
    reaction: 892,
    cover_image: "/images/blog/b2.jpg",
    created_at: "2024-11-25T14:20:00Z"
  },
  {
    id: 3,
    user_image: "/images/blog/dp.jpg",
    username: "Pratip Kayal",
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    long_description: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. This leads to more maintainable code and better developer experience through enhanced IDE support.</p>
      
      <h2>Advanced Type Features</h2>
      <p>TypeScript offers powerful type manipulation tools that can express complex type relationships and constraints in your codebase.</p>
      
      <h3>Conditional Types</h3>
      <p>Conditional types allow you to create types that depend on other types, enabling sophisticated type logic that adapts based on input types.</p>
      
      <h3>Mapped Types</h3>
      <p>Transform existing types by mapping over their properties, creating new types that maintain relationships with the original.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use strict mode for maximum type safety</li>
        <li>Prefer interfaces for object shapes</li>
        <li>Leverage utility types for common patterns</li>
        <li>Avoid 'any' type whenever possible</li>
      </ul>
      
      <blockquote>The goal of TypeScript is not to catch every possible error, but to catch the errors that matter most in your application.</blockquote>
    `,
    reaction: 2103,
    cover_image: "/images/blog/b3.jpg",
    created_at: "2024-11-20T09:15:00Z"
  }
];

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const blogId = parseInt(slug);
  
  const currentBlog = allBlogs.find(b => b.id === blogId);
  
  // If blog not found, show 404
  if (!currentBlog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <Link href="/" className="text-emerald-600 hover:text-emerald-700">
            ← Back to all blogs
          </Link>
        </div>
      </div>
    );
  }
  
  const [reactionCount, setReactionCount] = useState<number>(currentBlog.reaction);
  const [hasReacted, setHasReacted] = useState<boolean>(false);
  const [isLiking, setIsLiking] = useState<boolean>(false);
  
  const relatedBlogs = allBlogs.filter(b => b.id !== currentBlog.id);

  function handleReaction(): void {
    if (isLiking) return;
    setIsLiking(true);

    setTimeout(() => {
      if (hasReacted) {
        setReactionCount(Math.max(0, reactionCount - 1));
        setHasReacted(false);
      } else {
        setReactionCount(reactionCount + 1);
        setHasReacted(true);
      }
      setIsLiking(false);
    }, 300);
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  function calculateReadTime(html: string): string {
    if (typeof document === 'undefined') return '5 min read';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const text = temp.textContent || temp.innerText || '';
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  function handleShare(): void {
    if (navigator.share) {
      navigator.share({
        title: currentBlog!.title,
        text: currentBlog!.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Header */}
      <div className="w-full bg-[#1a1a1a] border-b border-gray-800 py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Articles</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight max-w-5xl mx-auto text-white">
            {currentBlog.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(currentBlog.created_at)}</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{calculateReadTime(currentBlog.long_description)}</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{currentBlog.username}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative w-full h-[350px] md:h-[550px] mb-16 overflow-hidden">
                <Image
                  src={currentBlog.cover_image}
                  alt={currentBlog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Content */}
              <article>
                <div
                  className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
                  prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-gray-400 hover:prose-a:decoration-gray-900 prose-a:transition-colors
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-base
                  prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-pre:text-gray-800
                  prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                  prose-ul:text-gray-700 prose-ul:text-lg
                  prose-ol:text-gray-700 prose-ol:text-lg
                  prose-li:my-2 prose-li:leading-relaxed
                  prose-img:rounded-none"
                  dangerouslySetInnerHTML={{ __html: currentBlog.long_description }}
                />

                {/* Divider */}
                <div className="my-16 border-t border-gray-200"></div>

                {/* Engagement Section */}
                <div className="flex flex-wrap items-center gap-6">
                  <button
                    onClick={handleReaction}
                    disabled={isLiking}
                    className={`flex items-center gap-3 px-6 py-3 border transition-all font-medium ${
                      hasReacted
                        ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                        : 'bg-transparent text-gray-900 border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    <Heart
                      className={`w-6 h-6 ${isLiking ? 'animate-pulse' : ''}`}
                      fill={hasReacted ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <span>{reactionCount}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="flex items-center gap-3 px-6 py-3 border border-gray-300 bg-transparent text-gray-900 hover:border-gray-900 transition-all font-medium"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </article>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-8 space-y-12">
                
                {/* Author Section */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-medium">Written By</h3>
                  
                  <div className="flex items-start gap-4 mb-8">
                    <div className="relative flex-shrink-0 w-14 h-14">
                      <Image
                        src={currentBlog.user_image}
                        alt={currentBlog.username}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-xl text-gray-900 mb-1">{currentBlog.username}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Content creator sharing insights and knowledge with the community.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-medium">Article Info</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Published</span>
                      <span className="text-gray-900 font-medium">{formatDate(currentBlog.created_at)}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Reading Time</span>
                      <span className="text-gray-900 font-medium">{calculateReadTime(currentBlog.long_description)}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Reactions</span>
                      <span className="text-gray-900 font-medium">{reactionCount}</span>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-medium">More Articles</h3>
                  
                  <div className="space-y-8">
                    {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                      <Link
                        key={relatedBlog.id}
                        href={`/blog/${relatedBlog.id}`}
                        className="group block w-full"
                      >
                        <div className="relative w-full h-32 mb-4 overflow-hidden">
                          <Image
                            src={relatedBlog.cover_image}
                            alt={relatedBlog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors line-clamp-2 mb-2">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {new Date(relatedBlog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/"
                    className="mt-8 block w-full text-center py-3 border border-gray-300 text-gray-900 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all font-medium"
                  >
                    View All Articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}