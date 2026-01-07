export const siteConfig = {
    theme: {
        colors: {
            primary: "#2e3a59", // Dark Slate Blue
            secondary: "#8da3b5", // Card Blue from design
            accent: "#d97706", // Amber/Yellow for stars/accents (inferred)
            background: "#ffffff",
            surface: "#f3f4f6", // Surface Light
            text: "#1f2937",
        },
        layout: {
            radius: "0.5rem", // Default rounded
        },
        fonts: {
            display: "Montserrat, sans-serif",
            body: "Inter, sans-serif",
        }
    },
    global: {
        siteName: "WANDER.ph",
        navbar: {
            logoText: "WANDER.ph",
            links: [
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
            ]
        },
        footer: {
            copyright: "© 2026 WANDER.ph. All rights reserved."
        },
        whatsapp: "62812345678", // Default placeholder
    },
    pages: {
        home: {
            hero: {
                title: "WANDER",
                subtitle: "PH",
                description: "Discover breathtaking destinations across the Philippines with curated tours, local insights, and hassle-free planning all in one platform.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJcHu6gzOmdgbsgDukkEb1zFG7T_ZyRGnLJ9PE9CWUjpeqqDpZzL4VFMkdpeg0mtwHxQ-j87EuC76CkI4DFG1neECB1nI_-0B0wfxmyiqj6TI6pqnA16ZMa8lGDDZB1oveOjJ0Ash7EQRFWHqKO7vAD8M-pw1ggNRrjbx8hVjIRG0FNsacEchM4AtRxMoSXeIEKyeYEXyeihP1eOGpCa8AUQGsnrJe6z0jt2zwf_2ZRCvFidJ6MxxTNMTcyfFT-nwnxjQuT31Ybw",
                cta: [
                    { label: "Plan Your Trip", href: "/packages", variant: "primary" },
                    { label: "Read Our Blog", href: "/blog", variant: "outline" }
                ]
            },
            features: {
                title: "Why Thousands of Travelers Choose WANDER.ph for Their Philippine Adventures",
                subtitle: "From pristine beaches to cultural hotspots, we make exploring the Philippines easier, safer, and more exciting with expert-crafted itineraries and round-the-clock support.",
                stats: [
                    { value: "12k", label: "Happy and Satisfied Travelers", icon: "Smile" },
                    { value: "10yrs", label: "Proven Travel Industry Experience", icon: "BadgeCheck" },
                    { value: "50+", label: "Philippine Destinations Covered", icon: "MapPin" },
                ],
                cards: [
                    { title: "Local Expertise", description: "Our Filipino travel experts craft unique experiences with insider knowledge you won't find in typical tours.", icon: "Map" },
                    { title: "All-in-One Booking", description: "Book everything in one place—easy, fast, and hassle-free, whether for quick getaways or planned vacations.", icon: "Calendar" },
                    { title: "24/7 Support", description: "We're here anytime, anywhere. Get real-time help anytime you need it before, during, or after your trip.", icon: "Headphones" },
                ]
            },
            testimonials: {
                title: "What our travelers say",
                items: []
            },
            bookingSteps: {
                title: "Booking made as easy as 1-2-3.",
                steps: [
                    { title: "Pick Your Destination", icon: "MousePointerClick" },
                    { title: "Customize Your Tour", icon: "Sliders" },
                    { title: "Confirm & Travel", icon: "CheckCircle" },
                ]
            }
        },
        about: {
            title: "About Us",
            subtitle: "We are passionate about showing you the real Philippines.",
            description: "Founded in 2013, WANDER.ph has been at the forefront of Philippine tourism, connecting travelers with authentic local experiences. Our mission is to provide sustainable, enjoyable, and hassle-free travel packages that showcase the beauty of our archipelago.",
            image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2574&auto=format&fit=crop",
            stats: [
                { label: "Years of Service", value: "10+" },
                { label: "Trips Organized", value: "5000+" },
                { label: "Local Partners", value: "200+" }
            ]
        },
        blog: {
            title: "Travel Blog",
            subtitle: "Stories, tips, and guides for your next adventure."
        },
        contact: {
            title: "Contact Us",
            description: "Let us help you plan your perfect trip.",
            buttonText: "Chat on WhatsApp"
        }
    },
    tours: [
        {
            id: "1",
            slug: "el-nido",
            title: "El Nido",
            subTitle: "Beach paradise",
            price: "₱4,999",
            rating: "4.8 (1.2k)",
            location: "Palawan Region",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7p0eP4aRaU1pzlrCZG2uTKzIXS_dpG-fnDxZ-NUellnw-jVxVD4-qPu5gP-lxscIzqC8jn04QJT7OiKf9Gck0hbMY3nqQiQbZqq0lyM902Gxswssszg8V4NCWqyvmhyreYRuAp13BwVsEZnmcKD7GQqJFsGBts_oEkS6pZQOEniHAfS9lA_gK2coZ8Kzijzh0aarT5zVA1Xp6dNv1McvgMf0zCd0Atp1WaXv_eIaagmuEAu60cLh1HgVujWqeRQtjnV7E6nKArg",
            description: "The stunning limestone cliffs and crystal clear waters of El Nido await you.",
            highlights: ["Island Hopping Tour A", "Big Lagoon", "Secret Lagoon"],
            featured: true
        },
        {
            id: "2",
            slug: "baguio-city",
            title: "Baguio City",
            subTitle: "Mount Getaway",
            price: "₱3,200",
            rating: "4.6 (950)",
            location: "Benguet Region",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvhdHRqiKiEFjDWZrCnGlcvn1fGVGVZekRrJ0mmi_D-CBLlH4e3jf42ROET-V5G6zWt8ihtG6X44WyVl8Ik6n8cie18i1DmGaJaAwa_JzpTerxRM8a_l2w8rxJ679m6BOoTnch9IW__M3WlO7hlbw4e8RcEdhLp08Xyz1w5E528haido_R6Qg7YCq_IsH4ciP2snjcyAp0B6Q7IJMXAotFNh4cgjDufpICslmIrpMEl4vrS9kIG8Mn0tYa_pTweFwmeIC2RiBh-w",
            description: "Escape the heat and enjoy the pine-scented air of the Summer Capital.",
            highlights: ["Camp John Hay", "Mines View Park", "Night Market"],
            featured: true
        },
        {
            id: "3",
            slug: "siargao",
            title: "Siargao",
            subTitle: "Surf & Chill",
            price: "₱5,500",
            rating: "4.9 (2k)",
            location: "Surigao del Norte Region",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB606PptXH9Hcc8hWE80fQ4eilCpcDreR0nAiY1SeVRMMI_eqln6Icl9Pw4EqiKnj1-dvmwryYzqgBmUtoi2S0u1gSPQe4Ugk-yALjei913vbwQBnROML-Bok4Zc75NnGc64Deqzi65rJ5dApPKhqfi0QhPMQzUAcrQ3hUG0ut25lg9bHXvVVdl1wWAaDGIAyPmPtGJ9N_EQkP4m242A8T19aQ2otfWwTwsiRqm87afmTzhY1ndnSQqmynEEk94NG8-4nupp8iNw",
            description: "Ride the waves or relax in the rock pools of Siargao.",
            highlights: ["Cloud 9 Boardwalk", "Magpupungko Rock Pools", "Sugba Lagoon"],
            featured: true
        },
        {
            id: "4",
            slug: "vigan",
            title: "Vigan",
            subTitle: "Heritage City",
            price: "₱4,250",
            rating: "4.7 (780)",
            location: "Ilocos Sur Region",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPGGhEKCAG6jHAfzFhg0af8jL_wByGYWgjNB5kgRDR3uK9K7PdcMMv5fUMOn6p7e1VDl7OXhU2sUgS56mU8zedhCGm9x5toz_cQ3zE_wwzPGqPH0qCiIlq8W8HcYBBRr2nWjKaba9bjqI-ObZmutocxY-GQ4BqcsSsfglY1qg356gYAK0JFWd01fBcUrgU8dB7Cn-rydYdFu2_MZrSMfrphuv2b7XjQCVgtXScyxouLoOI80ziAiBux0Ljc1kKeXpR8ZbmTfFXqA",
            description: "Travel back in time in the historic city of Vigan.",
            highlights: ["Calle Crisologo", "Bantay Bell Tower", "Pottery making"],
            featured: true
        },
        {
            id: "5",
            slug: "island-hopper-adventure",
            title: "Island Hopper Adventure",
            subTitle: "Palawan",
            description: "Hop from beach to beach in Palawan with boat tours, guided snorkeling, and a sunset cruise.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3Qdy_4FFew1en7NOfM7-Al9jS90XR8CLPV2py3kvRTuBZEQjkxKgAnd6gmoPedWY7XpYqLQqa3N5Onbq-vl45wNKM77cL8qax9m4h4UzbEr4y5t2WEwYNPVbVto07ay45IrNjbzHeaFS-xXmstwEq_A-OW9M1GWzWTXBMvMgpaXjWduQxryiM-SL_hdDgVD-lJHscKNfyUROxFHiCLl0FIte7p0egnjsgRGDs54UsOOCG27y2xAkL1tQdHkOOhykOFDIv5FxXUA",
            price: "Ask for quote",
            isPackage: true
        },
        {
            id: "6",
            slug: "northern-highland-escape",
            title: "Northern Highland Escape",
            subTitle: "Sagada",
            description: "Experience the cool breeze of Baguio and Sagada with scenic views, food trips, and local art.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvwaF_NDWHH6zad6drxzqppQnt10nl2Ws0R1pIHfTCHJi4Fzu1fbygDMQ8AFJBx2MNBff4KtAXL4V6mh6rQiiQcZ90PmNosZAlbGGAuSCQkBPd4cEWDJKKwlnhywVunms4Q9SYHEH29iPv8IHOmao_ciAur-76_rd28Da1kn5Hxozmw1jX9l0f5-dBwekiAe6-by45kI701TEZzekDV04abcFyMAJ89gtv2sk7GPMrozC_8J9HmgRrxFh5vRizrQdSazDNHtOh8w",
            price: "Ask for quote",
            isPackage: true
        }
    ],
    articles: [
        {
            id: "1",
            slug: "10-most-beautiful-beaches",
            title: "10 Most Beautiful Beaches in the Philippines",
            excerpt: "From Boracay to Palawan, discover the white sand paradises that make the Philippines a top beach destination.",
            content: `
            <p>The Philippines is known for its stunning archipelago of over 7,000 islands.</p>
            <h3>1. Boracay, Aklan</h3>
            <p>Famous for its white fine sand.</p>
            <h3>2. El Nido, Palawan</h3>
            <p>Known for limestone cliffs and secret lagoons.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `,
            date: "October 15, 2025",
            author: "Sarah Jen",
            image: "https://images.unsplash.com/photo-1548293266-93a661850903?q=80&w=2689&auto=format&fit=crop"
        },
        {
            id: "2",
            slug: "sagada-spelunking-guide",
            title: "A Complete Guide to Sagada Spelunking",
            excerpt: "Brave the caves of Sumaguing and Lumiang. Here is everything you need to know before you go.",
            content: `
            <p>Spelunking in Sagada is not for the faint of heart.</p>
            <h3>Sumaguing Cave</h3>
            <p>The Big Cave is the most popular for beginners.</p>
            <h3>Lumiang Cave</h3>
            <p>A burial cave containing ancient coffins.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        `,
            date: "November 02, 2025",
            author: "Mike Travelers",
            image: "https://images.unsplash.com/photo-1504280390367-361c6d9e38f4?q=80&w=2670&auto=format&fit=crop"
        }
    ]
};
