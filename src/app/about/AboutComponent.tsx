import AnimateOnScroll from "@/Component/AnimateOnScroll/AnimateOnScroll";
import Counter from "@/Component/Counter/Counter";
import AllIconComponent from "@/public/AllIconComponent";
import TeamComponent from "@/src/component/HomePageComponent/TeamComponent";
import { image } from "framer-motion/client";
import { link } from "fs";
import Link from "next/link";
import React from "react";

const AboutComponent = () => {

    const values = [
        {
            number: "01",
            title: "Quality First",
            icon: "qualityFirstIcon",
            desc: "Rigorous testing and certification processes ensure every product meets international quality standards and exceeds customer expectations."
        },
        {
            number: "02",
            title: "Sustainability",
            icon: "sustainabilityIcon",
            desc: "We partner with farmers who practice sustainable agriculture, ensuring our success contributes to a healthier planet for future generations."
        },
        {
            number: "03",
            title: "Global Trust",
            icon: "globalIcon",
            desc: "Building lasting relationships with clients worldwide through transparency, reliability, and consistent delivery of premium products."
        }
    ];

    const products = [
        {
            title: "Dry Fruits",
            image: "/iconImage/dryFruits.webp",
            link: "NutsAndDriedFruits",
            desc: "Premium almonds, cashews, pistachios, and more"
        },
        {
            title: "Dals & Pulses",
            image: "/iconImage/pulses.webp",
            link: "Pulses",
            desc: "Finest lentils, chickpeas, and legumes"
        },
        {
            title: "Herbs",
            image: "/iconImage/herbs.webp",
            link: "Herbs",
            desc: "Aromatic and medicinal herbs"
        },
        {
            title: "Spices",
            image: "/iconImage/spices.webp",
            link: "Spices",
            desc: "Authentic turmeric, cumin, coriander & more"
        },
        {
            title: "Coffee",
            image: "/iconImage/coffee.webp",
            link: "OtherProducts",
            desc: "Premium arabica and robusta beans"
        },
        {
            title: "Dehydrated Vegetables",
            image: "/iconImage/dehydratedVegetables.webp",
            link: "DehydratedVegetables",
            desc: "Nutrient-rich dried vegetables"
        },
        {
            title: "Peanut Butter",
            image: "/iconImage/peanutButter.webp",
            link: "PeanutButter",
            desc: "Creamy and crunchy varieties"
        },
        {
            title: "Food Chemicals",
            image: "/iconImage/foodChemicals.webp",
            link: "FoodChemicals",
            desc: "High-quality food additives and preservatives"
        },
    ];

    const storyItems = [
        {
            title: "Our Heritage",
            image: "/iconImage/heritage.webp",
            desc: "Born from a passion for sharing the authentic flavors and nutritional wealth of nature's bounty, we've built our legacy on trust, transparency, and uncompromising quality standards that honor traditional practices."
        },
        {
            title: "Our Mission",
            image: "/iconImage/ourMission.webp",
            desc: "To bridge continents with premium export foods that nourish bodies and delight palates. Every product we source represents our commitment to excellence, sustainability, and the farmers who make it possible."
        },
        {
            title: "Our Promise",
            image: "/iconImage/promise.webp",
            desc: "From farm to your table, we ensure meticulous quality control, ethical sourcing, and sustainable practices. Your satisfaction and trust fuel our dedication to delivering only the finest ingredients."
        }
    ];

    return (
        <div className="bg-[#faf8f5] text-[#2d2d2d] overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[75vh] flex items-center justify-center bg-linear-to-br from-primary-900 via-primary-600 to-primary-300 text-white px-5 py-16">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>
                <div className="relative z-10 max-w-3xl text-center">
                    <AnimateOnScroll animation="animate__backInUp" delay="delay-300ms" className="animate__slow-1s">
                        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-5 leading-tight tracking-tight">Bringing Nature's Finest to the World</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms">
                        <div className="w-24 h-1 bg-white mx-auto my-8 opacity-70" />
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2000ms">
                        <p className="text-lg md:text-2xl font-normal opacity-95 max-w-2xl mx-auto">Premium quality export foods crafted with care, delivered with excellence</p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Story Section */}
            <section className="relative py-16 bg-white">
                <div className="absolute top-0 right-0 w-2/5 h-full bg-linear-to-l from-primary-100 to-transparent opacity-30 pointer-events-none" />
                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms">
                            <div className="uppercase tracking-widest text-primary-600 font-semibold mb-3 text-sm">Our Journey</div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2000ms">
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2d2d2d] mb-5">Rooted in Tradition, Driven by Quality</h2>
                        </AnimateOnScroll>
                    </div>
                    <AnimateOnScroll animation="animate__fadeInUp" delay="delay-3000ms">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                            {storyItems.map((item, idx) => (
                                <div
                                    key={item.title}
                                    className="relative group bg-linear-to-br from-primary-50 to-white rounded-t-2xl border border-primary-100 p-10 shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col items-center text-center overflow-hidden"
                                >
                                    <div className="absolute -top-6 -right-5 text-6xl opacity-10 group-hover:opacity-20 transition">
                                        <img src={item.image} alt={item.title} className="w-30 h-30 object-contain mx-auto" />
                                    </div>
                                    <div className="mb-4 z-10">
                                        <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mx-auto" />
                                    </div>
                                    <h3 className="text-2xl text-primary-900 mb-4 font-bold z-10">{item.title}</h3>
                                    <p className="text-[#6b6b6b] text-base z-10">{item.desc}</p>
                                    <span className="absolute left-0 bottom-0 w-full h-2 bg-linear-to-r from-primary-400 to-primary-200 opacity-60 rounded-b-2xl" />
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Team Section - NEW */}

            <section className="relative py-14 bg-linear-to-b from-primary-50 to-white">
                <div className="absolute top-0 left-0 w-2/5 h-full bg-linear-to-r from-primary-100 to-transparent opacity-30 pointer-events-none" />
                <div className="container mx-auto px-4 relative">

                    <TeamComponent />

                    {/* Team Stats */}
                    <AnimateOnScroll animation="animate__fadeInUp" delay="delay-3000ms">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
                            {[
                                { target: 50, suffix: "+", label: "Team Members" },
                                { target: 15, suffix: "+", label: "Countries Served" },
                                { target: 100, suffix: "%", label: "Quality Certified" },
                                { target: 24, suffix: "/7", label: "Client Support" }
                            ].map((stat) => (
                                <div key={stat.label} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                                        <Counter target={stat.target} suffix={stat.suffix} duration={3000} />
                                    </div>
                                    <div className="text-sm text-[#6b6b6b] font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-16 bg-linear-to-b from-white to-primary-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms">
                            <div className="uppercase tracking-widest text-primary-600 font-semibold mb-3 text-sm">What We Offer</div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2000ms">
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#2d2d2d] mb-5 leading-tight">Premium Export Products</h2>
                        </AnimateOnScroll>
                    </div>
                    <AnimateOnScroll animation="animate__fadeInUp" delay="delay-3000ms">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                            {products.map((item) => (
                                <Link
                                    key={item.title}
                                    href={`/product?category=${encodeURIComponent(item.link)}`}
                                    className="group bg-white rounded-lg p-8 text-center shadow transition-all duration-400 hover:scale-100 hover:bg-primary-50/80 hover:shadow-2xl"
                                >
                                    <div className="mb-4">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mx-auto group-hover:scale-130 transition-all duration-200" />
                                    </div>
                                    <h4 className="text-lg text-primary-900 font-semibold mb-2">{item.title}</h4>
                                    <p className="text-[#6b6b6b] text-sm">{item.desc}</p>
                                </Link>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative py-14 bg-primary-950 text-white">
                <div className="absolute bottom-0 left-0 w-3/5 h-full bg-[radial-gradient(circle_at_bottom_left,#a21caf,transparent_70%)] opacity-20 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-4">
                        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms">
                            <div className="uppercase tracking-widest text-primary-200 font-semibold mb-3 text-sm">Core Values</div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2000ms">
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">What Drives Us</h2>
                        </AnimateOnScroll>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {values.map((item) => (
                            <div key={item.number} className="text-center px-10 py-6">
                                <AnimateOnScroll animation="animate__zoomIn" delay={`delay-3000ms`} className="animate__slow-2s">
                                    <div className="opacity-70 mb-4">
                                        <AllIconComponent
                                            width={60}
                                            height={60}
                                            icon={item.icon}
                                            className="text-primary-100 text-center mx-auto"
                                        />
                                    </div>
                                </AnimateOnScroll>
                                <AnimateOnScroll animation="animate__fadeInUp" delay={`delay-4000ms`} className="animate__slow-1s">
                                    <h3 className="text-2xl text-white mb-4 font-bold">{item.title}</h3>
                                    <p className="text-white/80 text-base">{item.desc}</p>
                                </AnimateOnScroll>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-linear-to-br from-primary-600 to-primary-300 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <AnimateOnScroll animation="animate__backInUp" delay={`delay-2000ms`} className="animate__slow-1s">
                        <h2 className="font-seriftext-3xl md:text-4xl font-bold mb-6">Ready to Experience Quality?</h2>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate__fadeInUp" delay={`delay-3000ms`} className="animate__slow-1s">
                        <p className="text-lg mb-10 opacity-95">Partner with us for premium export foods that meet the highest international standards</p>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="animate__zoomIn" delay={`delay-3000ms`} className="animate__slow-1s">
                        <a href="#" className="inline-block px-10 py-4 bg-white text-primary-800 font-semibold text-lg rounded-full shadow-lg hover:-translate-y-1 hover:bg-[#faf8f5] transition-all">Get In Touch</a>
                    </AnimateOnScroll>
                </div>
            </section>

        </div>
    );
}

export default AboutComponent;