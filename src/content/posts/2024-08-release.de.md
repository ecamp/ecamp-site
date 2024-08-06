---
title: August-Release
path: 2024-08-release
pubDate: 2024-08-06
description: Avatare und erste Kurs-Features
image: '~/assets/images/sola24.jpg'
---

Die grosse Welle von Sommerlagern dieses Jahr ist geschafft! Am Rekordtag, dem 13. Juli, waren über 700 Lager gleichzeitig am laufen, welche auf eCamp v3 geplant wurden. Wir danken für euer Vertrauen und freuen uns immer wieder über euer Feedback. Hinter den Kulissen haben wir an einigen Features und Bugfixes gearbeitet.

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Farben und Initialen für Mitleitende anpassen](~/assets/images/camp-collaboration-color-de.png)

<div>

Neu kann man die Farbe und die Initialen der Leute, die im Lager mitarbeiten, anpassen. Es sind zwei Buchstaben oder ein Emoji möglich. Die Anpassung gilt jeweils nur in diesem Lager, aber man kann auch im Profil für sich selber Standard-Einstellungen machen. [#5281](https://github.com/ecamp/ecamp3/pull/5281){.issuelink} [#5411](https://github.com/ecamp/ecamp3/pull/5411){.issuelink}

</div>

</div>

<div class="simple-columns">

<div>

Als ersten einfachen Schritt in Richtung Kurs-Features gibt es nun spezifische Textfelder für Blockziele und Blockinhalte, welche man in Aktivitäten einbauen kann. [#4990](https://github.com/ecamp/ecamp3/pull/4990){.issuelink}

[Geplant](https://github.com/ecamp/ecamp3/issues/4936) ist, dass man in Zukunft die Inhalte dieser Textfelder, zusammen mit noch weiteren Informationen, als Blockübersicht exportieren kann.

</div>

![Blockziele und Blockinhalte](~/assets/images/learning-objectives-learning-topics-de.png)

</div>

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Offline-Meldung](~/assets/images/offline-message-de.png)

<div>

Wenn man offline ist, dann wird dies neu unten auf der Seite angezeigt. [#5026](https://github.com/ecamp/ecamp3/pull/5026){.issuelink}

</div>

</div>

## Bugfixes und kleinere Verbesserungen

- Der am meisten aufgetretene Bug beim Hinzufügen von Material mit Anzahl wurde behoben. [#5017](https://github.com/ecamp/ecamp3/pull/5017){.issuelink}
- Wenn man einen langen SBB-Link ins Programm einfügt, dann geht die Nutzendenoberfläche jetzt nicht mehr kaputt. [#5446](https://github.com/ecamp/ecamp3/issues/5446){.issuelink}
- Beim Login via MiData, Cevi.DB, JublaDB oder Google hat man neu 15 statt nur 5 Minuten Zeit um sich einzuloggen (falls man z.B. dort das Passwort zurücksetzen muss). [#5382](https://github.com/ecamp/ecamp3/pull/5382){.issuelink}
- Falls das Aktivierungs-E-Mail nie angekommen ist, kann man sich jetzt ein neues Mail auslösen. [#5287](https://github.com/ecamp/ecamp3/pull/5287){.issuelink}
- Beim Hinzufügen von mehreren Durchführungszeitpunkten auf einer Aktivität werden nun wenn möglich etwas sinnvollere Zeitpunkte vorgeschlagen (gleiche Tageszeit am jeweils nächsten Tag). [#5131](https://github.com/ecamp/ecamp3/pull/5131){.issuelink}
- Wenn man auf der Detailansicht einer Aktivität auf den Titel klickt und gleich wieder ENTER drückt, dann tritt jetzt kein Fehler mehr auf. [#4610](https://github.com/ecamp/ecamp3/pull/4610){.issuelink}
- Auf der Lager-Startseite kann man neu auf den Namen eines Lagerabschnitts klicken, um zum Grobprogramm zu kommen. [#5064](https://github.com/ecamp/ecamp3/issues/5064){.issuelink}
- Die Lagerabschnitte, Blockverantwortungen und Materiallisten werden jetzt an mehr Orten sinnvoll sortiert. [#5535](https://github.com/ecamp/ecamp3/pull/5535){.issuelink} [#5539](https://github.com/ecamp/ecamp3/pull/5539){.issuelink}
- Fehler, die beim Druck-Layout #1 entstehen, werden jetzt wieder zuverlässig ans eCamp Core Team gemeldet. [#5278](https://github.com/ecamp/ecamp3/pull/5278){.issuelink}
- Auf ausreichend grossen Bildschirmen werden die Eingabefelder für PLZ und Ort auf einer Zeile angezeigt. [#5458](https://github.com/ecamp/ecamp3/pull/5458){.issuelink}
- Das Grobprogramm verwendet nach der Entfernung der Fusszeile auf Desktop wieder die volle verfügbare Höhe. [#5112](https://github.com/ecamp/ecamp3/pull/5112){.issuelink}
- Es wird nun in beiden Druck-Layouts dasselbe J+S-Logo verwendet. [#5288](https://github.com/ecamp/ecamp3/pull/5288){.issuelink}
- Der Cursor beim Zeigen auf Links im Programm wurde verbessert. [#5285](https://github.com/ecamp/ecamp3/pull/5285){.issuelink}

## Verbesserungen aus der Community
- In einigen LA-Themenbereichen wurden fehlerhafte Zeilenumbrüche entfernt. Merci [@bb1950328](https://github.com/bb1950328)! [#5167](https://github.com/ecamp/ecamp3/pull/5167){.issuelink}
- Eine Verbesserung für die Stabilität gegenüber internen API-Änderungen in eCamp v3 wurde umgesetzt. Merci auch dafür [@bb1950328](https://github.com/bb1950328)! [#5168](https://github.com/ecamp/ecamp3/pull/5168){.issuelink}
- Der Hinweis, dass mindestens jemand mit Administrationsrechten im Lager bleiben muss, wird jetzt nur noch angezeigt wenn er relevant ist. Merci [@MarcoAllenspach](https://github.com/MarcoAllenspach)! [#4405](https://github.com/ecamp/ecamp3/pull/4405){.issuelink}

Aktuell arbeiten wir an den Kurs-Features und an Performance- und Stabilitäts-Verbesserungen - und natürlich laufend an Bugfixes die via [Kontaktformular](https://www.ecamp3.ch/de/kontakt/) an uns herangetragen werden.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
