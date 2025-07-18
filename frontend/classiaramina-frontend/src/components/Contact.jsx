import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Entre em contato conosco para tirar dúvidas, fazer sugestões ou solicitar suporte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">(16) 99445-4641</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">(16) 99445-4641</p>
                  <p className="text-sm text-gray-500">Atendimento rápido e direto</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">contato@classiaramina.com</p>
                  <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Localização</h4>
                  <p className="text-gray-600">Aramina, São Paulo</p>
                  <p className="text-sm text-gray-500">Atendemos toda a região</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <div className="mt-8">
              <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(16) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre planos</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Descreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 mr-3"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Concordo com a <a href="#" className="text-blue-600 hover:underline">política de privacidade</a> e 
                    autorizo o uso dos meus dados para resposta ao contato.
                  </label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Perguntas Frequentes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                Como faço para anunciar minha empresa?
              </h4>
              <p className="text-gray-600 text-sm">
                É simples! Clique em "Anunciar Empresa", escolha seu plano, preencha as informações e faça o pagamento. 
                Seu anúncio ficará ativo em até 24 horas.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                Posso alterar meu anúncio depois de publicado?
              </h4>
              <p className="text-gray-600 text-sm">
                Sim! Você pode editar as informações do seu anúncio a qualquer momento através do painel de controle 
                ou entrando em contato conosco.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                Qual a diferença entre os planos?
              </h4>
              <p className="text-gray-600 text-sm">
                Os planos variam em recursos como número de fotos, posição nas buscas, destaque na página inicial 
                e ferramentas de gestão. Veja nossa seção de preços para detalhes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                Como funciona o suporte?
              </h4>
              <p className="text-gray-600 text-sm">
                Oferecemos suporte por telefone, WhatsApp e email. O tempo de resposta varia conforme seu plano, 
                mas sempre priorizamos a qualidade no atendimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

