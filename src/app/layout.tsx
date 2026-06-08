import "./globals.css";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ru" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-background flex flex-col justify-between">

      <Header />

      {/* MAIN CONTAINER */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-8 py-12">
        {children}
      </div>

      {/* FOOTER */}

      <Footer />
      </body>
      </html>
  );
}