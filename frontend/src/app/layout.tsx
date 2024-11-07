'use client'
import { Inter } from "next/font/google";
import "../style/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()


  return (
    <html lang="pt-br">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <body className={inter.className}>{children}</body>
        </QueryClientProvider>
      </AuthProvider>
    </html>
  );
}
