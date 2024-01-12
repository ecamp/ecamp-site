---
title: Januar-Release
path: 2024-01-release
pubDate: 2024-01-09
description: Verbesserte Benutzeroberfläche, Layouts und Kopieren von Blöcken
image: '~/assets/images/wintercamp.png'
---

Schon viele Lager wurden im letzten Jahr durchgeführt und es sind bereits über 200 Lager für 2024 in eCamp v3 erstellt. Jede Woche registrieren sich über 400 Personen auf eCamp v3. Wir freuen uns ausserdem, dass wir so viel wertvolles Feedback erhalten.

In der Zwischenzeit wurden mehrere häufig angefragte Funktionen implementiert. Hier sind einige Highlights:

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Block kopieren](~/assets/images/paste-activity.webp)

<div>

## Kopieren von Blöcken
Du kannst jetzt Aktivitäten kopieren und einfügen, sogar über Lager hinweg. Kopiere einfach den Link zur Aktivität und füge ihn in ein anderes Lager ein. Du kannst den Link auch an andere Personen weiterleiten, diese müssen einfach auch Zugriff auf das Lager haben, damit es klappt.<br/>
[#3993](https://github.com/ecamp/ecamp3/pull/3993){.issuelink}

</div>
</div>

<div class="simple-columns">

![Responsives layout](/responsivelayout.webp)

<div>

## Neues Standardlayout
Das neue Layout für Aktivitäten ist **optimiert für den Druck wie auch für das Bearbeiten mit grösseren Bildschirmen**.<br/>
Um eine Vorschau auf grossen Bildschirmen so zu sehen, wie sie später gedruckt wird, kannst du die Breite des Aktivitäten-Editors auf Papierbreite beschränken. Neu erstellte Lager verwenden ab sofort das neue Standardlayout.<br/>
[#4071](https://github.com/ecamp/ecamp3/pull/4071){.issuelink} [#4026](https://github.com/ecamp/ecamp3/pull/4026){.issuelink}

</div>
</div>

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![GUI um die Formatierung zu verändern](~/assets/images/formattierung.png)

<div>

## Formatierung
In den Textfeldern ist es nun möglich, **Listen einzufügen**. [#4191](https://github.com/ecamp/ecamp3/pull/4191){.issuelink}

**Links im Aktivitätsinhalt** werden jetzt im Browser dargestellt<br/> und können mit <kbd>Ctrl</kbd>, <kbd>Cmd</kbd> oder Doppelklick geöffnet werden. [#4397](https://github.com/ecamp/ecamp3/pull/4397){.issuelink}

</div>
</div>

<div class="simple-columns">

![Dropdown zur Tagesauswahl in der Seitenleiste](~/assets/images/day-overview-day-switching.webp) 

<div>

## Weitere Verbesserungen

### User Experience:
**Bessere Erklärungen** für das Erstellen von Lagern und das Bearbeiten von Kategorien. [#4162](https://github.com/ecamp/ecamp3/pull/4162){.issuelink} [#4362](https://github.com/ecamp/ecamp3/pull/4362){.issuelink} [#4213](https://github.com/ecamp/ecamp3/pull/4213){.issuelink}<br>
In der Detailansicht einer Aktivität ist es jetzt möglich, in der Seitenleiste zu einem anderen **Tag zu wechseln**. [#4202](https://github.com/ecamp/ecamp3/pull/4202){.issuelink}

### Design:
**Verbessertes Layout** von Kategorien und Aktivitäten und übersichtlicherer LA-Themenbereich. [#4303](https://github.com/ecamp/ecamp3/pull/4303){.issuelink} [#4264](https://github.com/ecamp/ecamp3/pull/4264){.issuelink}<br>
**Tagesverantwortliche** werden auch auf der Startseite des Lagers angezeigt. [#4029](https://github.com/ecamp/ecamp3/pull/4029){.issuelink}

### Drucken:
Ein Fehler in den gedruckten PDFs beim Export des Picassos aus einer **fremden Zeitzone** wurde behoben. [#4329](https://github.com/ecamp/ecamp3/pull/4329){.issuelink}<br>
**Layout #1** hat im PDF jetzt die gewünschte Seitenausrichtung der Grobprogrammübersicht [#4347](https://github.com/ecamp/ecamp3/pull/4347){.issuelink} und ist korrekt übersetzt. [#4003](https://github.com/ecamp/ecamp3/pull/4003){.issuelink}

</div>
</div>

## Community Beiträge
Wir freuen uns sehr über die verschiedenen Beiträge aus der Community.<br>
Vielen Dank!

**Rumantsch wurde als Sprache hinzugefügt**; mit einigen ersten Übersetzungen von [@eruedin](https://github.com/eruedin) und Martin Cantieni. [#4027](https://github.com/ecamp/ecamp3/pull/4027){.issuelink}

**Verbesserte Dokumentation**; wie man beitragen kann, wurde von [@DeNic0la](https://github.com/DeNic0la) aktualisiert. [#4204](https://github.com/ecamp/ecamp3/pull/4204){.issuelink}

**Unnötiger Periodenmaterialfilter** wurde von [@MarcoAllenspach](https://github.com/MarcoAllenspach) aus dem Aktivitätenmaterial entfernt. [#4366](https://github.com/ecamp/ecamp3/pull/4366){.issuelink}

Wir können es kaum erwarten, noch mehr Nutzende und Lager in unserer Community willkommen zu heissen!

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App gehen</a>
