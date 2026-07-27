---
id: '103000395334'
title: 2.5.8. Diagnose Ihrer WooCommerce-Verbindung in Fozzels
sidebar_position: 15
slug: /integration-connectivity/diagnosing-your-woocommerce-connection-in-fozzels
description: >-
  Wenn Sie ein Banner „Verbindungsprobleme erkannt" nach dem Speichern Ihrer WooCommerce-Integration sehen, hilft Ihnen dieser Artikel zu verstehen, was jede Meldung bedeutet a
---

#

Wenn Sie ein Banner **„Verbindungsprobleme erkannt"** nach dem Speichern Ihrer WooCommerce-Integration sehen, hilft Ihnen dieser Artikel, zu verstehen, was jede Meldung bedeutet und wie Sie das Problem beheben können.

##
Wie die Diagnose funktioniert

Jedes Mal, wenn Sie Ihre Integration speichern, überprüft Fozzels automatisch die Verbindung zu Ihrem WooCommerce-Store und den Status aller aktivierten Plugins. Wenn etwas fehlt oder falsch konfiguriert ist, erhalten Sie eine Benachrichtigung mit einer Beschreibung des Problems und den Schritten zur Behebung.

Es gibt drei Arten von Benachrichtigungen:

-   **Fehler** — etwas blockiert die Verbindung. Die Integration funktioniert nicht, bis dies behoben ist.
-   **Warnung** — die Integration kann funktionieren, aber etwas kann Probleme verursachen oder die Funktionalität einschränken.
-   **Hinweis** — Informationsmeldung, keine Maßnahmen sind erforderlich, aber empfohlen.

##
Basis-Verbindungsmeldungen

Diese Meldungen erscheinen unabhängig davon, welche Plugins Sie aktiviert haben.

-   **„Authentifizierung fehlgeschlagen. Überprüfen Sie Ihren Customer Key und Customer Secret."**
    Ihre API-Anmeldedaten sind falsch oder wurden seit dem Kopieren neu generiert. Gehen Sie zu **WooCommerce → Einstellungen → Erweitert → REST API**, generieren Sie die Schlüssel neu und fügen Sie sie in Fozzels ein.

-   **„Zugriff verweigert. Ihr API-Schlüssel benötigt Lese-/Schreibberechtigung."**
    Der API-Schlüssel wurde mit Read-only-Zugriff erstellt. Fozzels benötigt Write-Zugriff, um generierten Inhalt zu Ihrem Store zu übertragen. Generieren Sie den Schlüssel neu und wählen Sie **Lesen/Schreiben** im Dropdown Berechtigungen.

-   **„REST API nicht gefunden. Überprüfen Sie Ihre Store-URL."**
    Die WooCommerce REST API konnte nicht unter der angegebenen URL erreicht werden. Stellen Sie sicher, dass Sie die richtige Store-URL eingegeben haben (z. B. `https://yourstore.com`) und dass die WooCommerce REST API aktiviert ist.

-   **„Kann Ihren Store nicht erreichen. Überprüfen Sie die URL, Serverstatus oder Firewall-Einstellungen."**
    Fozzels konnte keine Verbindung herstellen. Ihr Store ist möglicherweise offline, die URL kann falsch sein oder eine Firewall oder ein Sicherheits-Plugin kann externe API-Anfragen blockieren.

-   **„SSL-Zertifikatfehler. Stellen Sie sicher, dass Ihr Store ein gültiges HTTPS-Zertifikat verwendet."**
    Das SSL-Zertifikat Ihres Stores ist ungültig oder abgelaufen. Kontaktieren Sie Ihren Hosting-Anbieter, um das Zertifikat zu erneuern oder zu ersetzen.

##
ACF (Advanced Custom Fields)

Diese Meldungen erscheinen, wenn der Umschalter **Enable ACF** in Fozzels aktiviert ist.

-   **„Sowohl „Advanced Custom Fields" als auch „ACF to REST API"-Plugins sind erforderlich. Stellen Sie sicher, dass beide installiert und aktiv sind."**
    Keines der Plugins wird auf Ihrer WordPress-Site erkannt. Installieren und aktivieren Sie beide **Advanced Custom Fields** und **ACF to REST API** in Ihrem WordPress Admin unter **Plugins → Neu hinzufügen**.

-   **„„Advanced Custom Fields" ist aktiv, aber das „ACF to REST API"-Plugin ist nicht installiert."**
    ACF ist installiert, aber das Connector-Plugin fehlt. Installieren und aktivieren Sie das Plugin **ACF to REST API**, um Fozzels zu ermöglichen, Ihre benutzerdefinierten Felder zu lesen.

-   **„„ACF to REST API"-Plugin ist aktiv, aber „Advanced Custom Fields" ist nicht aktiv."**
    Das Connector-Plugin ist installiert, aber ACF selbst ist nicht aktiv. Gehen Sie zu **Plugins** in Ihrem WordPress Admin und aktivieren Sie **Advanced Custom Fields**.

-   **„Permalink-Struktur ist nicht mit REST API kompatibel."**
    Ihre WordPress-Permalink-Struktur ist auf **Plain** eingestellt, was den REST API-Zugriff unterbricht. Gehen Sie zu **WordPress → Einstellungen → Permalinks** und wählen Sie eine andere Struktur als Plain (z. B. **Post-Name**). Speichern Sie die Änderungen.

-   **„ACF-Felder sind über die REST API nicht sichtbar."**
    Ihre ACF-Feldgruppe ist nicht für die REST API freigelegt. Gehen Sie zu **ACF → Feldgruppen**, öffnen Sie die relevante Gruppe, navigieren Sie zu **Gruppeneinstellungen** und aktivieren Sie sowohl **Aktiv** als auch **In REST API anzeigen**.

-   **„ACF REST API-Versionsfehler. Version v3 ist erforderlich."**
    Wenn Sie das Plugin **ACF to REST API** verwenden, muss es auf v3 eingestellt sein. Gehen Sie zu **WordPress → Einstellungen → Permalinks → ACF to REST API** und stellen Sie **Request Version** auf **v3**.

##
WPML (Mehrsprachig)

Diese Meldungen erscheinen, wenn der Umschalter **Enable WPML** in Fozzels aktiviert ist.

-   **„WPML-Plugin wird auf Ihrer WordPress-Site nicht erkannt."**
    Das WPML-Plugin ist nicht installiert oder nicht aktiv. Installieren und aktivieren Sie **WPML Multilingual CMS** auf Ihrer WordPress-Site und konfigurieren Sie dann mindestens eine zusätzliche Sprache unter **WPML → Sprachen**.

-   **„WPML ist aktiv, aber keine Sprachen sind konfiguriert."**
    WPML ist installiert, aber keine zusätzlichen Sprachen wurden konfiguriert. Gehen Sie zu **WPML → Sprachen** und fügen Sie mindestens eine Sprache zu Ihrem Store hinzu.

-   **Führen Sie nach dem Aktivieren von WPML Pull Stores/Websites und Pull Products erneut aus.**
    Dies ist erforderlich, damit Fozzels alle Sprach-Lokale erkennen und die korrekte Produktversion für jede Sprache laden kann. Ohne erneutes Ausführen des Pull werden neue Lokale nicht im System angezeigt.

* * *

## Yoast SEO

Diese Meldungen erscheinen, wenn der Umschalter **Yoast WooCommerce SEO** in Fozzels aktiviert ist. Die Yoast SEO-Integration erfordert zwei aktive Plugins auf Ihrer WordPress-Site: **Yoast SEO** und das **Yoast SEO WooCommerce REST API by Fozzels** Connector-Plugin.

> Sie können das Fozzels Connector-Plugin von **app.fozzels.com** oder aus der Setup-Anleitung in der Knowledge Base herunterladen.

* * *

-   **„Sowohl „Yoast SEO" als auch „Yoast SEO WooCommerce REST API by Fozzels"-Plugins sind erforderlich."**
    Keines der Plugins wird erkannt. Installieren und aktivieren Sie beide in Ihrem WordPress Admin Panel.

-   **„„Fozzels SEO Fields REST API for WooCommerce"-Plugin ist nicht installiert oder nicht aktiv."**
    Yoast SEO ist aktiv, aber das Fozzels Connector-Plugin fehlt. Laden Sie es von **app.fozzels.com** herunter und installieren Sie es, aktivieren Sie es dann in **Plugins**.
-   **„Yoast SEO ist nicht aktiv."**
    Das Connector-Plugin ist installiert, aber Yoast SEO selbst ist nicht aktiv. Gehen Sie zu **Plugins** und aktivieren Sie **Yoast SEO**.

-   **„Ihr „Fozzels SEO Fields REST API for WooCommerce"-Plugin ist veraltet."**
    Sie verwenden eine ältere Version des Connector-Plugins. Die Integration funktioniert weiterhin, aber wir empfehlen, auf die neueste Version zu aktualisieren, um verbesserte Leistung und Kompatibilität zu erhalten. Laden Sie die neueste Version von **app.fozzels.com** herunter.

-   **Führen Sie nach dem Aktivieren von Yoast SEO Pull Stores/Websites und Pull Products erneut aus.**
    Dies ist erforderlich, um `yoast_title`, `yoast_meta_description` und `yoast_focus_keyword` Attribute in Ihren Fozzels-Katalog zu laden.

* * *

## AIOSEO (All in One SEO)

Diese Meldungen erscheinen, wenn der Umschalter **AIOSEO** in Fozzels aktiviert ist. Die AIOSEO-Integration erfordert zwei aktive Plugins: **All in One SEO** und das **AIOSEO API Sync by Fozzels** Connector-Plugin.

> Sie können das Fozzels Connector-Plugin von **app.fozzels.com** oder aus der Setup-Anleitung in der Knowledge Base herunterladen.

-   **„Sowohl „All in One SEO" als auch „AIOSEO API Sync"-Plugins sind erforderlich."**
    Keines der Plugins wird erkannt. Installieren und aktivieren Sie beide in Ihrem WordPress Admin Panel.

-   **„„All in One SEO" ist aktiv, aber das „AIOSEO API Sync"-Plugin ist nicht installiert."**
    AIOSEO ist aktiv, aber das Fozzels Connector-Plugin fehlt. Laden Sie es von **app.fozzels.com** herunter und installieren Sie es, aktivieren Sie es dann in **Plugins**.

-   **„„AIOSEO API Sync"-Plugin ist aktiv, aber „All in One SEO" ist nicht aktiv."**
    Das Connector-Plugin ist installiert, aber AIOSEO selbst ist nicht aktiv. Gehen Sie zu **Plugins** und aktivieren Sie **All in One SEO**.

-   **„Ihr „AIOSEO API Sync"-Plugin ist veraltet."**
    Sie verwenden eine ältere Version des Connector-Plugins. Die Integration funktioniert weiterhin, aber wir empfehlen, auf die neueste Version zu aktualisieren. Laden Sie sie von **app.fozzels.com** herunter.

-   **Führen Sie nach dem Aktivieren von AIOSEO Pull Products erneut aus.**
    Dies ist erforderlich, um `_aioseo_title`, `_aioseo_description` und andere AIOSEO-Attribute in Ihren Fozzels-Katalog zu laden.

* * *

## Konflikt: Yoast SEO und AIOSEO

**„Sowohl Yoast SEO als auch All in One SEO sind gleichzeitig aktiv. Dies wird zu Konflikten führen. Bitte deaktivieren Sie eines davon, um fortzufahren."**

Yoast SEO und AIOSEO können nicht gleichzeitig verwendet werden — in Fozzels oder auf Ihrer WordPress-Site. Wählen Sie ein SEO-Plugin und deaktivieren Sie das andere auf beiden Seiten.

* * *

## Haben Sie noch Probleme?

Wenn Sie die obigen Schritte befolgt haben und das Problem weiterhin besteht, wenden Sie sich bitte an unser Support-Team unter **[support@fozzels.com](mailto:support@fozzels.com)** oder reichen Sie ein Ticket über das Help Center ein. Schließen Sie einen Screenshot der Fehlermeldung und Ihrer Integrationseinstellungen an, um uns zu helfen, Sie schneller zu unterstützen.
