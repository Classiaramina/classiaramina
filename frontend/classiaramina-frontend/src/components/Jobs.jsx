import { useState } from 'react'
import { Briefcase, MapPin, Clock, DollarSign, Building, Plus, Filter, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Jobs = () => {
  const [selectedType, setSelectedType] = useState('Todos')

  // Dados de exemplo das vagas
  const jobs = [
    {
      id: 1,
      title: 'Vendedor(a)',
      company: 'Loja Fashion',
      type: 'CLT',
      location: 'Centro - Aramina',
      salary: 'R$ 1.500,00 + comissões',
      description: 'Vaga para vendedor(a) com experiência em atendimento ao cliente. Conhecimento em moda é um diferencial.',
      requirements: ['Ensino médio completo', 'Experiência em vendas', 'Boa comunicação'],
      benefits: ['Vale transporte', 'Vale alimentação', 'Comissões'],
      workload: '44h semanais',
      postedDate: '2024-01-15',
      deadline: '2024-02-15'
    },
    {
      id: 2,
      title: 'Mecânico Automotivo',
      company: 'Auto Mecânica Silva',
      type: 'CLT',
      location: 'Zona Industrial - Aramina',
      salary: 'R$ 2.200,00',
      description: 'Procuramos mecânico com experiência em manutenção preventiva e corretiva de veículos leves.',
      requirements: ['Curso técnico em mecânica', 'Experiência mínima de 2 anos', 'CNH categoria B'],
      benefits: ['Vale transporte', 'Vale alimentação', 'Plano de saúde'],
      workload: '44h semanais',
      postedDate: '2024-01-10',
      deadline: '2024-02-10'
    },
    {
      id: 3,
      title: 'Auxiliar de Padaria',
      company: 'Padaria Central',
      type: 'CLT',
      location: 'Centro - Aramina',
      salary: 'R$ 1.320,00',
      description: 'Vaga para auxiliar de padaria. Responsável por produção de pães, doces e atendimento ao cliente.',
      requirements: ['Ensino fundamental completo', 'Disponibilidade para trabalhar de madrugada', 'Experiência desejável'],
      benefits: ['Vale transporte', 'Vale alimentação', 'Cesta básica'],
      workload: '44h semanais',
      postedDate: '2024-01-12',
      deadline: '2024-02-12'
    },
    {
      id: 4,
      title: 'Freelancer - Designer Gráfico',
      company: 'Agência Digital',
      type: 'Freelancer',
      location: 'Remoto',
      salary: 'R$ 50,00/hora',
      description: 'Procuramos designer gráfico freelancer para projetos pontuais. Criação de materiais publicitários.',
      requirements: ['Portfolio comprovado', 'Domínio em Photoshop e Illustrator', 'Criatividade'],
      benefits: ['Flexibilidade de horário', 'Trabalho remoto', 'Projetos variados'],
      workload: 'Flexível',
      postedDate: '2024-01-14',
      deadline: '2024-02-14'
    },
    {
      id: 5,
      title: 'Estagiário(a) Administrativo',
      company: 'Escritório Contábil',
      type: 'Estágio',
      location: 'Centro - Aramina',
      salary: 'R$ 800,00 + auxílios',
      description: 'Oportunidade de estágio na área administrativa. Apoio em rotinas contábeis e atendimento.',
      requirements: ['Cursando administração ou contabilidade', 'Conhecimento em Excel', 'Proatividade'],
      benefits: ['Vale transporte', 'Vale alimentação', 'Experiência profissional'],
      workload: '30h semanais',
      postedDate: '2024-01-13',
      deadline: '2024-02-13'
    }
  ]

  const jobTypes = ['Todos', 'CLT', 'Freelancer', 'Estágio', 'Temporário']

  const filteredJobs = selectedType === 'Todos' 
    ? jobs 
    : jobs.filter(job => job.type === selectedType)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR')
  }

  const getTypeColor = (type) => {
    const colors = {
      'CLT': 'bg-green-100 text-green-800',
      'Freelancer': 'bg-blue-100 text-blue-800',
      'Estágio': 'bg-purple-100 text-purple-800',
      'Temporário': 'bg-orange-100 text-orange-800'
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="empregos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Oportunidades de Emprego
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Encontre as melhores oportunidades de trabalho em Aramina e região. Vagas atualizadas diariamente.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-5 h-5 mr-2" />
            Anunciar Vaga
          </Button>
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-gray-600" />
            <span className="text-gray-600 font-medium">Filtrar por tipo:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {jobTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
                className={selectedType === type ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de Vagas */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
                      {job.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{job.workload}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">Até {formatDate(job.deadline)}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Requisitos:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Benefícios:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-end">
                      <p className="text-sm text-gray-500 mb-3">
                        Publicado em {formatDate(job.postedDate)}
                      </p>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Candidatar-se
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Nenhuma vaga encontrada
            </h3>
            <p className="text-gray-500">
              Não há vagas disponíveis nesta categoria no momento.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Jobs

