import { siteConfig } from '../data/site-config';
import TourCard from '../components/TourCard';
import SEO from '../components/SEO';

export default function Tours() {
    const { tours } = siteConfig;
    const siteUrl = siteConfig.global.siteUrl;

    return (
        <>
            <SEO
                title="All Packages"
                description="Discover our amazing Bali tour packages. From cultural experiences to adventure trips."
                url={`${siteUrl}/packages`}
                keywords="paket wisata bali, bali tour packages, ubud tour, nusa penida tour"
            />
            <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn animate-fill-both">
                <h1 className="text-4xl font-bold font-display mb-8 animate-fadeInDown animate-fill-both">All Packages</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tours.map((tour, idx) => (
                        <div
                            key={tour.id}
                            className={`animate-fadeInUp animate-fill-both`}
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <TourCard tour={tour} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
