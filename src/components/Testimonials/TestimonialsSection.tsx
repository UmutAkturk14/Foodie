import { useState, useEffect } from "react";
import { Card } from "@components/ui/Card";
import { CardContent } from "@components/ui/CardContent";
import { Button } from "@components/ui/Button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content:
        "FoodieGoodie completely transformed my relationship with food and exercise. The personalized meal plans and workout routines fit perfectly into my busy schedule!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Working Professional",
      content:
        "I've tried many health apps, but FoodieGoodie's mindfulness features really set it apart. The daily meditation reminders have improved my overall well-being significantly.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Busy Mom",
      content:
        "As a mom of two, I needed something simple yet effective. FoodieGoodie's meal planning and family-friendly recipes have been a game-changer for our household!",
      rating: 5,
      avatar: "ER",
    },
    {
      name: "David Thompson",
      role: "Marathon Runner",
      content:
        "The detailed nutrition tracking and performance analytics help me optimize my training. I've seen remarkable improvements in my endurance and recovery times.",
      rating: 5,
      avatar: "DT",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our <span className="text-emerald-700">Community</span> Says
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join thousands who’ve transformed their health journey with
            FoodieGoodie.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card border border-gray-300 shadow-md rounded-2xl">
            <CardContent className="p-8 md:p-12 space-y-8">
              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-500 italic leading-relaxed text-center max-w-3xl mx-auto">
                “{testimonial.content}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-emerald-900/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-gray-800 font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation + Indicators */}
          <div className="mt-10 flex flex-col items-center space-y-6">
            {/* Arrows */}
            <div className="flex gap-4">
              <Button
                variant="basic"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="border-emerald-700 hover:border hover:bg-emerald-700 hover:text-white"
              >
                <ChevronLeft className="w-7 h-7" />
              </Button>
              <Button
                variant="basic"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="border-emerald-700 hover:border hover:bg-emerald-700 hover:text-white"
              >
                <ChevronRight className="w-7 h-7" />
              </Button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 ">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                    i === currentIndex
                      ? "bg-emerald-900"
                      : "bg-gray-600/20 hover:bg-gray-600/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
