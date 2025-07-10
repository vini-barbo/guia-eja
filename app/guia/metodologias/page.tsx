import { ArrowLeft, Play, Download, ExternalLink, Users, Lightbulb, Puzzle, FlipHorizontal } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MetodologiasPage() {
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
            <Link href="/guia" className="text-blue-600 hover:underline">
              Guia de Ensino
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Metodologias Ativas</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/guia">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Guia
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">Metodologias Ativas para EJA</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Descubra abordagens pedagógicas que colocam o aluno no centro do processo de aprendizagem, especialmente
            adaptadas para o contexto da Educação de Jovens e Adultos.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-blue-600" />
                Por que Metodologias Ativas na EJA?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Os estudantes da EJA trazem experiências de vida ricas e diversas. As metodologias ativas aproveitam
                esse conhecimento prévio, promovem autonomia e tornam o aprendizado mais significativo e conectado com a
                realidade dos alunos.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Methodologies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Principais Metodologias</h2>

          <div className="space-y-8">
            {/* ABP */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="mr-3 h-8 w-8 text-green-600" />
                    Aprendizagem Baseada em Projetos (ABP)
                  </CardTitle>
                  <Badge variant="secondary">Recomendado</Badge>
                </div>
                <CardDescription className="text-lg">
                  Os alunos trabalham em projetos reais que conectam computação com suas experiências de vida
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Como aplicar na EJA:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Projetos relacionados ao trabalho dos alunos (planilhas para controle financeiro)</li>
                    <li>Soluções para problemas da comunidade (site para associação de bairro)</li>
                    <li>Criação de apresentações sobre temas de interesse pessoal</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Exemplo Prático:</h4>
                  <p className="text-gray-700">
                    <strong>Projeto:</strong> "Orçamento Familiar Digital"
                    <br />
                    <strong>Duração:</strong> 4 semanas
                    <br />
                    <strong>Objetivo:</strong> Criar uma planilha para controle de gastos familiares
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Template de Projeto
                  </Button>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Vídeo Tutorial
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Computação Desplugada */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Puzzle className="mr-3 h-8 w-8 text-purple-600" />
                  Computação Desplugada
                </CardTitle>
                <CardDescription className="text-lg">
                  Ensine conceitos de computação sem usar computadores, através de atividades práticas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Vantagens para EJA:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Remove a barreira tecnológica inicial</li>
                    <li>Permite foco nos conceitos fundamentais</li>
                    <li>Promove colaboração e discussão em grupo</li>
                    <li>Utiliza materiais simples e acessíveis</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Atividade: Algoritmos</h4>
                    <p className="text-sm text-gray-700">
                      Receita de bolo como algoritmo - sequência de passos para resolver um problema
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Atividade: Binários</h4>
                    <p className="text-sm text-gray-700">
                      Cartões com pontos para representar números em sistema binário
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Kit de Atividades
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    CS Unplugged
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sala Invertida */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FlipHorizontal className="mr-3 h-8 w-8 text-orange-600" />
                  Sala de Aula Invertida
                </CardTitle>
                <CardDescription className="text-lg">
                  Conteúdo teórico em casa, prática e discussão em sala de aula
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Adaptação para EJA:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Vídeos curtos e objetivos (5-10 minutos)</li>
                    <li>Material disponível em múltiplos formatos</li>
                    <li>Flexibilidade de horários para acesso</li>
                    <li>Suporte técnico para acesso aos materiais</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Estrutura da Aula:</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Antes da aula:</strong> Vídeo sobre conceitos básicos de programação
                    </div>
                    <div>
                      <strong>Durante a aula:</strong> Prática no Scratch, discussão de dúvidas
                    </div>
                    <div>
                      <strong>Após a aula:</strong> Projeto individual aplicando os conceitos
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Biblioteca de Vídeos
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Roteiro de Aula
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Dicas de Implementação</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✅ Faça</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Conecte com experiências dos alunos</li>
                  <li>• Use exemplos do cotidiano</li>
                  <li>• Promova trabalho em grupos</li>
                  <li>• Ofereça múltiplas formas de participação</li>
                  <li>• Celebre pequenos progressos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">❌ Evite</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Assumir conhecimento prévio</li>
                  <li>• Usar jargões técnicos sem explicar</li>
                  <li>• Atividades muito longas</li>
                  <li>• Competição entre alunos</li>
                  <li>• Ignorar dificuldades tecnológicas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Materiais para Download</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Download className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Planos de Aula</h3>
                <p className="text-sm text-gray-600 mb-4">Templates prontos para cada metodologia</p>
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Download className="mx-auto h-12 w-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Atividades Práticas</h3>
                <p className="text-sm text-gray-600 mb-4">Exercícios e projetos prontos</p>
                <Button variant="outline" size="sm">
                  Download ZIP
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Download className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Slides de Apresentação</h3>
                <p className="text-sm text-gray-600 mb-4">Apresentações editáveis</p>
                <Button variant="outline" size="sm">
                  Download PPTX
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t pt-8">
          <div className="flex justify-between">
            <Button asChild variant="outline">
              <Link href="/perfil-alunos">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Características dos Alunos
              </Link>
            </Button>
            <Button asChild>
              <Link href="/guia/conteudos">
                Conteúdos e Sequência
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
