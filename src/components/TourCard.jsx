import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

export default function TourCard({ tour }) {
    return (
        <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all">
            <Link to={`/tour/${tour.slug}`}>
                <img
                    alt={tour.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src={tour.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary shadow-sm">
                    starts at {tour.price}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-xl mb-1">{tour.title}</h3>
                    <div className="flex items-center text-xs space-x-2 text-gray-200">
                        <span>{tour.subTitle}</span>
                        {tour.rating && (
                            <span className="text-yellow-400 flex items-center">
                                <Star size={10} className="mr-0.5 fill-current" /> {tour.rating}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center mt-1 text-[10px] text-gray-300">
                        <MapPin size={10} className="mr-1 text-red-500" /> {tour.location}
                    </div>
                </div>
            </Link>
        </div>
    );
}
