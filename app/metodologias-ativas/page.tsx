import { Lightbulb, Users, Puzzle, FlipHorizontal, Target, Play, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MetodologiasAtivasPage() {
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
            <span className="text-gray-600">Metodologias Ativas</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Metodologias Ativas</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Descubra abordagens pedagógicas que colocam o aluno no centro do processo de aprendizagem, especialmente
            adaptadas para o contexto da Educação de Jovens e Adultos.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="mr-3 h-8 w-8 text-yellow-600" />
                Por que Metodologias Ativas na EJA?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Os estudantes da EJA trazem experiências de vida ricas e diversas. As metodologias ativas aproveitam
                esse conhecimento prévio, promovem autonomia e tornam o aprendizado mais significativo e conectado com a
                realidade dos alunos.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <Target className="mx-auto h-12 w-12 text-yellow-600 mb-2" />
                  <h4 className="font-semibold">Aprendizagem Significativa</h4>
                  <p className="text-sm text-gray-600">Conecta com experiências reais</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto h-12 w-12 text-yellow-600 mb-2" />
                  <h4 className="font-semibold">Protagonismo</h4>
                  <p className="text-sm text-gray-600">Aluno como centro do processo</p>
                </div>
                <div className="text-center">
                  <Lightbulb className="mx-auto h-12 w-12 text-yellow-600 mb-2" />
                  <h4 className="font-semibold">Motivação</h4>
                  <p className="text-sm text-gray-600">Engajamento e interesse</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Methodologies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Principais Metodologias</h2>

          <Tabs defaultValue="abp" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="abp">ABP</TabsTrigger>
              <TabsTrigger value="desplugada">Desplugada</TabsTrigger>
              <TabsTrigger value="invertida">Sala Invertida</TabsTrigger>
              <TabsTrigger value="colaborativa">Colaborativa</TabsTrigger>
            </TabsList>

            {/* ABP */}
            <TabsContent value="abp" className="space-y-6">
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
                    <h4 className="font-semibold mb-3">Como aplicar na EJA:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Projetos relacionados ao trabalho dos alunos (planilhas para controle financeiro)</li>
                      <li>Soluções para problemas da comunidade (site para associação de bairro)</li>
                      <li>Criação de apresentações sobre temas de interesse pessoal</li>
                      <li>Desenvolvimento de aplicativos simples para necessidades cotidianas</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-800">Exemplo Prático: "Orçamento Familiar Digital"</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-green-700 mb-2">
                          <strong>Duração:</strong> 4 semanas
                        </p>
                        <p className="text-sm text-green-700 mb-2">
                          <strong>Objetivo:</strong> Criar uma planilha para controle de gastos familiares
                        </p>
                        <p className="text-sm text-green-700">
                          <strong>Produto Final:</strong> Planilha personalizada com gráficos
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-800 mb-2">Etapas:</h5>
                        <ol className="text-sm text-green-700 space-y-1">
                          <li>1. Levantamento de gastos pessoais</li>
                          <li>2. Criação da estrutura da planilha</li>
                          <li>3. Inserção de fórmulas básicas</li>
                          <li>4. Criação de gráficos</li>
                          <li>5. Apresentação dos resultados</li>
                        </ol>
                      </div>
                    </div>
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
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Exemplos Prontos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Computação Desplugada */}
            <TabsContent value="desplugada" className="space-y-6">
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
                    <h4 className="font-semibold mb-3">Vantagens para EJA:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Remove a barreira tecnológica inicial</li>
                      <li>Permite foco nos conceitos fundamentais</li>
                      <li>Promove colaboração e discussão em grupo</li>
                      <li>Utiliza materiais simples e acessíveis</li>
                      <li>Reduz ansiedade com tecnologia</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800">Atividade: Algoritmos com Receitas</h4>
                      <p className="text-sm text-purple-700 mb-2">
                        Use receitas culinárias para ensinar sequência lógica e algoritmos
                      </p>
                      <ul className="text-xs text-purple-600 space-y-1">
                        <li>• Ingredientes = Variáveis</li>
                        <li>• Modo de preparo = Algoritmo</li>
                        <li>• Resultado = Output</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-purple-800">Atividade: Sistema Binário</h4>
                      <p className="text-sm text-purple-700 mb-2">
                        Cartões com pontos para representar números em binário
                      </p>
                      <ul className="text-xs text-purple-600 space-y-1">
                        <li>• Cartões com 1, 2, 4, 8, 16 pontos</li>
                        <li>• Virado = 1, Desvirado = 0</li>
                        <li>• Formar números diferentes</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-purple-800">Kit Completo de Atividades Desplugadas</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Conceitos Básicos</h5>
                        <ul className="text-xs space-y-1">
                          <li>• Algoritmos</li>
                          <li>• Sequências</li>
                          <li>• Padrões</li>
                          <li>• Decomposição</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Representação</h5>
                        <ul className="text-xs space-y-1">
                          <li>• Sistema binário</li>
                          <li>• Códigos</li>
                          <li>• Compressão</li>
                          <li>• Criptografia</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Redes</h5>
                        <ul className="text-xs space-y-1">
                          <li>• Protocolos</li>
                          <li>• Internet</li>
                          <li>• Roteamento</li>
                          <li>• Segurança</li>
                        </ul>
                      </div>
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
            </TabsContent>

            {/* Sala Invertida */}
            <TabsContent value="invertida" className="space-y-6">
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
                    <h4 className="font-semibold mb-3">Adaptação para EJA:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Vídeos curtos e objetivos (5-10 minutos)</li>
                      <li>Material disponível em múltiplos formatos (vídeo, áudio, texto)</li>
                      <li>Flexibilidade de horários para acesso</li>
                      <li>Suporte técnico para acesso aos materiais</li>
                      <li>Resumos e materiais de apoio offline</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-orange-800">Estrutura de uma Aula Invertida</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-orange-800 font-bold text-sm mr-3 mt-1">
                          1
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-800">Antes da Aula (Casa)</h5>
                          <p className="text-sm text-orange-700">
                            Vídeo de 8 minutos sobre "Conceitos básicos de programação"
                          </p>
                          <p className="text-xs text-orange-600">Material complementar: PDF com glossário de termos</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-orange-800 font-bold text-sm mr-3 mt-1">
                          2
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-800">Durante a Aula (Escola)</h5>
                          <p className="text-sm text-orange-700">
                            Prática no Scratch, discussão de dúvidas, trabalho em grupos
                          </p>
                          <p className="text-xs text-orange-600">Foco na aplicação prática dos conceitos</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-orange-800 font-bold text-sm mr-3 mt-1">
                          3
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-800">Após a Aula (Casa)</h5>
                          <p className="text-sm text-orange-700">
                            Projeto individual aplicando os conceitos aprendidos
                          </p>
                          <p className="text-xs text-orange-600">Suporte online através de fórum ou WhatsApp</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">✅ Benefícios</h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Ritmo individual de aprendizagem</li>
                        <li>• Mais tempo para prática em sala</li>
                        <li>• Discussões mais ricas</li>
                        <li>• Flexibilidade de horários</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">⚠️ Desafios</h5>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Acesso limitado à internet</li>
                        <li>• Necessidade de disciplina</li>
                        <li>• Suporte técnico</li>
                        <li>• Mudança de hábitos</li>
                      </ul>
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
            </TabsContent>

            {/* Aprendizagem Colaborativa */}
            <TabsContent value="colaborativa" className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="mr-3 h-8 w-8 text-blue-600" />
                    Aprendizagem Colaborativa
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Estudantes aprendem juntos, compartilhando conhecimentos e experiências
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Por que funciona na EJA:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Aproveita a diversidade de experiências dos alunos</li>
                      <li>Reduz ansiedade através do apoio mútuo</li>
                      <li>Promove inclusão e senso de comunidade</li>
                      <li>Desenvolve habilidades sociais e comunicação</li>
                      <li>Permite aprendizagem peer-to-peer</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Estratégia: Grupos Heterogêneos</h4>
                      <p className="text-sm text-blue-700 mb-2">
                        Misture alunos com diferentes níveis de conhecimento tecnológico
                      </p>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• 1 aluno com mais experiência</li>
                        <li>• 2-3 alunos iniciantes</li>
                        <li>• Rotação de papéis</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Estratégia: Tutoria Entre Pares</h4>
                      <p className="text-sm text-blue-700 mb-2">Alunos mais experientes ajudam os iniciantes</p>
                      <ul className="text-xs text-blue-600 space-y-1">
                        <li>• Fortalece conhecimento do tutor</li>
                        <li>• Linguagem mais acessível</li>
                        <li>• Reduz intimidação</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-blue-800">Exemplo: Projeto Colaborativo "Site da Turma"</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Divisão de Tarefas:</h5>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Grupo 1: Pesquisa de conteúdo</li>
                          <li>• Grupo 2: Design e layout</li>
                          <li>• Grupo 3: Textos e redação</li>
                          <li>• Grupo 4: Imagens e multimídia</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2">Ferramentas:</h5>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Google Sites para criação</li>
                          <li>• WhatsApp para comunicação</li>
                          <li>• Google Drive para arquivos</li>
                          <li>• Padlet para brainstorming</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Guia de Grupos
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ferramentas Colaborativas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Implementation Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Dicas de Implementação</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✅ Boas Práticas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Conecte com experiências dos alunos</li>
                  <li>• Use exemplos do cotidiano</li>
                  <li>• Promova trabalho em grupos</li>
                  <li>• Ofereça múltiplas formas de participação</li>
                  <li>• Celebre pequenos progressos</li>
                  <li>• Seja flexível com prazos</li>
                  <li>• Forneça feedback constante</li>
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
                  <li>• Metodologia única para todos</li>
                  <li>• Falta de suporte individual</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Materiais para Download</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Download className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Planos de Aula</h3>
                <p className="text-sm text-gray-600 mb-4">Templates prontos para cada metodologia</p>
                <Button variant="outline" size="sm">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Download className="mx-auto h-12 w-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Atividades Práticas</h3>
                <p className="text-sm text-gray-600 mb-4">Exercícios e projetos prontos</p>
                <Button variant="outline" size="sm">
                  Download ZIP
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
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
              <Link href="/perfil-alunos">← Perfil dos Alunos</Link>
            </Button>
            <Button asChild>
              <Link href="/comunidade">Comunidade Ativa →</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
