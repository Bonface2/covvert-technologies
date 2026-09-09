import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import TopProgressBar from "@/components/TopProgressBar";

export const metadata: Metadata = {
  title: {
    template: "%s | Covvert Technologies",
    default: "Covvert Technologies | Data. Insights. Impact.",
  },
  description:
    "Covvert Technologies Ltd is a Kenyan technology and consultancy company specializing in IoT hardware, technology solutions, monitoring & evaluation, and completion reporting.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
