import React from 'react';
import { siteConfig } from '../data/site-config';

export default function About() {
    const { about } = siteConfig.pages;

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="font-display font-bold text-4xl mb-6">{about.title}</h1>
                    <p className="text-xl text-gray-500 mb-6 font-light">{about.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-8">{about.description}</p>

                    <div className="grid grid-cols-3 gap-6">
                        {about.stats.map((stat, idx) => (
                            <div key={idx} className="text-center md:text-left">
                                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={about.image} alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}
