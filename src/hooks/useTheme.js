import { useEffect } from 'react';
import { siteConfig } from '../data/site-config';

export function useTheme() {
    useEffect(() => {
        const root = document.documentElement;
        const { colors, layout, fonts } = siteConfig.theme;

        // Set colors
        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-accent', colors.accent);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-surface', colors.surface);
        root.style.setProperty('--color-text', colors.text);

        // Set layout
        root.style.setProperty('--radius', layout.radius);

        // Set fonts (if needed to be dynamic via variable, though importing them in CSS is static)
        // We already imported specific fonts in index.css, so valid values here match those imports.
        root.style.setProperty('--font-display', fonts.display);
        root.style.setProperty('--font-body', fonts.body);

    }, []);
}
