import { Download, ExternalLink, Play, FileText, ImageIcon, Code, Puzzle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recursos & Modelos</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Templates, atividades, ferramentas e materiais prontos para usar em suas aulas de computação na EJA.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="atividades">Atividades</TabsTrigger>
            <TabsTrigger value="ferramentas">Ferramentas</TabsTrigger>
            <TabsTrigger value="multimidia">Multimídia</TabsTrigger>
          </TabsList>

          {/* Templates */}
          <TabsContent value="templates" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Templates de Aula</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle>Plano de Aula - ABP</CardTitle>
                    <CardDescription>Template estruturado para aulas baseadas em projetos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">PDF</Badge>
                      <span className="text-sm text-gray-500">2 páginas</span>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-green-600 mb-2" />
                    <CardTitle>Cronograma Semestral</CardTitle>
                    <CardDescription>Planejamento completo para um semestre de computação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">Excel</Badge>
                      <span className="text-sm text-gray-500">Editável</span>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-purple-600 mb-2" />
                    <CardTitle>Ficha de Avaliação</CardTitle>
                    <CardDescription>Modelo para avaliação formativa e acompanhamento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">Word</Badge>
                      <span className="text-sm text-gray-500">Personalizável</span>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <ImageIcon className="h-12 w-12 text-orange-600 mb-2" />
                    <CardTitle>Slides Introdutórios</CardTitle>
                    <CardDescription>Apresentação sobre conceitos básicos de computação</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">PowerPoint</Badge>
                      <span className="text-sm text-gray-500">30 slides</span>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-red-600 mb-2" />
                    <CardTitle>Portfólio do Aluno</CardTitle>
                    <CardDescription>Template para organização dos trabalhos dos estudantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">PDF</Badge>
                      <span className="text-sm text-gray-500">Interativo</span>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-teal-600 mb-2" />
                    <CardTitle>Questionário Diagnóstico</CardTitle>
                    <CardDescription>Avalie o conhecimento prévio dos alunos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">Google Forms</Badge>
                      <span className="text-sm text-gray-500">15 questões</span>
                    </div>
                    <Button className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Atividades */}
          <TabsContent value="atividades" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Atividades Práticas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Puzzle className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle>Kit Computação Desplugada</CardTitle>
                    <CardDescription>10 atividades para ensinar conceitos sem computador</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1 mb-4">
                      <li>• Algoritmos com receitas</li>
                      <li>• Sistema binário com cartões</li>
                      <li>• Redes com barbante</li>
                      <li>• Criptografia com códigos</li>
                    </ul>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Kit Completo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Code className="h-12 w-12 text-green-600 mb-2" />
                    <CardTitle>Projetos Scratch</CardTitle>
                    <CardDescription>Projetos progressivos para iniciantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1 mb-4">
                      <li>• Animação simples</li>
                      <li>• Jogo de perguntas</li>
                      <li>• Calculadora básica</li>
                      <li>• História interativa</li>
                    </ul>
                    <Button className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver no Scratch
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-purple-600 mb-2" />
                    <CardTitle>Exercícios de Lógica</CardTitle>
                    <CardDescription>Problemas para desenvolver pensamento computacional</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1 mb-4">
                      <li>• Sequências lógicas</li>
                      <li>• Resolução de problemas</li>
                      <li>• Padrões e algoritmos</li>
                      <li>• Decomposição de tarefas</li>
                    </ul>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <ImageIcon className="h-12 w-12 text-orange-600 mb-2" />
                    <CardTitle>Projeto Planilha Familiar</CardTitle>
                    <CardDescription>Atividade prática com Excel/Google Sheets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1 mb-4">
                      <li>• Controle de gastos</li>
                      <li>• Gráficos automáticos</li>
                      <li>• Fórmulas básicas</li>
                      <li>• Formatação condicional</li>
                    </ul>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Template
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Ferramentas */}
          <TabsContent value="ferramentas" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ferramentas Recomendadas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Scratch</CardTitle>
                    <CardDescription>Linguagem visual para iniciantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Ideal para ensinar lógica de programação de forma visual e intuitiva.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="https://scratch.mit.edu" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Google Workspace</CardTitle>
                    <CardDescription>Suite de ferramentas colaborativas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Docs, Sheets, Slides e Forms para projetos colaborativos.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="https://workspace.google.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Padlet</CardTitle>
                    <CardDescription>Mural colaborativo online</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Perfeito para brainstorming e compartilhamento de ideias.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="https://padlet.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Canva</CardTitle>
                    <CardDescription>Design gráfico simplificado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Criação de apresentações, infográficos e materiais visuais.
                    </p>
                    <Button asChild className="w-full">
                      <Link href="https://canva.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Kahoot</CardTitle>
                    <CardDescription>Quizzes interativos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">Gamificação para revisão de conteúdos e avaliação.</p>
                    <Button asChild className="w-full">
                      <Link href="https://kahoot.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Flipgrid</CardTitle>
                    <CardDescription>Discussões em vídeo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">Plataforma para discussões assíncronas em vídeo.</p>
                    <Button asChild className="w-full">
                      <Link href="https://flipgrid.com" target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Acessar
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Multimídia */}
          <TabsContent value="multimidia" className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Recursos Multimídia</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Play className="h-12 w-12 text-red-600 mb-2" />
                    <CardTitle>Biblioteca de Vídeos</CardTitle>
                    <CardDescription>Tutoriais e explicações em vídeo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 mb-4">
                      <li>• Introdução à Computação (10 min)</li>
                      <li>• Como usar o Scratch (15 min)</li>
                      <li>• Criando planilhas (20 min)</li>
                      <li>• Segurança na Internet (12 min)</li>
                    </ul>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Ver Playlist
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <ImageIcon className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle>Infográficos</CardTitle>
                    <CardDescription>Materiais visuais para impressão</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 mb-4">
                      <li>• História da Computação</li>
                      <li>• Partes do Computador</li>
                      <li>• Tipos de Software</li>
                      <li>• Dicas de Segurança</li>
                    </ul>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Pack
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <FileText className="h-12 w-12 text-green-600 mb-2" />
                    <CardTitle>Podcasts Educacionais</CardTitle>
                    <CardDescription>Áudios para complementar as aulas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 mb-4">
                      <li>• Tecnologia no Cotidiano</li>
                      <li>• Carreiras em TI</li>
                      <li>• Inclusão Digital</li>
                      <li>• Futuro da Tecnologia</li>
                    </ul>
                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      Ouvir
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Puzzle className="h-12 w-12 text-purple-600 mb-2" />
                    <CardTitle>Jogos Educativos</CardTitle>
                    <CardDescription>Games para aprender brincando</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 mb-4">
                      <li>• Quiz de Conceitos</li>
                      <li>• Jogo da Memória - Hardware</li>
                      <li>• Caça-palavras Tecnológico</li>
                      <li>• Simulador de Algoritmos</li>
                    </ul>
                    <Button className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Jogar Online
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que procurava?</h2>
          <p className="text-gray-600 mb-6">
            Sugerir novos recursos ou compartilhe seus próprios materiais com a comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contato">Sugerir Recurso</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">Ver Mais no Blog</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
