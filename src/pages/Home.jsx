import React from 'react';
import { siteConfig } from '../data/site-config';
import DynamicIcon from '../components/DynamicIcon';
import TourCard from '../components/TourCard';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Home() {
    const { home } = siteConfig.pages;
    const tours = siteConfig.tours;
    const featuredTours = tours.filter(t => t.featured);
    const packageTours = tours.filter(t => t.isPackage);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group animate-fadeIn animate-fill-both">
                <img
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={home.hero.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <div className="relative animate-fadeInDown animate-fill-both animate-delay-200">
                        <h1 className="font-display font-black text-7xl md:text-9xl text-white tracking-widest uppercase drop-shadow-xl select-none">
                            {home.hero.title}
                        </h1>
                        <span className="absolute -bottom-2 md:bottom-2 right-0 md:-right-8 font-bold text-white text-xl md:text-3xl opacity-80">
                            {home.hero.subtitle}
                        </span>
                    </div>
                    <p className="mt-4 max-w-2xl text-white/90 text-sm md:text-base font-light tracking-wide">
                        {home.hero.description}
                    </p>
                    <div className="mt-8 flex gap-4 animate-fadeInUp animate-fill-both animate-delay-400">
                        {home.hero.cta.map((cta, index) => (
                            <Link
                                key={index}
                                to={cta.href}
                                className={`${cta.variant === 'primary'
                                    ? 'bg-white text-primary hover:bg-gray-100'
                                    : 'border border-white/50 text-white backdrop-blur-sm hover:bg-white/10'
                                    } px-6 py-2.5 rounded-full text-sm font-bold transition-colors`}
                            >
                                {cta.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Stats */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-slideInLeft animate-fill-both">
                    <div>
                        <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-gray-900">
                            {home.features.title}
                        </h2>
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            {home.features.subtitle}
                        </p>
                    </div>

                    {/* Social Icons Placeholder (Ref design) */}
                    <div className="flex gap-4 text-gray-600">
                        {/* Can be added to config if needed, keeping static for now to match strict design */}
                    </div>

                    <div className="flex justify-between md:justify-start md:gap-16 pt-4">
                        {home.features.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                                    <DynamicIcon name={stat.icon} className="w-5 h-5" />
                                </div>
                                <div className="font-bold text-lg text-gray-900">{stat.value}</div>
                                <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-4 animate-slideInRight animate-fill-both animate-delay-200">
                    {home.features.cards.map((card, idx) => (
                        <div key={idx} className="bg-secondary text-white p-6 rounded-2xl flex items-start gap-4 shadow-lg transform transition hover:-translate-y-1">
                            <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                                <DynamicIcon name={card.icon} size={30} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{card.title}</h3>
                                <p className="text-xs mt-1 text-white/80 leading-relaxed">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="bg-surface rounded-3xl p-8 md:p-12 animate-fadeInUp animate-fill-both">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                        <h2 className="font-display font-bold text-2xl text-gray-900">Top Destinations</h2>
                        <p className="text-gray-500 text-sm mt-2 max-w-md">From island escapes to cool mountain towns, discover where your next journey will take you.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600">
                            <ArrowLeft size={16} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-600">
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredTours.map(tour => (
                        <TourCard key={tour.id} tour={tour} />
                    ))}
                </div>
                <div className="mt-8">
                    <Link to="/packages" className="inline-block bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg">
                        View more
                    </Link>
                </div>
            </section>

            {/* Packages Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeInUp animate-fill-both animate-delay-100">
                <div className="bg-secondary rounded-3xl p-8 flex flex-col justify-between shadow-xl">
                    <div>
                        <h2 className="font-display font-bold text-2xl text-white mb-3">Tour Packages</h2>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Affordable, customizable, and unforgettable adventures. Choose from our pre-made packages or let us build one for you.
                        </p>
                    </div>
                    <div>
                        <Link to="/packages" className="inline-block mt-6 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition-colors uppercase tracking-wider">
                            Browse all packages
                        </Link>
                    </div>
                </div>
                {packageTours.map((pkg) => (
                    <div key={pkg.id} className="group relative rounded-3xl overflow-hidden shadow-lg h-72 md:h-auto cursor-pointer">
                        <img alt={pkg.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={pkg.image} />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm p-2 rounded-lg text-white">
                            {/* Placeholder icon logic, hardcoded for now or random map */}
                            <DynamicIcon name="Map" size={24} />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="font-bold text-xl mb-2">{pkg.title}</h3>
                            <p className="text-[10px] leading-tight text-gray-200">{pkg.description}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Booking Steps */}
            <section className="py-12 border-t border-gray-100 animate-fadeIn animate-fill-both animate-delay-200">
                <h2 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-8">{home.bookingSteps.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {home.bookingSteps.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-default">
                            <div className="w-12 h-12 rounded-full border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center transition-all text-primary">
                                <DynamicIcon name={step.icon} />
                            </div>
                            <span className="font-semibold text-gray-700">{step.title}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
