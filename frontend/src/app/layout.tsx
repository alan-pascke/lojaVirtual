import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  return (
    <html lang="pt-br">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
