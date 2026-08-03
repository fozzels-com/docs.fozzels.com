---
id: '103000395329'
title: 2.5.7. Etwas ist mit Ihrer WooCommerce-Verbindung schief gelaufen?
sidebar_position: 14
slug: /integration-connectivity/something-went-wrong-with-your-woocommerce-connection
description: Keine Sorge – die meisten Verbindungsprobleme lassen sich schnell beheben. Diese Anleitung führt Sie durch die häufigsten Meldungen, die Sie möglicherweise sehen, und zeigt Ihnen genau, was zu tun ist
keywords:
- Abruf
- Datenabruf
---

Keine Sorge – die meisten Verbindungsprobleme lassen sich schnell beheben. Diese Anleitung führt Sie durch die häufigsten Meldungen, die Sie möglicherweise sehen, und zeigt Ihnen genau, was zu tun ist.

##

## Was bedeutet "Verbindungsprobleme erkannt"?

Wenn Sie Ihre WooCommerce-Integration speichern, überprüft Fozzels automatisch, ob alles korrekt eingerichtet ist. Wenn etwas fehlt oder Aufmerksamkeit erfordert, wird eine Meldung angezeigt, die erklärt, was als Nächstes zu tun ist.

##

## Grundlegende Verbindung

- **"Authentifizierung fehlgeschlagen."** Ihre API-Schlüssel sind falsch oder veraltet. Gehen Sie zu Ihrem WooCommerce-Shop → **Einstellungen → Erweitert → REST API**, generieren Sie neue Schlüssel und fügen Sie sie in Fozzels ein.

- **"Zugriff verweigert."** Ihr API-Schlüssel hat nicht die richtigen Berechtigungen. Wählen Sie beim Erstellen des Schlüssels in WooCommerce **Lesen/Schreiben** – nicht nur Lesen.

- **"REST API nicht gefunden."** Überprüfen Sie noch mal die URL, die Sie eingegeben haben. Sie sollte wie `https://yourstore.com` aussehen – ohne zusätzliche Schrägstriche oder Tippfehler.

- **"Kann Ihren Shop nicht erreichen."** Ihr Shop ist möglicherweise offline oder ein Sicherheits-Plugin blockiert den Zugriff. Überprüfen Sie, ob Ihr Shop aktiv ist, und versuchen Sie es erneut.

- **"SSL-Zertifikatfehler."** Das Sicherheitszertifikat Ihres Shops hat ein Problem. Kontaktieren Sie Ihren Hosting-Anbieter, um es zu beheben.

##

## ACF (Advanced Custom Fields)

- **"Beide Plugins sind erforderlich."** Sie benötigen zwei aktive Plugins auf Ihrer WordPress-Website: **Advanced Custom Fields** und **ACF to REST API**. Gehen Sie zu **Plugins → Neu hinzufügen** und installieren Sie beide.

- **"ACF ist aktiv, aber das Connector-Plugin fehlt."** Sie haben ACF installiert, aber Ihnen fehlt das zweite Plugin. Installieren Sie **ACF to REST API** und aktivieren Sie es.

- **"Connector ist aktiv, aber ACF nicht."** Das zweite Plugin ist da, aber ACF selbst läuft nicht. Gehen Sie zu **Plugins** und aktivieren Sie **Advanced Custom Fields**.

- **"Permalink-Struktur ist inkompatibel."** Gehen Sie zu **WordPress → Einstellungen → Permalinks** und wechseln Sie von "Plain" zu etwas anderem – **Beitragsname** funktioniert hervorragend. Speichern und fertig.

- **"ACF-Felder sind über REST API nicht sichtbar."** Öffnen Sie Ihre ACF-Feldgruppe, gehen Sie zu **Gruppeneinstellungen** und schalten Sie **In REST API anzeigen** ein. Vergessen Sie nicht zu speichern.

- **"ACF REST API-Versionsmismatch."** Gehen Sie zu **WordPress → Einstellungen → Permalinks → ACF to REST API** und setzen Sie die Version auf **v3**.

##
WPML (Mehrsprachig)

- **"WPML-Plugin wird nicht erkannt."** Installieren und aktivieren Sie das **WPML Multilingual CMS** Plugin auf Ihrer WordPress-Website. Fügen Sie dann mindestens eine Sprache unter **WPML → Sprachen** hinzu.

- **"WPML ist aktiv, aber keine Sprachen sind konfiguriert."** Sie haben WPML installiert, aber noch keine Sprachen hinzugefügt. Gehen Sie zu **WPML → Sprachen** und fügen Sie die benötigten hinzu.

- **Gerade WPML aktiviert?** Nach der Aktivierung gehen Sie zurück zu **Websites & Stores** und klicken Sie auf **Stores/Websites abrufen**, führen Sie dann **Pull Products** erneut aus. So erfährt Fozzels von Ihren Sprachversionen.

##
Yoast SEO

Yoast SEO benötigt zwei Dinge, um mit Fozzels zu funktionieren: das Plugin **Yoast SEO** und unser **Fozzels Connector-Plugin**. Sie können den Connector von **app.fozzels.com** herunterladen.

- **"Beide Plugins sind erforderlich."** Keines der Plugins ist aktiv. Installieren und aktivieren Sie **Yoast SEO** und das **Fozzels Connector-Plugin** in WordPress.

- **"Connector-Plugin ist nicht installiert."** Yoast SEO läuft, aber unser Connector fehlt. Laden Sie es von **app.fozzels.com** herunter und aktivieren Sie es in **Plugins**.

- **"Yoast SEO ist nicht aktiv."** Der Connector ist da, aber Yoast SEO läuft nicht. Gehen Sie zu **Plugins** und aktivieren Sie **Yoast SEO**.
- **"Ihr Connector-Plugin ist veraltet."** _(nur eine Heads-up)_ Alles funktioniert noch, aber wir empfehlen, den Connector auf die neueste Version zu aktualisieren, um die beste Erfahrung zu erzielen. Laden Sie ihn von **app.fozzels.com** herunter.
**Gerade Yoast SEO aktiviert?** Führen Sie **Pull Stores/Websites** und **Pull Products** erneut aus, damit Fozzels Ihre SEO-Felder laden kann.

* * *

## AIOSEO (All in One SEO)

- AIOSEO benötigt auch zwei Dinge: das Plugin **All in One SEO** und unseren Connector **AIOSEO API Sync by Fozzels**. Laden Sie den Connector von **app.fozzels.com** herunter.

- **"Beide Plugins sind erforderlich."** Keines der Plugins ist aktiv. Installieren und aktivieren Sie beide in WordPress.

- **"Connector-Plugin ist nicht installiert."** AIOSEO läuft, aber unser Connector fehlt. Laden Sie ihn von **app.fozzels.com** herunter und aktivieren Sie ihn.

- **"AIOSEO ist nicht aktiv."** Der Connector ist da, aber AIOSEO läuft nicht. Gehen Sie zu **Plugins** und aktivieren Sie **All in One SEO**.

- **"Ihr Connector-Plugin ist veraltet."** _(nur eine Heads-up)_ Alles funktioniert noch, aber wir empfehlen, den Connector zu aktualisieren. Laden Sie die neueste Version von **app.fozzels.com** herunter.

**Gerade AIOSEO aktiviert?** Führen Sie **Pull Products** erneut aus, damit Fozzels Ihre AIOSEO-Felder laden kann.

* * *

## Yoast SEO und AIOSEO gleichzeitig nutzen?

Diese beiden Plugins funktionieren nicht zusammen – weder in Fozzels noch in WordPress. Wählen Sie eines und deaktivieren Sie das andere auf beiden Seiten. Nicht sicher, welches Sie wählen sollen? Bleiben Sie bei dem, das Sie bereits in Ihrem Shop verwenden.

* * *

## Immer noch nicht weiter?

Wenn nichts davon geholfen hat, kontaktieren Sie uns unter **[support@fozzels.com](mailto:support@fozzels.com)** oder öffnen Sie ein Ticket im Help Center. Ein Screenshot der Fehlermeldung hilft uns sehr, das Problem schnell zu beheben!
