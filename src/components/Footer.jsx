import React from 'react';
import { siteConfig } from '../data/site-config';

export default function Footer() {
    const { global } = siteConfig;
    return (
        <footer className="bg-gray-50 py-8 mt-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
                {global.footer.copyright}
            </div>
        </footer>
    );
}
