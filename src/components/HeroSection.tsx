import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden pt-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <Icon
            name="MapPin"
            size={64}
            className="mx-auto mb-4 text-purple-300"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
          Санкт-Петербург
          <span className="block text-3xl md:text-5xl text-purple-300 mt-2">
            глазами местного
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Профессиональный гид-переводчик с 10-летним опытом покажет вам
          настоящий Петербург — от дворцов до потайных двориков
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать экскурсию
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4 rounded-full transition-all duration-300"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться со мной
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-300">500+</div>
            <div className="text-sm text-gray-300">довольных туристов</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-300">15</div>
            <div className="text-sm text-gray-300">уникальных маршрутов</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-purple-300">10</div>
            <div className="text-sm text-gray-300">лет опыта</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
