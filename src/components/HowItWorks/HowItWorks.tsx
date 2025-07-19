import { Card } from "@components/ui/Card";
import { CardContent } from "@components/ui/CardContent";
import { Download, UserPlus, Trophy, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      step: "01",
      title: "Download & Setup",
      description:
        "Get the app and complete your personalized health profile in under 2 minutes.",
    },
    {
      icon: UserPlus,
      step: "02",
      title: "Create Your Plan",
      description:
        "Our AI creates a custom nutrition and fitness plan based on your goals and preferences.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Track Progress",
      description:
        "Log meals, workouts, and wellness activities while getting real-time insights.",
    },
    {
      icon: Trophy,
      step: "04",
      title: "Achieve Goals",
      description:
        "Celebrate milestones and maintain long-term healthy habits with our support system.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How <span className="text-emerald-900">FoodieGoodie</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Start your health journey in four simple steps and transform your
            lifestyle with science-backed guidance and personalized support.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 my-20">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative text-center bg-card border border-border border-stone-200 rounded-sm bg-yellow-50"
            >
              {/* Step badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-50 w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm text-white font-bold bg-emerald-700">
                {step.step}
              </div>

              <CardContent className="flex flex-col items-center px-6 pt-10 pb-8 space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-sm bg-emerald-100">
                  <step.icon className="w-8 h-8 text-emerald-900" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-card-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/vector-1746109461706-d188ef74d6a4?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Exercise and fitness tracking"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Fitness Tracking</h3>
              <p className="text-sm opacity-90">
                Monitor workouts and stay active
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/vector-1751981367114-6df571b5aa68?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Wellness and mindfulness"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-bold mb-2">Mindful Wellness</h3>
              <p className="text-sm opacity-90">
                Practice self-care and mindfulness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
