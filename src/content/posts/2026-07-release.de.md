---
title: Juli-Release
path: 2026-07-release
pubDate: 2026-07-02
description: A3-Druck, Tagesübersicht beim Drucken und UI-Verbesserungen
image: '~/assets/images/2026-07-july-release.png'
---

Das Juli-Release bringt einige spannende Verbesserungen für die Druckfunktionen sowie eine Reihe von Fehlerbehebungen und Performance-Optimierungen, damit die Planung eurer Lager noch reibungsloser abläuft.

## Letzte Chance, eure PDFs vom alten eCamp v2 herunterzuladen
Das alte eCamp v2 ist mittlerweile stark in die Jahre gekommen und wird bald abgeschaltet. Ab September 2026 können keine Daten mehr geändert werden. Im Frühling 2027 wird eCamp v2 vollständig ausser Betrieb genommen. Falls ihr auf dem alten eCamp v2 noch Daten habt, die ihr behalten möchtet, ladet die PDFs eurer alten Lager bitte bald herunter.

## Besserer Druck: A3-Unterstützung & Tagesübersicht
Wir haben die Druckfunktionen deutlich verbessert. eCamp unterstützt jetzt den **A3-Druck**, was euch mehr Platz und Flexibilität beim Generieren von PDFs für eure Lagerprogramme bietet.

Zusätzlich haben wir eine **Tagesübersicht für den Druck** hinzugefügt, sodass ihr einen kompakten Blick auf eure Tagespläne direkt auf Papier habt.
Ausserdem wurde ein Problem behoben, bei dem Aufzählungszeichen oder Nummern im generierten PDF verloren gingen, wenn ein Listeneintrag mit einem Zeilenumbruch begann. [#9939](https://github.com/ecamp/ecamp3/pull/9939){.issuelink} [#10000](https://github.com/ecamp/ecamp3/pull/10000){.issuelink} [#10045](https://github.com/ecamp/ecamp3/pull/10045){.issuelink}

## Usability & UI-Anpassungen
- Bei allen Passwort-Eingabefeldern wurde ein **Passwort anzeigen/verbergen-Button** hinzugefügt, was die Überprüfung der Zugangsdaten vereinfacht. [#10196](https://github.com/ecamp/ecamp3/pull/10196){.issuelink}
- Das **"Meine Aktivitäten"-Filterlabel** passt sich nun basierend auf den aktiven Filtern an und sorgt für eine klarere Übersicht. [#10035](https://github.com/ecamp/ecamp3/pull/10035){.issuelink}
- Das **Spitzname-Feld** ist wieder im Registrierungsformular verfügbar. [#10113](https://github.com/ecamp/ecamp3/pull/10113){.issuelink}
- Nutzer von veralteten Browsern erhalten nun einen Hinweis auf ein nötiges Update. [#9975](https://github.com/ecamp/ecamp3/pull/9975){.issuelink}

## Performance und Bugfixes
- Wir haben die **Performance der Checklisten-Einträge** massgeblich verbessert, was zu einer flüssigeren Bedienung führt. [#9849](https://github.com/ecamp/ecamp3/pull/9849){.issuelink}
- Der Ladezustand der Materialtabelle wurde repariert, sodass die Benutzeroberfläche konsistenter reagiert. [#9999](https://github.com/ecamp/ecamp3/pull/9999){.issuelink}
- Ein Caching-Problem wurde behoben, durch das nach einem Deployment manchmal veraltete Versionen der App geladen wurden. [#10088](https://github.com/ecamp/ecamp3/pull/10088){.issuelink}
- Probleme bei der Navigation wurden behoben: Lagerabschnitte und Programmblöcke laden nun wieder korrekt, wenn zwischen Ansichten gewechselt wird. [#10051](https://github.com/ecamp/ecamp3/pull/10051){.issuelink} [#10052](https://github.com/ecamp/ecamp3/pull/10052){.issuelink} [#10053](https://github.com/ecamp/ecamp3/pull/10053){.issuelink}
- Persönliche Einladungen werden jetzt nach dem Annehmen oder Ablehnen korrekt neu geladen. [#10036](https://github.com/ecamp/ecamp3/pull/10036){.issuelink}

Wir arbeiten weiterhin am [Kommentar-Feature](https://github.com/ecamp/ecamp3/issues/828), an weiteren Performance-Verbesserungen und an Bugfixes, die uns via [Kontaktformular](https://www.ecamp3.ch/de/kontakt/) gemeldet werden.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
