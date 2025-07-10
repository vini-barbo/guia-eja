import { GraduationCap, BookOpen, Play, Calendar, Award, Users, ExternalLink, Download } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function FormacaoContinuadaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Início
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Formação Continuada</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Formação Continuada</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Desenvolva suas competências no ensino de computação para EJA através de cursos, webinars, artigos e
            recursos de atualização profissional.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Learning Paths */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Trilhas de Aprendizagem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Iniciante</CardTitle>
                <CardDescription>Para professores que estão começando no ensino de computação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span>0/8 módulos</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Fundamentos da Computação</li>
                  <li>• Perfil dos Alunos EJA</li>
                  <li>• Primeiras Aulas</li>
                  <li>• Ferramentas Básicas</li>
                </ul>
                <Button className="w-full">Começar Trilha</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>Intermediário</CardTitle>
                <CardDescription>Aprofunde metodologias ativas e projetos práticos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span>3/10 módulos</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Metodologias Ativas</li>
                  <li>• Projetos ABP</li>
                  <li>• Avaliação Formativa</li>
                  <li>• Tecnologias Assistivas</li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Continuar Trilha</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-600 mb-2" />
                <CardTitle>Avançado</CardTitle>
                <CardDescription>Torne-se um especialista e mentor para outros educadores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Progresso</span>
                    <span>0/12 módulos</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Liderança Pedagógica</li>
                  <li>• Formação de Professores</li>
                  <li>• Pesquisa em Educação</li>
                  <li>• Inovação Educacional</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Em Breve
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Cursos em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-800">Novo</Badge>
                  <span className="text-sm text-gray-500">4h de conteúdo</span>
                </div>
                <CardTitle className="mt-2">Metodologias Ativas na Prática</CardTitle>
                <CardDescription>
                  Aprenda a implementar ABP, sala invertida e computação desplugada em suas aulas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Play className="mr-2 h-4 w-4" />
                    12 vídeo-aulas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Download className="mr-2 h-4 w-4" />
                    Materiais para download
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="mr-2 h-4 w-4" />
                    Certificado de conclusão
                  </div>
                </div>
                <Button className="w-full">Inscrever-se Gratuitamente</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Popular</Badge>
                  <span className="text-sm text-gray-500">6h de conteúdo</span>
                </div>
                <CardTitle className="mt-2">Avaliação Formativa na EJA</CardTitle>
                <CardDescription>
                  Estratégias e instrumentos para acompanhar o progresso dos alunos de forma contínua
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Play className="mr-2 h-4 w-4" />
                    15 vídeo-aulas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="mr-2 h-4 w-4" />
                    E-book exclusivo
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="mr-2 h-4 w-4" />
                    Fórum de discussão
                  </div>
                </div>
                <Button className="w-full">Inscrever-se Gratuitamente</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Webinars */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Webinars e Eventos</h2>
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge className="bg-green-100 text-green-800 mr-2">Próximo</Badge>
                      <span className="text-sm text-gray-500">15 de Dezembro, 19h</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">"Inclusão Digital na EJA: Superando Barreiras"</h3>
                    <p className="text-gray-600 mb-3">
                      Com Dra. Maria Santos, especialista em educação inclusiva. Discussão sobre estratégias para
                      incluir alunos com diferentes níveis de letramento digital.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      127 inscritos
                    </div>
                  </div>
                  <div className="ml-6">
                    <Button>
                      <Calendar className="mr-2 h-4 w-4" />
                      Inscrever-se
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="outline" className="mr-2">
                        22 de Dezembro
                      </Badge>
                      <span className="text-sm text-gray-500">14h às 16h</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Workshop: "Criando Atividades no Scratch para EJA"</h3>
                    <p className="text-gray-600 mb-3">
                      Hands-on prático para criar projetos no Scratch adaptados para estudantes adultos. Inclui
                      templates prontos e dicas de implementação.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      Vagas limitadas (20 participantes)
                    </div>
                  </div>
                  <div className="ml-6">
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Inscrever-se
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources Library */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Biblioteca de Recursos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Play className="mx-auto h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-semibold mb-2">Vídeo-aulas</h3>
                <p className="text-sm text-gray-600 mb-4">45+ vídeos tutoriais</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Acessar
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">E-books</h3>
                <p className="text-sm text-gray-600 mb-4">12 guias completos</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="mx-auto h-12 w-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Certificados</h3>
                <p className="text-sm text-gray-600 mb-4">Validação profissional</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Ver Cursos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Mentoria</h3>
                <p className="text-sm text-gray-600 mb-4">Suporte personalizado</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Solicitar
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Artigos Recentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Metodologia
                </Badge>
                <CardTitle className="text-lg">
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    5 Estratégias para Engajar Alunos Adultos na Programação
                  </Link>
                </CardTitle>
                <CardDescription>
                  Descubra técnicas comprovadas para manter a motivação e interesse dos estudantes da EJA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Por Ana Costa</span>
                  <span className="mx-2">•</span>
                  <span>5 min de leitura</span>
                  <span className="mx-2">•</span>
                  <span>10 de Dezembro</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Tecnologia
                </Badge>
                <CardTitle className="text-lg">
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Ferramentas Gratuitas para Ensino de Computação
                  </Link>
                </CardTitle>
                <CardDescription>Lista atualizada de recursos online gratuitos para professores da EJA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Por João Silva</span>
                  <span className="mx-2">•</span>
                  <span>8 min de leitura</span>
                  <span className="mx-2">•</span>
                  <span>8 de Dezembro</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Experiência
                </Badge>
                <CardTitle className="text-lg">
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Como Superei a Resistência Inicial dos Alunos
                  </Link>
                </CardTitle>
                <CardDescription>Relato de experiência sobre como transformar ansiedade em curiosidade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Por Maria Santos</span>
                  <span className="mx-2">•</span>
                  <span>6 min de leitura</span>
                  <span className="mx-2">•</span>
                  <span>5 de Dezembro</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  Avaliação
                </Badge>
                <CardTitle className="text-lg">
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Portfólio Digital: Avaliação Contínua na EJA
                  </Link>
                </CardTitle>
                <CardDescription>
                  Como implementar portfólios digitais para acompanhar o progresso dos alunos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Por Pedro Lima</span>
                  <span className="mx-2">•</span>
                  <span>7 min de leitura</span>
                  <span className="mx-2">•</span>
                  <span>3 de Dezembro</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Continue Sua Jornada de Aprendizagem</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Invista no seu desenvolvimento profissional e transforme suas aulas de computação na EJA. Nossos recursos
            são gratuitos e sempre atualizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <GraduationCap className="mr-2 h-5 w-5" />
              Começar Trilha de Aprendizagem
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/comunidade">Participar da Comunidade</Link>
            </Button>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8 mt-12">
          <div className="flex justify-between">
            <Button asChild variant="outline">
              <Link href="/comunidade">← Comunidade Ativa</Link>
            </Button>
            <Button asChild>
              <Link href="/recursos">Recursos & Modelos →</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
