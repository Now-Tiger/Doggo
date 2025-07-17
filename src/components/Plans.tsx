import React, { useState, useEffect } from "react";
import { ServicePlan } from "@/entities/all";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Check, Star, Clock, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    setIsLoading(true);
    try {
      const plansData = await ServicePlan.filter({ is_active: true }, "price");
      setPlans(plansData);
    } catch (error) {
      console.error("Error loading plans:", error);
    }
    setIsLoading(false);
  };

  const getPlanGradient = (index: number) => {
    const gradients = [
      "from-blue-400 to-blue-600",
      "from-purple-400 to-purple-600",
      "from-green-400 to-green-600",
    ];
    return gradients[index % gradients.length];
  };

  const getPlanBg = (index: number) => {
    const backgrounds = [
      "from-blue-50 to-blue-100 border-blue-200",
      "from-purple-50 to-purple-100 border-purple-200",
      "from-green-50 to-green-100 border-green-200",
    ];
    return backgrounds[index % backgrounds.length];
  };

  if (isLoading) {
    return (
      <div className="p-4 md:p-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="h-32 bg-gray-200 rounded-t-lg" />
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-200 rounded" />
                      <div className="h-8 bg-gray-200 rounded w-24" />
                      <div className="space-y-2">
                        {Array(4)
                          .fill(0)
                          .map((_, j) => (
                            <div key={j} className="h-3 bg-gray-200 rounded" />
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional dog walking services tailored to your pup&apos;s needs.
            All plans include GPS tracking, photo updates, and loving care.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden bg-gradient-to-br ${getPlanBg(index)} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index === 1 ? "scale-105 ring-4 ring-purple-200" : ""}`}
            >
              {index === 1 && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-500 text-white px-3 py-1 font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader
                className={`bg-gradient-to-r ${getPlanGradient(index)} text-white p-8`}
              >
                <div className="text-center">
                  <CardTitle className="text-2xl font-bold mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg">
                      {plan.duration_minutes} minutes
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <DollarSign className="w-8 h-8" />
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-gray-700 text-center leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">
                      What's included:
                    </h4>
                    {plan.features?.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${getPlanGradient(index)} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={createPageUrl("Booking")} className="block">
                    <Button
                      className={`w-full py-3 font-semibold text-lg bg-gradient-to-r ${getPlanGradient(index)} hover:shadow-lg transition-all duration-300`}
                    >
                      Select {plan.name}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            All Plans Include Premium Care
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">Insured & Bonded</h4>
              <p className="text-sm text-gray-600">
                All our agents are fully insured
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">5-Star Rated</h4>
              <p className="text-sm text-gray-600">
                Top-rated dog care professionals
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">Real-time Updates</h4>
              <p className="text-sm text-gray-600">
                GPS tracking and photo updates
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900">Flexible Pricing</h4>
              <p className="text-sm text-gray-600">
                No hidden fees or contracts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
