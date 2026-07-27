import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "ChocoLoop",
  description: "Premium Chocolate Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable}`}
      >
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#24170F",
              color: "#F8F3E9",
              border: "1px solid #D4AF37",
            },
          }}
        />
      </body>
    </html>
  );
}