import { useState } from 'react'
import { Scissors, Wrench, Home, Car, Heart, Plus, Filter, MapPin, Phone, Star } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  // Dados de exemplo dos serviços
  const services = [
    {
      id: 1,
      title: 'Barbearia do João',
      category: 'Beleza',
      description: 'Cortes masculinos modernos e tradicionais. Barba, bigode e tratamentos capilares.',
      address: 'Rua das Flores, 123',
      phone: '(16) 99999-1111',
      rating: 4.8,
      reviews: 45,
      price: 'R$ 25,00',
      image: '/api/placeholder/300/200',
      icon: Scissors
    },
    {
      id: 2,
      title: 'Encanador 24h',
      category: 'Casa',
      description: 'Serviços de encanamento residencial e comercial. Emergências 24 horas.',
      address: 'Atende toda Aramina',
      phone: '(16) 99999-2222',
      rating: 4.9,
      reviews: 32,
      price: 'A partir de R$ 50,00',
      image: '/api/placeholder/300/200',
      icon: Wrench
    },
    {
      id: 3,
      title: 'Limpeza Residencial',
      category: 'Casa',
      description: 'Limpeza completa de residências. Diarista, faxineira e limpeza pós-obra.',
      address: 'Atende Aramina e região',
      phone: '(16) 99999-3333',
      rating: 4.7,
      reviews: 28,
      price: 'R$ 80,00/dia',
      image: '/api/placeholder/300/200',
      icon: Home
    },
    {
      id: 4,
      title: 'Mecânico Móvel',
      category: 'Automotivo',
      description: 'Serviços automotivos no local. Troca de óleo, bateria e pequenos reparos.',
      address: 'Atendimento domiciliar',
      phone: '(16) 99999-4444',
      rating: 4.6,
      reviews: 19,
      price: 'Consulte valores',
      image: '/api/placeholder/300/200',
      icon: Car
    },
    {
      id: 5,
      title: 'Cuidadora de Idosos',
      category: 'Saúde',
      description: 'Cuidados especializados para idosos. Acompanhamento médico e atividades diárias.',
      address: 'Aramina e região',
      phone: '(16) 99999-5555',
      rating: 5.0,
      reviews: 12,
      price: 'R$ 120,00/dia',
      image: '/api/placeholder/300/200',
      icon: Heart
    }
  ]

  const categories = ['Todos', 'Beleza', 'Casa', 'Automotivo', 'Saúde', 'Educação', 'Tecnologia']

  const filteredServices = selectedCategory === 'Todos' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Serviços Locais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Encontre os melhores prestadores de serviços de Aramina. Profissionais qualificados e avaliados pela comunidade.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-5 h-5 mr-2" />
            Anunciar Meu Serviço
          </Button>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-gray-600" />
            <span className="text-gray-600 font-medium">Filtrar por categoria:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Avaliação */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      {renderStars(service.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {service.rating} ({service.reviews} avaliações)
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{service.address}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{service.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Contatar
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Wrench className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhum serviço encontrado
            </h3>
            <p className="text-gray-500">
              Não há serviços cadastrados nesta categoria ainda.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services

