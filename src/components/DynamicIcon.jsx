import React, { Suspense, lazy, useMemo } from 'react';
import { HelpCircle } from 'lucide-react';

// Cache for loaded icon components
const iconCache = new Map();

const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = useMemo(() => {
        if (!name) return null;

        // Check cache first
        if (iconCache.has(name)) {
            return iconCache.get(name);
        }

        // Create lazy component for the icon
        const LazyIcon = lazy(() =>
            import('lucide-react').then((module) => {
                const Icon = module[name];
                if (!Icon) {
                    console.warn(`Icon "${name}" not found in lucide-react`);
                    return { default: HelpCircle };
                }
                return { default: Icon };
            })
        );

        // Store in cache
        iconCache.set(name, LazyIcon);
        return LazyIcon;
    }, [name]);

    if (!IconComponent) {
        return <HelpCircle {...props} />;
    }

    return (
        <Suspense fallback={<span className="inline-block w-4 h-4" />}>
            <IconComponent {...props} />
        </Suspense>
    );
};

export default DynamicIcon;

