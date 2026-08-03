---
id: '103000408094'
title: Release 7.4-7.5 - Einführung von Category Management, Advanced Media Hub und Next-Gen Anthropic-Modelle
sidebar_position: 14
slug: /fozzels-releases-updates/release-7-4-7-5-introducing-category-management-advanced-media-hub-and-next-gen-
description: Willkommen zu Fozzels' neuester Version - ein großes Update, das Ihre Content-Automatisierung und Katalog-Management auf die nächste Stufe bringen soll. Wir haben vollständig neu vorgestellt
---

Willkommen zu Fozzels' neuester Version  - ein großes Update, das Ihre Content-Automatisierung und Katalog-Management auf die nächste Stufe bringen soll. Wir haben die Kernschnittstellen vollständig neu vorgestellt, die Plattformfunktionen erheblich erweitert und die neuesten KI-Modelle integriert, um Ihre täglichen Workflows reibungsloser, schneller und effizienter als je zuvor zu gestalten.
The Next Evolution of Catalog Management - Categories Support

Wir machen einen strategischen Schritt nach vorne, indem wir die Kernfunktionen der Plattform skalieren. Fozzels unterstützt jetzt offiziell Operationen nicht nur auf der Produktebene, sondern auch auf der **Kategorie- und Kategorie-Attribut**-Ebene. Dieses Update legt den Grundstein für die vollständige Automatisierung der Katalogstruktur.

#### **Einführung von Category Pools und dediziertem Katalog-Interface**

-   **Neues Daten-Ökosystem:** Einführung eines völlig redesignten Pool-Interface neben einem dedizierten, benutzerdefinierten Katalogverwaltungs-Manager für Kategorien.

-   **Einheitliche Erfahrung (UX):** Wir haben unseren bewährten, produktionsgestesteten Produktverwaltungs-Workflow auf Kategorien übertragen. Die gleiche intuitive Filterung, Strukturierung und Datenverwaltungslogik ist jetzt für jede einzelne Kategorie in einem einzigen Arbeitsbereich verfügbar.

-   **Unterstützte Ökosysteme:** In dieser Phase werden die Kategorie-Unterstützung und das aktualisierte Pool-Interface für unsere Kern-Integrationen eingeführt: **Shopify, Magento, WooCommerce, Shopware, Lightspeed und Katana PIM**.

-   **Ausblick in die Zukunft:** Diese Architektur ist nur der Anfang einer großen Produktentwicklung. Unser nächster Meilenstein wird einen dedizierten, autonomen KI-Content-Generierungs-Flow einführen (der SEO-Beschreibungen, Meta-Tags und Banner abdeckt), der speziell für Kategorienseiten ausgerichtet ist.

#### **Granulare 4-Stufen-Datensynchronisierung und erweiterte Protokollierung**

-   **Überarbeitete Pool-Architektur:** Um die Kategorieintegration zu ermöglichen, haben wir unsere Workflows für den Datenimport aus externen Systemen vollständig neuaufgelegt. Der grundlegende 2-Stufen-Sync wurde durch einen **progressiven 4-Stufen-Synchronisierungszyklus** ersetzt:

1.  _Produktattribute_

2.  _Kategorie-Attribute_

3.  _Kategorien_

4.  _Produkte_

-   **Absolute Transparenz und Flexibilität:** Jede Stufe ist jetzt vollständig isoliert. Sie können den genauen, Echtzeit-Fortschritt mit unabhängigen Statusbalken überwachen und dedizierte Protokollansichten (`Protokolle anzeigen`) für jeden einzelnen Schritt aufrufen.

-   **Zielgerichtete Kontrolle:** Das System ermöglicht es Ihnen, entweder die gesamte Datenmasse umfassend zu synchronisieren oder manuell Updates für bestimmte Stufen unabhängig auszulösen.

### Großes UI/UX-Update: Nächste Stufe der Bildüberprüfung und Batch-Management

Basierend direkt auf Nutzer-Feedback haben wir die Bildvorschau, Moderation und Review-Erfahrung in der **Batch-Liste** vollständig neu vorgestellt und überarbeitet. Der gesamte Output Ihres Generierungs-Flows ist jetzt in einen einzigen interaktiven Raum vereint.

#### **Optimierter „Swipe-and-Sync" Media Flow**

-   **Erweiterte Review-Seite:** Nicht mehr Hin- und Herklicken zwischen einzelnen Produktblättern. Wir haben eine intuitive, Hochgeschwindigkeits-Schaltmechanik eingeführt (`Akzeptieren und weiter`), die auf Card-Swipe-Prinzipien funktioniert.

-   **Side-by-Side Vergleich:** Der Bildschirm zeigt gleichzeitig zwei Fenster an - das Originalbild (`Original`) und die KI-generierte Variante (`Generiert`) - mit detailliertem Asset-Zooming (`Zoom In`).

-   **Zentralisierte Media-Asset-Verwaltung:** Direkt im Review-Fenster können Sie sofort Kernoperationen für das aktuelle Asset mit einem einzigen Klick ausführen:

-   Weisen Sie die Reihenfolge des Assets in der Bildergalerie zu (`Position`).

-   Designieren Sie systemspezifische Verhaltensweisen (`Rollen`).

-   Kontrollieren Sie die Sichtbarkeit auf der Produktseite (`Auf PDP ausblenden`).

-   Lösen Sie manuelle Asset-Regenerierung aus (`Regenerieren`), wenn Feinabstimmung erforderlich ist.

-   **Batch-Verarbeitungs-Karussell:** Der untere Bereich der Schnittstelle zeigt eine visuellen Zeitstrahl, der alle Objekte in der aktiven Sitzung verfolgt. Mit farbcodierten Status-Markierungen erweitert (`Akzeptiert`, `Regenerieren`, `Verlassen`), hält es Ihren Gesamt-Projektfortschritt perfekt klar auf einen Blick.

### Kernplattform-Verbesserungen

#### **Next-Gen KI-Modelle und Live Web Search Integration**

-   **Erweiterung des KI-Toolkits:** Fozzels begrüßt offiziell die neuesten bahnbrechenden Modelle von Anthropic in seiner Kernliste:

-   **Claude Sonnet 5** — Bietet hochrangige Intelligenz, fortgeschrittene Reasoning-Fähigkeiten und hochgeschwindige Ausgabe, optimiert für hochvolumige Content-Generierung.

-   **Claude Fable 5** — Unser bisher ausgefeiltstes Modell, gebaut um hyper-komplexe Content-Parameter, tiefe semantische Abbildung und längere autonome Ausführung über komplexe Katalog-Hierarchien zu bewältigen.

-   **Live Web Search Integration:** Wir haben Echtzeit-Web-Search-Fähigkeiten für beide Modelle freigeschaltet. Die KI kann jetzt Live-Extern-Daten abrufen, um absolute factische Genauigkeit, Prompt-Verifizierung und sofortige Compliance mit den neuesten Markttrends zu gewährleisten.

#### **Grenzenlose Kreativität: Entfernung der Image Regeneration Limits**

-   **Was hat sich geändert:** Wir haben die vorherige Grenze für aufeinanderfolgende Bildregenerierungen vollständig aufgehoben (die zuvor auf 5 Versuche pro Objekt begrenzt war). Unter dem manuellen Regenerierungs-Flow (`Manual Regenerate Flow`) sind Sie jetzt frei, die Asset-Generierung so oft wie nötig erneut auszuführen, bis Sie das genaue visuelle Ergebnis erreichen, das Ihre Marke benötigt.

#### **Erweiterte Datenfilterung und optimierter UX-Flow**

-   **Was hat sich geändert:** Wir haben die Datenfilterungs-Engine über alle operativen Flows und Integrationen hinweg gründlich überarbeitet und liefern eine saubere, moderne Ästhetik und erheblich verbesserte Ergonomie.

-   **Nächste-Gen-Kategorie-Trees:** Um skalierte Kategorie-Operationen zu unterstützen, haben wir ein interaktives `Tree View` Multi-Selector mit Quick-Access-Tags und flexibler bedingter Logik (`AND` / `OR`) implementiert.

###
Ökosystem und Integrationen

#### **Magento: Multi-Select Validierung und Advanced Media Asset Management**

-   **Komplexe Attribut-Synchronisierung:** Vollständige Write/Fill-Fähigkeiten wurden für `multi-select` und `select` Attributtypen freigeschaltet. Das KI-Modell fragt automatisch das vorhandene Array von zulässigen Datenwerten direkt aus Ihrem Magento-Katalog ab und wählt passende Variablen aus diesem List aus, streng verhindert Datenverschmutzung oder doppelte Tags.

-   **Advanced Media Role Mapping:** Bei der Synchronisierung generierter Media-Dateien zurück zu Magento können Sie jetzt explizite Systemrollen konfigurieren, statt nur Galerieordnung. Designieren Sie nahtlos Assets als `Base`, `Small`, `Thumbnail`, `Swatch` oder andere benutzerdefinierte Slots, die in Ihrem aktiven Theme konfiguriert sind.

-   **Media-Ausschluss (Aus Produktseite ausgeblendet):** Vollständige Unterstützung für das native Image-Exclusion-Flag ist jetzt live. Sie können ein optimiertes KI-Asset zu Magento hochladen und als `Aus Produktseite ausgeblendet` taggen, damit Sie das Bild für sekundäre Systemzwecke reservieren können (wie Warenkorb-Layout-Miniaturen oder Cross-Sell-Schieber), ohne es in der Haupt-Produktseiten-Galerie zu rendern.

-   **Intelligente ALT-Text-Generierung:** Fozzels kartiert jetzt die Präsenz von `alt`-Metadaten-Tags über Ihre gesamte Magento-Produktgalerie. Die Media-Optimierung kann in zwei unterschiedlichen Modi ausgeführt werden:

1.  _Ausfüll-Modus:_ Die KI zielt auf und generiert relevante ALT-Strings ausschließlich, wo sie fehlen.

2.  _Force-Modus:_ Ein vollständiger Rewrite und Optimierungs-Zyklus über alle Image-Assets in der ausgewählten Batch-Datei.

####
**Shopify und Shopware: Optimierte Attribut-Filterung**

-   **Daten-Flow-Optimierung:** Wir haben eine technische Prüfung und Bereinigung der Filterkonfigurations-Matrizen für sowohl Shopify als auch Shopware durchgeführt. Nur relevante, vollständig funktionale logische Operatoren sind jetzt in der Schnittstelle verfügbar, was Katalog-Segmentierungs-Workflows erheblich beschleunigt.

#### **NextChapter: Automatisierte Media-Synchronisierung und Gallery Management**

-   **Bidirektionaler Media-Sync:** Implementiertes vollständiges geschlossenes Loop-Integration für digitale Assets. Alle KI-generierten oder optimierten Bilder werden automatisch zu NextChapter exportiert ("gepusht"), direkt mit dem entsprechenden Item-Sheet passend.

-   **Galerieverwaltung:** Hinzugefügt ein intuitives Queue-Ordering-Utility. Benutzer können die Anzeigereihenfolge von Bildern im Produktgalerie-Layout präzise bestimmen (Hauptbild, Zweites, Drittes... Letzte Position).

#### **Katana PIM: Specification Group Attribute Synchronisierung**

-   **Feature-Release:** Hinzugefügt native Unterstützung und vollständige Datensynchronisierung für das kritische `specification group` Systemattribut. Die Integration nutzt unseren neuen progressiven Multi-Select-Validierungs-Algorithmus: Die KI erkennt dynamisch gültige Spezifikationsgruppen direkt aus Ihrem Katana PIM-Verzeichnis und füllt sie mit verifizierten Strukturdaten.
