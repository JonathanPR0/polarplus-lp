# Polar Plus - Landing Page

Landing page profissional para serviços de climatização, desenvolvida com React, TypeScript, Vite e Tailwind CSS. Foco em performance, SEO, acessibilidade e experiência do usuário.

## ✨ Visão Geral

- **Design moderno e responsivo**
- **Animações suaves com Framer Motion**
- **SEO avançado e dados estruturados**
- **Formulário integrado ao WhatsApp**
- **Componentes reutilizáveis e organizados**

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build ultra-rápido)
- [Tailwind CSS](https://tailwindcss.com/) (utilitário de estilos)
- [Framer Motion](https://www.framer.com/motion/) (animações)
- [Lucide React](https://lucide.dev/) (ícones)
- [React Router DOM](https://reactrouter.com/)
- [Radix UI](https://www.radix-ui.com/) (componentes acessíveis)

## 📦 Estrutura do Projeto

```
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── custom/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── ContactUs.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── ...
```

## 🚀 Funcionalidades

- **Hero**: Destaque dos serviços, CTA animado, badge de clientes satisfeitos
- **Sobre (About)**: Apresentação da empresa, missão e área de atuação
- **Serviços**: Cards animados, ícones destacados, separadores elegantes
- **FAQ**: Perguntas frequentes com animação de acordeão
- **Solicitar Orçamento**: Formulário integrado ao WhatsApp, campos obrigatórios, validação
- **Footer**: Informações de contato, navegação, redes sociais, copyright

## 🔍 SEO & Performance

- Meta tags completas (title, description, keywords, Open Graph, Twitter Cards)
- Structured Data (Schema.org: LocalBusiness, BreadcrumbList)
- Arquivos essenciais: sitemap.xml, robots.txt, site.webmanifest
- Imagens otimizadas e lazy loading
- Preconnect e cache headers
- Acessibilidade: ARIA, skip links, contraste, navegação por teclado

## ☁️ Hospedagem & Deploy

Esta aplicação foi hospedada no **Amazon S3** como site estático, garantindo alta disponibilidade, escalabilidade e performance. O deploy foi automatizado via **CI/CD**, permitindo que cada alteração aprovada no repositório seja publicada automaticamente no ambiente de produção.

### Como funciona o fluxo de deploy:

1. **Build do projeto:**
   - O comando `npm run build` gera os arquivos otimizados em `/dist`.
2. **CI/CD:**
   - O workflow de **CI** (GitHub Actions) realiza verificação de formatação, lint e typecheck a cada push ou pull request na branch principal.
   - O build e publicação dos arquivos estáticos no S3 são realizados automaticamente pelo **AWS CodeBuild**.
   - O bucket S3 está configurado para servir o site estático.
   - O site é distribuído globalmente pelo **Amazon CloudFront**, garantindo CDN, HTTPS
3. **Atualização automática:**
   - Cada push na branch principal dispara o pipeline e atualiza o site em produção.

## 📑 Licença

Este projeto é de uso exclusivo da Polar Plus. Para uso comercial, entre em contato.

---

> [Desenvolvido por Jonathan](https://www.linkedin.com/in/jonathanamarante/)
