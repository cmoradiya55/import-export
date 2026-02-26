import React from "react";
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare, Users, TrendingUp, CheckCircle, User } from "lucide-react";
import AllIconComponent from "@/public/AllIconComponent";
import AnimateOnScroll from "@/Component/AnimateOnScroll/AnimateOnScroll";

const ContactComponent = () => {

    const quickContacts = [
        {
            icon: Phone,
            title: 'Call Us',
            description: 'Mon-Fri 9am to 6pm',
            link: '+91 123 456 7890',
            linkText: 'Toll-free support'
        },
        {
            icon: Mail,
            title: 'Email Us',
            description: '24/7 email support',
            link: 'support@exportcompany.com',
            linkText: 'Send us an email'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            description: 'Come say hello',
            link: 'Gujarat, India',
            linkText: 'Export hub location'
        },
    ]

    return (
        <div className="bg-white">

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary-950 text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                <div className="relative container mx-auto px-4 py-20 md:py-28 mb-30">
                    <AnimateOnScroll animation="animate__backInUp" delay="delay-1000ms" className="animate__slow-3s">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-2 mt-14">
                                <MessageSquare className="w-5 h-5" />
                                <span className="font-semibold">Get In Touch</span>
                            </div>
                            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                                Let's Start Your Export Journey Together
                            </h1>
                            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-30">
                                Whether you're starting fresh or scaling up, our export specialists are here to guide you every step of the way.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Wave Divider */}
                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            <section className="container mx-auto space-y-6">

                {/* Quick Contact Cards */}
                <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms" className="animate__slow-2s">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 mb-12">
                        {quickContacts.map((contact, index) => (
                            <div
                                key={index}
                                className="relative group bg-primary-950 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="absolute inset-0 opacity-10" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                }}></div>
                                {/* ICON ON TOP */}
                                <div className="w-10 h-10 flex items-center justify-center bg-primary-100 rounded-lg mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                                    {React.createElement(contact.icon, { className: "w-5 h-5 text-primary-700 group-hover:text-white transition-colors duration-300" })}
                                </div>
                                {/* CONTENT */}
                                <h3 className="text-base font-semibold text-gray-100 mb-1">{contact.title}</h3>
                                <p className="text-sm text-primary-200 mb-3">{contact.description}</p>
                                <p className="text-primary-100 font-semibold text-sm">{contact.link}</p>
                                <p className="text-xs text-primary-200 mt-1">{contact.linkText}</p>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Main Contact Section */}
                <div className="relative mt-12 pb-20">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms" className="animate__slow-2s">
                            <div className="flex items-center justify-center mb-2">
                                <AllIconComponent width={60} height={60} className="text-primary-900" icon="headerIcon" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary-900 mb-6">
                                Send Us a Message
                            </h2>
                            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4 rounded-full"></div>
                            <p className="text-gray-600 max-w-xl mx-auto">
                                Fill out the form below and our export specialists will get back to you within 24 hours.
                            </p>
                        </AnimateOnScroll>
                    </div>

                    {/* Contect Section */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            {/* Contact Form */}
                            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-500ms" className="animate__slow-2s">
                                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                                    <form className="space-y-4">

                                        {/* Full Name */}
                                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                                            <User className="w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                                            <Mail className="w-5 h-5 text-gray-500" />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                                            <Phone className="w-5 h-5 text-gray-500" />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div className="flex items-center gap-4 border-b border-gray-300 pb-4">
                                            <MapPin className="w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                placeholder="Subject"
                                                className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="flex items-start gap-4 border-b border-gray-300 pb-4">
                                            <MessageSquare className="w-5 h-5 text-gray-500 mt-1" />
                                            <textarea
                                                rows={3}
                                                placeholder="Message"
                                                className="w-full outline-none bg-transparent resize-none text-gray-800 placeholder-gray-500"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="bg-primary-800 text-white px-10 py-3 rounded-full font-semibold hover:bg-primary-900 transition"
                                        >
                                            Send Message
                                        </button>

                                    </form>
                                </div>
                            </AnimateOnScroll>

                            {/* Why Choose Us */}
                            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1500ms" className="animate__slow-2s">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-green-100 rounded-lg mt-1">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">15+ Years Experience</h4>
                                                <p className="text-gray-600 text-sm">Trusted by exporters across 50+ countries</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-blue-100 rounded-lg mt-1">
                                                <Globe className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Global Network</h4>
                                                <p className="text-gray-600 text-sm">Direct connections with international buyers</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-purple-100 rounded-lg mt-1">
                                                <Users className="w-5 h-5 text-purple-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Expert Team</h4>
                                                <p className="text-gray-600 text-sm">Certified export consultants and specialists</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-orange-100 rounded-lg mt-1">
                                                <TrendingUp className="w-5 h-5 text-orange-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">Proven Results</h4>
                                                <p className="text-gray-600 text-sm">98% client satisfaction rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>

                            {/* Additional Contact Info */}
                            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-2500ms" className="animate__slow-2s">
                                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Information</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-700 mb-1">Export License No.</p>
                                            <p className="text-gray-600">IEC-0123456789</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-700 mb-1">FSSAI License</p>
                                            <p className="text-gray-600">12345678901234</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-700 mb-1">GST Number</p>
                                            <p className="text-gray-600">24XXXXX1234X1ZX</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>

                        {/* Right Side - Info & Why Choose Us */}
                        <div className="space-y-8">

                            {/* Map */}
                            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-500ms" className="animate__slow-2s">
                                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9927838149355!2d72.5244148!3d23.0224934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        title="Office Location"
                                    ></iframe>
                                </div>
                            </AnimateOnScroll>

                            {/* Office Hours */}
                            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1500ms" className="animate__slow-2s">
                                <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-white rounded-xl shadow-md">
                                            <Clock className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-lg p-3">
                                            <span className="font-semibold text-gray-700">Monday - Friday</span>
                                            <span className="text-primary-700 font-bold">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-lg p-3">
                                            <span className="font-semibold text-gray-700">Saturday</span>
                                            <span className="text-primary-700 font-bold">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-white/70 backdrop-blur-sm rounded-lg p-3">
                                            <span className="font-semibold text-gray-700">Sunday</span>
                                            <span className="text-gray-500 font-bold">Closed</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-4 bg-white/50 backdrop-blur-sm rounded-lg p-3">
                                        <strong>Emergency Support:</strong> Available 24/7 for existing shipments and urgent matters
                                    </p>
                                </div>
                            </AnimateOnScroll>

                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default ContactComponent;