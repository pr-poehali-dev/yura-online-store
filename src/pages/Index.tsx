import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Рыцарские доспехи",
      price: "150 000 ₽",
      image: "/img/2572d932-64b9-4474-8ce9-d1b8265ee4fb.jpg",
      description: "Полный комплект средневековых доспехов XIV века"
    },
    {
      id: 2,
      name: "Меч и щит",
      price: "75 000 ₽", 
      image: "/img/540f861a-a8af-4083-8feb-d1f3c19af688.jpg",
      description: "Боевой меч и геральдический щит"
    },
    {
      id: 3,
      name: "Шлем и перчатки",
      price: "45 000 ₽",
      image: "/img/3b9e1e93-70c2-4593-bf18-68e721ae3d38.jpg", 
      description: "Защитный шлем с кольчужными перчатками"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-medium text-black">Историческое Ателье</h1>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Главная</a>
                <a href="#catalog" className="text-gray-900 hover:text-gray-600 transition-colors">Каталог</a>
                <a href="#contacts" className="text-gray-900 hover:text-gray-600 transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light text-black mb-6 leading-tight">
            Мастерская исторического снаряжения
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Создаём точные реплики средневекового вооружения и доспехов 
            для реконструкторов, коллекционеров и музеев
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            Посмотреть каталог
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-4">Популярные товары</h3>
            <p className="text-gray-600">Наши самые востребованные изделия</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300 bg-white border-0">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-black mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-light text-black">{product.price}</span>
                      <Button variant="outline" size="sm" className="hover:bg-black hover:text-white transition-colors">
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-light text-black mb-6">О нашем ателье</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Более 15 лет мы воссоздаём историческое снаряжение по археологическим находкам 
            и музейным образцам. Каждое изделие изготавливается вручную мастерами 
            с использованием традиционных технологий.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Icon name="Award" size={32} className="mx-auto mb-4 text-gray-700" />
              <h4 className="font-medium text-black mb-2">Историческая точность</h4>
              <p className="text-sm text-gray-600">Работаем с музеями и археологами</p>
            </div>
            <div className="text-center">
              <Icon name="Hammer" size={32} className="mx-auto mb-4 text-gray-700" />
              <h4 className="font-medium text-black mb-2">Ручная работа</h4>
              <p className="text-sm text-gray-600">Каждое изделие уникально</p>
            </div>
            <div className="text-center">
              <Icon name="Shield" size={32} className="mx-auto mb-4 text-gray-700" />
              <h4 className="font-medium text-black mb-2">Высокое качество</h4>
              <p className="text-sm text-gray-600">Используем лучшие материалы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-4">Контакты</h3>
            <p className="text-gray-600">Свяжитесь с нами для консультации</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={20} className="text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium text-black mb-1">Адрес мастерской</h4>
                  <p className="text-gray-600">г. Москва, ул. Историческая, 15</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={20} className="text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium text-black mb-1">Телефон</h4>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={20} className="text-gray-700 mt-1" />
                <div>
                  <h4 className="font-medium text-black mb-1">Email</h4>
                  <p className="text-gray-600">info@historical-atelier.ru</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-medium text-black mb-4">Напишите нам</h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
                <textarea 
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black resize-none"
                ></textarea>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Историческое Ателье. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;