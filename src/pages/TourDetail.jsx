import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { MapPin, Star, CheckCircle } from 'lucide-react';

export default function TourDetail() {
    const { slug } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        const foundTour = siteConfig.tours.find(t => t.slug === slug);
        setTour(foundTour);
    }, [slug]);

    if (!tour) return <div className="p-8 text-center">Loading or Tour Not Found...</div>;

    const handleBook = () => {
        // Redirect to contact/whatsapp with message
        const message = `Hi, I am interested in banking the ${tour.title} tour!`;
        const url = `https://wa.me/${siteConfig.global.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg mb-8">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <h1 className="text-4xl md:text-6xl font-black font-display uppercase">{tour.title}</h1>
                    <p className="text-xl opacity-90">{tour.subTitle}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{tour.description}</p>
                    </div>

                    {tour.highlights && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                            <ul className="space-y-2">
                                {tour.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                                        <CheckCircle className="text-primary w-5 h-5" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="bg-surface p-6 rounded-2xl h-fit sticky top-24">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-500">Price per person</span>
                        <span className="text-2xl font-bold text-primary">{tour.price}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                        <MapPin size={16} /> {tour.location}
                    </div>
                    <button
                        onClick={handleBook}
                        className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                    >
                        Book This Tour
                    </button>
                </div>
            </div>
        </div>
    );
}
