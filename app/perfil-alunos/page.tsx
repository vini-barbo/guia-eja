import { Users, Heart, Briefcase, Home, Smartphone, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function PerfilAlunosPage() {
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
            <span className="text-gray-600">Perfil dos Alunos EJA</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Perfil dos Alunos EJA</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Compreenda as características específicas, necessidades e potencialidades dos estudantes da Educação de
            Jovens e Adultos para adaptar suas estratégias de ensino.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Heart className="mr-3 h-8 w-8 text-green-600" />
                Por que conhecer seus alunos é fundamental?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                Os estudantes da EJA trazem experiências de vida ricas e diversas. Conhecer seu perfil permite criar
                conexões significativas entre o conteúdo de computação e suas realidades, tornando o aprendizado mais
                relevante e motivador.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Demographics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Perfil Demográfico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-6 w-6 text-blue-600" />
                  Faixa Etária
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>18-25 anos</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>26-35 anos</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>36-50 anos</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>50+ anos</span>
                      <span>5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2 h-6 w-6 text-purple-600" />
                  Situação Profissional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      60%
                    </Badge>
                    Trabalhadores ativos
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      25%
                    </Badge>
                    Desempregados
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      10%
                    </Badge>
                    Autônomos
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">
                      5%
                    </Badge>
                    Aposentados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-6 w-6 text-orange-600" />
                  Responsabilidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 70% têm filhos</li>
                  <li>• 45% são chefes de família</li>
                  <li>• 30% cuidam de idosos</li>
                  <li>• 85% trabalham durante o dia</li>
                  <li>• 60% usam transporte público</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Experiência com Tecnologia</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Smartphone className="mr-3 h-8 w-8 text-blue-600" />
                  Dispositivos Utilizados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Smartphone (95%)</h4>
                    <p className="text-sm text-blue-700">
                      Principal dispositivo de acesso à internet. Usado para redes sociais, mensagens e pesquisas
                      básicas.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Computador/Notebook (30%)</h4>
                    <p className="text-sm text-gray-600">
                      Acesso limitado, geralmente compartilhado com família ou no trabalho.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Tablet (15%)</h4>
                    <p className="text-sm text-gray-600">Uso ocasional, principalmente para entretenimento.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="mr-3 h-8 w-8 text-green-600" />
                  Habilidades Existentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">WhatsApp</span>
                    <Progress value={90} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Facebook/Instagram</span>
                    <Progress value={75} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">YouTube</span>
                    <Progress value={80} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">E-mail</span>
                    <Progress value={40} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Navegação Web</span>
                    <Progress value={50} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">50%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Editores de Texto</span>
                    <Progress value={20} className="w-24 h-2" />
                    <span className="text-sm text-gray-500">20%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Challenges and Barriers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Desafios e Barreiras</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <AlertCircle className="mr-2 h-6 w-6" />
                  Principais Desafios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong>Ansiedade Tecnológica</strong>
                      <p className="text-sm text-red-700">Medo de "quebrar" ou fazer algo errado</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong>Tempo Limitado</strong>
                      <p className="text-sm text-red-700">Múltiplas responsabilidades e horários apertados</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong>Acesso Limitado</strong>
                      <p className="text-sm text-red-700">Equipamentos compartilhados ou internet instável</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong>Baixa Autoestima</strong>
                      <p className="text-sm text-red-700">"Sou muito velho para aprender isso"</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Potencialidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong>Experiência de Vida</strong>
                      <p className="text-sm text-green-700">Conhecimento prático para contextualizar conceitos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong>Motivação Clara</strong>
                      <p className="text-sm text-green-700">Objetivos específicos (trabalho, família, crescimento)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong>Colaboração</strong>
                      <p className="text-sm text-green-700">Disposição para ajudar e aprender com colegas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong>Persistência</strong>
                      <p className="text-sm text-green-700">Determinação para superar dificuldades</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Motivations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Motivações para Aprender Computação</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="mx-auto h-16 w-16 text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">Profissionais</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Melhorar oportunidades de emprego</li>
                  <li>• Usar sistemas no trabalho atual</li>
                  <li>• Criar pequenos negócios online</li>
                  <li>• Fazer cursos profissionalizantes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="mx-auto h-16 w-16 text-green-600 mb-4" />
                <CardTitle className="text-green-800">Pessoais</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Ajudar filhos com tarefas</li>
                  <li>• Comunicar-se com família distante</li>
                  <li>• Acessar serviços públicos online</li>
                  <li>• Entretenimento e lazer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="mx-auto h-16 w-16 text-purple-600 mb-4" />
                <CardTitle className="text-purple-800">Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Não se sentir excluído digitalmente</li>
                  <li>• Participar de redes sociais</li>
                  <li>• Acompanhar notícias e informações</li>
                  <li>• Desenvolver autonomia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Teaching Implications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Implicações para o Ensino</h2>
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Como adaptar sua prática pedagógica</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✅ Estratégias Recomendadas</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Conecte conceitos com experiências de vida</li>
                    <li>• Use exemplos práticos do cotidiano</li>
                    <li>• Promova aprendizagem colaborativa</li>
                    <li>• Ofereça múltiplos caminhos de aprendizagem</li>
                    <li>• Celebre pequenos progressos</li>
                    <li>• Seja paciente com o ritmo individual</li>
                    <li>• Use linguagem acessível</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">❌ Evite</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Assumir conhecimentos prévios</li>
                    <li>• Usar jargões técnicos sem explicar</li>
                    <li>• Criar competição entre alunos</li>
                    <li>• Ignorar limitações de tempo</li>
                    <li>• Subestimar capacidades</li>
                    <li>• Focar apenas na teoria</li>
                    <li>• Desconsiderar ansiedades</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex justify-between">
            <Button asChild variant="outline">
              <Link href="/guia">← Voltar ao Guia</Link>
            </Button>
            <Button asChild>
              <Link href="/metodologias-ativas">Metodologias Ativas →</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
