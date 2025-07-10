"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, BookOpen, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b !bg-[#1A7F88] !text-white backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl">EJA Computação</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 !bg-transparent"
                  >
                    Início
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="!bg-transparent">Guia de Ensino</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] p-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/perfil-alunos"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground" 
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Características dos Alunos
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Perfil e necessidades específicas dos estudantes da EJA
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/guia/metodologias"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Metodologias Ativas
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          ABP, computação desplugada e sala invertida
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/guia/conteudos"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Conteúdos e Sequência
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Organização curricular e progressão didática
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/guia/avaliacao"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">
                          Avaliação Formativa
                        </div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Estratégias de avaliação contínua e feedback
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/recursos"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 !bg-transparent"
                  >
                    Recursos & Modelos
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>



              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contato"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 !bg-transparent"
                  >
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-8 w-64" />
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Início
                  </Link>

                  <div className="space-y-2">
                    <div className="text-lg font-medium">Guia de Ensino</div>
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/perfil-alunos"
                        className="block text-sm text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        Características dos Alunos
                      </Link>
                      <Link
                        href="/guia/metodologias"
                        className="block text-sm text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        Metodologias Ativas
                      </Link>
                      <Link
                        href="/guia/conteudos"
                        className="block text-sm text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        Conteúdos e Sequência
                      </Link>
                      <Link
                        href="/guia/avaliacao"
                        className="block text-sm text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        Avaliação Formativa
                      </Link>
                    </div>
                  </div>
                  <Link href="/recursos" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Recursos & Modelos
                  </Link>

                  <Link href="/contato" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                    Contato
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
