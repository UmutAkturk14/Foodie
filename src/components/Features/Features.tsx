import type { Feature } from "@interfaces";
import {
  Apple,
  Dumbbell,
  Heart,
  Target,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";

const features: Feature[] = [
  {
    icon: <Apple className="h-8 w-8 text-green-600" />,
    title: "Smart Nutrition Tracking",
    description:
      "Log meals effortlessly with our AI-powered food recognition and get personalized nutrition insights.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-blue-600" />,
    title: "Personalized Workouts",
    description:
      "Get custom workout plans tailored to your fitness level and goals, with video guidance.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Heart className="h-8 w-8 text-purple-600" />,

    title: "Mindfulness & Wellness",
    description:
      "Practice meditation, track mood, and build healthy habits with our wellness coaching.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Target className="h-8 w-8 text-orange-600" />,
    title: "Goal Setting & Progress",
    description:
      "Set achievable goals and track your progress with detailed analytics and insights.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Users className="h-8 w-8 text-pink-600" />,
    title: "Community Support",
    description:
      "Connect with like-minded individuals, share progress, and stay motivated together.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-600" />,
    title: "Daily Challenges",
    description:
      "Stay engaged with fun daily challenges that make healthy living exciting and rewarding.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
];

const Features = () => {
  return (
    <section
      className="py-16 flex justify-center items-center bg-lime-50"
      id="features-alt"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need for a{" "}
            <span className="text-emerald-900">Healthier Lifestyle</span>
          </h2>
          <p className="text-lg text-emerald-800 max-w-3xl mx-auto">
            FoodieGoodie combines the best of nutrition science, fitness
            expertise, and wellness practices in one comprehensive platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-emerald-100 p-3 rounded-lg">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="mt-auto flex items-center justify-center">
                <a
                  href={link}
                  className="group inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  target="_blank"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="rounded-2xl mt-48 overflow-hidden shadow-card">
          <img
            src="https://plus.unsplash.com/premium_vector-1741805326469-98f12786441b?q=80&w=1709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="FoodieGoodie app features"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
