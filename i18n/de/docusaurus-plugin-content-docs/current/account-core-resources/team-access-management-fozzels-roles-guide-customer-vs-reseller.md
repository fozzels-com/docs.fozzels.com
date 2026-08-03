---
id: '103000385518'
title: '1.2.2. Teamzugriffsverwaltung: Leitfaden zu Fozzels-Rollen (Kunde vs. Reseller)'
sidebar_position: 3
slug: /account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller
description: Wir verstehen, dass die Delegierung des Zugriffs auf Integrationen verwirrend sein kann. Wenn Sie nach einem sicheren und effizienten Weg suchen, um Kollegen (Vermarkter,
---

Wir verstehen, dass die Delegierung des Zugriffs auf Integrationen verwirrend sein kann. Wenn Sie nach einem sicheren und effizienten Weg suchen, um Kollegen (Vermarkter, Content Manager) die Berechtigung zu gewähren, mit Ihren Daten zu arbeiten, ist diese Anleitung genau das, was Sie brauchen!

Dieses Dokument erklärt, wie wir die Rollen **Kunde** und **Reseller** verwenden, um den Zugriff in Ihrem Team zu verwalten.
**Wichtiger Hinweis zu Rollen:** Die Zuweisung der Reseller-Rolle ist keine Aktion, die Sie selbst durchführen können. Um diese Rolle zu erhalten, **müssen Sie sich mit einer entsprechenden Anfrage an Fozzels-Administratoren wenden**.

## 1\. Rollen: Der Schlüssel zu Ihrer Verwaltung

### **Kunde**: Ressourceninhaber

Dies ist Ihr Primärkonto, das alle konfigurierten Integrationen, erstellten Flows und Katalogdaten enthält.

Sie haben das Recht, den Reseller-Zugriff jederzeit zu **widerrufen** ('Widerrufen').

### **Reseller**: Delegierter Manager

Diese Rolle ist ideal für Ihre verwaltenden Kollegen, da sie Zugriff auf die Registerkarte **„Kunden"** zur Verbindungsverwaltung bietet.

## 2\. Wie Sie eine Verbindung herstellen

Die Verbindung zwischen Konten wird über eine Einladung hergestellt, die **immer vom Reseller** über die Registerkarte „Kunden" eingeleitet wird.

###     Szenario A: „Mein Konto ist bereits eingerichtet; wie füge ich einen Kollegen hinzu?"

(Konto mit Integrationen vorhanden -> Reseller wird für den Zugriff benötigt)

1.  **Rollen- und Kontovorbereitung:** Ihr Kollege erstellt ein Konto und erhält die Reseller-Rolle (durch Kontaktaufnahme mit Fozzels-Administratoren).

2.  **Auswahlwerkzeug für Einladung (Reseller-Aktion):** Der Reseller navigiert zur Registerkarte **„Kunden"** und wählt **"Neue Einladung"** aus.
    ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/8_OheAOV-zWzEO2V2EbgtnGCGEONZXP7QA.png)

3.  **Einleitung der Einladung (Reseller-Aktion):**

-   Der Reseller gibt die E-Mail-Adresse Ihres Kundenkontos in das Popup **„Reseller-Einladung senden"** ein und klickt auf **„Einladung senden"**.

    -   **Ergebnis:** Der Reseller sieht die Benachrichtigung "Erfolg". In der Tabelle „Kunden" wird der Datensatz für Ihr Konto als **ausstehend** angezeigt (Verifiziert: ❌). Der Reseller erhält auch eine E-Mail, die bestätigt, dass die Anfrage gesendet wurde.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/McV18IopZUnGCcH9fQEhTVk0aHKc7cThOQ.png)

4.  **Finalisierung und Aktivierung (Kundenaktionen):**

-   Sie (der Kunde) erhalten eine E-Mail mit einer Zugriffwarnung und klicken auf **"Einladung akzeptieren"**.

    -   **Ergebnis:** Das Symbol **Kundenkontrolle** wird in Ihrem Header angezeigt. Der Reseller aktualisiert die Seite, sieht **✅ Verifiziert** und die Schaltfläche **"Darstellen"**.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/iYodO_1wbFDJx3vZm5EpofGG_fL8OsFqwQ.png)

![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/GPhuYGwM2TMwRMJ2Y-rOzT4Cv6QK-bQ0iw.png)

![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/mKMQyhtodo5204bprF1OVIW-uYbgxPYJXw.png)

![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/27tRV3zXZo-Sd-xnfdD2Npqj9U3_8fWR5A.png)

###
![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/qLafAoXrVGuUXACbhMPMEvQ7Gjf7Xg2kCw.png)

Szenario B: „Wir sind ein neues Team; wie sollten wir anfangen?"

(Reseller wird zuerst erstellt -> Ein neues Kundenkonto für die Integration wird als nächstes erstellt)

1.  **Team-Konto (Reseller):** Ein Teammitglied erhält die Reseller-Rolle.

2.  **Kundenerstellung (Reseller-Aktion):**

    -   Der Reseller wählt **"Neuer Kunde"** auf der Registerkarte „Kunden" aus.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/oYIs49AncfmABn90cBQtHIGuXk2HrbrVxw.png)

-   Im Popup **„Neue Kundeneinladung senden"** füllt der Reseller die Daten (Name, Unternehmensname, E-Mail) aus und klickt auf **„Einladung senden"**.

    -   **Ergebnis:** Ein neuer Datensatz wird in der Tabelle „Kunden" mit einer **„Ausstehende Einladung"**-Beschriftung angezeigt.
        ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/l1eCmd-3F6KsiAofXve7As354yDBG0xTfg.png)

3.  **Kundenkontoaktivierung (Aktion Neuer Benutzer):**

-   Der neue Benutzer erhält die E-Mail **"Treten Sie heute unserer neuen Fozzels-Plattform bei!"**.

-   Der Benutzer klickt auf **"Jetzt beitreten"**, wird zu Fozzels weitergeleitet, **legt ein Passwort fest** und **muss die Kontoeinrichtung abschließen**.

4.  **Arbeitsbeginn:** Sobald der neue Benutzer die Einrichtung abschließt, wird sein Konto dem Reseller zur Verfügung gestellt. Der Reseller sieht die neuen Kundendaten zusammen mit den Schaltflächen **"Darstellen"** und **"Löschen"**.
    ![](/img/kb/account-core-resources/team-access-management-fozzels-roles-guide-customer-vs-reseller/nyFMT1WCwU8yZ1p_dG224AX8Ogyy1rLBlg.png)

## 3\. Schlüsselwerkzeug: Darstellen (Vollständiger Zugriff und Verwaltung)

-   **Aktivierung:** Durch Klicken auf **"Darstellen"** wird der Reseller ins Kundenkonto umgeleitet.

-   **Visueller Indikator:** Die Systemkopfzeile wird **schwarz** (oder ändert das Aussehen), wenn der Reseller im Zugriffsmodus arbeitet.

-   **Ausfahrt:** Der Reseller kann zu seinem eigenen Konto über den Link **„Darstellung beenden"** zurückkehren.

##
4\. Wichtiger Abschnitt: Verantwortung und Kontrolle

-   **Delegation der Verantwortung:** Durch Annahme der Einladung delegieren Sie **vollständige operative Verantwortung** für alle in diesem Konto durchgeführten Aktionen. Der Reseller kann kritische Daten und Integrationen ändern oder löschen.

-   **Ihre Kontrolle (Widerrufen):** Sie können den Reseller-Zugriff jederzeit **widerrufen**. Klicken Sie auf das Symbol **Kundenkontrolle** in der Kopfzeile und wählen Sie die rote Schaltfläche **„Widerrufen"**.

-   **Verbindungstrennung (Löschen):** Der Reseller kann die Verbindung auch über die Schaltfläche **„Löschen"** trennen.

-   **Kritische Situationen:** In unvorhergesehenen Umständen im Zusammenhang mit Zugriff oder Sicherheit, **zögern Sie nicht** - **kontaktieren Sie sofort Fozzels-Administratoren** für sofortige Intervention.
