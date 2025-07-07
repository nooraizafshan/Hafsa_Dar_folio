'use client'

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const blogPosts = [
  {
    date: "Mar 17, 2025",
    author: "Niko Sirmpilatze",
    title: "Uncharted brains: expanding beyond existing atlases",
    category: "Neuroanatomy",
    summary: "Why and how the BrainGlobe project is moving to build new neuroanatomical atlase.",
    image: "/images/brain.png", // put image in public/images folder
    link: "https://brainglobe.info/blog/uncharted-brains.html"
  },
  {
    date: "Dec 5, 2024",
    author: "Niko Sirmpilatze",
    title: "Release v0.0.21 and next steps",
    category: "Animal Behaviour",
    summary: "The inaugural blogpost for Movement, containing a summary of the v0.0.21 release and a preview of what’s coming next in 2025.",
    image: "/images/movement.png", // put image in public/images folder
    link: "https://brainglobe.info/blog/release-v0021.html"
  },
];

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Blogposts</h1>
      <p className="text-gray-600 mb-10">Posts I have (co-)authored in my professional capacity. Each entry links to an external website.</p>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="hover:shadow-lg transition duration-200">
            <CardContent className="p-6 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <p className="text-sm text-gray-500">{post.date} • {post.author}</p>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-xl font-semibold mt-1 hover:underline">{post.title}</h2>
                </a>
                <Badge variant="secondary" className="mt-2">{post.category}</Badge>
                <p className="text-gray-700 mt-4">{post.summary}</p>
              </div>
              <div className="w-full md:w-40">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={160}
                  height={160}
                  className="rounded-md object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
