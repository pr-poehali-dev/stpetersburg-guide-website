import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ToursSection = () => {
  const tours = [
    {
      id: 1,
      title: "Классический Петербург",
      description:
        "Эрмитаж, Дворцовая площадь, Невский проспект — главные символы города",
      duration: "4 часа",
      price: "от 8 000 ₽",
      image:
        "https://images.unsplash.com/photo-1575986767340-5d06deedf1d6?w=400&h=300&fit=crop",
      highlights: [
        "Эрмитаж",
        "Дворцовая площадь",
        "Спас на Крови",
        "Невский проспект",
      ],
      icon: "Crown",
    },
    {
      id: 2,
      title: "Петербург Достоевского",
      description:
        "По следам великого писателя: дома, улицы и атмосфера его романов",
      duration: "3 часа",
      price: "от 6 000 ₽",
      image:
        "https://images.unsplash.com/photo-1513181449768-31b4b7ffcc35?w=400&h=300&fit=crop",
      highlights: [
        "Сенная площадь",
        "Дом Раскольникова",
        "Кафе литераторов",
        "Мосты Невы",
      ],
      icon: "BookOpen",
    },
    {
      id: 3,
      title: "Ночной Петербург",
      description: "Разводные мосты, белые ночи и романтика северной столицы",
      duration: "3 часа",
      price: "от 7 000 ₽",
      image:
        "https://images.unsplash.com/photo-1598199722514-5c6b12b7b35e?w=400&h=300&fit=crop",
      highlights: [
        "Разводные мосты",
        "Стрелка В.О.",
        "Набережные",
        "Подсветка дворцов",
      ],
      icon: "Moon",
    },
    {
      id: 4,
      title: "Дворцы и парки",
      description:
        "Петергоф или Царское Село — императорская роскошь и красота",
      duration: "6 часов",
      price: "от 12 000 ₽",
      image:
        "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
      highlights: ["Большой дворец", "Парки", "Фонтаны", "История династии"],
      icon: "Castle",
    },
    {
      id: 5,
      title: "Крыши Петербурга",
      description:
        "Город с высоты птичьего полета — незабываемые виды и фотосессия",
      duration: "2 часа",
      price: "от 5 000 ₽",
      image:
        "https://images.unsplash.com/photo-1566073828022-6e65b4a95186?w=400&h=300&fit=crop",
      highlights: ["Панорамы города", "Фотосессия", "Закат", "Исаакий сверху"],
      icon: "Camera",
    },
    {
      id: 6,
      title: "Гастрономический тур",
      description: "Вкусы Петербурга: от пышек до высокой кухни с историями",
      duration: "4 часа",
      price: "от 9 000 ₽",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      highlights: ["Пышечные", "Рестораны", "Рынки", "Дегустации"],
      icon: "UtensilsCrossed",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
            Популярные экскурсии
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите маршрут по душе — от классических достопримечательностей до
            тайных уголков Северной столицы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white p-2 rounded-full">
                  <Icon name={tour.icon as any} size={20} />
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full font-semibold text-sm">
                  {tour.price}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-montserrat">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Icon name="Users" size={16} />
                    <span className="text-sm">до 8 чел</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Что увидим:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не нашли подходящий маршрут? Создадим персональную экскурсию
            специально для вас!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Обсудить индивидуальный маршрут
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
