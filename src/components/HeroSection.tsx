import React, { useState } from "react";
import { Search, Star, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const allServices = [
  { name: "Home Repair", providers: 45, url: "https://handyman.co.ke/" },
  { name: "Cleaning", providers: 32, url: "https://gmcleaning.co.ke/" },
  { name: "Tutoring", providers: 28, url: "https://www.theprofs.co.uk/find-tutor/" },
  { name: "Plumbing", providers: 18, url: "https://quickfixplumbers.co.ke/?srsltid=AfmBOop3tsmOstYBqTpaQhJiFSpATm_Vxxx_LezmmPrV2U4Cp99d9Iq7" },
  { name: "Car Service", providers: 15, url: "https://auto-xpress.co.ke/" },
  { name: "Photography", providers: 12, url: "https://mejasan.com/" },
];

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const trimmedQuery = query.trim().toLowerCase();
    const results = allServices.filter((service) =>
      service.name.toLowerCase().includes(trimmedQuery)
    );
    setFilteredServices(results);
    setHasSearched(true);
  };

  const handleSelectService = (url: string) => {
    window.location.href = url; // 👈 Navigates to your custom or external page
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Find Trusted <span className="text-blue-600">Local Service Providers</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with verified fundis, cleaners, tutors, and freelancers in your area. 
          Book instantly and pay securely.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What service do you need?"
              className="pl-10 h-12 border-gray-300"
            />
          </div>
          <Button
            onClick={handleSearch}
            className="h-12 px-6 bg-blue-600 hover:bg-blue-700"
          >
            Search
          </Button>
        </div>

        {hasSearched && (
          <div className="max-w-md mx-auto mb-8">
            {filteredServices.length > 0 ? (
              <div className="space-y-2">
                {filteredServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectService(service.url)}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center bg-white hover:bg-blue-50 transition"
                  >
                    <span>{service.name}</span>
                    <span className="text-sm text-gray-500">
                      {service.providers} providers
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No matching services found.</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Verified</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-2">
              <Star className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Rated</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-3 rounded-full mb-2">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Trusted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
