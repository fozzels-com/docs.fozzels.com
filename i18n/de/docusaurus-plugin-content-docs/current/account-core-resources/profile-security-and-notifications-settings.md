---
id: '103000367838'
title: 1.2.1. Profil-, Sicherheits- und Benachrichtigungseinstellungen
sidebar_position: 2
slug: /account-core-resources/profile-security-and-notifications-settings
description: Dieser Abschnitt beschreibt die Funktionen zur Verwaltung des Benutzerkontos, der Sicherheitsvoreinstellungen, des Benachrichtigungsverhaltens und der persönlichen API-Schlüsselkonfiguration in Fo
---

Dieser Abschnitt beschreibt die Funktionen zur Verwaltung des Benutzerkontos, der Sicherheitsvoreinstellungen, des Benachrichtigungsverhaltens und der persönlichen API-Schlüsselkonfiguration in Fozzels.
Um den Bereich „Einstellungen" zu öffnen, verwenden Sie den folgenden Link: `https://app.fozzels.com/user/settings/profile`.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Tc2cIujPZyK0-BRWvFlDJzAKwvlb1mCbBA.png)

### 1.1. Benutzereinstellungen

Der Bereich „Einstellungen" bietet Zugriff auf Schlüsselkonfigurationsoptionen, mit denen Benutzer ihr persönliches Konto, Sicherheitsvoreinstellungen und Funktionen verwalten können, die kollaborative Workflows unterstützen.

#### 1.1.1. Profileinstellungen

Menü → Einstellungen → Profil. Diese Seite wird standardmäßig beim Zugriff auf das Menü „Einstellungen" geöffnet. Damit können Benutzer ihre grundlegenden Profil- und Unternehmensinformationen bearbeiten.

Bearbeitbare Felder sind: der Anzeigename des Benutzers, die E-Mail-Adresse, der Unternehmensname, die Telefonnummer (optional) und eine kurze Beschreibung im Feld „Über".
Um Änderungen zu übernehmen, klicken Sie auf „Speichern".
Das System wendet alle Änderungen auf einmal an. Es ist wichtig zu beachten, dass das System keine Warnung anzeigt, wenn Sie mit ungespeicherten Änderungen fortfahren, daher müssen Benutzer manuell speichern.
Die E-Mail-Adresse muss in einem gültigen Format vorliegen.
Um das Profilbild zu aktualisieren, klicken Sie auf das Avatar-Bild, um das Upload-Fenster zu öffnen. Unterstützte Formate sind JPG und PNG.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/n4NwWmNOPgAtHdMdd2XYw8IeaKeefh4uKw.png)

#### 1.1.2. Sicherheitseinstellungen

Menü → Einstellungen → Sicherheit.
Diese Seite wird zum Aktualisieren des Kontokennworts verwendet.

Die bearbeitbaren Felder sind „Aktuelles Passwort", „Neues Passwort" und „Neues Passwort bestätigen".
Eingabeverhalten: Alle Eingabewerte werden maskiert (als Punkte angezeigt), und Feldwerte werden nicht gespeichert oder zwischengespeichert.
**Klicken Sie auf „Aktualisieren"**, um die Änderungen anzuwenden.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/4_vsO-7JKhQeaATz0rzs8X97nn-JDns8Iw.png)
Erfolgreiche Aktualisierung: Wenn das neue Passwort akzeptiert wird, wird oben auf dem Bildschirm eine grüne Erfolgsbenachrichtigung angezeigt, und das Passwort wird sofort für zukünftige Anmeldungen aktualisiert.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Lv9g42HJ-ap_ArFPBPd0525XLLSRHyDzCA.png)
Fehlerbehandlung: Wenn das aktuelle Passwort falsch ist oder das neue Passwort und die Bestätigung nicht übereinstimmen, wird eine Fehlermeldung angezeigt. In diesem Fall werden alle Passwortfelder automatisch gelöscht, und der Benutzer muss die Informationen von Grund auf erneut eingeben.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/6niT9qGiupLPyM0ijzwSXLeAhLO-NYguaA.png)

#### 1.1.3. Benachrichtigungseinstellungen

Menü → Einstellungen → Benachrichtigungen. Verwenden Sie diesen Abschnitt, um E-Mail-Benachrichtigungen zu verwalten.

Dieser Abschnitt enthält zwei Kontrollkästchen:

-   Fozzels-E-Mails zulassen: Wenn nicht aktiviert, wird keine produktbezogene E-Mail-Kommunikation (z. B. Updates, Systembenachrichtigungen) gesendet. Wenn aktiviert, akzeptiert der Benutzer, diese E-Mails zu erhalten.

-   Guthabenbenachrichtigungen erhalten: Wenn nicht aktiviert, wird keine E-Mail-Kommunikation gesendet. Wenn aktiviert, akzeptiert der Benutzer, Benachrichtigungen zu erhalten, wenn sein Guthaben 0 oder weniger erreicht, mit einer Erinnerung zum Aufladen, um die Arbeit fortzusetzen.
**Klicken Sie auf „Aktualisieren"**, um die Voreinstellungen zu speichern.

![](/img/kb/account-core-resources/profile-security-and-notifications-settings/JuH6V-gxtu1SYR1gzZ0qfO6fSEuVDSSVxQ.png)
1.1.4. OpenAI-Token-Einstellungen

Menü → Einstellungen → OpenAI Token. Dieser Abschnitt wird zum Verbinden und Verwalten des OpenAI API-Schlüssels für Text- und Bildgenerierung verwendet.

Das bearbeitbare Feld ist „Token", wo Sie Ihren persönlichen oder unternehmensweiten OpenAI API-Schlüssel eingeben.
Pro Konto kann jeweils nur ein Token gespeichert werden.
Das Eingabefeld ist Klartext, was bedeutet, dass das Token beim Eingeben sichtbar ist und nach dem Speichern sichtbar bleibt.
Modelliste: Nach dem Speichern eines gültigen Tokens wird unten die Liste der verfügbaren OpenAI-Modelle angezeigt.
Jedes Modell enthält seinen Namen und Status (z. B. aktiviert, deaktiviert, ungültig).
**Verwenden Sie** die Schaltfläche **Aktualisieren**, um diese Liste bei Bedarf zu aktualisieren.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/BR86j8Sx5F-7Oh8IQl62gSgp1Y-WnINnHQ.png)
Erfolgreiches Speichern: Klicken Sie auf „Speichern", um das Token einzureichen. Wenn das Token gültig ist, bestätigt eine grüne Benachrichtigung die Aktualisierung, und die Modelliste wird entsprechend geladen.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Ex-tA3z01sWbqI0QlvqI_o7NICSECMzMRg.png)
Token-Validierungshinweise: Beim Eingeben eines Tokens können verschiedene Probleme auftreten, einschließlich ungültiges Format, abgelaufene oder widerrufene Tokens oder Backend-Validierungsfehler. Wenn das Token nicht gültig ist oder nicht überprüft werden kann, zeigt das System eine entsprechende Fehlerbenachrichtigung an (z. B. „Token kann nicht validiert werden").
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/AAyYCYEC9SJuztUVuBCtVy_paCUppxN8iA.png)
In allen Fehlerfällen wird das Token nicht gespeichert und das Eingabefeld wird automatisch gelöscht.
