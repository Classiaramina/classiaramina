import { useState } from 'react'
import { FileText, Upload, User, Briefcase, GraduationCap, Plus, Search, Download, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Resume = () => {
  const [activeTab, setActiveTab] = useState('search')

  // Dados de exemplo dos currículos
  const resumes = [
    {
      id: 1,
      name: 'Maria Silva',
      profession: 'Vendedora',
      experience: '5 anos',
      education: 'Ensino Médio Completo',
      skills: ['Atendimento ao cliente', 'Vendas', 'Comunicação'],
      location: 'Aramina, SP',
      age: 28,
      summary: 'Profissional experiente em vendas com foco em atendimento ao cliente e resultados.',
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'João Santos',
      profession: 'Mecânico',
      experience: '8 anos',
      education: 'Curso Técnico em Mecânica',
      skills: ['Mecânica geral', 'Elétrica automotiva', 'Diagnóstico'],
      location: 'Aramina, SP',
      age: 35,
      summary: 'Mecânico especializado em veículos leves com ampla experiência em manutenção.',
      uploadDate: '2024-01-12'
    },
    {
      id: 3,
      name: 'Ana Costa',
      profession: 'Auxiliar Administrativo',
      experience: '3 anos',
      education: 'Superior em Administração (cursando)',
      skills: ['Excel', 'Atendimento', 'Organização', 'Comunicação'],
      location: 'Aramina, SP',
      age: 24,
      summary: 'Estudante de administração com experiência em rotinas administrativas.',
      uploadDate: '2024-01-10'
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      profession: 'Designer Gráfico',
      experience: '4 anos',
      education: 'Superior em Design Gráfico',
      skills: ['Photoshop', 'Illustrator', 'Criatividade', 'Marketing'],
      location: 'Aramina, SP',
      age: 29,
      summary: 'Designer criativo com experiência em materiais publicitários e identidade visual.',
      uploadDate: '2024-01-08'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR')
  }

  return (
    <section id="curriculo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Banco de Currículos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Encontre profissionais qualificados ou cadastre seu currículo para novas oportunidades.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <Button
              variant={activeTab === 'search' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('search')}
              className={activeTab === 'search' ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              <Search className="w-4 h-4 mr-2" />
              Buscar Currículos
            </Button>
            <Button
              variant={activeTab === 'upload' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('upload')}
              className={activeTab === 'upload' ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              <Upload className="w-4 h-4 mr-2" />
              Cadastrar Currículo
            </Button>
          </div>
        </div>

        {/* Buscar Currículos */}
        {activeTab === 'search' && (
          <div>
            {/* Filtros de Busca */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filtros de Busca</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profissão</label>
                  <input
                    type="text"
                    placeholder="Ex: Vendedor, Mecânico..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experiência</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Qualquer</option>
                    <option value="0-1">0-1 anos</option>
                    <option value="2-5">2-5 anos</option>
                    <option value="5+">5+ anos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localização</label>
                  <input
                    type="text"
                    placeholder="Aramina, SP"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar Profissionais
                </Button>
              </div>
            </div>

            {/* Lista de Currículos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumes.map((resume) => (
                <div key={resume.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{resume.name}</h3>
                        <p className="text-blue-600 font-medium">{resume.profession}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{resume.age} anos</span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">{resume.summary}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{resume.experience} de experiência</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span>{resume.education}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Principais Habilidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {resume.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                      Cadastrado em {formatDate(resume.uploadDate)}
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-1" />
                        Baixar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cadastrar Currículo */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Cadastre seu Currículo
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Sua idade"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profissão/Área de Atuação</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ex: Vendedor, Mecânico, Designer..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experiência</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Selecione</option>
                      <option value="0-1">0-1 anos</option>
                      <option value="2-5">2-5 anos</option>
                      <option value="5+">5+ anos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Escolaridade</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Selecione</option>
                      <option value="fundamental">Ensino Fundamental</option>
                      <option value="medio">Ensino Médio</option>
                      <option value="tecnico">Curso Técnico</option>
                      <option value="superior">Ensino Superior</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resumo Profissional</label>
                  <textarea
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Principais Habilidades</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Separe as habilidades por vírgula"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload do Currículo (PDF)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Clique para selecionar ou arraste seu currículo aqui</p>
                    <p className="text-sm text-gray-500">Formato PDF, máximo 5MB</p>
                    <input type="file" accept=".pdf" className="hidden" />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                    <Plus className="w-5 h-5 mr-2" />
                    Cadastrar Currículo
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Resume

