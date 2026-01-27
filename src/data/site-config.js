export const siteConfig = {
    theme: {
        colors: {
            primary: "#2563eb", // Vibrant Blue - representing Bali's ocean and sky
            secondary: "#059669", // Emerald Green - lush tropical nature
            accent: "#f59e0b", // Golden Amber - warm Balinese sun
            background: "#ffffff",
            surface: "#f0f9ff", // Light blue surface
            text: "#1f2937", // Dark gray for text
        },
        layout: {
            radius: "0.75rem",
        },
        fonts: {
            display: "'Playfair Display', serif",
            body: "'Inter', sans-serif",
        }
    },
    global: {
        siteName: "BaliForTour",
        siteUrl: "https://balifortour.com",
        navbar: {
            logoText: "BaliForTour",
            links: [
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
            ]
        },
        footer: {
            copyright: "© 2026 BaliForTour. All rights reserved."
        },
        whatsapp: "62812345678",
    },
    pages: {
        home: {
            hero: {
                title: "BALI",
                subtitle: "FOR TOUR",
                description: "Experience the magic of Bali with authentic cultural tours, breathtaking landscapes, and spiritual journeys curated by local experts.",
                image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
                cta: [
                    { label: "Explore Bali Tours", href: "/packages", variant: "primary" },
                    { label: "Bali Travel Guide", href: "/blog", variant: "outline" }
                ]
            },
            features: {
                title: "Why Choose BaliForTour for Your Balinese Journey",
                subtitle: "From sacred temples to pristine beaches, we offer authentic Balinese experiences with cultural immersion, sustainable practices, and local insights.",
                stats: [
                    { value: "8k+", label: "Happy Travelers", icon: "Smile" },
                    { value: "15yrs", label: "Local Experience", icon: "BadgeCheck" },
                    { value: "50+", label: "Bali Villages Covered", icon: "MapPin" },
                ],
                cards: [
                    { title: "Local Balinese Guides", description: "Our guides are born and raised in Bali, offering deep cultural insights and access to hidden gems.", icon: "Users" },
                    { title: "Sustainable Tourism", description: "We support local communities and practice eco-friendly tourism to preserve Bali's beauty.", icon: "Leaf" },
                    { title: "Custom Experiences", description: "Tailor your journey with traditional ceremonies, cooking classes, or private villa stays.", icon: "Settings" },
                ]
            },
            testimonials: {
                title: "What our travelers say about Bali",
                items: []
            },
            bookingSteps: {
                title: "Your Bali journey in 3 simple steps.",
                steps: [
                    { title: "Choose Your Experience", icon: "Compass" },
                    { title: "Customize Your Itinerary", icon: "Edit" },
                    { title: "Arrive in Paradise", icon: "Plane" },
                ]
            }
        },
        about: {
            title: "About BaliForTour",
            subtitle: "Connecting travelers with the true spirit of Bali.",
            description: "Founded by Balinese locals in 2010, BaliForTour is dedicated to sharing the authentic beauty of our island. We believe in respectful tourism that honors Balinese traditions while providing unforgettable experiences for our guests.",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            stats: [
                { label: "Years in Bali Tourism", value: "15+" },
                { label: "Cultural Experiences", value: "200+" },
                { label: "Local Families Supported", value: "150+" }
            ]
        },
        blog: {
            title: "Bali Travel Blog",
            subtitle: "Culture, temples, food, and hidden gems of Bali."
        },
        contact: {
            title: "Contact Us",
            description: "Let us help you plan your perfect Bali journey.",
            buttonText: "Chat on WhatsApp"
        }
    },
    tours: [
        {
            id: "1",
            slug: "ubud-cultural-retreat",
            title: "Ubud Cultural Retreat",
            subTitle: "Spiritual Heart of Bali",
            price: "Rp 3,500,000",
            rating: "4.9 (1.5k)",
            location: "Ubud, Bali",
            image: "https://images.unsplash.com/photo-1580251645806-239f4df8ce13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            description: "Immerse yourself in Bali's cultural capital with temple visits, traditional dance, and rice field trekking.",
            highlights: ["Sacred Monkey Forest", "Tegalalang Rice Terraces", "Traditional Dance Performance", "Purification Ceremony"],
            featured: true
        },
        {
            id: "2",
            slug: "nusa-penida-paradise",
            title: "Nusa Penida Adventure",
            subTitle: "Untouched Island Beauty",
            price: "Rp 2,800,000",
            rating: "4.8 (1.2k)",
            location: "Nusa Penida, Bali",
            image: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2092&q=80",
            description: "Discover the dramatic cliffs and crystal-clear waters of Bali's most spectacular island.",
            highlights: ["Kelingking Beach", "Angel's Billabong", "Broken Beach", "Crystal Bay Snorkeling"],
            featured: true
        },
        {
            id: "3",
            slug: "mount-batur-sunrise",
            title: "Mount Batur Sunrise Trek",
            subTitle: "Volcanic Sunrise Experience",
            price: "Rp 1,200,000",
            rating: "4.9 (2.3k)",
            location: "Kintamani, Bali",
            image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80",
            description: "Witness Bali's most breathtaking sunrise from an active volcano with breakfast cooked by steam.",
            highlights: ["Sunrise Summit", "Volcanic Steam Cooking", "Hot Spring Visit", "Lake Batur View"],
            featured: true
        },
        {
            id: "4",
            slug: "uluwatu-cliff-experience",
            title: "Uluwatu Cliff & Temple",
            subTitle: "Oceanfront Majesty",
            price: "Rp 2,100,000",
            rating: "4.7 (980)",
            location: "Uluwatu, Bali",
            image: "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            description: "Explore Bali's most dramatic cliffs, sacred temples, and witness the famous Kecak fire dance.",
            highlights: ["Uluwatu Temple", "Kecak Fire Dance", "Padang Padang Beach", "Jimbaran Bay Seafood Dinner"],
            featured: true
        },
        {
            id: "5",
            slug: "north-bali-waterfalls",
            title: "North Bali Waterfall Journey",
            subTitle: "Hidden Waterfall Discovery",
            price: "Rp 2,500,000",
            rating: "4.8 (1.1k)",
            location: "North Bali",
            image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            description: "Chase the most spectacular waterfalls in North Bali, away from the tourist crowds.",
            highlights: ["Sekumpul Waterfall", "Gitgit Waterfall", "Ulun Danu Temple", "Coffee Plantation Visit"],
            featured: false
        },
        {
            id: "6",
            slug: "balinese-cooking-class",
            title: "Traditional Balinese Cooking",
            subTitle: "Culinary Heritage Experience",
            price: "Rp 850,000",
            rating: "4.9 (850)",
            location: "Various Villages",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80",
            description: "Learn authentic Balinese recipes in a traditional family compound with local chefs.",
            highlights: ["Market Visit", "Spice Preparation", "5 Traditional Dishes", "Recipe Booklet"],
            featured: false
        },
        {
            id: "7",
            slug: "east-bali-spiritual",
            title: "East Bali Spiritual Journey",
            subTitle: "Ancient Temple Circuit",
            price: "Rp 3,200,000",
            rating: "4.7 (720)",
            location: "East Bali",
            image: "https://images.unsplash.com/photo-1578662991408-1e2d4f74e66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            description: "Visit Bali's most important water temples and participate in traditional purification rituals.",
            highlights: ["Tirta Gangga", "Lempuyang Temple", "Taman Ujung", "Traditional Blessing Ceremony"],
            featured: false
        },
        {
            id: "8",
            slug: "bali-surf-adventure",
            title: "Bali Surf Adventure",
            subTitle: "World-Class Waves",
            price: "Rp 2,900,000",
            rating: "4.8 (1.4k)",
            location: "Canggu & Uluwatu",
            image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
            description: "Ride Bali's legendary waves with professional surf instructors for all skill levels.",
            highlights: ["Equipment Rental", "Professional Instruction", "Beach Transfers", "Surf Photography"],
            featured: false
        },
        {
            id: "9",
            slug: "luxury-bali-escape",
            title: "Luxury Bali Escape",
            subTitle: "Premium All-Inclusive",
            description: "Experience Bali in ultimate luxury with private villa, chauffeur, and exclusive access to top attractions.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: "Contact for quote",
            isPackage: true
        },
        {
            id: "10",
            slug: "bali-family-adventure",
            title: "Bali Family Adventure",
            subTitle: "Kid-Friendly Experiences",
            description: "Specially curated for families with children, combining fun, education, and cultural exposure.",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            price: "Contact for quote",
            isPackage: true
        }
    ],
    articles: [
        {
            id: "1",
            slug: "balinese-temple-etiquette",
            title: "The Sacred and the Profane: A Global Traveler's Guide to Balinese Temple Etiquette",
            excerpt: "Navigating Bali's spiritual landscape requires cultural sensitivity. Our comprehensive guide ensures you honor traditions while experiencing profound cultural immersion.",
            content: `
            <p>Bali's temples are not merely historical sites but active centers of spiritual life where ancient traditions continue to unfold daily. For the discerning traveler, understanding temple etiquette transforms a tourist visit into a meaningful cultural exchange.</p>
            
            <h3>The Philosophy of Respect in Balinese Hinduism</h3>
            <p>Balinese Hinduism (Agama Hindu Dharma) is interwoven with animist traditions, creating a unique spiritual landscape where every space has sacred significance. The concept of 'Tri Hita Karana'—harmony with God, people, and nature—guides all interactions.</p>
            <p>Temples (Pura) are categorized by function: sea (Pura Segara), mountain (Pura Gunung), and directional temples, each serving distinct spiritual purposes. Daily offerings (canang sari) represent the balance of elements and gratitude, while sacred spaces follow a hierarchy from public courtyards to increasingly restricted inner sanctums.</p>
            
            <h3>Ceremonial Attire Protocol for the Discerning Traveler</h3>
            <p>The sarong (kamben) and sash (selendang) symbolize purification and respect, not costume. Quality matters—opt for traditional handwoven fabrics over synthetic tourist versions to support local artisans.</p>
            <ul>
                <li><strong>Men:</strong> Kamben worn waist-to-ankle, selendang tied around waist</li>
                <li><strong>Women:</strong> Kamben worn under arms, selendang across shoulder</li>
                <li>Avoid revealing clothing even under sarongs</li>
                <li>Purchase from local weavers to support traditional crafts</li>
            </ul>
            
            <h3>Photography with Cultural Integrity</h3>
            <p>In an Instagram-saturated world, capturing spiritual moments requires exceptional sensitivity. Many ceremonies prohibit photography entirely, while others restrict certain angles and equipment.</p>
            <ul>
                <li>Never photograph from within inner sanctums</li>
                <li>Use silent mode and disable flash at all times</li>
                <li>Seek verbal permission before photographing worshippers</li>
                <li>Consider purchasing temple-approved postcards to support conservation</li>
            </ul>
            
            <h3>Global Traveler's Cultural Audit</h3>
            <p>Before entering any temple, perform this quick cultural audit to ensure respectful engagement:</p>
            <ol>
                <li>Have I washed my feet? (Many temples provide water for purification)</li>
                <li>Is my sarong properly fastened and respectful?</li>
                <li>Am I menstruating? (Traditionally restricts entry to certain areas)</li>
                <li>Have I removed leather accessories? (Considered impure in some contexts)</li>
                <li>Is my phone silenced and camera respectfully stored?</li>
            </ol>
            
            <h3>Practical Cultural Insights</h3>
            <p>Temples are oriented toward mountains (kaja, considered sacred) and away from the sea (kelod, considered less sacred). Offerings are made three times daily at household, village, and major temples, following both lunar (saka) and solar (wuku) ceremonial calendars.</p>
            <p>For the authentic experience, visit during non-ceremonial hours for photography, engage a certified cultural guide for deeper context, carry small change for donation boxes, and learn basic phrases: 'Permisi' (excuse me), 'Matur suksma' (thank you in Balinese).</p>
            `,
            date: "January 15, 2026",
            author: "Dr. Alexandra Chen",
            image: "https://images.unsplash.com/photo-1523413363572-3c7d81c746d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: "2",
            slug: "beyond-instagram-waterfalls",
            title: "Beyond Instagram: Discovering Bali's Hidden Hydrological Wonders",
            excerpt: "Move beyond crowded waterfalls to explore Bali's lesser-known cascades where geology, ecology, and adventure intersect.",
            content: `
            <p>While Bali's famous waterfalls draw crowds, the island's true hydrological treasures lie in its complex network of lesser-known cascades, each telling a story of volcanic geology, tropical climate, and cultural significance.</p>
            
            <h3>The Geology of Falling Water: Bali's Volcanic Legacy</h3>
            <p>Bali's waterfalls are shaped by its volcanic history, with basalt cliffs creating dramatic drops and porous limestone forming intricate cave systems behind cascades. Understanding this geology enhances appreciation:</p>
            <ul>
                <li><strong>Northern volcanic slopes:</strong> Create taller, steeper falls with powerful flows</li>
                <li><strong>Eastern limestone formations:</strong> Produce multiple tiers and turquoise pools</li>
                <li><strong>Seasonal variations:</strong> Peak flow occurs November-March during monsoon season</li>
                <li><strong>Sacred springs:</strong> Many waterfalls originate from underground rivers considered sacred</li>
            </ul>
            
            <h3>Conservation-First Exploration Philosophy</h3>
            <p>With increased tourism threatening delicate ecosystems, we advocate for a 'leave no trace' approach complemented by active conservation efforts:</p>
            <ul>
                <li>Visit during shoulder hours (7-9 AM or 3-5 PM) to reduce environmental impact</li>
                <li>Use reef-safe, biodegradable sunscreen before swimming in natural pools</li>
                <li>Support local conservation collectives through guided tour fees</li>
                <li>Report pollution and environmental concerns via Bali Waterkeeper app</li>
                <li>Stay on marked paths to prevent erosion and protect fragile ecosystems</li>
            </ul>
            
            <h3>Advanced Exploration Routes for Serious Adventurers</h3>
            <p>For experienced adventurers, these routes offer profound connections with Bali's natural heritage:</p>
            
            <h4>Sekumpul Circuit (Challenging)</h4>
            <p>Seven interconnected falls, bamboo forests, and traditional subak irrigation systems. Requires local guide for navigation through multiple river crossings and steep terrain.</p>
            
            <h4>Northern Highlands Loop (Moderate)</h4>
            <p>Connect Gitgit, Aling-Aling, and SingSing falls in one comprehensive day trip. Suitable for independent travelers with good fitness levels.</p>
            
            <h3>Essential Equipment for Responsible Waterfall Exploration</h3>
            <p><strong>Essential Items:</strong> Water shoes with grip for slippery rocks, dry bag for electronics, microfiber towel (quick-drying), water purification tablets or portable filter.</p>
            <p><strong>Recommended Gear:</strong> GoPro with waterproof case for documentation, compact first aid kit, lightweight rain jacket (microclimate changes), local guidebook with conservation guidelines.</p>
            
            <h3>Cultural Considerations at Sacred Water Sites</h3>
            <p>Many waterfalls have spiritual significance in Balinese culture. Always ask local guides before swimming, as some pools are considered sacred. Contribute to community donation boxes for site maintenance and support local economies by hiring certified guides from nearby villages.</p>
            `,
            date: "December 28, 2025",
            author: "Marcus Thorne",
            image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        },
        {
            id: "3",
            slug: "balinese-culinary-renaissance",
            title: "Balinese Culinary Renaissance: How Ancient Recipes Are Shaping Modern Gastronomy",
            excerpt: "Discover how Balinese chefs are reinventing ancestral recipes for the global palate while preserving culinary heritage.",
            content: `
            <p>Bali's culinary landscape is experiencing a renaissance, where traditional warungs collaborate with avant-garde chefs to create a globally relevant cuisine that honors its spiritual and agricultural roots.</p>
            
            <h3>The Spice Routes Revisited: A Historical Culinary Journey</h3>
            <p>Balinese cuisine represents a confluence of Indian, Chinese, and indigenous Austronesian traditions, with complex spice pastes (bumbu) forming its foundation:</p>
            <ul>
                <li><strong>9th century:</strong> Indian traders introduce spices and religious food prohibitions</li>
                <li><strong>16th century:</strong> Chinese influence on wok techniques and noodle dishes</li>
                <li><strong>Colonial era:</strong> European introduction of chili peppers and new cooking methods</li>
                <li><strong>Modern era:</strong> Global fusion while maintaining core spiritual elements</li>
            </ul>
            
            <h3>Modern Interpretations: Traditional Dishes Reimagined</h3>
            <p>Progressive Balinese chefs are deconstructing traditional dishes while maintaining their spiritual essence:</p>
            
            <h4>Babi Guling Reinterpreted</h4>
            <p>Once solely ceremonial, now presented as tasting menus across 7 cuts in fine dining establishments, each paired with traditional condiments and modern presentations.</p>
            
            <h4>Lawar Transformed</h4>
            <p>The traditional mix of vegetables, coconut, and meat reimagined as vegetarian tapas using jackfruit and locally foraged greens, maintaining the complex spice profiles.</p>
            
            <h4>Offerings as Art</h4>
            <p>Traditional offerings (canang) reimagined as dessert presentations using edible flowers, palm sugar sculptures, and rice flour creations.</p>
            
            <h3>Sustainable Sourcing: The Farm-to-Table Movement in Bali</h3>
            <p>The farm-to-table movement in Bali goes beyond trend, connecting directly with the island's ancient subak irrigation system and organic farming collectives:</p>
            <ul>
                <li>Look for restaurants supporting 'Bali Organic' certification and traceable ingredient sourcing</li>
                <li>Visit morning markets with chefs for ingredient education and relationship building</li>
                <li>Participate in 'zero-kilometer' dining experiences where food travels from garden to plate within hours</li>
                <li>Support restaurants that work directly with local fishing communities using sustainable methods</li>
            </ul>
            
            <h3>Four-Day Culinary Itinerary for the Discerning Foodie</h3>
            <p><strong>Day 1:</strong> Traditional warung crawl in Gianyar, focusing on family recipes passed through generations.</p>
            <p><strong>Day 2:</strong> Cooking class with heritage recipe keeper, learning ceremonial dishes and their spiritual significance.</p>
            <p><strong>Day 3:</strong> Progressive dinner featuring modern interpretations at three different establishments.</p>
            <p><strong>Day 4:</strong> Farm visit and harvest-to-table lunch, understanding the agricultural foundations of Balinese cuisine.</p>
            
            <h3>Must-Try Authentic Experiences</h3>
            <p>For the genuine culinary journey, seek out these experiences: Bebek Betutu at its origin village where recipes remain unchanged for centuries; Sate Lilit at dawn fish markets for the freshest catch; Traditional sweets (jaja) during temple festivals where they're prepared with ceremonial precision.</p>
            `,
            date: "November 10, 2025",
            author: "Isabella Rossi",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80"
        },
        {
            id: "4",
            slug: "balinese-temporal-architecture",
            title: "Balinese Temporal Architecture: Understanding Ceremonial Calendars and Cosmic Cycles",
            excerpt: "Decode Bali's complex ceremonial calendars to align your visit with profound cultural experiences beyond tourist schedules.",
            content: `
            <p>Bali operates on multiple overlapping temporal systems that dictate daily life, agricultural cycles, and elaborate ceremonies. Understanding these calendars transforms a visit from passive observation to active participation in cosmic rhythms.</p>
            
            <h3>The Three Calendars of Bali: Saka, Pawukon, and Gregorian</h3>
            <p>Balinese timekeeping represents a sophisticated fusion of Indian, Javanese, and indigenous systems:</p>
            
            <h4>Saka Calendar (Lunar-Solar)</h4>
            <p>Based on the Indian Shalivahana era, following lunar months with solar adjustments. Determines major temple anniversaries (odalan) and important ceremonies like Nyepi (Day of Silence).</p>
            
            <h4>Pawukon Calendar (210-Day Cycle)</h4>
            <p>Unique to Bali, this complex 210-day cycle comprises 10 different concurrent weeks (1 to 10 days long). Governs daily offerings, personal ceremonies, and market days.</p>
            
            <h4>Gregorian Calendar</h4>
            <p>Used for business and international interactions, creating a fascinating temporal layering that defines Balinese life.</p>
            
            <h3>Major Ceremonial Periods for Cultural Immersion</h3>
            
            <h4>Galungan and Kuningan (Victory of Dharma)</h4>
            <p>Bali's most important 10-day festival celebrating the victory of good (dharma) over evil (adharma). Streets become galleries of bamboo poles (penjor) adorned with coconut leaves and offerings. Best experienced in family compounds rather than tourist areas.</p>
            
            <h4>Nyepi: The Day of Silence</h4>
            <p>The Balinese New Year where the entire island shuts down for 24 hours of meditation and silence. Preceded by Melasti purification ceremonies at the sea and Ogoh-Ogoh parades of mythological creatures. Requires advance planning as all movement ceases.</p>
            
            <h4>Odalan: Temple Anniversaries</h4>
            <p>Every temple celebrates its founding every 210 days according to the Pawukon calendar. These are intimate local celebrations offering authentic cultural immersion without commercial tourism.</p>
            
            <h3>Practical Guide to Ceremonial Participation</h3>
            <ul>
                <li><strong>Dress code:</strong> Traditional attire (sarong and sash) is mandatory for temple ceremonies</li>
                <li><strong>Photography etiquette:</strong> Many ceremonies restrict photography; always ask permission</li>
                <li><strong>Participation level:</strong> Observe from respectful distance unless explicitly invited</li>
                <li><strong>Offerings:</strong> If participating, bring simple offerings of flowers or fruit</li>
                <li><strong>Timing:</strong> Ceremonies follow Balinese time—often starting later than announced</li>
            </ul>
            
            <h3>Seasonal Considerations for Cultural Travelers</h3>
            <p>Align your visit with these periods for specific experiences:</p>
            <ul>
                <li><strong>Dry Season (April-September):</strong> Ideal for temple festivals and outdoor ceremonies</li>
                <li><strong>Wet Season (October-March):</strong> Agricultural ceremonies and planting rituals</li>
                <li><strong>Shoulder Months:</strong> Balance of good weather and authentic local celebrations</li>
            </ul>
            
            <h3>Digital Resources for Ceremonial Planning</h3>
            <p>Utilize these tools for navigating Bali's ceremonial landscape: Bali Ceremonial Calendar app (updated annually), local cultural guide services for personalized planning, temple social media for specific odalan dates, and community notice boards in traditional villages.</p>
            `,
            date: "October 22, 2025",
            author: "Professor Kenji Tanaka",
            image: "https://images.unsplash.com/photo-1578662991408-1e2d4f74e66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: "5",
            slug: "regenerative-bali-tourism",
            title: "Regenerative Tourism in Bali: Moving Beyond Sustainability to Cultural Renewal",
            excerpt: "Discover how forward-thinking travelers are participating in tourism that actively regenerates Bali's ecosystems and cultural heritage.",
            content: `
            <p>As Bali faces unprecedented tourism pressure, a new paradigm is emerging: regenerative tourism that goes beyond minimizing harm to actively restoring ecosystems, strengthening communities, and revitalizing cultural traditions.</p>
            
            <h3>From Sustainability to Regeneration: An Evolving Paradigm</h3>
            <p>While sustainable tourism aims to 'do no harm,' regenerative tourism actively improves the destination. This shift represents a fundamental rethinking of the traveler's role from consumer to contributor.</p>
            <ul>
                <li><strong>Sustainable:</strong> Reducing plastic use, carbon footprint</li>
                <li><strong>Regenerative:</strong> Participating in beach cleanups, reforestation projects</li>
                <li><strong>Culturally Sustainable:</strong> Respecting traditions</li>
                <li><strong>Culturally Regenerative:</strong> Supporting traditional arts revival, language preservation</li>
            </ul>
            
            <h3>The Plastic Crisis and Circular Economy Solutions</h3>
            <p>Bali's plastic waste problem requires systemic solutions where travelers can participate:</p>
            
            <h4>Refill Revolution</h4>
            <p>Join the growing network of refill stations across Bali. Bring your own containers for water, shampoo, and sunscreen. Many cafes and hotels now offer discounts for refills.</p>
            
            <h4>Upcycling Initiatives</h4>
            <p>Participate in workshops transforming plastic waste into building materials, fashion items, or art installations. These programs create economic opportunities while addressing waste.</p>
            
            <h4>Ocean Cleanup Partnerships</h4>
            <p>Dive operators and surf schools now integrate beach and ocean cleanups into their offerings. Choose operators who dedicate a percentage of profits to cleanup initiatives.</p>
            
            <h3>Cultural Regeneration: Supporting Living Heritage</h3>
            <p>True cultural preservation supports living traditions rather than turning them into museum exhibits:</p>
            
            <h4>Traditional Arts Patronage</h4>
            <p>Attend performances at community venues rather than hotel shows. Purchase directly from artists at their studios. Consider commissioning pieces to support specific art forms at risk of disappearing.</p>
            
            <h4>Language and Knowledge Preservation</h4>
            <p>Learn basic Balinese phrases beyond tourist Indonesian. Participate in programs documenting oral histories with village elders. Support schools teaching traditional skills to younger generations.</p>
            
            <h4>Architectural Conservation</h4>
            <p>Stay in properties that preserve traditional architecture using sustainable materials. Avoid accommodations that displace local communities or alter sacred landscapes.</p>
            
            <h3>Economic Models That Regenerate Communities</h3>
            <p>Seek out tourism enterprises built on regenerative economic principles:</p>
            <ul>
                <li><strong>Community-owned cooperatives:</strong> Where profits directly benefit local residents</li>
                <li><strong>Social enterprises:</strong> That reinvest surplus into community projects</li>
                <li><strong>Fair trade tourism:</strong> Ensuring equitable distribution of tourism revenue</li>
                <li><strong>Skills development programs:</strong> That create career paths beyond entry-level positions</li>
            </ul>
            
            <h3>The Regenerative Traveler's Toolkit</h3>
            <p>Implement these practices for a truly regenerative Bali experience:</p>
            <ol>
                <li>Calculate and offset your carbon footprint through verified reforestation projects</li>
                <li>Choose accommodations with clear regenerative commitments and transparent reporting</li>
                <li>Allocate a portion of your travel budget to community-led conservation initiatives</li>
                <li>Engage in 'voluntourism' carefully, ensuring skills match real community needs</li>
                <li>Document and share regenerative practices to inspire other travelers</li>
                <li>Provide constructive feedback to tourism businesses on their regenerative efforts</li>
                <li>Maintain connections and continue support beyond your visit</li>
            </ol>
            
            <h3>Measuring Impact: Beyond Feel-Good Tourism</h3>
            <p>Look for operators who measure and report on specific regeneration metrics: tons of plastic removed, hectares reforested, traditional practitioners supported, local employment created with living wages. Your choices as a traveler can contribute to these measurable outcomes.</p>
            `,
            date: "September 15, 2025",
            author: "Dr. Anika Schmidt",
            image: "https://images.unsplash.com/photo-1523413363572-3c7d81c746d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ]
};