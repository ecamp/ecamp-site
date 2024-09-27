---
title: Herbst-Release
path: 2024-09-release
pubDate: 2024-09-27
description: Lagerübersicht optimiert und Largertitel vereinfacht
image: '~/assets/images/fall-2024.png'
---

Die Herbstsaison steht vor der Tür. Wir haben einige Verbesserungen und neue Funktionen für euch. Hier sind einige Highlights:

<div class="simple-columns bg-slate-100 dark:bg-slate-800">

![Kurzer Lagername Generation](~/assets/images/campshorttitle-generation.webp)

<div>

Der Lagertitel wurde vereinfacht, sodass der kurze Titel automatisch generiert wird aber bei Bedarf immer noch angepasst werden kann. Ausserdem wurden die Titelseiten der beiden Druckversionen aneinander angeglichen. [#5351](https://github.com/ecamp/ecamp3/pull/5351){.issuelink}

</div>

</div>
<div class="simple-columns">

<div>

Der Zeitwähler unterstützt nun auch unscharfe Zeitangaben wie auf dem [SBB.ch Fahrplan](https://sbb.ch){target=_blank}, was eine flexiblere Eingabe von Zeiten ermöglicht. [#5647](https://github.com/ecamp/ecamp3/pull/5647){.issuelink}

</div>

![Picker completing from 8 to 8:00, 21 to 21:00 and 1234 to 12:34](~/assets/images/timepicker-better-parser.webp)

</div>

## Bugfixes und kleinere Verbesserungen

- Das "Sicherheitskonzept" wurde in "Sicherheitsüberlegungen" umbenannt, um die Funktion klarer zu definieren. [#5669](https://github.com/ecamp/ecamp3/pull/5669){.issuelink}
- Die Sicherheitsüberlegungen lassen sich nun auch zusammenfassen, wie die Geschichte-Einträge. [#5732](https://github.com/ecamp/ecamp3/pull/5732){.issuelink}
- Wir stellen sicher, dass die Menge eine positive Materialmenge ist. [#5579](https://github.com/ecamp/ecamp3/pull/5579){.issuelink}
- Diverse kleinere Bugfixes [#5746](https://github.com/ecamp/ecamp3/pull/5746){.issuelink} [#5747](https://github.com/ecamp/ecamp3/pull/5747){.issuelink} [#5793](https://github.com/ecamp/ecamp3/pull/5793){.issuelink} [#6012](https://github.com/ecamp/ecamp3/pull/6012){.issuelink}

Aktuell arbeiten wir an den Kurs-Features und natürlich laufend an Bugfixes die via [Kontaktformular](https://www.ecamp3.ch/de/kontakt/) an uns herangetragen werden.

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
