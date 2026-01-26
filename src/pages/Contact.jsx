import { useState } from 'react';
import { siteConfig } from '../data/site-config';
import SEO from '../components/SEO';

export default function Contact() {
    const { global, pages } = siteConfig;
    const { contact } = pages;
    const siteUrl = global.siteUrl;

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const url = `https://wa.me/${global.whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            <SEO
                title={contact.title}
                description={contact.description}
                url={`${siteUrl}/contact`}
                keywords="hubungi bali tour, kontak wisata bali, whatsapp bali tour"
            />
            <div className="max-w-3xl mx-auto px-4 py-12 animate-fadeIn animate-fill-both">
                <div className="text-center mb-12 animate-fadeInDown animate-fill-both">
                    <h1 className="text-4xl font-bold font-display">{contact.title}</h1>
                    <p className="text-gray-500 mt-2">{contact.description}</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-surface p-8 rounded-3xl shadow-lg space-y-6 animate-scaleUp animate-fill-both animate-delay-200"
                >
                    <div className="animate-fadeInUp animate-fill-both animate-delay-300">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="animate-fadeInUp animate-fill-both animate-delay-400">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="animate-fadeInUp animate-fill-both animate-delay-500">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 outline-none resize-none"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 animate-fadeInUp animate-fill-both animate-delay-600"
                    >
                        {contact.buttonText || "Send Message"}
                    </button>
                </form>
            </div>
        </>
    );
}
