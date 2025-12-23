# DNA do Projeto: Landing Page "Método Cúpula"

Este documento serve como a fonte única da verdade (Single Source of Truth) para o contexto, identidade visual, stack tecnológico e objetivos de negócio do projeto.

## 1. Visão Geral & Objetivo
**Projeto:** Landing Page de Alta Conversão para Mentoria "Método Cúpula".
**Responsável:** Jéssica Messias.
**Objetivo Principal:** Vender a mentoria "Método Cúpula" (Ticket R$ 9.000) para donas de clínicas de estética que desejam sair do operacional e escalar seus negócios.
**Promessa:** Transformar a clínica em um negócio autogerenciável, lucrativo e organizado em 90 dias.

## 2. Identidade Visual & Design System
O projeto segue uma estética "High-End", minimalista e sofisticada, fugindo do padrão "marketing digital agressivo" e buscando uma vibe "Old Money" / Premium.

### Paleta de Cores
- **Principal Dark:** `#2B2622` (Marrom Café Profundo) - Usado em fundos de contraste e textos principais.
- **Principal Light:** `#FCF9F3` (Off-White/Creme) - Fundo principal, transmite leveza e sofisticação.
- **Accent Gold:** `#D4AF37` (Ouro Clássico) - Usado em detalhes, ícones, bordas e CTAs secundários.
- **Secondary Beige:** `#E5C9A0` (Beige Suave) - Usado para textos secundários em fundos escuros e bordas sutis.
- **Success/Nature:** `#6B7A5E` (Verde Oliva/Musgo) - Usado para textos de apoio e elementos de garantia.

### Tipografia
- **Headings (Títulos):** Fonte Serifada (ex: *Playfair Display* ou similar no sistema) - Transmite elegância e autoridade.
- **Body (Corpo):** Fonte Sans-Serif (ex: *Inter* ou *Lato*) - Garante legibilidade e modernidade.

### Elementos Visuais Chave
- **Textura:** Uso de `.bg-noise` (ruído sutil) em toda a página para evitar o aspecto "chapado" e digital demais.
- **Imagens:** Estilo "Cutout" (recortadas, sem fundo) para a especialista (`jessica-real.png`), criando profundidade sobre os fundos.
- **Glassmorphism:** Paineis com leve transparência e blur (`backdrop-blur`) no Header e Cards.
- **Animações:** Uso intensivo de `Reveal` (Framer Motion) para entrada suave de elementos. Nada "pula" na tela agressivamente; tudo flutui.
- **Logo:** "Novo Nível" (Ícone NV + Texto) - Representa a nova fase da marca.

## 3. Stack Tecnológico
- **Framework:** Next.js 15 (App Router).
- **Linguagem:** TypeScript.
- **Estilização:** Tailwind CSS v4.
- **Animações:** Framer Motion (`framer-motion`).
- **Ícones:** Lucide React (`lucide-react`).
- **Deploy:** Vercel (preparado).

## 4. Estrutura da Landing Page (Seção a Seção)
A página foi construída no componente único `src/components/HighEndLanding.tsx` para facilitar a manutenção da narrativa linear.

1.  **Header:** Sticky, com logo "Novo Nível", navegação e CTA "Aplicar Agora".
2.  **Hero Section:** Layout 2 colunas. Esquerda: Headline ("Trabalha 12h/dia..."). Direita: Imagem Jéssica Cutout. Sem background poluído.
3.  **Trust Indicators:** Faixa logo abaixo do Hero com 4 ícones (Compra Segura, Satisfação, etc.) para gerar autoridade imediata.
4.  **Pain Points (Golden Hour):** Fundo escuro. Imagem da Jéssica com frase de efeito ("O luxo não é sobre excesso..."). Lista de dores do público.
5.  **About Me:** "Por que confiar em mim?". História de autoridade da Jéssica (7 anos de experiência, não é guru de palco).
6.  **Target Audience:** Cards comparativos "Para quem é" vs "Para quem NÃO é".
7.  **Comparison (A Diferença é Brutal):** Card "Dona de Clínica Padrão" (Cinza/Triste) vs "Mentora Cúpula" (Preto/Dourado/Premium).
8.  **Philosophy:** "Por Trás do Padrão". Visão e manifesto da marca.
9.  **Methodology (3 Pilares):** Gestão Invisível, Vendas Elegantes, Experiência 5 Estrelas.
10. **Modules (O Que Você Vai Dominar):** Grid com 6 módulos práticos (Mentalidade, Financeiro, Equipe, Processos, Vendas, Experiência).
11. **Testimonials:** Prova social de alunas (Dra. Ana Clara, Dra. Marina, etc.).
12. **Bonuses:** Seção dedicada aos 3 bônus exclusivos (Análise de Concorrência, Contratos, Pack de Conteúdo).
13. **Offer & Pricing:** Ancoragem de preço (De R$ 18k por R$ 9k). Lista resumida de entregáveis.
14. **Guarantee:** Garantia incondicional de 15 dias.
15. **FAQ:** Accordion com dúvidas frequentes.
16. **Footer:** Logo "Novo Nível", links sociais e copyright.

## 5. Arquitetura de Código Relevante
- **`src/app/layout.tsx`**: Contém `suppressHydrationWarning` na tag `html` para evitar erros com extensões de browser.
- **`src/app/globals.css`**: Define a classe utilitária `.bg-noise` e as diretivas do Tailwind.
- **`src/components/ui/Reveal.tsx`**: Componente wrapper para animações de entrada.
- **`src/components/ui/TiltCard.tsx`**: Componente para cards com efeito de inclinação 3D suave.

## 6. Business Intelligence (Contexto do Negócio)
### Persona (O Cliente Ideal)
- **Perfil:** Dona de clínica estética (Dermato, Biomédica, Dentista).
- **Estágio:** Já fatura (60k-150k/mês), tem equipe pequena, mas é escrava da operação.
- **Dores:** Não tem tempo, equipe desmotivada, faturamento oscila, não tira férias.
- **Desejo:** Liberdade, lucro previsível, clínica que roda sozinha.

### A Oferta (Método Cúpula)
- **Formato:** Mentoria Híbrida (Aulas gravadas + 9 Encontros ao Vivo).
- **Diferencial:** Não é curso genérico de marketing. É gestão e processos validados em campo de batalha.
- **Preço:** R$ 9.000,00 (ou 12x R$ 900).

## 7. Status Atual do Projeto
- **Concluído:** Estrutura completa da LP, Design System aplicado, Conteúdo revisado, Responsividade ajustada, Branding "Novo Nível" implementado.
- **Próximos Passos:** Integração com Checkout (Hotmart/Eduzz), Configuração de Pixel/Analytics, Teste de carga.
