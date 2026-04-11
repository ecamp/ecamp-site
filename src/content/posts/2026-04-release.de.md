---
title: April-Release
path: 2026-04-release
pubDate: 2025-04-11
description: Technischer Umbau und kleinere neue Features
image: "~/assets/images/2026-april-release.jpg"
---

Bald schon beginnen die Frühlingskurse und die Lagersaison.

Seit dem letzten Herbst waren wir beschäftigt mit einem grösseren technischen Upgrade, welches nötig wurde damit wir eCamp v3 aktuell halten können.
Dabei mussten wir praktisch alle Ansichten in der App umbauen, und konnten nebenbei nur einige kleinere Funktionen ergänzen.
Nun sind wir endlich auf dem Stand dass alle essenziellen Features von eCamp v3 wieder funktionieren.
Es ist trotzdem damit zu rechnen, dass wir noch einzelne Bugs übersehen haben, und unsere [Sammlung](https://github.com/ecamp/ecamp3/issues/8271#issuecomment-3954684938){target=_blank} von kleineren visuellen Detailproblemen ist derzeit noch lang.
Wir wären daher sehr froh um eure Rückmeldung via [Kontaktformular](https://www.ecamp3.ch/de/kontakt/), wenn ihr etwas bemerkt.

## Verbesserungen an den PDFs
Beim PDF-Druck kann neu unten in den Einstellungen die Schriftgrösse und Abstände für Druck auf A6 angepasst werden [#4650](https://github.com/ecamp/ecamp3/issues/4650){.issuelink}

Auf dem Grobprogramm werden jetzt Aktivitäts-Kategorien aus der Legende ausgeblendet, welche im ganzen Lagerabschnitt nicht verwendet werden. Merci [@NelsStorch](https://github.com/NelsStorch){target=_blank}! [#8277](https://github.com/ecamp/ecamp3/pull/8277){.issuelink}

In Druck-Layout #2 können jetzt modernere Emojis gedruckt werden [#8930](https://github.com/ecamp/ecamp3/pull/8930){.issuelink}

Bugfix: Wenn man ein öffentliches Lager anschaut, bei welchem man ansonsten nicht beteiligt ist, kann man das Grobprogramm auch mit Druck-Layout #2 wieder drucken [#8267](https://github.com/ecamp/ecamp3/issues/8267){.issuelink}

## Verbesserungen an den versendeten E-Mails
Die Übersetzungen in der ganzen App wurden gemäss [Inputs aus der Community](https://translate.ecamp3.ch){target=_blank} aktualisiert und diverse der versendeten E-Mails sind nun auch auf französisch und italienisch übersetzt. [#8269](https://github.com/ecamp/ecamp3/pull/8269){.issuelink} [#8543](https://github.com/ecamp/ecamp3/pull/8543){.issuelink} [#8753](https://github.com/ecamp/ecamp3/pull/8753){.issuelink} [#8883](https://github.com/ecamp/ecamp3/pull/8883){.issuelink} [#9117](https://github.com/ecamp/ecamp3/issues/9117){.issuelink}

In Lagereinladungs-E-Mails wird neu als Reply-To Adresse die Mailadresse der gesetzt, welche die Einladung versendet. So können eingeladene Personen sich direkt an die Lagerleitung wenden, wenn sie Unterstützung beim Beitreten brauchen. [#8493](https://github.com/ecamp/ecamp3/issues/8493){.issuelink}

## Weitere Fixes und Verbesserungen
- Auf der Lagerliste wird nun die Liste "Alte Lager" automatisch aufgeklappt, wenn keine zukünftigen Lager gefunden werden. Merci auch dafür [@NelsStorch](https://github.com/NelsStorch){target=_blank}! [#8276](https://github.com/ecamp/ecamp3/issues/8276){.issuelink}
- Auf der Registrierungs-Seite wird nun in mehr Fällen die passende Sprache vorausgewählt [#9387](https://github.com/ecamp/ecamp3/issues/9387){.issuelink}
- Beim Kopieren von Kursblöcken mit Checklisten-Punkten von einem alten Kurs in einen neuen werden nun soweit möglich die passenden Checklistenpunkte aus dem neuen Kurs wieder ausgewählt [#8925](https://github.com/ecamp/ecamp3/issues/8925){.issuelink}
- Bugfix: Wenn eine Checkliste mit einer Vorlage angelegt wird, wird die Reihenfolge der Checklistenpunkte jetzt korrekt übernommen [#9007](https://github.com/ecamp/ecamp3/pull/9007){.issuelink}

Nun können wir uns endlich wieder dem [Kommentar-Feature](https://github.com/ecamp/ecamp3/issues/828) zuwenden, und werden die Restprobleme vom erfolgten Upgrade laufend noch abarbeiten, wenn sie via [Kontaktformular](https://www.ecamp3.ch/de/kontakt/) an uns herangetragen werden.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
