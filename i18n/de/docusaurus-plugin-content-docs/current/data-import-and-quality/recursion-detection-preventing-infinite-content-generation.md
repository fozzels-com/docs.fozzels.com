---
id: '103000371114'
title: '3.5. Rekursionserkennung: Verhinderung unendlicher Inhaltsgenerierung'
sidebar_position: 8
slug: /data-import-and-quality/recursion-detection-preventing-infinite-content-generation
description: Die Warnung „Rekursion erkannt" signalisiert einen potenziellen Konflikt in Ihrer Flow-Konfiguration, bei dem die Ausgabe des Generierungsprozesses auch als Eingabe für
keywords:
- Eingabeaufforderung
- Anweisung
---

Die Warnung „Rekursion erkannt" signalisiert einen potenziellen Konflikt in Ihrer Flow-Konfiguration, bei dem die Ausgabe des Generierungsprozesses auch als Eingabe für denselben Prozess dient. Dies bedeutet, dass Ihr Flow so konfiguriert ist, Daten aus demselben Attribut zu lesen, auf das er gleichzeitig die neu generierten Inhalte schreiben soll.

Das häufigste Beispiel ist ein Flow, der so ausgelegt ist, das Feld {Description} (das Zielattribut) zu aktualisieren, doch der Prompt selbst verwendet die Variable {Description} als Informationsquelle.

### Technische Auswirkung: Die Inhaltsschleife

Wenn diese Konfiguration in Verbindung mit der Einstellung „Automatisch erneut generieren, wenn sich Produktattribut ändert" verwendet wird, kann eine Schleife zur unbegrenzten Inhaltsgenerierung auftreten, was zu unnötigem Token-Verbrauch und Ausführungszyklen führt.

1.  Ausführungstag 1: Fozzels generiert erfolgreich neue Inhalte und schreibt sie in das Beschreibungsfeld.

2.  Änderungserkennung: Da sich der Wert des Beschreibungsfeldes geändert hat, markiert das integrierte E-Commerce-System das Produkt als „aktualisiert".

3.  Nächste Ausführung: Bei der nächsten geplanten Ausführung (z. B. am nächsten Tag) erkennt die Automatisierungseinstellung, dass das Produkt „aktualisiert" wurde, und versucht, die Inhalte erneut zu generieren.

4.  Die Schleife: Diese Neugenerierung führt zu einer neuen Änderung, die den Prozess unbegrenzt auslöst.

### Empfehlungen zur Verwaltung

Während die Verwendung des Zielattributs als Eingabe manchmal beabsichtigt ist (z. B. beim Anhängen von Informationen an vorhandenen Text), ist es entscheidend, die Automatisierungseinstellungen zu verwalten, um diese Endlosschleife zu verhindern.

- **Aktion 1**: Automatische Neugenerierung deaktivieren Die wirksamste Weise, die Schleife zu unterbrechen, ist das Ausschalten der Option „Automatisch erneut generieren, wenn sich Produktattribut ändert". Dies stellt sicher, dass, obwohl der Flow eine Änderung im Zielattribut verursacht, die Automatisierung nicht automatisch eine erneute Ausführung basierend auf dieser spezifischen Änderung plant.
- **Aktion 2**: Entfernen Sie die rekursive Eingabe Wenn der vorhandene Inhalt für die Prompt-Logik nicht unbedingt erforderlich ist, entfernen Sie die rekursive Variable (z. B. entfernen Sie {Description}) aus Ihrem Prompt. Verlassen Sie sich stattdessen nur auf statische Produktattribute (wie Brand, Material, Color), um zu gewährleisten, dass die Inhaltsgenerierung auf unveränderlichen Daten basiert und somit das Auslösen kontinuierlicher Aktualisierungen verhindert.

