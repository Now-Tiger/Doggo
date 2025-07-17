import React from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Heart,
  Clock,
  Shield,
  Users,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-screen-lg mx-auto py-12 px-6">
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight">
          Everything Your Dog Needs: <br />
          Professional Care You Can Trust
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 1 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"></div>
            <span className="text-2xl font-semibold tracking-tight">
              Flexible Scheduling
            </span>
            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Calendar className="shrink-0 text-blue-500" />
                  <p className="-mt-0.5">
                    Book services that fit your busy schedule. One-time or
                    recurring appointments available.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Heart className="shrink-0 text-red-500" />
                  <p className="-mt-0.5">
                    Our certified caregivers treat your dog like their own,
                    ensuring comfort and happiness.
                  </p>
                </div>
              </li>
            </ul>
            <Button className="mt-12 w-full">
              Book Your Service <ArrowRight />
            </Button>
          </div>
          {/* Card 3 - Desktop */}
          <div className="hidden md:block bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-3 lg:col-span-2">
            <span className="text-2xl font-semibold tracking-tight">
              Trusted Professionals & Easy Booking
            </span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3">
                  <Users className="shrink-0 text-orange-500" />
                  <p className="-mt-0.5">
                    Background-checked, trained professionals who genuinely love
                    dogs.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <Smartphone className="shrink-0 text-blue-500" />
                  <p className="-mt-0.5">
                    Book and manage all your services through our intuitive
                    mobile app.
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-8 w-full md:w-auto">
              Get Started <ArrowRight />
            </Button>
          </div>
          {/* Card 3 - Desktop */}
          <div className="hidden md:block bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-3 lg:col-span-2">
            <span className="text-2xl font-semibold tracking-tight">
              Trusted Professionals & Easy Booking
            </span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start gap-3">
                  <Users className="shrink-0 text-orange-500" />
                  <p className="-mt-0.5">
                    Background-checked, trained professionals who genuinely love
                    dogs.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3">
                  <Smartphone className="shrink-0 text-blue-500" />
                  <p className="-mt-0.5">
                    Book and manage all your services through our intuitive
                    mobile app.
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-8 w-full md:w-auto">
              Get Started <ArrowRight />
            </Button>
          </div>
          {/* Card 4 */}
          <div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
            {/* Media 2 Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"></div>
            <span className="text-2xl font-semibold tracking-tight">
              Real-Time Updates
            </span>
            <ul className="mt-6 space-y-4">
              <li>
                <div className="flex items-start gap-3">
                  <Clock className="shrink-0 text-green-500" />
                  <p className="-mt-0.5">
                    Get photos and updates throughout your dog&apos;s service so
                    you never worry.
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Shield className="shrink-0 text-purple-500" />
                  <p className="-mt-0.5">
                    All our services are fully insured and bonded for your
                    complete peace of mind.
                  </p>
                </div>
              </li>
            </ul>
            <Button className="mt-12 w-full">
              Learn More <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
