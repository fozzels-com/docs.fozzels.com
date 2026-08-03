---
title: 'FAQ: Integrationen und Synchronisierung'
sidebar_position: 9
unlisted: true
slug: /frequently-asked-questions/faq-integrations-and-synchronization
description: Teilweise Produktabrufe, Shopware- und Shopify-Verbindungsprobleme, Varianten und Packs, HTML in Attributen, WooCommerce-Plugins, Rate Limits, Bildabrufe und Multi-Store-URL-Probleme.
keywords:
- Stapelliste
- Chargenliste
- Eingabeaufforderung
- Anweisung
---

## Der automatische Produktabruf ruft nur einen Teil meines Katalogs ab. Wie erhalte ich alle Produkte?

Wenn Ihr Katalog Standard-API-Limits überschreitet, ruft der Abruf möglicherweise nicht alle Produkte ab. Fordern Sie eine API-Limit-Erhöhung von Ihrem PIM-Anbieter an. Vorübergehend kann das Fozzels-Team den Abruf manuell abschließen.

## API-Limits wurden erhöht, aber der Produktabruf funktioniert immer noch nicht.

Der PIM-Anbieter muss möglicherweise seine Dienste neu starten. Kontaktieren Sie ihn, um zu bestätigen, dass die Änderungen aktiv sind. Der Fozzels-Support kann während der Problemlösung einen manuellen Abruf durchführen.

## Fozzels kann keine REST-API-Verbindung mit meinem Shopware-Shop herstellen.

Überprüfen Sie die Access Key ID und Secure Access Key doppelt. Falls diese korrekt sind, ist das Problem wahrscheinlich Zugriff. Gehen Sie im Shopware-Admin zu Settings → System → Integrations, öffnen Sie die Fozzels-Integration, aktivieren Sie den Toggle **Administrator** und speichern Sie.

## Fozzels erfordert Administratorzugriff in Shopware, aber ich bin besorgt um Datenschutz.

Die Administrator-Rolle ist derzeit für Fozzels erforderlich, um Produktdaten zu lesen. Falls die Gewährung von vollem Admin-Zugriff ein Problem darstellt, kontaktieren Sie das Fozzels-Team, um zu besprechen, ob ein stärker eingeschränktes Setup möglich ist.

## Meine API-Schlüssel sind ungültig. Was sollte ich überprüfen?

Stellen Sie sicher, dass Sie den korrekten Schlüsseltyp senden (Integration-Schlüssel, der mit `SWIA...` beginnt, nicht ein Sales Channel-Schlüssel). Überprüfen Sie, dass der Secret-Schlüssel nicht beim Kopieren/Einfügen gekürzt wurde. Versuchen Sie, eine neue Integration zu erstellen und frische Schlüssel zu senden.

## In Fozzels werden Inhalte generiert, erscheinen aber nicht in meinem Shopware-Shop.

Dies kann passieren, wenn die Synchronisierung für bestimmte Produkte fehlschlägt, was auf fehlende Attribute, Zugriffsprobleme oder Variant-Konfiguration zurückzuführen ist. Kontaktieren Sie den Support mit spezifischen Produktbeispielen.

## Wie handhabt Fozzels Produkte mit vielen Varianten (Größen, Farben)?

Fozzels hat eine **Packs**-Funktion, die Varianten bündelt – alle Größen der gleichen Farbe werden als ein Produkt behandelt. Fügen Sie den Filter „Pack Parent ID is not empty" in Ihrem Flow hinzu, um diese Funktion zu verwenden.

## HTML-Tags (z. B. `<p>`) werden in Shopify-Feldern angezeigt. Wie behebe ich das?

Deaktivieren Sie HTML-Unterstützung für das Attribut: Attributes-Register → Edit (Stiftsymbol) → Technical Flags → deaktivieren Sie **Allow HTML** → Speichern. Regenerieren und überprüfen Sie dann.

## Kann Fozzels nur Text (ohne HTML) in mein PIM schreiben?

Ja. Gehen Sie zu Attributes-Register → Edit Attribute → deaktivieren Sie **Allow HTML** → Speichern.

## Ich erhalte einen Fehler „Website is not active" beim Klick auf Save and Preview.

Dies kann durch temporäre Verbindungsprobleme nach einem API-Update auftreten. Kontaktieren Sie den Support – Sie können überprüfen und die Webverbindung reaktivieren.

## Ich habe die Domain-URL meines Shops geändert. Muss ich Fozzels aktualisieren?

Ja. Falls Sie Ihre Domain ändern, muss die Fozzels-Konfiguration möglicherweise aktualisiert werden. Kontaktieren Sie den Support, um die Domain zu aktualisieren.

## Mehrere Shops zeigen in Fozzels die gleiche Domain. Ist das richtig?

Dies kann passieren, wenn Fozzels nur eine Domain statt separater pro Shop erhält. Die Synchronisierung wird korrekt pro Shop unter der Haube verarbeitet. UI-Verbesserungen sind geplant.

## Welche Plugins werden für eine WooCommerce-Integration benötigt?

Stellen Sie sicher, dass: die REST API aktiviert ist, das neueste Fozzels AIOSEO-Plugin installiert ist, und das Plugin ACF to REST API (v3.3.4) installiert und aktiv ist.

## Wie richte ich die AIOSEO-Integration mit Fozzels ein (WooCommerce)?

Installieren Sie das Fozzels AIOSEO-Sync-Plugin auf WordPress. „Focus Keyphrase" in Fozzels wird auf Focus Keyword in WooCommerce abgebildet; „SEO Keywords" wird auf Additional Keywords abgebildet.

## Wie richte ich die Yoast SEO-Integration mit Fozzels ein?

Installieren Sie das Fozzels Yoast-Sync-Plugin. Stellen Sie sicher, dass Yoast vollständig in WordPress konfiguriert und aktiviert ist.

## Wie handhabt Fozzels mehrsprachige Inhalte mit WPML?

Fozzels bietet Zugriff auf Shops für verschiedene Sprachen. Erstellen Sie separate Flows pro Sprach-Shop. Fozzels übersetzt keinen Inhalt selbst, Sie können aber Prompts so festlegen, dass diese in der gewünschten Sprache generieren.

## Wie verwende ich benutzerdefinierte Produktfelder (ACF) in Fozzels-Prompts?

Fozzels unterstützt ACF für WooCommerce. Aktivieren Sie ACF-Unterstützung, und benutzerdefinierte Felder werden als Attribute in Fozzels angezeigt.

## Neue ACF-Felder, die ich in WordPress hinzugefügt habe, werden nicht in Fozzels angezeigt.

Neue ACF-Felder erfordern einen erfolgreichen Attribut-Abruf, um angezeigt zu werden. Stellen Sie sicher, dass das ACF to REST API-Plugin aktiv ist und die API-Verbindung funktioniert.

## Der Produktdatenabruf funktioniert nicht mehr / ich erhalte Importfehler.

Dies kann durch einen Rate Limiter oder eine Firewall verursacht werden, die Fozzels' API-Anforderungen blockiert. Kontaktieren Sie den Support – Sie können die notwendigen Ausnahmen zur Whitelist Ihres Servers hinzufügen.

## Storefront-URLs führen zu 404-Fehlern.

Dies kann mit Parent/Child-Produktstrukturen passieren. Kontaktieren Sie den Support mit Beispielen – Sie können die URL-Zuordnung beheben.

## Shopware-Texte werden statt Color-Varianten zu Size-Varianten gepusht.

Nach der Pack Parent ID-Aktualisierung kann sich die Synchronisierungs-Ebene geändert haben. Kontaktieren Sie den Support, um das Synchronisierungsziel auf die Farb-/Parent-Variant-Ebene zurückzustellen.

## Mein Shop wird als „in Integration verloren" angezeigt / ich erhalte einen inaktiven Shop-Fehler.

Die ursprüngliche Shop-URL ist nicht mehr aktiv. Duplizieren Sie die betroffenen Flows und wählen Sie während der Duplizierung den korrekten aktiven Shop. Alte Flows können archiviert werden.

## Meine Storefront-URL zeigt auf die falsche Domain (mehrere Storefronts).

Fozzels löst URLs nach Sprache auf, nicht nach Sales Channel, und wählt die erste verfügbare Domain. Dies ist eine bekannte Einschränkung, die verbessert wird.

## Wie handhabt Fozzels mehrere Shopware-Verkaufskanäle?

Inhalte werden einmal pro Produkt pro Sprache generiert, nicht pro Verkaufskanal. Verkaufskanäle können als Katalog-Filter verwendet werden. Dies reduziert Token-Kosten.

## Es gibt keine Bilder in meinem Produkt-Feed / Katalog.

Fehlende Bilder werden oft durch IP-Einschränkungen auf Ihrem Server verursacht. Kontaktieren Sie den Support – Sie können Fozzels' IP-Adressen zur Whitelist hinzufügen.

## Produktbilder werden nicht im Fozzels-Katalog angezeigt.

Dies kann ein Integrationsproblem beim Bildabruf sein. Kontaktieren Sie den Support – Sie werden es überprüfen und auf der Fozzels-Seite beheben.

## Ich erhalte einen Synchronisierungsfehler: kann nicht in Dropdown-Attribute schreiben.

Fozzels kann nur Text in textbasierte Attribute schreiben, nicht in Dropdown-/Select-Felder. Überprüfen Sie den Attributtyp in Ihrem Webshop.

## Wie benenne ich Attribute in Fozzels um?

Gehen Sie zu Attribut-Einstellungen, ändern Sie den Namen im Eingabefeld und speichern Sie. Dies ist eine Anzeigeänderung nur innerhalb von Fozzels.

## Attributnamen werden nach einer PIM-Änderung nicht automatisch in Prompts aktualisiert.

Wenn Sie Attribute in Ihrem PIM umbenennen, kann Fozzels sie als neu behandeln. Benennen Sie das Attribut innerhalb von Fozzels um, um dies zu beheben.

## Inhalte wurden nach Website-Änderungen zu den falschen Produkten synchronisiert.

Fozzels ruft Kataloge nachts ab. Falls Sie größere Änderungen vornehmen, lösen Sie immer einen manuellen Produktabruf aus, um die Richtigkeit der Daten sicherzustellen.

## Ich erhalte einen Fehler „429 Too Many Requests" beim Synchronisieren mit meinem PIM.

Der Rate Limiter Ihres PIM blockiert Anforderungen. Kontaktieren Sie Ihren PIM-Anbieter und den Fozzels-Support, um Fozzels' IP auf die Whitelist zu setzen oder das Anforderungsformat zu beheben.

## Welche Felder kann Fozzels in Katana PIM aktualisieren?

Der Standard-Endpunkt unterstützt: Name, Kurzbeschreibung, Vollbeschreibung, Meta-Title und Meta-Beschreibung. Andere Felder können separate API-Endpunkte erfordern.

## Wie aktiviere ich die LangShop-Integration mit Shopify?

Teilen Sie Screenshots Ihrer LangShop-Einstellungen in Shopify mit dem Fozzels-Team, damit diese Ihre Konfiguration überprüfen und feststellen können, ob eine zusätzliche Einrichtung erforderlich ist.

## Wie synchronisiere ich einen ganzen Batch gleichzeitig neu?

Öffnen Sie den Flow → Batch List → aktivieren Sie „Show all content" → wählen Sie alle Zeilen → Actions → **Re-sync content**. Dies läuft durch die allgemeine Warteschlange.

## Kann ich die Shopify-Integration ohne Datenverlust aktualisieren?

Kontaktieren Sie den Support vor dem Aktualisieren – Sie können die Grundursache untersuchen. Das Aktualisieren verursacht normalerweise keinen Datenverlust, aber das Team sollte dies zuerst überprüfen.

## Shopify Markets wird in Fozzels nicht angezeigt.

Dies wird normalerweise durch API-Einschränkungen in Shopify verursacht – die API-Einstellungen müssen angepasst werden. Kontaktieren Sie den Support oder Ihren Agenturpartner.

## Ich erhalte Generierungsfehler aufgrund großer Bilder (5-MB-Limit).

KI-Modelle haben ein ~5-MB-Bildlimit pro Anforderung. Fozzels konvertiert PNGs automatisch in JPGs. Erwägen Sie, das JPG-Format für Produktbilder zu verwenden.

## Meine mehrsprachige Kategoriestruktur ist falsch (z. B. Tschechisch vs. Deutsch).

Fozzels zeigt möglicherweise die Standard-Sprachen-Kategoriestruktur. Kontaktieren Sie den Support für Anpassungen der mehrsprachigen Kategorienzuordnung.

## Wie oft synchronisiert Fozzels Daten von meinem PIM?

Automatische Produktabrufe läufen nachts nach Mitternacht. Für sofortige Updates lösen Sie einen manuellen Abruf aus.
