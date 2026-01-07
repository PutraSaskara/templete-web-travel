import React, { useState } from 'react';
import { siteConfig } from '../data/site-config';

export default function Contact() {
    const { global, pages } = siteConfig;
    const { contact } = pages;

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const url = `https://wa.me/${global.whatsapp}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold font-display">{contact.title}</h1>
                <p className="text-gray-500 mt-2">{contact.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-surface p-8 rounded-3xl shadow-lg space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        required
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-primary focus:border-primary"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        required
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-primary focus:border-primary"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-primary focus:border-primary"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                    {contact.buttonText || "Send Message"}
                </button>
            </form>
        </div>
    );
}
