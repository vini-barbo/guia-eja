import { BookOpen, Users, Lightbulb, FileText, BarChart, Settings, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function GuiaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guia Completo de Ensino</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Um guia estruturado para ensinar computação na EJA, com metodologias ativas, sequência didática e
            orientações práticas adaptadas para estudantes adultos.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BookOpen className="mr-3 h-8 w-8 text-blue-600" />
                Sobre este Guia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                Este guia foi desenvolvido especificamente para professores que trabalham com Educação de Jovens e
                Adultos (EJA) e desejam introduzir conceitos de computação de forma efetiva e significativa. Cada seção
                foi pensada para atender às necessidades específicas deste público, respeitando suas experiências de
                vida e promovendo aprendizagem ativa e colaborativa.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Guide Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Seções do Guia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <Users className="mr-3 h-8 w-8 text-green-600" />
                    Características dos Alunos
                  </CardTitle>
                  <Badge variant="outline">Essencial</Badge>
                </div>
                <CardDescription className="text-base">
                  Compreenda o perfil, necessidades e características específicas dos estudantes da EJA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4 text-gray-600">
                  <li>• Perfil socioeconômico e cultural</li>
                  <li>• Experiências com tecnologia</li>
                  <li>• Motivações e expectativas</li>
                  <li>• Desafios e barreiras</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-green-600 transition-colors">
                  <Link href="/perfil-alunos">
                    Explorar Seção <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <Lightbulb className="mr-3 h-8 w-8 text-yellow-600" />
                    Metodologias Ativas
                  </CardTitle>
                  <Badge variant="outline">Popular</Badge>
                </div>
                <CardDescription className="text-base">
                  ABP, computação desplugada, sala invertida e outras abordagens centradas no aluno
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4 text-gray-600">
                  <li>• Aprendizagem Baseada em Projetos</li>
                  <li>• Computação Desplugada</li>
                  <li>• Sala de Aula Invertida</li>
                  <li>• Aprendizagem Colaborativa</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-yellow-600 transition-colors">
                  <Link href="/guia/metodologias">
                    Explorar Seção <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="mr-3 h-8 w-8 text-purple-600" />
                  Conteúdos e Sequência Didática
                </CardTitle>
                <CardDescription className="text-base">
                  Organização curricular e progressão dos conteúdos de computação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4 text-gray-600">
                  <li>• Conceitos fundamentais</li>
                  <li>• Sequência progressiva</li>
                  <li>• Interdisciplinaridade</li>
                  <li>• Adaptações necessárias</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-purple-600 transition-colors">
                  <Link href="/guia/conteudos">
                    Explorar Seção <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Settings className="mr-3 h-8 w-8 text-blue-600" />
                  Organização das Aulas
                </CardTitle>
                <CardDescription className="text-base">
                  Estruturação prática das aulas e gestão do tempo e recursos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4 text-gray-600">
                  <li>• Planejamento de aulas</li>
                  <li>• Gestão do tempo</li>
                  <li>• Organização do espaço</li>
                  <li>• Rotinas e procedimentos</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                  <Link href="/guia/organizacao">
                    Explorar Seção <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BarChart className="mr-3 h-8 w-8 text-red-600" />
                  Avaliação Formativa
                </CardTitle>
                <CardDescription className="text-base">
                  Estratégias de avaliação contínua e feedback construtivo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4 text-gray-600">
                  <li>• Instrumentos de avaliação</li>
                  <li>• Feedback efetivo</li>
                  <li>• Autoavaliação</li>
                  <li>• Portfólio digital</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-red-600 transition-colors">
                  <Link href="/guia/avaliacao">
                    Explorar Seção <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Settings className="mr-3 h-8 w-8 text-orange-600" />
                  Infraestrutura e Recursos
                </CardTitle>
                <CardDescription className="text-base">
                  Orientações sobre equipamentos, software e ambiente de aprendizagem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4 text-gray-600">
                  <li>• Requisitos mínimos</li>
                  <li>• Alternativas gratuitas</li>
                  <li>• Adaptações para baixa conectividade</li>
                  <li>• Organização do laboratório</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-orange-600 transition-colors">
                  <Link href="/guia/infraestrutura">
                    Explorar Seção <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <GraduationCap className="mr-3 h-8 w-8 text-indigo-600" />
                  Formação Docente
                </CardTitle>
                <CardDescription className="text-base">
                  Desenvolvimento profissional e capacitação continuada para professores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 mb-4 text-gray-600">
                  <li>• Competências necessárias</li>
                  <li>• Recursos de formação</li>
                  <li>• Comunidades de prática</li>
                  <li>• Atualização constante</li>
                </ul>
                <Button asChild className="w-full group-hover:bg-indigo-600 transition-colors">
                  <Link href="/guia/formacao">
                    Explorar Seção <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Guia de Início Rápido</h2>
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Novo na EJA? Comece por aqui!</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Conheça seus Alunos</h3>
                  <p className="text-sm text-gray-600">Entenda o perfil e necessidades específicas</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Escolha a Metodologia</h3>
                  <p className="text-sm text-gray-600">Selecione abordagens adequadas ao contexto</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Planeje suas Aulas</h3>
                  <p className="text-sm text-gray-600">Use nossos templates e recursos prontos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore cada seção do guia no seu próprio ritmo e adapte as orientações à sua realidade. Lembre-se: o
            sucesso na EJA vem da conexão com a experiência de vida dos alunos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/perfil-alunos">Começar pelo Perfil dos Alunos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/recursos">Ver Recursos Disponíveis</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
