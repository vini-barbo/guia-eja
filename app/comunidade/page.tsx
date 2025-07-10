import { MessageCircle, Users, Calendar, BookOpen, Share2, Heart, ExternalLink, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ComunidadePage() {
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
            <span className="text-gray-600">Comunidade Ativa</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Comunidade Ativa</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Conecte-se com outros educadores, troque experiências, tire dúvidas e compartilhe práticas exitosas no
            ensino de computação para EJA.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Community Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="mx-auto h-12 w-12 text-blue-600 mb-2" />
                <div className="text-2xl font-bold text-blue-600">1,247</div>
                <p className="text-sm text-gray-600">Professores Ativos</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <MessageCircle className="mx-auto h-12 w-12 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-green-600">3,892</div>
                <p className="text-sm text-gray-600">Discussões</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Share2 className="mx-auto h-12 w-12 text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-purple-600">856</div>
                <p className="text-sm text-gray-600">Recursos Compartilhados</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="mx-auto h-12 w-12 text-orange-600 mb-2" />
                <div className="text-2xl font-bold text-orange-600">24</div>
                <p className="text-sm text-gray-600">Eventos Mensais</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join Community */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-red-800">
                <Heart className="mr-3 h-8 w-8" />
                Faça Parte da Nossa Comunidade
              </CardTitle>
              <CardDescription className="text-lg text-red-700">
                Junte-se a centenas de educadores que estão transformando o ensino de computação na EJA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  WhatsApp - Professores EJA
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Telegram - Recursos
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Discord - Chat Geral
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Discussion Forums */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Fóruns de Discussão</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2 h-6 w-6 text-blue-600" />
                    Dúvidas e Suporte
                  </CardTitle>
                  <Badge variant="secondary">142 posts</Badge>
                </div>
                <CardDescription>
                  Tire suas dúvidas sobre metodologias, ferramentas e práticas pedagógicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Maria Rosa</p>
                      <p className="text-xs text-gray-600">
                        Como adaptar Scratch para alunos com dificuldades motoras?
                      </p>
                      <p className="text-xs text-gray-400">2 horas atrás • 5 respostas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">João Silva</p>
                      <p className="text-xs text-gray-600">Sugestões de projetos para turma noturna?</p>
                      <p className="text-xs text-gray-400">1 dia atrás • 12 respostas</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Nova Discussão
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Share2 className="mr-2 h-6 w-6 text-green-600" />
                    Compartilhe Experiências
                  </CardTitle>
                  <Badge variant="secondary">89 posts</Badge>
                </div>
                <CardDescription>Conte suas experiências exitosas e inspire outros educadores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Ana Costa</p>
                      <p className="text-xs text-gray-600">Projeto "Orçamento Familiar" foi um sucesso!</p>
                      <p className="text-xs text-gray-400">3 horas atrás • 8 curtidas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>PL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Pedro Lima</p>
                      <p className="text-xs text-gray-600">Como superei a resistência inicial dos alunos</p>
                      <p className="text-xs text-gray-400">2 dias atrás • 15 curtidas</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Compartilhar Experiência
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-6 w-6 text-purple-600" />
                    Recursos e Materiais
                  </CardTitle>
                  <Badge variant="secondary">67 posts</Badge>
                </div>
                <CardDescription>Compartilhe e encontre materiais didáticos, templates e atividades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>LM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Lucia Mendes</p>
                      <p className="text-xs text-gray-600">Template de avaliação para projetos ABP</p>
                      <p className="text-xs text-gray-400">1 hora atrás • 23 downloads</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>RF</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Roberto Ferreira</p>
                      <p className="text-xs text-gray-600">Atividades desplugadas para lógica de programação</p>
                      <p className="text-xs text-gray-400">4 horas atrás • 31 downloads</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Compartilhar Recurso
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-6 w-6 text-orange-600" />
                    Eventos e Webinars
                  </CardTitle>
                  <Badge variant="secondary">12 eventos</Badge>
                </div>
                <CardDescription>Participe de webinars, workshops e encontros virtuais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-orange-800">Próximo Evento</p>
                    <p className="text-xs text-orange-700">Webinar: "Avaliação Formativa na EJA"</p>
                    <p className="text-xs text-orange-600">15/12 às 19h • 89 inscritos</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm font-medium">Workshop Prático</p>
                    <p className="text-xs text-gray-600">Criando atividades no Scratch</p>
                    <p className="text-xs text-gray-500">22/12 às 14h • Vagas limitadas</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  <Calendar className="mr-2 h-4 w-4" />
                  Ver Todos os Eventos
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Members */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Membros em Destaque</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Avatar className="mx-auto w-16 h-16 mb-4">
                  <AvatarFallback className="text-lg">DR</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">Dra. Rosa Santos</h3>
                <p className="text-sm text-gray-600 mb-2">Especialista em EJA • São Paulo</p>
                <Badge variant="outline" className="mb-3">
                  Moderadora
                </Badge>
                <p className="text-xs text-gray-500">
                  "15 anos de experiência em educação de adultos. Apaixonada por metodologias ativas."
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Avatar className="mx-auto w-16 h-16 mb-4">
                  <AvatarFallback className="text-lg">MC</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">Prof. Marcos Costa</h3>
                <p className="text-sm text-gray-600 mb-2">Desenvolvedor e Educador • RJ</p>
                <Badge variant="outline" className="mb-3">
                  Contribuidor Ativo
                </Badge>
                <p className="text-xs text-gray-500">
                  "Criador de mais de 50 atividades práticas para ensino de programação na EJA."
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Avatar className="mx-auto w-16 h-16 mb-4">
                  <AvatarFallback className="text-lg">AL</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-2">Ana Lucia</h3>
                <p className="text-sm text-gray-600 mb-2">Coordenadora Pedagógica • MG</p>
                <Badge variant="outline" className="mb-3">
                  Mentora
                </Badge>
                <p className="text-xs text-gray-500">
                  "Especialista em formação de professores e implementação de tecnologia na EJA."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Diretrizes da Comunidade</h2>
          <Card>
            <CardHeader>
              <CardTitle>Como participar de forma construtiva</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✅ Incentivamos</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Compartilhar experiências reais</li>
                    <li>• Fazer perguntas específicas</li>
                    <li>• Oferecer ajuda a outros membros</li>
                    <li>• Respeitar diferentes opiniões</li>
                    <li>• Usar linguagem inclusiva</li>
                    <li>• Citar fontes quando relevante</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">❌ Não permitimos</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Spam ou autopromoção excessiva</li>
                    <li>• Linguagem ofensiva ou discriminatória</li>
                    <li>• Compartilhamento de conteúdo protegido</li>
                    <li>• Discussões políticas partidárias</li>
                    <li>• Informações falsas ou enganosas</li>
                    <li>• Assédio ou comportamento tóxico</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Pronto para se conectar?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Junte-se à nossa comunidade de educadores apaixonados por transformar o ensino de computação na EJA. Sua
            experiência pode inspirar outros professores!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Users className="mr-2 h-5 w-5" />
              Participar da Comunidade
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8 mt-12">
          <div className="flex justify-between">
            <Button asChild variant="outline">
              <Link href="/metodologias-ativas">← Metodologias Ativas</Link>
            </Button>
            <Button asChild>
              <Link href="/formacao-continuada">Formação Continuada →</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
