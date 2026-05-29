---
title: Mai-Release
path: 2026-05-release
pubDate: 2026-05-12
description: Materiallisten-Checkbox, Performance-Verbesserungen und mehr
image: "~/assets/images/2026-05-materiallist.png"
---

Im Mai-Release steckt einiges an Arbeit, die eCamp spürbar schneller und stabiler macht.
Neben Performance-Verbesserungen gibt es auch kleine, aber sehr praktische Verbesserungen in der Oberfläche.

## Materiallisten abhaken
In Materiallisten können Einträge neu direkt in der Tabelle abgehakt werden.
Das ist besonders praktisch, wenn ihr Material beim Packen, Einkaufen, Kontrollieren oder Zurückräumen Schritt für Schritt durchgeht. [#9697](https://github.com/ecamp/ecamp3/pull/9697){.issuelink}

## Schnellere Filter, Druckansichten und Programmseiten
Wir haben die Lade- und Filterlogik in Dashboard, Programm und Druckansichten überarbeitet.
Die Seiten können dadurch früher angezeigt werden, Filterzustände bleiben konsistenter, und Druckvorschauen werden erst dann geladen, wenn sie wirklich gebraucht werden.

Nebenbei wurden einige unschöne Ladeeffekte entfernt, Resultatzahlen stabilisiert und ein möglicher Absturz durch ungültige Labels behoben. [#9690](https://github.com/ecamp/ecamp3/pull/9690){.issuelink}

Auch die Grösse der App wurde weiter optimiert: Durch besseres Tree-Shaking wird weniger unnötiger Code ausgeliefert. [#9734](https://github.com/ecamp/ecamp3/pull/9734){.issuelink}

## Bessere Darstellung bei vielen Lagerabschnitten
Die Lagerliste ist jetzt übersichtlicher, wenn ein Lager viele Abschnitte hat.
Die Ansicht braucht weniger Platz und bleibt dadurch angenehmer zu scannen. [#9634](https://github.com/ecamp/ecamp3/pull/9634){.issuelink}

Auch die Toolbar im Programm wurde im Rahmen des laufenden UI-Umbaus angepasst. [#9733](https://github.com/ecamp/ecamp3/pull/9733){.issuelink}

## Mehr Caching
Weitere API-Antworten werden nun zwischengespeichert, unter anderem einzelne Aktivitäten sowie Tage eines Lagerabschnitts.
Dadurch muss eCamp weniger Daten neu laden und reagiert in vielen Situationen schneller.
Die Cache-Lebensdauer wurde zudem auf 12 Stunden erhöht. [#9678](https://github.com/ecamp/ecamp3/pull/9678){.issuelink} [#9679](https://github.com/ecamp/ecamp3/pull/9679){.issuelink} [#9680](https://github.com/ecamp/ecamp3/pull/9680){.issuelink}

## Bugfixes
- Beim Bearbeiten von Lager-Mitwirkenden kann die Rolle wieder geändert werden, auch wenn die eingeladene Person die Einladung noch nicht angenommen hat. [#9726](https://github.com/ecamp/ecamp3/pull/9726){.issuelink}
- Leere Felder werden bei unseren eigenen Validierungen wieder korrekt behandelt und nicht versehentlich als Pflichtfelder gewertet. [#9669](https://github.com/ecamp/ecamp3/pull/9669){.issuelink}
- Beim Speichern von Checklistenpunkten wurde ein Performance-Problem behoben, das bei vielen Einträgen unnötig viele Datenbankabfragen auslösen konnte. [#9632](https://github.com/ecamp/ecamp3/pull/9632){.issuelink}
- Ein Tippfehler in der Materiallisten-Route wurde behoben und mit zusätzlichen Tests abgesichert. [#9633](https://github.com/ecamp/ecamp3/pull/9633){.issuelink}

## Technisches
Unter der Haube wurden Abhängigkeiten aktualisiert, die Teststruktur verbessert und Teile der API-Plattform mit upstream synchronisiert.
Das hilft uns, eCamp aktuell zu halten und künftige Änderungen schneller abzusichern. [#9642](https://github.com/ecamp/ecamp3/pull/9642){.issuelink} [#9674](https://github.com/ecamp/ecamp3/pull/9674){.issuelink} [#9675](https://github.com/ecamp/ecamp3/pull/9675){.issuelink}

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
