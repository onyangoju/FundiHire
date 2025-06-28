import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  name: string;
  service: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  image: string;
  specialties: string[];
  responseTime: string;
  email: string;
  profileUrl: string;
}

const ServiceCard = ({ 
  name, 
  service, 
  rating, 
  reviews, 
  hourlyRate, 
  location, 
  image, 
  specialties,
  responseTime,
  email,
  profileUrl
}: ServiceCardProps) => {
  const handleBookNowClick = () => {
    const subject = encodeURIComponent("Booking Request");
    const body = encodeURIComponent(`Hello ${name}, I would like to book your services.`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleViewProfileClick = () => {
    window.open(profileUrl, "_blank");
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                <p className="text-blue-600 font-medium text-sm">{service}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">KSh {hourlyRate}/hr</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{rating} ({reviews})</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{location}</span>
              <Clock className="h-3 w-3 ml-3 mr-1" />
              <span>Responds in {responseTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {specialties.slice(0, 3).map((specialty, index) => (
                <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {specialty}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={handleBookNowClick}>
                Book Now
              </Button>
              <Button variant="outline" size="sm" className="flex-1" onClick={handleViewProfileClick}>
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
