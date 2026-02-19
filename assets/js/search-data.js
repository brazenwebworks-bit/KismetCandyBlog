const searchData = [
    {
        title: "The History of Nerds",
        url: "pages/blog-template.html",
        category: "History",
        content: "It was 1983 when the candy world was forever changed by the introduction of a tiny, crunchy, irregularly shaped sensation: Nerds. Created by the Willy Wonka Candy Factory, Nerds were a departure from the smooth chocolates and chewy gummies that dominated the aisles. They were pure sugar, tangy and sweet, coated in a carnauba wax glaze that gave them their signature crunch. Two Flavors, One Box. One of the most innovative aspects of Nerds was the packaging. The split box allowed two different flavors to coexist without mixing. Strawberry and Grape became the definitive duo.",
        image: "assets/images/Photos/7f7cdbc33ec612d432e5b7d3ac4f6d25.jpg"
    },
    {
        title: "Blue Raspberry's Secret",
        url: "pages/blue-raspberry.html",
        category: "Science",
        content: "If you were a child in the last 40 years, you know the badge of honor: a tongue stained an unnatural, radioactive shade of neon blue. Whether it was a slushie, a Jolly Rancher, or an Otter Pop, Blue Raspberry was the undisputed king of summer flavors. The invention of Blue Raspberry wasn’t just a marketing gimmick; it was a desperate solution to a public health crisis involving the color red. FDA banned Red No. 2. Enter Brilliant Blue FD&C Blue No. 1.",
        image: "assets/images/Photos/360_F_1831273889_kY2aHY6748mrKIKhf58QwO5XP07TsR5k.jpg"
    },
    {
        title: "The Sweet Irony",
        url: "pages/cotton-candy.html",
        category: "History",
        content: "Why a dentist invented cotton candy: the true story behind the cavity-inducing cloud. Cotton candy is the quintessential carnival treat. But here is a fact that sounds like a bad joke: the machine responsible for mass-producing this cavity-inducing confection was invented by a dentist. Dr. William Morrison and confectioner John C. Wharton filed a patent for an electric candy machine in 1897. They called it Fairy Floss. 1904 World's Fair.",
        image: "assets/images/Photos/cotton-candy-free-photo - Copy.webp"
    },
    {
        title: "Sour Science",
        url: "pages/sour-science.html",
        category: "Science",
        content: "Exploring the psychological and physiological reasons behind our craving for sour candies. We’ve all been there. You pop a Warhead or a Sour Patch Kid into your mouth. Why do we do this? Physiological Alarm Bell. Spoilage. Unripeness. Hydrogen ions. Saliva Surge. Benign Masochism. Paul Rozin. Thrill-seeking. Sweet-Sour Contrast. Sensory Boredom.",
        image: "https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=1888&auto=format&fit=crop"
    },
    {
        title: "The Freeze-Dried Revolution",
        url: "pages/freeze-dried.html",
        category: "Trends",
        content: "The Freeze-Dried Revolution: Crunch Time. If you’ve scrolled through social media lately, you’ve likely seen the explosion of freeze-dried candy. From Skittles to taffy. Lyophilization. Sublimation. Intensity Amplified. Airy, Styrofoam-like crunch. Frittles. Astronaut food.",
        image: "assets/images/Photos/freezedriedNerdsbites - Copy.webp"
    },
    {
        title: "Global Gummies",
        url: "pages/global-gummies.html",
        category: "Trends",
        content: "Global Gummies: A World of Texture. The gummy bear may have started it all, but the world of gummy candy has expanded. Japan, Kasugai, Cororo. Peelable gummy trend. Texture as a Flavor. Scandinavia, salty licorice. Liquid centers, marshmallow foams.",
        image: "assets/images/Photos/61J9F14PsCL._AC_UF894,1000_QL80_.jpg"
    },
    {
        title: "Matcha Madness",
        url: "pages/matcha-madness.html",
        category: "Flavor",
        content: "Matcha Madness: Green Tea Goes Mainstream. Once reserved for traditional Japanese tea ceremonies. Fine powder made from specially grown green tea leaves. Antioxidant boost. The Perfect Balance. Earthy, grassy notes. White chocolate pairing. Sophisticated harmony.",
        image: "assets/images/Photos/Navitas_Blog_Matcha_Uses_WEB3_ea4adadb-c844-4f53-baa9-2300a652586c.webp"
    },
    {
        title: "Salt & Sweet",
        url: "pages/salt-and-sweet.html",
        category: "Flavor",
        content: "Salt & Sweet: The Perfect Marriage. Sea salt caramel, dark chocolate with fleur de sel. Biology. Salt is a flavor enhancer. Suppresses bitterness. Beyond Caramel. Salted licorice (Salmiakki). Contrast. Palate fatigue.",
        image: "assets/images/Photos/ZERSQAMFWZD7AH6YRWT4MOEW.webp"
    },
    {
        title: "Tempering Chocolate",
        url: "pages/tempering-chocolate.html",
        category: "Science",
        content: "Tempering Chocolate: The Science of Snap. Untempered chocolate bends or crumbles. White streaks (bloom). Controlled crystallization of cocoa butter. Polymorphic. Form V (Beta) crystals. The Golden Crystal. Molecular engineering. Shiny, stable.",
        image: "assets/images/Photos/Food+packshot+photography+chocolate+bars.webp"
    },
    {
        title: "The Origins of Chocolate",
        url: "pages/chocolate-history.html",
        category: "History",
        content: "The Origins of Chocolate. Mesoamerica to Europe. Olmecs, Mayans, Aztecs. Food of the gods. Xocolatl. Spicy drink. Spanish explorers. Industrial Revolution. Fry, Cadbury, Nestle. Solid chocolate bars.",
        image: "assets/images/Photos/Chocolate History.png"
    },
    {
        title: "Why Mint Tastes Cold",
        url: "pages/mint-science.html",
        category: "Science",
        content: "Why Mint Tastes Cold. Menthol. TRPM8 receptor. Cold temperature detection. Chemical illusion. Biological hack. Capsaicin. Heat receptor. Sensory hijack.",
        image: "assets/images/Photos/mint-candies-in-bowl-menthol-bonbons-and-mint-lea-2023-11-27-19-32-54-utc_1100x.webp"
    },
    {
        title: "Spicy Sweets",
        url: "pages/spicy-sweets.html",
        category: "Trends",
        content: "Spicy Sweets: The Heat Wave. Swicy. Benign masochism. Enjoying pain safely. Chili-infused gummies. Mexican candy influence. Chamoy. Dulces Enchilados. Hot Tamales.",
        image: "assets/images/Photos/Gemini_Generated_Image_rjwixerjwixerjwi.png"
    },
    {
        title: "Vanilla: More Than Plain",
        url: "pages/vanilla-flavor.html",
        category: "Flavor",
        content: "Vanilla: More Than Plain. Complex exotic flavor. Vanilla planifolia orchid. Hand-pollinated. 250 flavor compounds. Madagascar, Tahiti, Mexico. Synthetic vanillin. Wood pulp.",
        image: "assets/images/Photos/Grade-A-vs-Grade-B-Beans.jpg"
    },
    {
        title: "The Candy Cane Story",
        url: "pages/candy-cane.html",
        category: "History",
        content: "The Candy Cane Story. Winter holiday symbol. Choirmaster. Cologne Cathedral. Quiet children. Shepherd's crook. J for Jesus. Peppermint flavor. Red stripes. Mass production.",
        image: "assets/images/Photos/Candy cane imaage.png"
    }
];
