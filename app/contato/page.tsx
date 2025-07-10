"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageCircle, Users, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo seu contato. Responderemos em breve.",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Entre em contato conosco para tirar dúvidas, dar sugestões ou compartilhar suas experiências.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome *</Label>
                      <Input id="nome" name="nome" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instituicao">Instituição de Ensino</Label>
                    <Input id="instituicao" name="instituicao" placeholder="Nome da escola ou instituição" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto *</Label>
                    <Select name="assunto" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="duvida">Dúvida sobre conteúdo</SelectItem>
                        <SelectItem value="sugestao">Sugestão de melhoria</SelectItem>
                        <SelectItem value="recurso">Solicitação de recurso</SelectItem>
                        <SelectItem value="experiencia">Compartilhar experiência</SelectItem>
                        <SelectItem value="parceria">Proposta de parceria</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      rows={6}
                      placeholder="Descreva sua dúvida, sugestão ou experiência..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-blue-600" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">contato@ejacomputacao.com.br</p>
                <p className="text-sm text-gray-500 mt-2">Respondemos em até 48 horas</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                  Comunidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Participe das discussões em nossos grupos:</p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    WhatsApp - Professores EJA
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    Telegram - Recursos Educacionais
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-purple-600" />
                  Encontros Virtuais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Webinars mensais sobre educação em computação</p>
                <p className="text-sm text-gray-500">Toda primeira quinta-feira do mês às 19h</p>
                <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                  Ver Próximos Eventos
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Contribua com o Projeto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm mb-3">
                  Ajude a melhorar este guia compartilhando suas experiências e materiais.
                </p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Saiba Como Contribuir
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como posso usar os materiais?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Todos os recursos são gratuitos e podem ser utilizados, adaptados e compartilhados livremente para
                  fins educacionais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso sugerir novos conteúdos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Suas sugestões são muito bem-vindas. Use o formulário acima ou participe de nossas discussões na
                  comunidade.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Como compartilhar minha experiência?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Você pode enviar relatos de experiência através do formulário ou escrever um artigo para nosso blog.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Há suporte técnico disponível?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oferecemos suporte através da comunidade e webinars mensais. Para dúvidas específicas, use o
                  formulário de contato.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
