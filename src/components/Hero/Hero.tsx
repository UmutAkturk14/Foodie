import { Button } from "@components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-emerald-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Journey to{" "}
                <span className="text-emerald-700">Healthy Living</span> Starts
                Here
              </h1>
              <p className="text-lg md:text-xl text-emerald-900 leading-tight opacity-60 max-w-2xl">
                Transform your lifestyle with FoodieGoodie - the all-in-one app
                that combines nutrition tracking, fitness guidance, and
                mindfulness practices for a healthier, happier you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="call-to-action">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="call-to-action">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                  50K+
                </div>
                <div className="text-sm text-emerald-900 opacity-60">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                  1M+
                </div>
                <div className="text-sm text-emerald-900 opacity-60">
                  Meals Tracked
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                  4.9★
                </div>
                <div className="text-sm text-emerald-900 opacity-60">
                  App Rating
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthy foods and nutrition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-success-soft rounded-full flex items-center justify-center shadow-soft">
              <span className="text-2xl bg-emerald-200 p-4 rounded-full">
                🥗
              </span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center shadow-soft">
              <span className="text-xl bg-emerald-200 p-4 rounded-full">
                💪
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
