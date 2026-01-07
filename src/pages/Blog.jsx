import React from 'react';
import { siteConfig } from '../data/site-config';
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
    const { blog } = siteConfig.pages;
    const { articles } = siteConfig;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="font-display font-bold text-4xl mb-4">{blog.title}</h1>
                <p className="text-gray-500">{blog.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <Link key={article.id} to={`/blog/${article.slug}`} className="block group">
                        <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow h-full">
                            <div className="aspect-video relative overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {article.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} />
                                        {article.author}
                                    </div>
                                </div>
                                <h2 className="font-bold text-xl mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-4">
                                    {article.excerpt}
                                </p>
                                <span className="text-primary font-semibold text-sm group-hover:underline">
                                    Read more
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
