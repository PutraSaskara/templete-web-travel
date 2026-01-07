import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export default function ArticleDetail() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const foundArticle = siteConfig.articles.find(a => a.slug === slug);
        setArticle(foundArticle);
    }, [slug]);

    if (!article) return <div className="p-16 text-center text-gray-500">Article not found...</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Blog
            </Link>

            <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 h-[400px]">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    {article.date}
                </div>
                <div className="flex items-center gap-2">
                    <User size={18} className="text-primary" />
                    {article.author}
                </div>
            </div>

            <h1 className="font-display font-black text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">
                {article.title}
            </h1>

            <div
                className="prose prose-lg prose-blue max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />
        </div>
    );
}
