import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={28} className="text-purple-600" />
            <span className="text-xl font-bold text-gray-900">СПб Гид</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О гиде
            </button>
            <button
              onClick={() => scrollToSection("tours")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Экскурсии
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => scrollToSection("contact")}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-gray-700"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                О гиде
              </button>
              <button
                onClick={() => scrollToSection("tours")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Экскурсии
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                Контакты
              </button>
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 w-fit"
                onClick={() => scrollToSection("contact")}
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
