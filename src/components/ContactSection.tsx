import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Готов ответить на любые вопросы и помочь спланировать незабываемое
            путешествие по Петербургу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon
                name="Phone"
                size={32}
                className="mx-auto mb-4 text-purple-300"
              />
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-purple-200">+7 (812) 123-45-67</p>
              <p className="text-sm text-purple-300 mt-1">
                Ежедневно 9:00-21:00
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon
                name="MessageCircle"
                size={32}
                className="mx-auto mb-4 text-purple-300"
              />
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-purple-200">+7 (812) 123-45-67</p>
              <p className="text-sm text-purple-300 mt-1">Быстрые ответы</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon
                name="Mail"
                size={32}
                className="mx-auto mb-4 text-purple-300"
              />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-purple-200">guide@spb-tours.ru</p>
              <p className="text-sm text-purple-300 mt-1">
                Подробные консультации
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Icon
                name="Instagram"
                size={32}
                className="mx-auto mb-4 text-purple-300"
              />
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-purple-200">@spb_guide_alex</p>
              <p className="text-sm text-purple-300 mt-1">Фото с экскурсий</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-montserrat">
              Часто задаваемые вопросы
            </h3>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon
                    name="HelpCircle"
                    size={20}
                    className="mr-2 text-purple-300"
                  />
                  Как забронировать экскурсию?
                </h4>
                <p className="text-purple-200 text-sm">
                  Позвоните, напишите в WhatsApp или на email. Обсудим детали и
                  подтвердим бронирование.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon
                    name="Clock"
                    size={20}
                    className="mr-2 text-purple-300"
                  />
                  За сколько нужно бронировать?
                </h4>
                <p className="text-purple-200 text-sm">
                  Рекомендую за 2-3 дня, но можем договориться и на завтрашний
                  день.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Icon
                    name="Umbrella"
                    size={20}
                    className="mr-2 text-purple-300"
                  />
                  Что если плохая погода?
                </h4>
                <p className="text-purple-200 text-sm">
                  У меня есть музейные программы и крытые локации. Петербург
                  красив в любую погоду!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Icon
                name="Star"
                size={48}
                className="mx-auto mb-6 text-yellow-400"
              />
              <h3 className="text-2xl font-bold mb-4">Готовы к приключению?</h3>
              <p className="text-purple-200 mb-6">
                Забронируйте экскурсию прямо сейчас и получите скидку 10% на
                первое посещение!
              </p>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать экскурсию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-purple-900 text-lg py-3"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Задать вопрос
                </Button>
              </div>

              <p className="text-xs text-purple-300 mt-4">
                * Скидка действует при бронировании в течение 48 часов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
