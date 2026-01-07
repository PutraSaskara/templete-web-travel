import React from 'react';

import * as LucideIcons from 'lucide-react';

const DynamicIcon = ({ name, ...props }) => {
    const IconComponent = LucideIcons[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return <LucideIcons.HelpCircle {...props} />;
    }

    return <IconComponent {...props} />;
};

export default DynamicIcon;
