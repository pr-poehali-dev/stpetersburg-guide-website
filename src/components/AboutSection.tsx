import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo and credentials */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Гид Александр"
                className="w-64 h-64 rounded-full object-cover shadow-lg mx-auto lg:mx-0"
              />
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-3 rounded-full">
                <Icon name="Award" size={24} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-500 fill-current"
                />
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-500 fill-current"
                />
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-500 fill-current"
                />
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-500 fill-current"
                />
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-500 fill-current"
                />
                <span className="text-gray-600 ml-2">4.9 (127 отзывов)</span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Лицензированный гид
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Переводчик EN/DE
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Историк искусств
                </span>
              </div>
            </div>
          </div>

          {/* About content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              Александр Петров
              <span className="block text-xl text-purple-600 font-normal mt-2">
                Ваш проводник в мир Петербурга
              </span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Уже 10 лет я делюсь любовью к Санкт-Петербургу с
                путешественниками со всего мира. Окончил СПбГУ по специальности
                "История искусств", владею английским и немецким языками.
              </p>

              <p>
                Моя специализация — камерные экскурсии для небольших групп, где
                каждый гость получает персональное внимание и может задать любые
                вопросы о городе, его истории и культуре.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Icon name="Users" size={24} className="text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Малые группы</h4>
                  <p className="text-sm text-gray-600">
                    До 8 человек для комфорта
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon
                  name="Languages"
                  size={24}
                  className="text-purple-600 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">3 языка</h4>
                  <p className="text-sm text-gray-600">
                    Русский, английский, немецкий
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={24} className="text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Гибкость</h4>
                  <p className="text-sm text-gray-600">
                    Подстраиваюсь под ваш темп
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon name="Heart" size={24} className="text-purple-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">С душой</h4>
                  <p className="text-sm text-gray-600">
                    Расскажу о городе с любовью
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
