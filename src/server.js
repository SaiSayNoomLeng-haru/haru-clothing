import { createServer, Model } from "miragejs";

createServer({
    models: {
        products: Model,
        blogs: Model,
        reviews: Model,
        filters: Model,
        teams: Model,
        faqs: Model
    },

    seeds(server){
        //jackets
        server.create("product", {id: "w001", name: "Loose Pu Leather Straight Jacket", category: "women", size: ["s", "m", "l", "xl", "xxl"], price: 48, discount: 10, brand: "nuuly", availableColor: ['green', 'brown', 'gray'], type: 'jacket', imageUrl: ["/assets/images/products/w001-img1.jpg", "/assets/images/products/w001-img2.jpg", "/assets/images/products/w001-img3.jpg", "/assets/images/products/w001-img4.jpg", "/assets/images/products/w001-img5.jpg"], productDetail: "Composition: 100% Polyurethane Design: Button Style: Elegant, Romantic Thickness: Regular Material: Faux Leather Sleeve Length: Long Sleeve Occasion: Leisure, Vacation, Party, Work", rating: 4.5})

        server.create("product", {id: "w002", name: "Large pockets breasted suede jacket", category: "women", size: ["s", "m", "l", "xl", "xxl"], price: 36, discount: 8, brand: "nuuly", availableColor: ['green', 'brown', 'gray', 'yellow'], type: 'jacket', imageUrl: ["/assets/images/products/w002-img1.jpg", "/assets/images/products/w002-img2.jpg", "/assets/images/products/w002-img3.jpg"], productDetail: " Composition: 90% Polyester, 10% Elastane Design: Plain Style: Casual Thickness: Regular Sheer: No Material: Suede Sleeve Length: Long Sleeve Occasion: Leisure, Wedding, Home, Vacation, Work", rating: 4.2})

        server.create("product", {id: "w003", name: "Chocolate Chip Jacket", category: "women", size: ["s", "m", "l", "xl"], price: 37, discount: 12, brand: "nuuly", availableColor: ['purple', 'gray', 'dark green'], type: 'jacket', imageUrl: ["/assets/images/products/w003-img1.jpg", "/assets/images/products/w003-img2.jpg","/assets/images/products/w003-img3.jpg","/assets/images/products/w003-img4.jpg","/assets/images/products/w003-img5.jpg"], productDetail: "Details Vegan leather shacket Snap button front Large chest pockets Long sleeves Collared neckline Oversized fit Full length of a size medium from front: 28.5 inches Full length of a size medium from back: 31 inches Materials and Care Shell: 55% polyester, 45% polyurethane Hand wash cold Hang dry", rating: 4.8})

        server.create("product", {id: "w004", name: "Faux Leather Jacket", category: "women", size: ["s", "m", "l"], price: 148, discount: 15, brand: "nuuly", availableColor: ['red', 'gray', 'dark blue'], type: 'jacket', imageUrl: ["/assets/images/products/w004-img1.jpg", "/assets/images/products/w004-img2.jpg", "/assets/images/products/w004-img3.jpg","/assets/images/products/w004-img4.jpg"], productDetail: "The name 'Maeve' references a purple flower, a Greek goddess and a famously beautiful Irish warrior queen, all inspirations for this structured, delicate Exclusive to Anthropologie, Maeve designs are refined, flattering and endlessly wearable.", rating: 4.4})

        server.create("product", {id: "w005", name: "Faux Leather Jacket II", category: "women", size: ["s", "m", "l", "xl", "xxl"], price: 158, discount: 20, brand: "nuuly", availableColor: ['green', 'brown', 'gray'], type: 'jacket', imageUrl: ["/assets/images/products/w005-img1.jpg", "/assets/images/products/w005-img2.jpg","/assets/images/products/w005-img3.jpg"], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})

        server.create("product", {id: "w006", name: "Contrast Binding Button Trench Coat", category: "women", size: ["s", "m", "l"], price: 258, discount: 20, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray'], type: 'jacket', imageUrl: ["/assets/images/products/w006-img1.jpg", "/assets/images/products/w006-img2.jpg", "/assets/images/products/w006-img3.jpg", "/assets/images/products/w006-img4.jpg", "/assets/images/products/w006-img5.jpg"], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})

        server.create("product", {id: "m001", name: "Water Repellet Puffer Jacket", category: "men", size: ["s", "m", "l"], price: 99.97, discount: 12, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray'], type: 'jacket', imageUrl: ["/assets/images/products/m001-img1.jpg", "/assets/images/products/m001-img2.jpg", "/assets/images/products/m003-img3.jpg"], productDetail: "Come rain or snow, this water-repellent puffer holds up under the most inclement weather with cozy recycled down and hands-free straps for the moment temperatures begin to rise.", rating: 4.5})

        server.create("product", {id: "m003", name: "Modern Suede Jumper", category: "men", size: ["s", "m", "l"], price: 868.48, discount: 20, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray'], type: 'jacket', imageUrl: ["/assets/images/products/m003-img1.jpg", "/assets/images/products/m003-img2.jpg"], productDetail: "Jumper Jacket high quality", rating: 4.7})

        server.create("product", {id: "m002", name: "Oversized Washed Faux-Leather Bomber", category: "men", size: ["s", "m", "l"], price: 279.48, discount: 18, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'jacket', imageUrl: ["/assets/images/products/m002-img1.jpg", "/assets/images/products/m002-img2.jpg", "/assets/images/products/m002-img3.jpg"], productDetail: "This basic bomber jacket features vintage mood washing texture and voluminous oversized silhouette so works well for versatile styling. It's finished with ribbed hem and two-way zipper to allow comfortable wear.  - Two-way zip-up fastening- Two front welt pockets- Utility pocket at sleeve- Ribbed edges- Internal pocket- Oversized fit- Please note lining is normal plain lining not quilted", rating: 4.7})

        server.create("product", {id: "m004", name: "Pierce Embroidered Jacket", category: "men", size: ["s", "m", "l"], price: 129.48, discount: 13, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'jacket', imageUrl: ["/assets/images/products/m004-img1.jpg", "/assets/images/products/m004-img2.jpg", "/assets/images/products/m004-img3.jpg"], productDetail: "Available In Black. Fold Down Collar Long Sleeves Ribbed Cuffs Shell Coating: 100% Polyurethane Base Fabric, Lining: 100% Polyester Imported California Proposition 65 WARNING: Cancer and Reproductive Harm - www.P65Warnings.ca.gov. | Mens Pierce Embroidered Jacket in Black size XL by Fashion Nova", rating: 4.7})

        server.create("product", {id: "m005", name: "Down Outerwear", category: "men", size: ["s", "m", "l"], price: 159, discount: 16, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'jacket', imageUrl: ["/assets/images/products/m005-img1.jpg", "/assets/images/products/m005-img2.jpg", "/assets/images/products/m005-img3.jpg", "/assets/images/products/m005-img4.jpg", "/assets/images/products/m005-img5.jpg"], productDetail: "Available In Black. Fold Down Collar Long Sleeves Ribbed Cuffs Shell Coating: 100% Polyurethane Base Fabric, Lining: 100% Polyester Imported California Proposition 65 WARNING: Cancer and Reproductive Harm - www.P65Warnings.ca.gov. | Mens Pierce Embroidered Jacket in Black size XL by Fashion Nova", rating: 4.7})


        // coat
        server.create("product", {id: "w007", name: "Soft Wrap Coat Jacket", category: "women", size: ["s", "m", "l"], price: 228, discount: 18, brand: "normal", availableColor: ['black', 'brown', 'gray'], type: 'coat', imageUrl: ["/assets/images/products/w007-img1.jpg", "/assets/images/products/w007-img2.jpg","/assets/images/products/w007-img3.jpg", "/assets/images/products/w007-img4.jpg"], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})

        server.create("product", {id: "w008", name: "Premium Wool Blend Wrap Coat", category: "women", size: ["s", "m", "l"], price: 298, discount: 28, brand: "normal", availableColor: ['black', 'brown', 'gray'], type: 'coat', imageUrl: ["/assets/images/products/w008-img1.jpg", "/assets/images/products/w008-img2.jpg", "/assets/images/products/w008-img3.jpg", "/assets/images/products/w008-img4.jpg", "/assets/images/products/w008-img5.jpg"], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})

        server.create("product", {id: "w009", name: "Chic Double Breasted Korean Inspired Trench Coat", category: "women", size: ["s", "m", "l"], price: 188, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: ["/assets/images/products/w009-img1.jpg", "/assets/images/products/w009-img2.jpg", "/assets/images/products/w009-img3.jpg", "/assets/images/products/w009-img4.jpg", "/assets/images/products/w009-img5.jpg"], productDetail: " Korean-inspired minimalist design for a modern edge. Ideal for layering over casual or formal attire.", rating: 4.7})

        server.create("product", {id: "w010", name: "Forest Plaid Coat", category: "women", size: ["s", "m", "l"], price: 158, discount: 20, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: ["/assets/images/products/w010-img1.jpg","/assets/images/products/w010-img2.jpg","/assets/images/products/w010-img3.jpg", "/assets/images/products/w010-img4.jpg","/assets/images/products/w010-img5.jpg"], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.7})

        server.create("product", {id: "w011", name: "Astoria Classic Wraparound Wool Blend Overcoat", category: "women", size: ["m", "l", "xl"], price: 350, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: ["/assets/images/products/w011-img1.jpg", "/assets/images/products/w011-img2.jpg","/assets/images/products/w011-img3.jpg", "/assets/images/products/w011-img4.jpg","/assets/images/products/w011-img5.jpg"], productDetail: " Sizing & Fit: Sizing & Fit: SIZE S HAS FOLLOWING MEASUREMENTS: Bust - 19 inch Waist - 19.5 inch Hips - 21 inch SIZE M HAS FOLLOWING MEASUREMENTS: Bust - 20 inch Waist - 20.5 inch Hips - 21.5 inch SIZE L HAS FOLLOWING MEASUREMENTS: Bust - 21 inch Waist - 21.5 inch Hips - 22.5 inch Slightly oversized silhouette. ", rating: 4.3})

        server.create("product", {id: "w012", name: "Cashmere Color-Block Robe Coat", category: "women", size: ["s", "m", "l", 'xl'], price: 251, discount: 18, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: ["/assets/images/products/w012-img1.jpg", "/assets/images/products/w012-img2.jpg","/assets/images/products/w012-img3.jpg", "/assets/images/products/w012-img4.jpg", "/assets/images/products/w012-img5.jpg"], productDetail: `I knew immediately that a colorblocked robe coat, a HARBISON signature, would work perfectly for our collaboration. Offering it in responsibly sourced wool and cashmere was the icing on the cake for every customer across the board, regardless of gender." -Charles Harbison OVERSIZED FIT: Very relaxed. Straight through the waist. Dropped shoulder. SUSTAINABILITY: Woven by masters at an Italian mill, this fabric uses a mix of 20% recycled cashmere and 20% certified Responsible Wool Standard wool. This global standard protects the sheep that supply the wool for this sweater as well as the land they graze, working to make it better for the environment and the sheep.`, rating: 4.7})

        server.create("product", {id: "m006", name: "Men Winter Long Coat", category: "men", size: ["s", "m", "l"], price: 263, discount: 22, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'coat', imageUrl: ["/assets/images/products/m006-img1.jpg", "/assets/images/products/m006-img2.jpg", "/assets/images/products/m006-img3.jpg"], productDetail: "2023 Men Winter New Long Real Mink Fur Collar Coats Male Genuine Lambswool Jackets Men Long Single", rating: 4.2})

        server.create("product", {id: "m007", name: "Men Business Style Coat", category: "men", size: ["s", "m", "l"], price: 130, discount: 12, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'coat', imageUrl: ["/assets/images/products/m007-img1.jpg", "/assets/images/products/m007-img2.jpg", "/assets/images/products/m007-img3.jpg"], productDetail: "Store Categories Store Categories Other Men's Business Style Lapel Double Breasted Coats Fall Winter Wool Jackets Size Product Description Outer Shell Material Wool Department Men Style Overcoat Color Multicolor Brand Unbranded Size Type Regular Size 3XL", rating: 4.2})

        server.create("product", {id: "m008", name: "The Hughes Coat", category: "men", size: ["s", "m", "l"], price: 145, discount: 22, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'coat', imageUrl: ["/assets/images/products/m008-img1.jpg", "/assets/images/products/m008-img2.jpg", "/assets/images/products/m008-img3.jpg", "/assets/images/products/m008-img4.jpg"], productDetail: "The Hughes Coat is a classic staple with a round collar and a sleek trench coat-like design, adding a touch of timeless sophistication to your wardrobe. With hidden front pockets for practicality, this long coat is perfect for city strolls or weekend getaways.", rating: 4.2})

        server.create("product", {id: "m009", name: "Loro Coat", category: "men", size: ["s", "m", "l"], price: 669, discount: 32, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'coat', imageUrl: ["/assets/images/products/m009-img1.jpg", "/assets/images/products/m009-img2.jpg"], productDetail: "This Loro Piana coat is the perfect addition to any winter wardrobe. Made with high-quality Storm System canvas and lined with polyester, it is both durable and comfortable. The coat features button closure, collared neckline, and insulated Polyester lining. ", rating: 4.4})

        server.create("product", {id: "m010", name: "Abram Top Coat", category: "men", size: ["s", "m", "l"], price: 145, discount: 22, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 'coat', imageUrl: ["/assets/images/products/m010-img1.jpg", "/assets/images/products/m010-img2.jpg", "/assets/images/products/m010-img3.jpg", "/assets/images/products/m010-img4.jpg"], productDetail: "A coat that's, in one word, timeless. In fact, it's modeled after a coat our Chairman Mickey's been wearing for 20+ years. Single breasted. Warm wool blend. ", rating: 4.2})
        
        // t-shirts
        server.create("product", {id: "w013", name: "Women Tshirt INTENSE FEELINGS Street Hip Hop Female", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 31, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: ["/assets/images/products/w013-img1.jpg", "/assets/images/products/w013-img2.jpg","/assets/images/products/w013-img3.jpg", "/assets/images/products/w013-img4.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS Street Hip Hop Female T-Shirts Loose Oversize Short Sleeve Tops Summer.`, rating: 4.4})

        server.create("product", {id: "w014", name: "Women Tshirt Demon Slayer", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 43, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [ "/assets/images/products/w014-img1.jpg",  "/assets/images/products/w014-img2.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS Demon Slayer`, rating: 4.8})

        server.create("product", {id: "w015", name: "Women Tshirt Forever Young", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 35, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: ["/assets/images/products/w015-img1.jpg", "/assets/images/products/w015-img2.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS Demon Slayer`, rating: 4.8})

        server.create("product", {id: "w016", name: "Women Tshirt John Denver Sticker", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 55, discount: 20, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red', 'green'], type: 't-shirt', imageUrl: ["/assets/images/products/w016-img1.jpg", "/assets/images/products/w016-img2.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS John Denver`, rating: 4.2})

        server.create("product", {id: "w017", name: "Women Tshirt Rick and Morty", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 55, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: ["/assets/images/products/w017-img1.jpg", "/assets/images/products/w017-img2.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS Rick and Morty`, rating: 4.8})

        server.create("product", {id: "w018", name: "Women Tshirt Special", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 33, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: ["/assets/images/products/w018-img1.jpg", "/assets/images/products/w018-img2.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS Special`, rating: 4.2})
        
        server.create("product", {id: "w019", name: "Women Tshirt NST", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 30, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: ["/assets/images/products/w019-img1.jpg", "/assets/images/products/w019-img2.jpg",  "/assets/images/products/w019-img3.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS Demon Slayer`, rating: 4.2})

        server.create("product", {id: "w020", name: "Women Tshirt Multiverse Creature", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 43, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: ["/assets/images/products/w020-img1.jpg", "/assets/images/products/w020-img2.jpg", "/assets/images/products/w020-img3.jpg"], productDetail: `Women Tshirt INTENSE FEELINGS Multiverse Creature`, rating: 4.3})

        server.create("product", {id: "m011", name: "Oversized Drop T-Shirt", category: "men", size: ["s", "m", "l"], price: 46, discount: 13, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 't-shirt', imageUrl: ["/assets/images/products/m011-img1.jpg", "/assets/images/products/m011-img2.jpg", "/assets/images/products/m011-img3.jpg", "/assets/images/products/m011-img4.jpg"], productDetail: "This oversized drop shoulder t-shirt is perfect for a laid-back casual look. The comfortable fit allows you to wear it alone or layer it over or under other items. Its versatility makes it an ideal choice for any occasion, easily matching with any type of pants. Gender: MenMaterial: CottonClothing Length: RegularSleeve Length: Short Sleeve Style: Drop ShoulderCollar: Round Neck", rating: 4.2})

        server.create("product", {id: "m012", name: "Boneless Oversized T-Shirt", category: "men", size: ["s", "m", "l"], price: 66, discount: 17, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 't-shirt', imageUrl: ["/assets/images/products/m012-img1.jpg", "/assets/images/products/m012-img2.jpg", "/assets/images/products/m012-img3.jpg", "/assets/images/products/m012-img4.jpg"], productDetail: "The Over-Oversized T-Shirt seamlessly blends vintage aesthetics with superior craftsmanship. This standout piece features a full raglan design and sleeves that extend past the elbows, providing a unique and relaxed silhouette.", rating: 4.5})

        server.create("product", {id: "m013", name: "Givenchy Boxy", category: "men", size: ["s", "m", "l"], price: 756, discount: 25, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 't-shirt', imageUrl: ["/assets/images/products/m013-img1.jpg", "/assets/images/products/m013-img2.jpg", "/assets/images/products/m013-img3.jpg", "/assets/images/products/m013-img4.jpg"], productDetail: "Contrast topstitching traces the boxy shape of this comfortable cotton-jersey T-shirt featuring the Parisian label's mirrored 4G emblem in 3D embroidery. Crewneck Short sleeves Dropped shoulders 100% cotton Dry clean Made in Portugal Designer Clothing", rating: 4.5})
        
        server.create("product", {id: "m014", name: "God's a woman T-shirt", category: "men", size: ["s", "m", "l"], price: 590, discount: 35, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 't-shirt', imageUrl: ["/assets/images/products/m014-img1.jpg", "/assets/images/products/m014-img2.jpg", "/assets/images/products/m014-img3.jpg", "/assets/images/products/m014-img4.jpg"], productDetail: "Find VETEMENTS God Is A Woman' Cropped Boxy T-shirt on Editorialist. Boxy-fit cotton jersey T-shirt. · Rib-knit crewneck · Text printed at front · Cropped hem · Logo embroidered at back collar Supplier color: Black", rating: 4.5})

        server.create("product", {id: "m015", name: "Fear of god T-shirt", category: "men", size: ["s", "m", "l"], price: 350, discount: 35, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray', 'black'], type: 't-shirt', imageUrl: ["/assets/images/products/m015-img1.jpg", "/assets/images/products/m015-img2.jpg", "/assets/images/products/m015-img3.jpg", "/assets/images/products/m015-img4.jpg"], productDetail: "Dropped shoulder seams and a boxy, oversized cut enhance the comfortable fit of this soft cotton T-shirt that fuses quality construction and everyday wearability—hallmarks of founder Jerry Lorenzo's elevated essentials. Crewneck Short sleeves Dropped shoulders 100% cotton Machine wash, line dry Made in Portugal Black Owned/Founded", rating: 4.5})

        // sportwears
        server.create("product", {id: "w021", name: "sport wear sets", category: "women", size: ["s", "m", "l"], price: 156, discount: 12, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'sportwears', imageUrl: ["/assets/images/products/w-sport001-img1.jpg", "/assets/images/products/w-sport001-img2.jpg", "/assets/images/products/w-sport001-img3.jpg"], productDetail: "sport wears set", rating: 4.4})

        server.create("product", {id: "w022", name: "sport wear sets", category: "women", size: ["s", "m", "l"], price: 236, discount: 12, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'sportwears', imageUrl: ["/assets/images/products/w-sport002-img1.jpg", "/assets/images/products/w-sport002-img2.jpg", "/assets/images/products/w-sport002-img3.jpg"], productDetail: "sport wears set", rating: 4.4})

        server.create("product", {id: "w023", name: "sport wear sets", category: "women", size: ["s", "m", "l"], price: 126, discount: 22, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'sportwears', imageUrl: ["/assets/images/products/w-sport003-img1.jpg", "/assets/images/products/w-sport003-img2.jpg", "/assets/images/products/w-sport003-img3.jpg", "/assets/images/products/w-sport003-img4.jpg", "/assets/images/products/w-sport003-img5.jpg"], productDetail: "sport wears set", rating: 4.4})
        
        server.create("product", {id: "w024", name: "sport wear sets", category: "women", size: ["s", "m", "l"], price: 166, discount: 22, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'sportwears', imageUrl: ["/assets/images/products/w-sport004-img1.jpg", "/assets/images/products/w-sport004-img2.jpg", "/assets/images/products/w-sport004-img3.jpg", "/assets/images/products/w-sport004-img4.jpg"], productDetail: "sport wears set", rating: 4.6})

        server.create("product", {id: "w025", name: "sport wear sets", category: "women", size: ["s", "m", "l"], price: 166, discount: 22, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'sportwears', imageUrl: ["/assets/images/products/w-sport005-img1.jpg", "/assets/images/products/w-sport005-img2.jpg", "/assets/images/products/w-sport005-img3.jpg", "/assets/images/products/w-sport005-img4.jpg"], productDetail: "sport wears set", rating: 4.6})

        // hats
        server.create("product", {id: "h01", name: "hat 1", category: "women", size: ["s", "m", "l"], price: 56, discount: 12, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'hat', imageUrl: ["/assets/images/products/h001-img1.jpg", "/assets/images/products/h001-img2.jpg", "/assets/images/products/h001-img3.jpg"], productDetail: "woman cap", rating: 4.4})

        server.create("product", {id: "h02", name: "hat 2", category: "women", size: ["s", "m", "l"], price: 76, discount: 23, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'hat', imageUrl: ["/assets/images/products/h002-img1.jpg", "/assets/images/products/h002-img2.jpg", "/assets/images/products/h002-img3.jpg"], productDetail: "woman cap", rating: 4.4})
        
        server.create("product", {id: "h03", name: "sport wear sets", category: "women", size: ["s", "m", "l"], price: 88, discount: 13, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'hat', imageUrl: ["/assets/images/products/h003-img1.jpg", "/assets/images/products/h003-img2.jpg"], productDetail: "woman cap", rating: 4.6})

        server.create("product", {id: "h04", name: "sport wear sets", category: "women", size: ["s", "m", "l"], price: 86, discount: 22, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'hat', imageUrl: ["/assets/images/products/h004-img1.jpg", "/assets/images/products/h004-img2.jpg", "/assets/images/products/h004-img3.jpg"], productDetail: "woman cap", rating: 4.6})
        

        // pajamas
        server.create("product", {id: "w030", name: "Lettuce Trim Women Pajama Set", category: "women", size: ["s", "m", "l"], price: 8, discount: 2, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'pajamas', imageUrl: ["/assets/images/products/w030-img1.jpg", "/assets/images/products/w030-img2.jpg"], productDetail: "Lettuce Trim Women Pajama Set Sleeveless Round Neck Crop Top & Full-Length Pants Female 2 Piece", rating: 4.4})

        server.create("product", {id: "w031", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 23, discount: 12, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: ["/assets/images/products/w031-img1.jpg"], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        server.create("product", {id: "w032", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 33, discount: 33, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: ["/assets/images/products/w032-img1.jpg"], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        server.create("product", {id: "w033", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 19, discount: 13, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: ["/assets/images/products/w033-img1.jpg"], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        server.create("product", {id: "w034", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 29, discount: 15, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: ["/assets/images/products/w034-img1.jpg","/assets/images/products/w034-img2.jpg", "/assets/images/products/w034-img3.jpg"], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        server.create("product", {id: "w035", name: "Silk Pajama Sets", category: "women", size: ["s", "m", "l"], price: 56, discount: 15, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: ["/assets/images/products/w035-img1.jpg","/assets/images/products/w035-img2.jpg", "/assets/images/products/w035-img3.jpg", "/assets/images/products/w035-img4.jpg"], productDetail: "This pajama set made for your comfort and cozy home aesthetic mood. It will perfectly fit for breakfast, relaxing during the day, home party and of course for sleeping! Handmade pajama set will make you feel stylish while offering incredible comfort", rating: 4.5})

        server.create("product", {id: "w036", name: "Short Pajama Sets", category: "women", size: ["s", "m", "l"], price: 126, discount: 18, brand: "nomral", availableColor: ['green', 'yellow', 'white', 'pink'], type: 'pajamas', imageUrl: ["/assets/images/products/w036-img1.jpg","/assets/images/products/w036-img2.jpg", "/assets/images/products/w036-img3.jpg", "/assets/images/products/w036-img4.jpg", "/assets/images/products/w036-img5.jpg"], productDetail: "Bedtime can’t come soon enough when you’re waiting to slip into the soon-to-be star of your sleep routine, our Short Sleeve Bamboo Pajama Set, as featured in Better Homes & Gardens. Stretch-knit bamboo viscose prevents night sweats with a drapey silhouette that resists bunching", rating: 4.5})

        //blogs
        server.create('blog', {id: 'b01', author: 'jenny Alexander', title: '10 fashion trend for the modern woman', content: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tempore voluptate omnis dolore numquam. Voluptatibus, unde deserunt alias tempora eveniet magnam ipsa delectus beatae accusamus nemo provident quaerat temporibus quas laudantium esse enim dolorum explicabo fugit. Omnis veritatis natus, provident voluptatum veniam perferendis harum magni consectetur explicabo accusamus, deleniti ipsum perspiciatis fugit. Autem rerum tenetur excepturi cupiditate error amet iste odio aliquam sequi dicta? Dolor quis esse fugit quae deleniti repudiandae aut cumque exercitationem laborum officia. Magni consectetur perferendis necessitatibus a quos quas non, sint, aliquam vitae ab dicta? Quia eius rerum assumenda, cumque modi ratione. Ipsum quisquam voluptatum qui.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!"], createdOn: 'Nov 15, 2024', imgUrl: ['/assets/images/blogs/b001-img1.jpg', '/assets/images/blogs/b001-img2.jpg', '/assets/images/blogs/b001-img3.jpg','/assets/images/blogs/b001-img4.jpg']})

        server.create('blog', {id: 'b02', author: 'Tara Smith', title: 'Fashion Forward: Tips, Trends, and Inspiration', content: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tempore voluptate omnis dolore numquam. Voluptatibus, unde deserunt alias tempora eveniet magnam ipsa delectus beatae accusamus nemo provident quaerat temporibus quas laudantium esse enim dolorum explicabo fugit. Omnis veritatis natus, provident voluptatum veniam perferendis harum magni consectetur explicabo accusamus, deleniti ipsum perspiciatis fugit. Autem rerum tenetur excepturi cupiditate error amet iste odio aliquam sequi dicta? Dolor quis esse fugit quae deleniti repudiandae aut cumque exercitationem laborum officia. Magni consectetur perferendis necessitatibus a quos quas non, sint, aliquam vitae ab dicta? Quia eius rerum assumenda, cumque modi ratione. Ipsum quisquam voluptatum qui.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!"], createdOn: 'Sep 10, 2024', imgUrl: ['/assets/images/blogs/b002-img1.jpg','/assets/images/blogs/b002-img2.jpg','/assets/images/blogs/b002-img3.jpg', '/assets/images/blogs/b002-img4.jpg']})

        server.create('blog', {id: 'b03', author: 'Jade Dane', title: 'Fall Fashion Frenzy: The Ultimate Style Guide', content: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tempore voluptate omnis dolore numquam. Voluptatibus, unde deserunt alias tempora eveniet magnam ipsa delectus beatae accusamus nemo provident quaerat temporibus quas laudantium esse enim dolorum explicabo fugit. Omnis veritatis natus, provident voluptatum veniam perferendis harum magni consectetur explicabo accusamus, deleniti ipsum perspiciatis fugit. Autem rerum tenetur excepturi cupiditate error amet iste odio aliquam sequi dicta? Dolor quis esse fugit quae deleniti repudiandae aut cumque exercitationem laborum officia. Magni consectetur perferendis necessitatibus a quos quas non, sint, aliquam vitae ab dicta? Quia eius rerum assumenda, cumque modi ratione. Ipsum quisquam voluptatum qui.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!"], createdOn: 'Sep 20, 2024', imgUrl: ['/assets/images/blogs/b003-img1.jpg','/assets/images/blogs/b003-img2.jpg','/assets/images/blogs/b003-img3.jpg','/assets/images/blogs/b003-img4.jpg']})


        // team
        server.create('team', {id: 't01', name: 'Arlene McCoy', imgUrl: '/assets/images/designer02.jpg', position: 'Fashion Designer'})

        server.create('team', {id: 't02', name: 'Haru', imgUrl: '/assets/images/haru04.jpg', position: 'Founder & CEO'})

        server.create('team', {id: 't03', name: 'Jenny Wilson', imgUrl: '/assets/images/designer.jpg', position: 'Fashion Designer'})

        // faqs
        server.create('faq', {id: 'faq1', question: 'What payment methods do you accepts?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'payment'})

        server.create('faq', {id: 'faq2', question: `Can I track my order after i'ts been placed?`, answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'order'})

        server.create('faq', {id: 'faq3', question: 'Do you offer customer support?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'customer support'})

        server.create('faq', {id: 'faq4', question: 'What is your return policy?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'return'})

        server.create('faq', {id: 'faq5', question: 'How to create Account?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'account'})

        server.create('faq', {id: 'faq6', question: 'Can I cancel my order after it is shipped?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'order'})
        
        // reviews
        server.create('review', {id: 'r01', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, expedita quisquam! Ad magni dicta possimus repudiandae dolores quaerat totam accusantium voluptatum quidem? Voluptates quae, iste minus a dolor neque esse.', author: 'leslie Alexander', position: 'fashion enthusiast',rating: 5, imageUrl: '/assets/images/review/review001.jpg'})

        server.create('review', {id: 'r02', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, expedita quisquam! Ad magni dicta possimus repudiandae dolores quaerat totam accusantium voluptatum quidem? Voluptates quae, iste minus a dolor neque esse.', author: 'Alaxander Leslie', position: 'fashion enthusiast',rating: 4, imageUrl: '/assets/images/review/review002.jpg'})

        server.create('review', {id: 'r03', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, expedita quisquam! Ad magni dicta possimus repudiandae dolores quaerat totam accusantium voluptatum quidem? Voluptates quae, iste minus a dolor neque esse.', author: 'Jane Dane', position: 'fashion enthusiast',rating: 3, imageUrl: '/assets/images/review/review003.jpg'})

        server.create('review', {id: 'r04', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, expedita quisquam! Ad magni dicta possimus repudiandae dolores quaerat totam accusantium voluptatum quidem? Voluptates quae, iste minus a dolor neque esse.', author: 'Elizabth Doe', position: 'fashion enthusiast',rating: 3, imageUrl: '/assets/images/review/review004.jpg'})
    },

    routes(){
        this.namespace = 'api'
        this.logging = false

        this.get('/products', (schema, request) => {
            
            return schema.products.all()
        })

        this.get('/products/:id', (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })

        this.get('/blogs', (schema, request) => {
            return schema.blogs.all()
        })

        this.get('/blogs/:id', (schema, request) => {
            const id = request.params.id
            return schema.blogs.find(id)
        })

        this.get('/team', (schema, request) => {
            return schema.teams.all()
        })

        this.get('/faq', (schema, request) => {
            return schema.faqs.all()
        })

        this.get('/reviews', (schema, request) => {
            return schema.reviews.all()
        })
    }
});