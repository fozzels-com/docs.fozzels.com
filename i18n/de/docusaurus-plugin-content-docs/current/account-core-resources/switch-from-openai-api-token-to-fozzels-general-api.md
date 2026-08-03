---
id: '103000357927'
title: 1.4.1. Wechsel vom OpenAI API-Token zur allgemeinen Fozzels-API
sidebar_position: 6
slug: /account-core-resources/switch-from-openai-api-token-to-fozzels-general-api
description: Wir haben die Art geändert, wie Fozzels Zahlungen für „Token" von den KI-Modellen handhabt. Wir bitten alle unsere Benutzer, diese Einstellung vor dem 1. August 2025 zu ändern. Bitte
---

Wir haben die Art geändert, wie Fozzels Zahlungen für „Token" von den KI-Modellen handhabt.

Wir bitten alle unsere Benutzer, diese Einstellung vor dem 1. August 2025 zu ändern.

Bitte nehmen Sie sich 10 Minuten Zeit, um diese Einstellung in Ihrem Fozzels-Konto zu ändern.

Inhaltsverzeichnis:

1.  Hintergrund
2.  Änderung
3.  Vorteile
4.  ## Was Sie Schritt für Schritt tun müssen

-   ### Zahlung einrichten

-   ### Entfernen Sie Ihren aktuellen OpenAI-Schlüssel

5.  ### Fertig

## Warum?

Fozzels begann damit, automatisch Inhalte für Sie mit den Sprachmodellen von OpenAI (derzeit GPT-4o) zu generieren.

Nach der Einrichtung eines neuen Fozzels-Kontos baten wir unsere Benutzer, auch ein OpenAI-Konto einzurichten, ihre Kreditkartendaten hinzuzufügen, einen OpenAI API-Schlüssel zu erstellen und diesen Schlüssel in Fozzels zu kopieren und einzufügen.

Das funktionierte alles sehr gut - hatte aber einige Nachteile:

1.  Es würde länger dauern, bis Benutzer loslegen könnten, da sie auch ein Konto bei OpenAI öffnen mussten und etwas „Trickreiches" mit dem Kopieren und Einfügen von API-Schlüsseln tun mussten.
2.  Neue OpenAI-Konten sind in der Nutzung begrenzt (Rate Limits usw.), daher konnten Fozzels-Benutzer nicht von der Batch-Erstellung von Produktinhalten in großen Mengen profitieren.
3.  Neue OpenAI-Konten sind in Modellen begrenzt; daher konnten Benutzer Fozzels nicht immer zur Generierung von KI-Bildern verwenden, zum Beispiel.
4.  Wir konnten unseren Benutzern nicht einfach Zugriff auf KI-Modelle von anderen Anbietern wie Google (Gemini), Anthropic (Claude) oder xAi (Grok) anbieten.

## Änderung

Um diese Probleme zu lösen, hat Fozzels die Art geändert, wie wir Zahlungen für KI-„Token" handhaben.

Anstatt alle KI-Anbieter separat zu bezahlen, zahlen Sie jetzt direkt an Fozzels für die KI-Nutzung - und Fozzels bezahlt Ihre KI-Nutzung bei den KI-Anbietern für Sie. Fozzels verwendet [Stripe](https://stripe.com/nl/payments), einen der größten Online-Zahlungsanbieter der Welt, um finanzielle Buchungen zu bearbeiten.

## Vorteile

Dies hat die folgenden Vorteile:

1.  Ein schnelleres und einfacheres Onboarding für neue Fozzels-Benutzer;
2.  Sie können immer Inhalte für viele Produkte generieren (keine Kontobeschränkungen mehr), da Fozzels bei den KI-Anbietern „unbegrenzte" Konten hat;
3.  Sie können Bildgenerierungsmodelle in Fozzels verwenden;
4.  Sie können zwischen mehr KI-Modellen als OpenAI wählen (Google Gemini 2.5 Flash; xAi Grok 3; Anthropic Claude 4 Sonnet - und mehr werden folgen);
5.  Sie können jetzt „Web-Suche" aktivieren, was bedeutet, dass Sie die KI im Internet nach fehlenden Daten usw. suchen lassen und diese zur Generierung von Produktdaten oder Beschreibungen verwenden können.

Sie können derzeit aus den folgenden KI-Modellen wählen:

![Alle in Fozzels verfügbaren KI-Modelle](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/AU9GwQ3QT_bYnbdVWdVFZXcOrtjOBOSAAQ.jpg)

##

## Was Sie Schritt für Schritt tun müssen

### A) Zahlung einrichten

1.  Bitte melden Sie sich bei Ihrem Fozzels-Konto an und klicken Sie auf Ihr **Benutzerbild** oben rechts.
2.  Klicken Sie im Dropdown-Menü auf **Einstellungen**.
3.  Klicken Sie im linken Einstellungsmenü auf [**Zahlungen**](https://app.fozzels.com/user/settings/payments).
4.  Sie sehen den folgenden Bildschirm. Klicken Sie auf die Schaltfläche „**Credit jetzt aufladen**".
    ![Fozzels-Zahlungsbildschirm](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/tcgrCp0izWkeJxIjlmzD6xS5OZByebIyHg.png)

5.  Es wird ein Popup-Fenster angezeigt, das einen Betrag anfordert. Geben Sie den Betrag ein, den Sie zu Ihrem Guthaben hinzufügen möchten. Der Standard ist 50 €, aber Sie können dies ändern, wenn Sie möchten. Klicken Sie dann auf die Schaltfläche „**Jetzt aufladen**".
    ![Popup zum Aufladen von Credits](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/drZn1vvSyjH8rRfhLn8mWW_HuhAo2tTs-w.png)

6.  Sie werden zur Stripe-Zahlungsseite weitergeleitet, wo Sie Ihre Zahlungsdetails eingeben können.
    Bitte beachten Sie, dass keine Zahlungsdetails bei Fozzels gespeichert werden, nur bei Stripe.
    Sie können die folgenden Zahlungsmethoden verwenden: iDEAL, Kreditkarten (VISA, American Express, Mastercard, Discover), Amazon Pay, Paypal, Revolut Pay und Bancontact.
    ![Stripe-Zahlungsbildschirm](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/BRJcSSvdJ5LBFl1zVDZ0UyhLPh4URCTO1w.png)

7.  Bitte beachten Sie - wenn diese Zahlung für Ihr Unternehmenskonto ist - auch Ihren **Unternehmensname** und **USt-ID** einzugeben.
    ![USt-Info auf Stripe hinzufügen](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/ZlO4Se712OMvnGl-aiWPNytLfwhRuRKerQ.png)

8.  Nach erfolgreicher Zahlung werden Sie zu Fozzels zurückgeleitet und können Ihr aktuelles Guthaben auf der Seite „Zahlungen" anzeigen.
    ![Aktualisiertes Guthaben auf der Seite Zahlungen](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/Own2E9SNmWHQ1UHAoPh9oA1cXL0Sz8BkLQ.png)

9.  Anschließend [_optional_], wenn Sie Ihr Kontoguthaben automatisch „aufladen" möchten, wenn Ihr Guthaben einen niedrigen Betrag erreicht, können Sie dies einstellen, indem Sie auf die Schaltfläche „**Credit-Aufladung konfigurieren**" klicken. Auf diese Weise wird die Inhaltsgenerierung über die von Ihnen eingerichteten Flows nie unterbrochen.
    Geben Sie die Beträge ein, die Sie festlegen möchten, aktivieren Sie das Kontrollkästchen „_Ja, meine Karte automatisch aufzuladen, wenn mein Guthaben unter einen Schwellenwert fällt_" und klicken Sie auf die Schaltfläche **Speichern**.
    ![Popup mit Einstellungen für automatisches Reload](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/3BrEoNMQNNw7wOSkoZGXdLG3l9cyJwGeQ.png)

### B) Entfernen Sie Ihren aktuellen OpenAI-Schlüssel

Nachdem Sie Ihre Zahlungsdetails eingerichtet haben, denken Sie daran, den aktuellen OpenAI API-Schlüssel aus Ihrem Konto zu **entfernen**.
Auf diese Weise werden in Fozzels unsere eigenen API-Schlüssel für alle KI-Anbieter verwendet.

1.  Um dies zu aktivieren, klicken Sie im linken Menü auf „**OpenAI Token**".
    ![Fozzels-Einstellungsmenü](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/zFcW_bCeIp8XohHkBB2EQ8E7ZbEkvU1xTg.png)

2.  Wählen Sie Ihren Token im Feld Token aus, **löschen Sie alles im Feld** und klicken Sie auf die Schaltfläche **Speichern**.
    ![Fozzels OpenAI API-Token-Feld](/img/kb/account-core-resources/switch-from-openai-api-token-to-fozzels-general-api/z6eQMCzEGgNDu4KJsBT_QlGBwDiOAHKsTg.png)

Du bist jetzt bereit.

Tada! Gut gemacht.
Danke und viel Spaß mit Fozzels.
