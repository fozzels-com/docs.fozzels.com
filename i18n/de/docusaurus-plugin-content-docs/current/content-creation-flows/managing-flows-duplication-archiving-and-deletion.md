---
id: '103000367977'
title: '4.1.3. Verwaltung von Flows: Duplizierung, Archivierung und Löschung.'
sidebar_position: 5
slug: /content-creation-flows/managing-flows-duplication-archiving-and-deletion
description: Dieses Handbuch erläutert Methoden zur Verwaltung bestehender Content Flows mit Fokus auf Duplizierung zur Zeiteinsparung und allgemeine Flow-Verwaltung (Archivierung und Löschung).
keywords:
- Inhaltsfluss
- Content-Flow
---

Dieses Handbuch erläutert Methoden zur Verwaltung bestehender Content Flows mit Fokus auf Duplizierung zur Zeiteinsparung und allgemeine Flow-Verwaltung (Archivierung und Löschung).
Die Duplizierung ist eine wesentliche Zeitsparmöglichkeit, die es Ihnen ermöglicht, einen bestehenden Content Flow, einschließlich all seiner komplexen Einstellungen, Filter und Prompts, zu klonen und ihn schnell für eine andere Sprache oder einen anderen Store anzupassen. **Archivierung** ermöglicht die temporäre Entfernung von Flows aus der aktiven Liste zur möglichen zukünftigen Verwendung, während **Löschung** sie endgültig entfernt.

### 1\. Duplizierung eines Content Flows

Die Duplizierung ermöglicht es Ihnen, umfassende Konfigurationen (Filter, Prompts, Automatisierungseinstellungen) wiederzuverwenden, um schnell neue Flows zu erstellen, typischerweise für verschiedene Ziel-Stores oder Sprachen.

#### 1.1. Duplizierungsprozess

1.  **Gehen Sie zum** Hauptnavigationsmenü und **wählen Sie** **Flows**.

2.  **Suchen Sie** den Flow, den Sie duplizieren möchten (aktiv oder inaktiv, ausgeführt oder nicht ausgeführt).

3.  **Klicken Sie auf** das Aktionsmenü (drei Punkte **...**) neben dem Flow-Namen.

4.  **Wählen Sie** **"Duplizieren"** aus dem Dropdown-Menü.

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/SQ3APzXi6qMf8Vz9_U8bAVr6_tdKhvNCRg.png)

####
1.2. Store-Auswahl (falls zutreffend)

-   **Einzelne Store-Integration:** Falls nur ein Store integriert ist, wird der duplizierte Flow sofort erstellt.

-   **Mehrere Store-Integration:** Falls mehrere Stores verlinkt sind, erscheint ein Pop-up. Sie müssen **den Ziel-Store auswählen**, für den der neue Flow erstellt wird, und dann auf **"Duplizieren" klicken**.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/qtwYWP_c4W7aBzd49RLMNik4Pgdse79-yQ.png)

#### 1.3. Flow-Benennungskonvention

-   Der duplizierte Flow wird automatisch den Text **(Kopie)** zu seinem Namen hinzufügen, um ihn klar vom ursprünglichen Flow zu unterscheiden.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/LfO44gQa0Ba6tGFg-nMgCyE6mCfT_c99MQ.png)

#### 1.4. Geerbte Einstellungen (Was wird geklont)

Der Duplizierungsprozess kopiert _alle_ Einstellungen aus dem ursprünglichen Flow, einschließlich des Prompt-Texts, der Produktfilter, des Zielattributs, der KI-Konfiguration und sogar der **Automatisierungseinstellungen (einschließlich des Aktivierungskontrollkästchens)**.

-   **Erforderliche Aktion:** Da die Aktivierungseinstellung geklont wird, ist es **obligatorisch, alle Einstellungen** im neuen Flow vor der Ausführung zu überprüfen und zu verifizieren.

#### 1.5. Anwendungsfall: Zeiteinsparung für Multi-Store-Setup

Die Duplizierung ist unbezahlbar für Multi-Store-Setups (z. B. Erstellung eines Flows für den NL-Store basierend auf dem DE-Store) und spart Stunden Konfigurationszeit, indem nur kleine Prompt-Anpassungen (wie Sprachänderung) und Filter-Verifikation erforderlich sind.

### 2\. Archivierung eines Content Flows

Die Archivierung ermöglicht es Ihnen, einen Flow temporär aus der Hauptaktivliste zu verstecken, normalerweise für Flows, die abgeschlossen oder pausiert sind, ohne seine Einstellungen oder generierten Daten dauerhaft zu verlieren.

1.  **Gehen Sie zur** Hauptliste **Flows**.

2.  **Klicken Sie auf** das Aktionsmenü (drei Punkte **...**) neben dem Flow-Namen.

3.  **Wählen Sie** **"Archivieren"** aus dem Dropdown-Menü.

4.  Archivierte Flows werden an einen separaten Ort verschoben, auf den Sie über die Schaltfläche **"Archiv"** auf der Hauptseite Flows zugreifen können.

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/jhuJATuiVcYqLgL-2-ggTsKKXGOIFOj3fQ.png)

![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/PRkxwqVNLhu-MtRt9BjGFa7Gg_0W_j20Ww.png)

#### 2.1. Verwaltung archivierter Flows

-   **Wiederherstellen:** Im Abschnitt **Archivierte Flows** können Sie einen archivierten Flow zurück zur Hauptaktivliste wiederherstellen, indem Sie auf **"Wiederherstellen" klicken**.

-   **Löschen:** Sie können auch wählen, einen archivierten Flow dauerhaft zu löschen, indem Sie auf **"Löschen" klicken**.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/J17t4SXZjsrIDu1Gi7xnOOzaIieIR_OoSQ.png)

### 3\. Löschen eines Content Flows

Das Löschen entfernt einen Flow dauerhaft aus dem System.

1.  **Gehen Sie zur** Hauptliste **Flows**.

2.  **Klicken Sie auf** das Aktionsmenü (drei Punkte **...**) neben dem Flow-Namen.

3.  **Wählen Sie** **"Löschen"** aus dem Dropdown-Menü.

4.  **Bestätigen Sie** die Löschung im angezeigten Pop-up.
    ![](/img/kb/content-creation-flows/managing-flows-duplication-archiving-and-deletion/XzaWMHcYgI8ml6u0QTYw0O9LE9UbbWrakg.png)

-   **Permanente Aktion:** Sobald ein Flow gelöscht ist, kann er **nicht wiederhergestellt werden**. Falls Sie den Flow in der Zukunft möglicherweise benötigen, verwenden Sie stattdessen die **Archivierungsfunktion**.
