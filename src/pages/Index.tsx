import { Clock, Globe, LineChart, MessagesSquare, Repeat, ShoppingCart, CreditCard, Headset } from "lucide-react";
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

      {/* Evolution Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle 
            title="The Evolution of AI: From Basic Chatbots to Techvify's Smart Agents"
            subtitle="Experience the next generation of AI technology with Techvify's advanced solutions"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-gray-200 animate-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">1st Gen: Chatbots</h3>
              <div className="space-y-3">
                <p className="text-gray-600">✓ Rule-based responses</p>
                <p className="text-gray-600">✓ Basic script following</p>
                <p className="text-red-500">✗ Limited to predefined scenarios</p>
                <p className="text-red-500">✗ No context awareness</p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-gray-200 animate-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">2nd Gen: GenAI</h3>
              <div className="space-y-3">
                <p className="text-gray-600">✓ AI-generated responses</p>
                <p className="text-gray-600">✓ Basic context understanding</p>
                <p className="text-red-500">✗ Generic responses</p>
                <p className="text-red-500">✗ Limited domain knowledge</p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-primary/5 border-2 border-primary animate-fade-up">
              <div className="bg-primary text-white px-3 py-1 rounded-full text-sm inline-block mb-4">Techvify AI</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">3rd Gen: Smart Agents</h3>
              <div className="space-y-3">
                <p className="text-gray-600">✓ Dynamic, context-aware interactions</p>
                <p className="text-gray-600">✓ Deep domain expertise</p>
                <p className="text-gray-600">✓ Multi-platform integration</p>
                <p className="text-gray-600">✓ Proactive engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container px-4 mx-auto">
          <SectionTitle 
            title="Tailored Solutions for Every Industry"
            subtitle="Discover how Techvify AI adapts to your specific business needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up">
              <ShoppingCart className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Retail & E-commerce</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Order tracking automation</li>
                <li>• Smart product recommendations</li>
                <li>• Cart recovery optimization</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up">
              <CreditCard className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Finance & Banking</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Secure transactions</li>
                <li>• Fraud detection</li>
                <li>• Compliance management</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up">
              <Headset className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 24/7 query handling</li>
                <li>• Multilingual support</li>
                <li>• Reduced response times</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle 
            title="Trusted by Leading Companies Worldwide"
            subtitle="Join the companies transforming their customer support with Techvify AI"
          />
          
          {/* Client Logos */}
          <div className="flex justify-center gap-12 mb-16 animate-fade-up">
            <div className="text-2xl font-bold text-gray-800">Intrepid Asia</div>
            <div className="text-2xl font-bold text-gray-800">Vahterus</div>
          </div>
          
          {/* Testimonial */}
          <div className="max-w-3xl mx-auto bg-primary/5 p-8 rounded-2xl mb-16 animate-fade-up">
            <p className="text-xl text-gray-700 mb-6 italic">
              "Techvify AI helped us reduce response times by 50% while increasing customer satisfaction. The multilingual support has been a game-changer for our Southeast Asian markets."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-gray-900">Fredrik Anderson</p>
                <p className="text-gray-600">Customer Success Manager, Vahterus</p>
              </div>
            </div>
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
