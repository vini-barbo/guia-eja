import Link from "next/link"
import { BookOpen, Mail, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">EJA Computação</span>
            </div>
            <p className="text-gray-300 mb-4">
              Apoiando professores da Educação de Jovens e Adultos no ensino de computação com metodologias ativas e
              recursos práticos.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/guia" className="text-gray-300 hover:text-white">
                  Guia de Ensino
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-gray-300 hover:text-white">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recursos/templates" className="text-gray-300 hover:text-white">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/recursos/atividades" className="text-gray-300 hover:text-white">
                  Atividades
                </Link>
              </li>
              <li>
                <Link href="/recursos/ferramentas" className="text-gray-300 hover:text-white">
                  Ferramentas
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EJA Computação. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
