---
id: '103000369548'
title: 4.4.1 Verhinderung der doppelten Inhaltsgenerierung. Globale Verhinderungsfunktion.
sidebar_position: 12
slug: /content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function
description: Die Funktion "Verhinderung der doppelten Inhaltsgenerierung mit anderen Flows" ist entscheidend, um sicherzustellen, dass Sie keinen Inhalt zweimal für dasselbe Produkt generieren, wenn es mehreren Flows angehören könnte.
---

Die Funktion **"Verhinderung der doppelten Inhaltsgenerierung mit anderen Flows"** ist entscheidend, um sicherzustellen, dass Sie keinen Inhalt zweimal für dasselbe Produkt generieren, wenn es mehreren Flows angehören könnte. Dies hilft, Ihre KI-Nutzungskosten (Tokens) zu optimieren.

## 1\. Der Hauptstandard (Globale Einstellung)

Dies ist die **Globale Einstellung**, die auf alle Ihre Flows anwendbar ist, sofern nicht anders angegeben. Sie legen sie einmal unter fest: `Profil` → `Einstellungen` → `Content Flow`.

-   **Inhalt wurde noch nicht generiert:** Die Generierung ist **nur erlaubt, wenn** Inhalte für dieses Produkt noch nicht von **einem** anderen Flow erstellt wurden. Dies ist die strengste Prüfung.

-   **Älter als:** Sie legen ein **Zeitlimit** fest (z. B. 1 Woche). Die Generierung ist **erlaubt, wenn** die bestehenden Inhalte bereits zuvor von einem anderen Flow erstellt wurden, aber **vor** der festgelegten Dauer.
    ![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/Hgb-Xa4MFVO-KaMNOrtEtfyA1I8RT_6haA.png)

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/r-Ikv5eI5COJQMRwp9HXF1M2OOPYShjDXw.png)

## 1.1. Verwaltung der globalen Einstellungen (Einrichtungsschritte)

**Ihr Ziel:** Den Hauptstandard festzulegen oder zu ändern, dem alle auf `Erben` eingestellten Flows folgen.

**Schritte:**

1.  Navigieren Sie zu **Globale Einstellungen** (`Profil` → `Einstellungen` → `Content Flow`).

2.  Sie steuern die Globalregel mithilfe des Schalters **"Zeitlimit verwenden"**:

-   **Für die Aktivierung der Zeitlimitregel (Älter als):** **Schalten Sie den Schalter "Zeitlimit verwenden" EIN**, **geben Sie den erforderlichen Zeitraumwert ein** (z. B. 1 Woche), und **speichern Sie**.

-   **Um die strengste Regel festzulegen (Inhalt wurde noch nicht generiert):** **Schalten Sie den Schalter "Zeitlimit verwenden" AUS** und **speichern Sie**.

-   _Ergebnis:_ Alle Flows mit der Option **Erben** wenden diese neue Einschränkung automatisch an.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/et0MwVwvnIfg8GhM-81qMk3ADOAD3_M02g.png)

##
2\. Außerkraftsetzung der Regel für einen bestimmten Flow (Praktische Szenarien)

In den Einstellungen jedes einzelnen Flows (Abschnitt **4 Automation**) legen Sie fest, ob dieser der Globaleinstellung folgt oder eine Ausnahme darstellt:

-   Falls Sie möchten, dass der Flow alle Duplizierungsregeln ignoriert (auch wenn die Globalregel aktiv ist), siehe A.

-   Falls Sie ein benutzerdefiniertes Zeitlimit festlegen möchten (Außerkraftsetzung), siehe B.

-   Falls Sie alle globalen Duplizierungsregeln vollständig deaktivieren möchten, siehe C.

####
**Szenario A: Vollständige Generierungsberechtigung (Keine Einschränkungen) (Ausschalten)**

**Ihr Ziel:** Sie möchten, dass der Flow alle Duplizierungsregeln ignoriert (auch wenn die Globalregel aktiv ist).

**Schritte:**

1.  Gehen Sie zu den Einstellungen des gewünschten Flows (z. B. `Produktflow ändern`).

2.  Navigieren Sie zum Abschnitt **4 Automation**.

3.  Wählen Sie im Block **"Verhinderung der doppelten Inhaltsgenerierung mit anderen Flows"** die Option **Ausschalten**.

4.  Speichern Sie die Änderungen.

-   _Ergebnis:_ Dieser Flow generiert Inhalte unabhängig davon, ob bereits Inhalte aus anderen Flows vorhanden sind.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/M18xs-NWnNKM3KW_n1iAHroIpfoIW3ztfg.png)

####
**Szenario B: Festlegung eines benutzerdefinierten Zeitlimits (Außerkraftsetzung)**

**Ihr Ziel:** Sie möchten, dass dieser Flow ein Zeitlimit hat, das **anders ist** als die globale Einstellung.

**Schritte:**

1.  Gehen Sie zu den Einstellungen des gewünschten Flows.

2.  Wählen Sie im Abschnitt **4 Automation** die Option **Außerkraftsetzung**.

3.  Geben Sie den erforderlichen Zeitlimitwert (z. B. 1 Stunde) in das angezeigten Feld ein.

4.  Speichern Sie die Änderungen.

-   _Ergebnis:_ Der Flow verwendet **nur** diese neue, individuelle Regel.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/chc6WFPZCDobr_ICKuYawfRnxRTy36Oi3g.png)

**Szenario C: Neustart (Entfernung aller Einschränkungen)**

**Ihr Ziel:** Sie haben entschieden, alle globalen Duplizierungsregeln vollständig auszuschalten und allen Flows die Erstellung von Inhalten ohne zeitbasierte Einschränkungen zu ermöglichen.

**Schritte:**

1.  Navigieren Sie zu **Globale Einstellungen** (`Profil` → `Einstellungen` → `Content Flow`).

2.  **Deaktivieren Sie den Schalter "Zeitlimit verwenden"**.

3.  Klicken Sie auf die Schaltfläche **Speichern**.

4.  _Ergebnis:_ Alle auf **Erben** eingestellten Flows werden **ohne Duplizierungseinschränkungen** ausgeführt, da die Globalregel effektiv deaktiviert ist. Falls Sie möchten, dass ein auf **Außerkraftsetzung** eingestellter Flow auch ohne Einschränkungen ausgeführt wird, **ändern Sie ihn in Erben** oder **deaktivieren Sie die Einschränkung mit Ausschalten**.

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/8rlkBmppY5nU7t7ZkdTHVSWoFeNWkYYOeA.png)

oder

![](/img/kb/content-creation-flows/prevent-overlapping-content-generation-function-global-prevent-function/_nWCPZi_Y8CUrS6FiIQZPgxQ0eip7jdWeg.png)
