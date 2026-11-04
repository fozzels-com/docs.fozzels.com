---
title: 4.1.2.c Generierte Inhalte in Magento 2 mit allen Store Views synchronisieren
sidebar_position: 4.5
slug: /content-creation-flows/sync-generated-content-to-all-store-views-magento-2
description: >-
  Ist diese Option aktiv, speichert jeder Push aus dem Flow den generierten Text
  in der Store View des Flows und zusätzlich als Standardwert des Produkts für
  alle Store Views in Magento.
---

## Was diese Option bewirkt

Ist diese Option aktiv, speichert jeder Push aus dem Flow den generierten Text zweimal: in der eigenen Store View des Flows und als Standardwert des Produkts für **alle Store Views** in Magento.

Jede Store View, die für dieses Attribut keinen eigenen Wert hat, zeigt den neuen Text sofort an. Eine Store View, für die in Magento ein eigener Wert gesetzt ist, zeigt weiterhin ihren eigenen Text.

Die Option ist nur für Magento-2-Integrationen verfügbar.

## Wann Sie sie verwenden

Aktivieren Sie die Option, wenn mehrere Store Views denselben Text zeigen sollen und Sie nicht für jede einen eigenen Flow betreiben möchten. Ein typischer Fall: zwei oder mehr Store Views in derselben Sprache, zum Beispiel ein Hauptshop und ein Outlet-Shop.

Lassen Sie sie ausgeschaltet, wenn Ihre Store Views unterschiedliche Sprachen verwenden oder unterschiedliche Texte brauchen. Betreiben Sie in diesem Fall wie bisher für jede Store View einen eigenen Flow.

## So aktivieren Sie die Option

1.  Öffnen Sie den Flow und gehen Sie zu Schritt **4 Automation**.

2.  Aktivieren Sie **Also save as the default value for all store views**. Unter dem Kontrollkästchen erscheint eine kurze Erklärung.

3.  Speichern Sie den Flow.

Die Option gilt für jeden Push aus diesem Flow: einen manuellen Push nach der Prüfung, einen vollautomatischen Push und **Synchronize again**. Ein Flow mit mehreren Attributen synchronisiert immer alle seine Attribute gemeinsam.

![Das Kontrollkästchen „Also save as the default value for all store views“ in Schritt 4 Automation](/img/kb/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/01-automation-default-value-checkbox.png)

## So funktionieren Store-View-Werte

In Magento hat ein Produktattribut einen Standardwert (sichtbar im Scope **All Store Views**) und kann in jeder Store View einen eigenen Wert haben. Wechseln Sie auf der Produktseite den **Scope** zu einer Store View: Ist unter einem Feld **Use Default Value** aktiviert, zeigt diese Store View den Standardwert. Ist es deaktiviert, hat die Store View einen eigenen Wert und ignoriert den Standardwert.

So wirkt sich ein Push aus, mit einem Flow auf der Default Store View und einem Shop mit zwei weiteren Store Views:

| Store View | Vor dem Push | Nach dem Push | Use Default Value |
| --- | --- | --- | --- |
| All Store Views (Standard) | Alter Text | **Neuer Text** | — |
| Default Store View (die des Flows) | Alter Text | **Neuer Text**, als eigener Wert gespeichert | Deaktiviert |
| Store View B, kein eigener Wert | Alter Text (geerbt) | **Neuer Text** (geerbt) | Aktiviert |
| Store View C, eigener Wert | Eigener Text | Eigener Text, unverändert | Deaktiviert |

**Damit eine Store View den neuen Text zeigt**, öffnen Sie das Produkt in Magento, wechseln den Scope zu dieser Store View, aktivieren **Use Default Value** für das Attribut und speichern. Ab dann folgt sie dem Standardwert.

## Eine Store View pro Attribut

Nur die Flows einer einzigen Store View können ein bestimmtes Attribut als Standardwert speichern. So überschreiben Flows verschiedener Store Views nicht gegenseitig den Standardtext.

*   **Mehrere Flows derselben Store View** können die Option für dasselbe Attribut aktiviert haben.
*   **Flows verschiedener Store Views** können die Option nur für unterschiedliche Attribute aktiviert haben. Zum Beispiel synchronisiert ein Flow auf Store View A die Beschreibung und ein Flow auf Store View B den Meta-Titel.

Wenn Sie die Option für ein Attribut aktivieren, das bereits ein Flow einer anderen Store View als Standardwert speichert, lässt sich der Flow nicht speichern und zeigt diese Fehlermeldung:

> The flow "&lt;flow name&gt;" of another store view already saves this attribute as the default value for all store views. Only one store view's flow can write the shared default of an attribute.

Zur Behebung entfernen Sie entweder die gemeinsamen Attribute aus diesem Flow oder schalten die Option in dem in der Meldung genannten Flow aus (bzw. entfernen dort das Attribut).

**Beim Duplizieren eines Flows in eine andere Store View** wird die Option in der Kopie ausgeschaltet und eine Warnung angezeigt. Aktivieren Sie sie nur dann wieder, wenn kein Flow einer anderen Store View dieselben Attribute als Standardwert speichert.

## Was Sie vor dem Aktivieren wissen sollten

*   **All Store Views bedeutet jede Website.** Der Standardwert gilt für die Store Views aller Websites in Ihrem Magento, nicht nur für die Website des Flows. Wenn Ihre Websites unterschiedliche Sprachen verwenden, zeigen Store Views ohne eigenen Wert die Sprache des Flows.
*   **Der letzte Push gewinnt.** Wenn mehrere Flows derselben Store View dasselbe Attribut synchronisieren, enthält der Standardwert den Text des letzten Pushs, auch wenn ein anderer Flow einen neueren Text generiert hat.
*   **Die Store View des Flows folgt nicht mehr dem Standardwert.** Nach dem ersten Push mit dieser Option hat die Store View des Flows einen eigenen Wert. Spätere Standardwerte erreichen sie erst, wenn Sie dort Use Default Value aktivieren.
*   **Andere Flows können ausgelöst werden.** Ein Flow einer anderen Store View, der dieses Attribut in seinem Prompt verwendet und bei dem **Automatically create a new text when an attribute changes** aktiviert ist, behandelt den neuen Standardwert als Änderung. Nach dem nächsten Pull erstellt er einen neuen Text und verbraucht Credits für jedes Produkt ohne eigenen Wert in seiner Store View.
*   **Konfigurierbare Produkte:** Nur das übergeordnete Produkt wird aktualisiert. Seine Varianten behalten ihre eigenen Texte. Das ist kein Problem, da die Produktseite die Texte des übergeordneten Produkts zeigt.
*   **Das Ausschalten der Option macht nichts rückgängig.** Bereits als Standard gespeicherte Werte bleiben erhalten. Neue Pushes gehen nur noch an die Store View des Flows.
*   **Das Entfernen eines Attributs aus einem Flow löscht den Standardwert nicht.** Der zuletzt synchronisierte Wert bleibt, bis ein anderer Flow einen neuen synchronisiert.
