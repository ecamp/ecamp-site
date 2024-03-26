---
title: Frühlingsputz-Release
path: 2024-03-release
pubDate: 2024-03-26
description: Aktivierungs-E-Mail, Hilfelinks, gespeicherte Einstellungen und Bugfixes
image: '~/assets/images/osterwald.png'
---

Die Zahl der Nutzendenaccounts und kommenden Lager auf eCamp v3 wächst immer weiter. In den letzten zweieinhalb Monaten hat sich die Anzahl erfasste Lager auf eCamp v3 ungefähr vervierfacht.

In der Zwischenzeit haben wir diverse kleinere Features und Bugfixes implementiert. Folgende Verbesserungen sind jetzt auf eCamp v3 verfügbar:


<div class="simple-columns">

![Meldung zum Konto aktivieren](~/assets/images/activate-login.png)

Falls man kein Aktivierungs-E-Mail bekommen hat, kann man nun auch via [Passwort-Reset](https://app.ecamp3.ch/reset-password) oder durch einen Login via MiData, jubla.db, CeviDB oder Google seinen Account aktivieren. [#4670](https://github.com/ecamp/ecamp3/issues/4670){.issuelink}

</div>

- Es gibt jetzt direkt in der App Links zur FAQ-Hilfeseite und zu den neuesten Blogposts wo wir jeweils auflisten, was sich an eCamp v3 in letzter Zeit verändert hat. [#4618](https://github.com/ecamp/ecamp3/pull/4618){.issuelink}
- Die zuletzt verwendeten Druck-Einstellungen, Sperrzustand des Grobprogramms und Geschichte-Übersicht sowie die Einstellung für breite Bildschirme wird jetzt so gespeichert, sodass man sie auf einem Gerät nicht immer wieder neu einrichten muss. [#4559](https://github.com/ecamp/ecamp3/pull/4559){.issuelink}
- In einzeiligen Textfeldern wird beim Autosave ein Leerschlag am Ende nicht mehr weggekürzt, wenn man beim Eintippen kurz innehält um zu überlegen. [#3875](https://github.com/ecamp/ecamp3/issues/3875){.issuelink} [#4712](https://github.com/ecamp/ecamp3/issues/4712){.issuelink}
- Lager rutschen jetzt erst nach dem letzten Lagertag in die Sparte "Vergangene Lager", nicht schon am letzten Lagertag. [#4711](https://github.com/ecamp/ecamp3/issues/4711){.issuelink}
- Der Planungs-Fortschritt einer Aktivität kann jetzt auch wieder ganz entfernt werden. [#4535](https://github.com/ecamp/ecamp3/issues/4535){.issuelink}
- Der Titel der Inhaltsblöcke einer Aktivität kann jetzt auch im Layout-Modus bearbeitet werden. [#4560](https://github.com/ecamp/ecamp3/pull/4560){.issuelink}
- Performance-Verbesserungen und bessere Stabilität für viele gleichzeitige Nutzende.

Wir arbeiten weiterhin an vielen kleinen Verbesserungen, und freuen uns immer über euer Feedback. Parallel dazu klären wir derzeit, welche Features für Kurse am sinnvollsten sind.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
