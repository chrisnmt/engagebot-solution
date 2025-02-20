
import { Clock, Globe, LineChart, MessagesSquare, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-white to-secondary/20 overflow-hidden">
        <div className="container px-4 mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-primary/10 text-primary rounded-full animate-fade-up">
            AI-Powered Customer Support
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-gray-900">
            Revolutionize Customer Engagement with AI-Powered Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up">
            Seamless, intelligent, and multilingual support tailored for Southeast Asia's top e-commerce platforms.
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Get a Free Demo
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle 
            title="Why Choose Techvify AI Agents?"
            subtitle="Experience the next generation of customer support with our AI-powered solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="24/7 Automated Support"
              description="Instant, accurate responses any time of day, ensuring your customers are always supported."
            />
            <FeatureCard
              icon={Repeat}
              title="Multi-Platform Integration"
              description="Seamlessly connects with Shopee, Lazada, Shopify, WhatsApp, and more."
            />
            <FeatureCard
              icon={Globe}
              title="Multilingual Support"
              description="Natural language processing in Vietnamese, Thai, Bahasa, and other Southeast Asian languages."
            />
            <FeatureCard
              icon={MessagesSquare}
              title="Smart Conversations"
              description="Context-aware interactions that go beyond simple scripted responses."
            />
            <FeatureCard
              icon={LineChart}
              title="Data-Driven Insights"
              description="Real-time analytics to optimize customer engagement and improve business outcomes."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-white shadow-sm animate-fade-up">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-gray-600">Faster Response Times</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm animate-fade-up">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p className="text-gray-600">Increased Satisfaction</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-sm animate-fade-up">
              <div className="text-4xl font-bold text-primary mb-2">20%</div>
              <p className="text-gray-600">Lower Cart Abandonment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-up">
            Join leading companies in Southeast Asia who trust Techvify AI for their customer engagement
          </p>
          <Button size="lg" variant="secondary" className="animate-fade-up">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
