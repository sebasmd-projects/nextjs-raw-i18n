const i18nNamespaces = ["home"];
import LanguageChanger from "@/app/components/languageChanger";
import TranslationsProvider from "@/app/providers/translation";
import initTranslations from "@/i18n";

export const metadata = {
  title: "",
  description: "",
};



export default async function HomePage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>{t("home:section_title:title")}</h1>
        <h2>{t("home:section_title:sub_title")}</h2>
        <h3><LanguageChanger /></h3>
      </main>
    </TranslationsProvider>
  );
}
