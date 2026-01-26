import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { MapPin, Star, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function TourDetail() {
    const { slug } = useParams();
    const [tour, setTour] = useState(null);
    const siteUrl = siteConfig.global.siteUrl;

    useEffect(() => {
        const foundTour = siteConfig.tours.find(t => t.slug === slug);
        setTour(foundTour);
    }, [slug]);

    if (!tour) return <div className="p-8 text-center animate-pulse">Loading or Tour Not Found...</div>;

    const handleBook = () => {
        // Redirect to contact/whatsapp with message
        const message = `Hi, I am interested in banking the ${tour.title} tour!`;
        const url = `https://wa.me/${siteConfig.global.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // Structured data for tour/product
    const tourStructuredData = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": tour.title,
        "description": tour.description,
        "image": tour.image,
        "touristType": "Adventure",
        "itinerary": {
            "@type": "ItemList",
            "itemListElement": tour.highlights?.map((h, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": h
            })) || []
        },
        "offers": {
            "@type": "Offer",
            "price": tour.price,
            "priceCurrency": "IDR"
        },
        "provider": {
            "@type": "TravelAgency",
            "name": siteConfig.global.siteName
        }
    };

    return (
        <>
            <SEO
                title={tour.title}
                description={tour.description}
                image={tour.image}
                url={`${siteUrl}/packages/${tour.slug}`}
                type="product"
                keywords={`${tour.title}, ${tour.location}, wisata bali`}
                structuredData={tourStructuredData}
            />
            <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn animate-fill-both">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg mb-8 animate-scaleUp animate-fill-both group">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-8 left-8 text-white animate-fadeInUp animate-fill-both animate-delay-200">
                        <h1 className="text-4xl md:text-6xl font-black font-display uppercase">{tour.title}</h1>
                        <p className="text-xl opacity-90">{tour.subTitle}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8 animate-slideInLeft animate-fill-both animate-delay-200">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Description</h2>
                            <p className="text-gray-600 leading-relaxed">{tour.description}</p>
                        </div>

                        {tour.highlights && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                                <ul className="space-y-2">
                                    {tour.highlights.map((highlight, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-2 text-gray-700 animate-fadeInUp animate-fill-both"
                                            style={{ animationDelay: `${300 + idx * 100}ms` }}
                                        >
                                            <CheckCircle className="text-primary w-5 h-5" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="bg-surface p-6 rounded-2xl h-fit sticky top-24 animate-slideInRight animate-fill-both animate-delay-300">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-500">Price per person</span>
                            <span className="text-2xl font-bold text-primary">{tour.price}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                            <MapPin size={16} /> {tour.location}
                        </div>
                        <button
                            onClick={handleBook}
                            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Book This Tour
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
