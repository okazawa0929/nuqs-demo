import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import { Providers } from "./providers";
import { Grid } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nuqs demo",
  description: "nuqs demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={overpass.className}>
        <Providers>
          <Grid
            minH={"100vh"}
            gridTemplateRows={"auto 1fr auto"}
            rowGap={"4rem"}
            px={16}
          >
            <Header />
            <Suspense>{children}</Suspense>
            <Footer />
          </Grid>
        </Providers>
      </body>
    </html>
  );
}
