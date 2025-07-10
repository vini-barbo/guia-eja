import { BookOpen, Users, Lightbulb, Download, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Guia de Computação para Professores da EJA
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Apoie seus alunos da Educação de Jovens e Adultos no aprendizado de computação com metodologias ativas,
            recursos práticos e orientações pedagógicas especializadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link href="/guia">
                Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">O que você encontrará aqui</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>
                <Link href="/guia" className="hover:text-blue-600 transition-colors">
                  Guia Completo de Ensino
                </Link>
              </CardTitle>
              <CardDescription>
                Metodologias ativas, sequência didática e organização de aulas adaptadas para o público da EJA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/guia">Explorar Guia</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>
                <Link href="/perfil-alunos" className="hover:text-green-600 transition-colors">
                  Perfil dos Alunos EJA
                </Link>
              </CardTitle>
              <CardDescription>
                Compreenda as características específicas e necessidades dos estudantes adultos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/perfil-alunos">Conhecer Perfil</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-yellow-600 mb-4" />
              <CardTitle>
                <Link href="/metodologias-ativas" className="hover:text-yellow-600 transition-colors">
                  Metodologias Ativas
                </Link>
              </CardTitle>
              <CardDescription>ABP, computação desplugada, sala invertida e outras abordagens práticas</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/metodologias-ativas">Ver Metodologias</Link>
              </Button>
            </CardContent>
            z
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Download className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>
                <Link href="/recursos" className="hover:text-purple-600 transition-colors">
                  Recursos & Modelos
                </Link>
              </CardTitle>
              <CardDescription>
                Templates de aula, atividades prontas, fluxogramas e links para ferramentas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/recursos">Acessar Recursos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle>
                <Link href="/comunidade" className="hover:text-red-600 transition-colors">
                  Comunidade Ativa
                </Link>
              </CardTitle>
              <CardDescription>
                Troque experiências, tire dúvidas e compartilhe práticas com outros educadores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/comunidade">Participar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>
                <Link href="/formacao-continuada" className="hover:text-indigo-600 transition-colors">
                  Formação Continuada
                </Link>
              </CardTitle>
              <CardDescription>
                Artigos, vídeos, webinars e atualizações constantes sobre educação em computação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/formacao-continuada">Continuar Aprendendo</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>


    </div>
  )
}
