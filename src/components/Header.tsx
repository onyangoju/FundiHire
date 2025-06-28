
import { Menu, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center ml-2 md:ml-0">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-2 mr-3">
                <span className="font-bold text-lg">FH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">FundiHire</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Find • Book • Pay</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2">
              <MapPin className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Nairobi, Kenya</span>
            </div>
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
