import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="MapPin" size={28} className="text-purple-400" />
              <span className="text-xl font-bold">Александр Петров</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Профессиональный гид-переводчик с 10-летним опытом. Покажу вам
              настоящий Санкт-Петербург — от императорских дворцов до тайных
              двориков.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  О гиде
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Экскурсии
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-purple-400" />
                <span className="text-gray-300 text-sm">
                  +7 (812) 123-45-67
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-purple-400" />
                <span className="text-gray-300 text-sm">
                  guide@spb-tours.ru
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-purple-400" />
                <span className="text-gray-300 text-sm">Санкт-Петербург</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Александр Петров. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
