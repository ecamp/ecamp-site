---
title: September-Release
path: 2026-09-release
pubDate: 2026-09-22
description: Mehr Passwortsicherheit und Verbesserungen an der Benutzeroberfläche
image: "~/assets/images/2026-09-release.png"
---

Wir haben die Kontosicherheit erhöht und die Navigation, Formulare sowie mehrere alltägliche Abläufe verbessert.

## Mehr Passwortsicherheit

- Zum Ändern des Passworts ist neu das **aktuelle Passwort** erforderlich. Dadurch wird euer Konto zusätzlich geschützt. [#10214](https://github.com/ecamp/ecamp3/pull/10214){.issuelink}
- Neu gewählte Passwörter werden mit einer lokalen Liste häufig kompromittierter Passwörter abgeglichen. Die Prüfung findet sicher innerhalb von eCamp statt; das Passwort wird nicht an einen externen Dienst gesendet. [#10197](https://github.com/ecamp/ecamp3/pull/10197){.issuelink}

## Flüssigere Navigation und Bearbeitung

- Der Zurück-Button führt nun zur ursprünglichen Übersicht zurück, auch wenn ihr über die Seitenleiste zwischen Aktivitäten gewechselt habt. Zudem wurden Werkzeugleisten, Aktionsbuttons, bearbeitbare Titel und lange Namen von Lagerabschnitten optimiert. Mit Escape könnt ihr die Bearbeitung eines Titels abbrechen. [#10650](https://github.com/ecamp/ecamp3/pull/10650){.issuelink}
- Wiederholen-, Abbrechen- und Neu-laden-Buttons in Auswahlfeldern öffnen nicht mehr gleichzeitig das Auswahlmenü. [#10736](https://github.com/ecamp/ecamp3/pull/10736){.issuelink}
- Buttons in Dialogfenstern verwenden nun einheitliche Übersetzungen. [#10383](https://github.com/ecamp/ecamp3/pull/10383){.issuelink}

## Fehlerbehebungen und Zuverlässigkeit

- Gäste sehen Lager-Checklisten nun schreibgeschützt und können Listen nicht mehr umbenennen, Einträge verschieben oder deren Inhalt bearbeiten. [#10722](https://github.com/ecamp/ecamp3/pull/10722){.issuelink}
- Material-Checkboxen sind deaktiviert, wenn ein Eintrag keiner Materialliste zugeordnet ist. [#10548](https://github.com/ecamp/ecamp3/pull/10548){.issuelink}
- Das Einfügen einer Lager-URL beim Erstellen eines Lagers funktioniert in Firefox wieder. [#10519](https://github.com/ecamp/ecamp3/pull/10519){.issuelink}
- Die PDF-Erstellung mit langen Emoji-Inhalten funktioniert in Firefox wieder zuverlässig. [#10525](https://github.com/ecamp/ecamp3/pull/10525){.issuelink} [#10739](https://github.com/ecamp/ecamp3/pull/10739){.issuelink}
- Im Hintergrund wurde der API-Zugriff auf Daten aus geteilten Lagern weiter eingeschränkt. Zusätzliche automatisierte Tests verbessern die Zuverlässigkeit von Navigation, Login und Filtern. [#10773](https://github.com/ecamp/ecamp3/pull/10773){.issuelink} [#10819](https://github.com/ecamp/ecamp3/pull/10819){.issuelink}

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
