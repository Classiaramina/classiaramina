import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">ClassiAramina</h3>
            <p className="text-gray-300 mb-4">
              Sua plataforma de classificados e serviços locais. Conectando empresas e prestadores de serviços com clientes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#empresas" className="text-gray-300 hover:text-blue-400 transition-colors">Empresas</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#precos" className="text-gray-300 hover:text-blue-400 transition-colors">Preços</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">(16) 99445-4641</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">contato@classiaramina.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span className="text-gray-300">Aramina, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ClassiAramina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

