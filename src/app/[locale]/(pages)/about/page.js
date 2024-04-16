const i18nNamespaces = ["about"];
import TranslationsProvider from "@/app/providers/translation";
import initTranslations from "@/i18n";

export const metadata = {
  title: "",
  description: "",
};

export default async function AboutPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex min-h-screen flex-col items-center">
        <h1>{t("title")}</h1>
      </main>
    </TranslationsProvider>
  );
}
