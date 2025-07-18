import { Check, Star, Building, Users, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      type: 'Empresas',
      price: 'R$ 29,90',
      period: '/mês',
      description: 'Ideal para pequenas empresas que estão começando',
      icon: Building,
      color: 'blue',
      features: [
        'Anúncio da empresa por 30 dias',
        'Até 5 fotos',
        'Informações básicas de contato',
        'Aparece nas buscas',
        'Suporte por email'
      ],
      popular: false
    },
    {
      name: 'Profissional',
      type: 'Empresas',
      price: 'R$ 59,90',
      period: '/mês',
      description: 'Para empresas que querem mais visibilidade',
      icon: Star,
      color: 'green',
      features: [
        'Anúncio da empresa por 30 dias',
        'Até 15 fotos',
        'Informações completas + website',
        'Destaque nas buscas',
        'Aparece no topo da categoria',
        'Suporte prioritário',
        'Estatísticas de visualizações'
      ],
      popular: true
    },
    {
      name: 'Premium',
      type: 'Empresas',
      price: 'R$ 99,90',
      period: '/mês',
      description: 'Máxima visibilidade para sua empresa',
      icon: Crown,
      color: 'purple',
      features: [
        'Anúncio da empresa por 30 dias',
        'Fotos ilimitadas',
        'Informações completas + website',
        'Destaque premium nas buscas',
        'Banner na página inicial',
        'Suporte 24/7',
        'Estatísticas detalhadas',
        'Gerenciador de leads'
      ],
      popular: false
    }
  ]

  const servicePlans = [
    {
      name: 'Básico',
      type: 'Serviços',
      price: 'R$ 19,90',
      period: '/mês',
      description: 'Para prestadores de serviços independentes',
      icon: Users,
      color: 'blue',
      features: [
        'Anúncio do serviço por 30 dias',
        'Até 3 fotos',
        'Informações básicas de contato',
        'Aparece nas buscas',
        'Suporte por email'
      ],
      popular: false
    },
    {
      name: 'Profissional',
      type: 'Serviços',
      price: 'R$ 39,90',
      period: '/mês',
      description: 'Para profissionais estabelecidos',
      icon: Star,
      color: 'green',
      features: [
        'Anúncio do serviço por 30 dias',
        'Até 10 fotos',
        'Informações completas + avaliações',
        'Destaque nas buscas',
        'Aparece no topo da categoria',
        'Suporte prioritário',
        'Sistema de agendamento'
      ],
      popular: true
    },
    {
      name: 'Premium',
      type: 'Serviços',
      price: 'R$ 69,90',
      period: '/mês',
      description: 'Para profissionais que querem se destacar',
      icon: Crown,
      color: 'purple',
      features: [
        'Anúncio do serviço por 30 dias',
        'Fotos ilimitadas',
        'Informações completas + avaliações',
        'Destaque premium nas buscas',
        'Badge de profissional verificado',
        'Suporte 24/7',
        'Sistema de agendamento avançado',
        'Relatórios de performance'
      ],
      popular: false
    }
  ]

  const getColorClasses = (color, popular = false) => {
    const colors = {
      blue: {
        border: popular ? 'border-blue-500' : 'border-gray-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        icon: 'bg-blue-100 text-blue-600',
        badge: 'bg-blue-600'
      },
      green: {
        border: popular ? 'border-green-500' : 'border-gray-200',
        button: 'bg-green-600 hover:bg-green-700',
        icon: 'bg-green-100 text-green-600',
        badge: 'bg-green-600'
      },
      purple: {
        border: popular ? 'border-purple-500' : 'border-gray-200',
        button: 'bg-purple-600 hover:bg-purple-700',
        icon: 'bg-purple-100 text-purple-600',
        badge: 'bg-purple-600'
      }
    }
    return colors[color]
  }

  const PlanCard = ({ plan }) => {
    const IconComponent = plan.icon
    const colors = getColorClasses(plan.color, plan.popular)

    return (
      <div className={`relative bg-white rounded-lg shadow-lg border-2 ${colors.border} p-6 ${plan.popular ? 'transform scale-105' : ''}`}>
        {plan.popular && (
          <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${colors.badge} text-white px-4 py-1 rounded-full text-sm font-medium`}>
            Mais Popular
          </div>
        )}
        
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.icon} rounded-full mb-4`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
            <span className="text-gray-600">{plan.period}</span>
          </div>
          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {plan.type}
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button className={`w-full ${colors.button}`}>
          Escolher Plano
        </Button>
      </div>
    )
  }

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa ou serviço. Aumente sua visibilidade e conquiste mais clientes.
          </p>
        </div>

        {/* Planos para Empresas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Planos para Empresas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>

        {/* Planos para Serviços */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Planos para Prestadores de Serviços
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicePlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Informações Importantes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Formas de Pagamento</h4>
              <ul className="space-y-1">
                <li>• PIX (desconto de 10%)</li>
                <li>• Cartão de crédito</li>
                <li>• Boleto bancário</li>
                <li>• Transferência bancária</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Política de Cancelamento</h4>
              <ul className="space-y-1">
                <li>• Cancele a qualquer momento</li>
                <li>• Sem multas ou taxas extras</li>
                <li>• Reembolso proporcional</li>
                <li>• Suporte dedicado</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">
              Dúvidas sobre os planos? Entre em contato conosco!
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

