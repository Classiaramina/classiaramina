import { Search, Building, Users, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bem-vindo ao <span className="text-yellow-400">ClassiAramina</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Sua plataforma de classificados e serviços locais em Aramina
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Anunciar Empresa
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Anunciar Serviço
            </Button>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-blue-100">Empresas Cadastradas</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">1000+</h3>
            <p className="text-blue-100">Prestadores de Serviços</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">200+</h3>
            <p className="text-blue-100">Vagas de Emprego</p>
          </div>
        </div>

        {/* Barra de Pesquisa */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="O que você está procurando?"
                  className="w-full px-4 py-3 text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

