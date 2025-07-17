"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import FeaturesPage from "./features/feature";

export default function DoggoLanding() {
  // Added smooth scrolling styles
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.overscrollBehavior = "";
    };
  }, []);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 scroll-smooth">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <span className="text-2xl">🐕</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Doggo</h1>
            <p className="text-xs text-white/80">Premium Dog Care</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            Login
          </Button>
          <Button className="bg-white text-blue-600 hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-6 py-16 text-center relative pb-24">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            🎉 Premium Dog Care Services
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Furry Friends Deserve the
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Best Care
            </span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with trusted dog care professionals in your area. From daily
            walks to overnight stays, we make sure your four-legged family
            members get the love and attention they deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Book Your First Service 🐾
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-8 relative z-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1,247+</div>
              <div className="text-white/80">Happy Dogs Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>

        {/* Wavy bottom border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-12 md:h-16 lg:h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L30,58.7C60,53,120,43,180,48C240,53,300,75,360,80C420,85,480,75,540,69.3C600,64,660,64,720,69.3C780,75,840,85,900,85.3C960,85,1020,75,1080,64C1140,53,1200,43,1260,42.7C1320,43,1380,53,1410,58.7L1440,64L1440,120L1410,120C1380,120,1320,120,1260,120C1200,120,1140,120,1080,120C1020,120,960,120,900,120C840,120,780,120,720,120C660,120,600,120,540,120C480,120,420,120,360,120C300,120,240,120,180,120C120,120,60,120,30,120L0,120Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <FeaturesPage />

      {/* Services Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional care tailored to your dog&apos;s unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🚶", title: "Dog Walking", price: "From $25" },
              { emoji: "🏠", title: "Pet Sitting", price: "From $45" },
              { emoji: "🛁", title: "Grooming", price: "From $60" },
              { emoji: "🎾", title: "Playtime", price: "From $30" },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 font-medium">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Dog Parents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                text: "Doggo has been a lifesaver! My golden retriever Max gets the best care while I'm at work.",
                rating: 5,
              },
              {
                name: "Mike D.",
                text: "The updates and photos give me such peace of mind. Highly recommend their services!",
                rating: 5,
              },
              {
                name: "Emma L.",
                text: "Professional, caring, and reliable. My rescue dog Luna has never been happier!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {testimonial.text}&quot;
                  </p>
                  <p className="font-semibold text-gray-800">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Give Your Dog the Best? 🐕
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy dog parents who trust Doggo for their furry
            family members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🐕</span>
                </div>
                <span className="text-xl font-bold">Doggo</span>
              </div>
              <p className="text-gray-400">
                Premium dog care services you can trust.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dog Walking</li>
                <li>Pet Sitting</li>
                <li>Grooming</li>
                <li>Training</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Safety</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Doggo. All rights reserved. Made with ❤️ for dog
              parents.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
