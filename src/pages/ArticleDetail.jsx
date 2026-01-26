import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function ArticleDetail() {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const siteUrl = siteConfig.global.siteUrl;

    useEffect(() => {
        const foundArticle = siteConfig.articles.find(a => a.slug === slug);
        setArticle(foundArticle);
    }, [slug]);

    if (!article) return <div className="p-16 text-center text-gray-500 animate-pulse">Article not found...</div>;

    // Structured data for article
    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.excerpt,
        "image": article.image,
        "datePublished": article.date,
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "publisher": {
            "@type": "Organization",
            "name": siteConfig.global.siteName
        }
    };

    return (
        <>
            <SEO
                title={article.title}
                description={article.excerpt}
                image={article.image}
                url={`${siteUrl}/blog/${article.slug}`}
                type="article"
                keywords={`blog bali, ${article.title}`}
                structuredData={articleStructuredData}
            />
            <div className="max-w-4xl mx-auto px-4 py-12 animate-fadeIn animate-fill-both">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors animate-fadeInUp animate-fill-both"
                >
                    <ArrowLeft size={20} /> Back to Blog
                </Link>

                <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 h-[400px] animate-scaleUp animate-fill-both animate-delay-100 group">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 animate-fadeInUp animate-fill-both animate-delay-200">
                    <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-primary" />
                        {article.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <User size={18} className="text-primary" />
                        {article.author}
                    </div>
                </div>

                <h1 className="font-display font-black text-3xl md:text-5xl text-gray-900 mb-8 leading-tight animate-fadeInUp animate-fill-both animate-delay-300">
                    {article.title}
                </h1>

                <div
                    className="prose prose-lg prose-blue max-w-none text-gray-700 animate-fadeIn animate-fill-both animate-delay-400"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </>
    );
}
