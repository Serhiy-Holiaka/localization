import { createRoot } from "react-dom/client";
import "./style.css";
import { useTranslation, Trans } from "react-i18next";
import typescriptLogo from "/typescript.svg";
import { Header, Counter } from "@repo/ui";
import { Suspense } from "react";

import "./i18n";

const lngs = {
  en: { nativeName: "English" },
  uk: { nativeName: "Ukrainian" },
  pl: { nativeName: "Polish" },
};

const App = () => {
  const { t, i18n } = useTranslation();

  const setCountTranslation = (count: number) => {
    return t("count", { count });
  };

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img
          src={typescriptLogo}
          className="logo vanilla"
          alt="TypeScript logo"
        />
      </a>
      <Header title="Weblate" />
      <div className="blogs">
        <div>
          <h2>Weblate</h2>
          <Trans i18nKey={"w-article"}>
            <p>
              In Weblate translations are organized into projects and
              components. Each project can contain number of components and
              those contain translations into individual languages. The
              component corresponds to one translatable file (for example
              <a href="../formats/gettext.html#gettext">
                <span>GNU gettext PO (Portable Object)</span>
              </a>{" "}
              or{" "}
              <a href="../formats/android.html#aresource">
                <span>Android string resources</span>
              </a>
              ). The projects are there to help you organize component into
              logical sets (for example to group all translations used within
              one application).
            </p>
            <p>
              Additionally, components within projects can be structured using
              categories. Components can belong to a category, and categories
              can be nested.
            </p>
            <p>
              Internally, each project has translations to common strings
              propagated across other components within it by default. This
              lightens the burden of repetitive and multi version translation.
              The translation propagation can be disabled per
              <a href="../admin/projects.html#component">
                <span>Component configuration</span>
              </a>{" "}
              using{" "}
              <a href="../admin/projects.html#component-allow-translation-propagation">
                <span>Allow translation propagation</span>
              </a>{" "}
              in case the translations should diverge.
            </p>
          </Trans>
        </div>
      </div>
      <div className="articles">
        <div>
          <h2>ReactJS</h2>
          <p>{t("column-one")}</p>
        </div>
        <div>
          <h2>NextJS</h2>
          <p>{t("column-two")}</p>
        </div>
        <div>
          <h2>TypeScript</h2>
          <p>{t("column-three")}</p>
        </div>
      </div>
      <div className="card">
        <h2>{t("counter")}: </h2>
        <Counter setCountTranslation={setCountTranslation} />
      </div>
      <p className="read-the-docs">{t("learn")}</p>
      <div className="blogs">
        <div>
          <Trans i18nKey={"sass"}>
            <h1>What is SASSic?</h1>
            <p>
              SASS (Syntactically Awesome Stylesheets) is a preprocessor that
              extends CSS with features like variables, nesting, and mixins.
            </p>
            <p>
              It allows developers to write cleaner, more structured stylesheets
              and compile them into standard CSS.
            </p>
            <p>
              SASS supports two syntaxes: SCSS (modern and widely used) and the
              older indented syntax.
            </p>
            <p>
              Using SASS improves code maintainability, making it easier to
              manage large projects.
            </p>
            <p>
              It is compatible with all versions of CSS and can be used with
              various front-end frameworks.
            </p>
          </Trans>
        </div>
        <div>
          <Trans i18nKey={"less"}>
            <h1>What is LESS?</h1>
            <p>
              LESS (Leaner Style Sheets) is a CSS preprocessor that extends CSS
              with dynamic features like variables, functions, and mixins.
            </p>
            <p>
              It helps developers write reusable and maintainable stylesheets,
              reducing repetition in code.
            </p>
            <p>
              LESS compiles into standard CSS and works seamlessly with existing
              CSS files.
            </p>
            <p>
              It supports nested rules, making styling more structured and
              readable.
            </p>
            <p>
              LESS can be used on both client-side and server-side, making it
              flexible for different projects.
            </p>
            <p>
              Learn more on the{" "}
              <a
                href="https://en.wikipedia.org/wiki/LESS_(stylesheet_language)"
                target="_blank"
              >
                LESS Wikipedia page
              </a>
              .
            </p>
          </Trans>
        </div>
      </div>
      <div className="lng-holder">
        {(Object.keys(lngs) as Array<keyof typeof lngs>).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
};

createRoot(document.getElementById("app")!).render(
  <Suspense fallback="loading...">
    <App />
  </Suspense>,
);
