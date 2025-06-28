
import { Wrench, Sparkles, GraduationCap, Hammer, Car, Camera, Home, Users } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const categories = [
    { title: "Home Repair", icon: Hammer, count: 45, color: "bg-blue-500", url: "https://handyman.co.ke/" },
    { title: "Cleaning", icon: Sparkles, count: 32, color: "bg-green-500", url: "https://gmcleaning.co.ke/" },
    { title: "Tutoring", icon: GraduationCap, count: 28, color: "bg-purple-500", url: "https://www.theprofs.co.uk/find-tutor/" },
    { title: "Plumbing", icon: Wrench, count: 18, color: "bg-red-500", url: "https://quickfixplumbers.co.ke/?srsltid=AfmBOop3tsmOstYBqTpaQhJiFSpATm_Vxxx_LezmmPrV2U4Cp99d9Iq7" },
    { title: "Car Service", icon: Car, count: 15, color: "bg-yellow-500", url: "https://auto-xpress.co.ke/" },
    { title: "Photography", icon: Camera, count: 12, color: "bg-pink-500", url: "https://mejasan.com/" },
  ];

  const topProviders = [
    {
      name: "Junior Onyango",
      service: "Plumber & Electrician",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 800,
      location: "Westlands, Nairobi",
      image: "",
      specialties: ["Emergency Repairs", "Water Heating", "Wiring"],
      responseTime: "30 mins",
      email: "prollyjunior@gmail.com",
      profileUrl: "https://github.com/onyangoju"
    },
    {
      name: "Catherine Wairimu",
      service: "House Cleaning",
      rating: 4.8,
      reviews: 95,
      hourlyRate: 500,
      location: "Karen, Nairobi",
      image: "",
      specialties: ["Deep Cleaning", "Office Cleaning", "Move-out"],
      responseTime: "1 hour",
      email: "catenimowambu@gmail.com",
      profileUrl: "https://github.com/NimohK"
    },
    {
      name: "Steven Kingoro",
      service: "Math & Science Tutor",
      rating: 4.9,
      reviews: 68,
      hourlyRate: 1200,
      location: "Kilimani, Nairobi",
      image: "",
      specialties: ["KCSE Prep", "University Math", "Physics"],
      responseTime: "2 hours",
      email: "miwidevelopers@gmail.com",
      profileUrl: "https://github.com/miwidevelopers"
    },
    {
      name: "Leah Muchiri",
      service: "Interior Decorator",
      rating: 4.7,
      reviews: 54,
      hourlyRate: 1500,
      location: "Lavington, Nairobi",
      image: "",
      specialties: ["Home Staging", "Color Consultation", "Furniture"],
      responseTime: "4 hours",
      email: "lishyamuchiri@gmail.com",
      profileUrl: "https://github.com/lishyamuchiri"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Find the right service for your needs</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} onClick={() => window.open(category.url, "_blank")} />
          ))}
          </div>
        </div>
      </section>

      {/* Top Providers Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Top Rated Providers</h2>
            <p className="text-gray-600">Trusted professionals in your area</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {topProviders.map((provider, index) => (
              <ServiceCard key={index} {...provider} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Find & Choose</h3>
              <p className="text-gray-600 text-sm">Browse verified service providers and read reviews from real customers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Book Instantly</h3>
              <p className="text-gray-600 text-sm">Schedule your service at your preferred time with just a few taps</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pay Securely</h3>
              <p className="text-gray-600 text-sm">Complete payment through our secure platform after service completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-2 mr-3">
              <span className="font-bold text-lg">FH</span>
            </div>
            <span className="text-xl font-bold">FundiHire</span>
          </div>
          <p className="text-gray-400 mb-4">Connecting you with trusted local service providers</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/for-providers" className="hover:text-white transition-colors">For Providers</a>
            <a href="/support" className="hover:text-white transition-colors">Support</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
