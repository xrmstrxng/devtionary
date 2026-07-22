import type { GlossaryTerm } from "./model";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { TermReferenceText } from "./term-reference-text";

export function TermEditorialContent({
  content,
  currentSlug,
  dictionary,
  locale,
  terms,
}: {
  content: GlossaryTerm["localizedContent"][Locale];
  currentSlug: string;
  dictionary: Dictionary;
  locale: Locale;
  terms: GlossaryTerm[];
}) {
  const linkedText = (text: string | undefined) => (
    <TermReferenceText
      currentSlug={currentSlug}
      locale={locale}
      terms={terms}
      text={text ?? ""}
    />
  );

  return (
    <div data-testid="term-editorial-content">
      <section>
        <p className="eyebrow">01 / {dictionary.term.purposeLabel}</p>
        <h2>{dictionary.term.purpose}</h2>
        <p>{linkedText(content.purpose)}</p>
      </section>
      <section>
        <p className="eyebrow">02 / {dictionary.term.contextLabel}</p>
        <h2>{dictionary.term.whenToUse}</h2>
        <p>{linkedText(content.whenToUse)}</p>
      </section>
      {content.practicalExample && (
        <section>
          <p className="eyebrow">03 / {dictionary.term.exampleLabel}</p>
          <h2>{dictionary.term.practicalExample}</h2>
          <div className="practical-example">
            <div>
              <strong>{dictionary.term.exampleContext}</strong>
              <p>{linkedText(content.practicalExample.context)}</p>
            </div>
            <div>
              <strong>{dictionary.term.exampleApplication}</strong>
              <p>{linkedText(content.practicalExample.application)}</p>
            </div>
          </div>
        </section>
      )}
      <section>
        <p className="eyebrow">04 / {dictionary.term.workLabel}</p>
        <h2>{dictionary.term.professionalPhrase}</h2>
        <blockquote>{linkedText(content.professionalPhrase)}</blockquote>
      </section>
      {content.commonConfusions && (
        <section className="confusion-note">
          <p className="eyebrow">{dictionary.term.comparisonLabel}</p>
          <h2>{dictionary.term.commonConfusions}</h2>
          <p>{linkedText(content.commonConfusions)}</p>
        </section>
      )}
    </div>
  );
}
