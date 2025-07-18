import { Target, Users, Award, Heart } from 'lucide-react'

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sobre o ClassiAramina
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma plataforma dedicada a conectar empresas, prestadores de serviços e pessoas em Aramina e região, 
            facilitando negócios e oportunidades locais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa História</h3>
            <p className="text-gray-600 mb-4">
              O ClassiAramina nasceu da necessidade de criar uma ponte entre empresas locais e a comunidade de Aramina. 
              Percebemos que muitos negócios e serviços de qualidade não tinham a visibilidade que mereciam.
            </p>
            <p className="text-gray-600 mb-4">
              Nossa missão é fortalecer a economia local, proporcionando uma plataforma moderna e eficiente para 
              divulgação de empresas, serviços e oportunidades de emprego.
            </p>
            <p className="text-gray-600">
              Acreditamos no poder da comunidade e no potencial de crescimento que surge quando conectamos 
              as pessoas certas aos serviços e oportunidades adequadas.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6">Por que escolher o ClassiAramina?</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Foco Local</h5>
                  <p className="text-gray-600 text-sm">Especializado em Aramina e região</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Comunidade Ativa</h5>
                  <p className="text-gray-600 text-sm">Milhares de usuários engajados</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Qualidade</h5>
                  <p className="text-gray-600 text-sm">Anúncios verificados e de qualidade</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">Suporte Dedicado</h5>
                  <p className="text-gray-600 text-sm">Atendimento personalizado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Missão</h4>
            <p className="text-gray-600">
              Conectar empresas e prestadores de serviços com a comunidade local, 
              fortalecendo a economia de Aramina.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Visão</h4>
            <p className="text-gray-600">
              Ser a principal plataforma de classificados e serviços da região, 
              reconhecida pela qualidade e confiabilidade.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Valores</h4>
            <p className="text-gray-600">
              Transparência, qualidade, compromisso com a comunidade e 
              excelência no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

