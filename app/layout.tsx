"use client"
// app/layout.tsx
import Footer from "./components/footer";
import Nav from "./components/nav";
import { Providers } from "./providers";
import HeaderSelect from "./components/headerSelect";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderSelect/>
          {children}
    
          <Footer/>
        </Providers>
      </body>
     
    </html>
  );
}