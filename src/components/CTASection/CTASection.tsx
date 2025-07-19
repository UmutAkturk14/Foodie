import { Button } from "@components/ui/Button";
import { ArrowRight, Download, Smartphone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-emerald-100/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Ready to Start Your{" "}
              <span className="text-emerald-900">Health Journey?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Join over 50,000 users who have already transformed their lives
              with FoodieGoodie. Download now and get your first week free!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-900 hover:bg-primary/90 text-white flex justify-center items-center shadow-soft group text-lg px-8 py-4">
              <Smartphone className="mr-2 w-5 h-5" />
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="call-to-action"
              className="border-border hover:bg-accent text-lg px-8 py-4 flex justify-center items-center bg-emerald-900 text-white"
            >
              <Download className="mr-2 w-5 h-5" />
              Download App
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🎯</div>
              <h3 className="font-semibold text-gray-600">
                Personalized Plans
              </h3>
              <p className="text-sm text-gray-600">Tailored to your goals</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">📱</div>
              <h3 className="font-semibold text-gray-600">Easy to Use</h3>
              <p className="text-sm text-gray-600">Simple and intuitive</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🏆</div>
              <h3 className="font-semibold text-gray-600">Proven Results</h3>
              <p className="text-sm text-gray-600">Real transformations</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-gray-600 mb-4">
              Available on all platforms • 30-day money-back guarantee
            </p>
            <div className="flex justify-center items-center space-x-8 text-xs text-gray-600">
              <span>✓ No ads</span>
              <span>✓ Privacy focused</span>
              <span>✓ Regular updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
