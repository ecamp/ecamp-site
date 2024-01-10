---
title: Januar-Release
path: 2024-01-release
pubDate: 2024-01-09
description: Verbesserte Benutzeroberfläche, Layouts und Kopieren von Blöcken
image: '~/assets/images/wintercamp.png'
---

Schon viele Lager wurden im letzten Jahr durchgeführt und es sind bereits über 200 Lager für 2024 in eCamp v3 erstellt. Jede Woche registrieren sich über 400 Personen auf eCamp v3. Wir freuen uns ausserdem, dass wir so viel wertvolles Feedback erhalten.

In der Zwischenzeit wurden mehrere häufig angefragte Funktionen implementiert. Hier sind einige Highlights:

- Ihr könnt jetzt **Aktivitäten kopieren und einfügen**, sogar über Lager hinweg. Ihr könnt sogar den kopierten Link an jemand anderen senden, der auch Zugang zu der Aktivität hat, und er kann ihn in seine neuen Lager einfügen. [#3993](https://github.com/ecamp/ecamp3/pull/3993)
  ![Block kopieren](~/assets/images/paste-activity.webp)
- Im **Formatierungsmenü** der Textfelder ist es nun möglich, Listen in den Text einzufügen #4191
  ![GUI um die Formatierung zu verändern](~/assets/images/popup-list-ui.png)
- In der Detailansicht einer Aktivität ist es jetzt möglich, in der Seitenleiste zu einem anderen **Tag zu wechseln**. [#4202](https://github.com/ecamp/ecamp3/pull/4202) ![Dropdown zur Tagesauswahl in der Seitenleiste](~/assets/images/day-overview-day-switching.webp) 
- Es gibt ein neues **Standardlayout** für Aktivitäten, optimiert sowohl für den Druck als auch für die Bearbeitung am Computer. Um eine Vorschau auf großen Bildschirmen so zu sehen, wie sie später gedruckt wird, könnt ihr die Breite des Aktivitäten-Editors auf Papierbreite beschränken. Neu erstellte Lager verwenden ab sofort das neue Standardlayout. [#4071](https://github.com/ecamp/ecamp3/pull/4071) & [#4026](https://github.com/ecamp/ecamp3/pull/4026)
  ![Responsives layout](~/assets/images/standard_layout.png)
- **URLs im Aktivitäteninhalt** werden jetzt im Browser als Links dargestellt [#4397](https://github.com/ecamp/ecamp3/pull/4397)
- Auf der Startseite des Lagers werden jetzt die **Tagesverantwortlichen an jedem Tag** angezeigt. [#4029](https://github.com/ecamp/ecamp3/pull/4029)
- **Verbesserte Benutzererfahrung** und Erklärungen für das Erstellen von Lagern und das Bearbeiten von Kategorien [#4162](https://github.com/ecamp/ecamp3/pull/4162), [#4362](https://github.com/ecamp/ecamp3/pull/4362) & [#4213](https://github.com/ecamp/ecamp3/pull/4213)
- **Verbessertes Design** beim Bearbeiten des Layouts von Kategorien und Aktivitäten, besonders für den LA-Themenbereich [#4303](https://github.com/ecamp/ecamp3/pull/4303) & [#4264](https://github.com/ecamp/ecamp3/pull/4264)
- Ein Fehler in den gedruckten PDFs beim Export des Picasso aus einer **fremden Zeitzone** wurde behoben [#4329](https://github.com/ecamp/ecamp3/pull/4329)
- **Drucklayout #1** hat im PDF keinen gedrehten Picasso mehr [#4347](https://github.com/ecamp/ecamp3/pull/4347)

Wir haben auch wieder Beiträge aus der Community erhalten:

- **Rumantsch wurde als Sprache hinzugefügt**, mit einigen ersten Übersetzungen von @eruedin [#4027](https://github.com/ecamp/ecamp3/pull/4027)
- Die **Dokumentation**, wie man beitragen kann, wurde von @DeNic0la aktualisiert [#4204](https://github.com/ecamp/ecamp3/pull/4204)
- **Periodenmaterialfilter** aus Aktivitätenmaterial entfernt @MarcoAllenspach [#4366](https://github.com/ecamp/ecamp3/pull/4366)

Wir können es kaum erwarten, noch mehr Benutzer und Lager in unserer Community willkommen zu heißen!

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App gehen</a>
