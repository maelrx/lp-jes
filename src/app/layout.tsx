import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

// Fonte display moderna e arredondada para títulos
const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-display",
    display: "swap",
});

// Fonte corpo altamente legível
const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Diagnóstico Operacional para Clínicas de Estética | Jéssica Messias",
    description: "Receba um relatório completo que identifica gargalos em processos, equipe, conversão e margem — com roadmap de 90 dias. 100% gratuito.",
    keywords: ["clínica de estética", "gestão de clínicas", "consultoria", "mentoria", "processos", "conversão"],
    authors: [{ name: "Jéssica Messias" }],
    openGraph: {
        title: "Diagnóstico Gratuito para Clínicas de Estética",
        description: "Mapeamento de gargalos operacionais com plano de ação de 90 dias.",
        type: "website",
        locale: "pt_BR",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning className={`${outfit.variable} ${inter.variable}`}>
            <body className="font-body antialiased bg-[#0A0908] text-[#F5F0E8]">
                {children}
            </body>
        </html>
    );
}
