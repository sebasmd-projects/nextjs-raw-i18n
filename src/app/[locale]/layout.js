import "@/app/css/globals.css";
import { ReactQueryProvider } from "@/app/providers/reactQuery";
import i18nConfig from "@/i18nConfig";
// import { SpeedInsights } from '@vercel/speed-insights/next';
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          limit={3}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
