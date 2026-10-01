---
id: '103000367838'
title: "1.2.1. Impostazioni di profilo, sicurezza e notifiche"
sidebar_position: 2
slug: /account-core-resources/profile-security-and-notifications-settings
description: >-
  Questa sezione descrive le funzioni per la gestione dell'account utente, delle
  preferenze di sicurezza, del comportamento delle notifiche e della
  configurazione della chiave API personale in Fo
---

Questa sezione descrive le funzioni per la gestione dell'account utente, delle preferenze di sicurezza, del comportamento delle notifiche e della configurazione della chiave API personale in Fozzels.
Per aprire la sezione Settings, utilizzi il link: `https://app.fozzels.com/user/settings/profile`.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Tc2cIujPZyK0-BRWvFlDJzAKwvlb1mCbBA.png)

### 1.1. Impostazioni utente

La sezione Settings consente di accedere alle principali opzioni di configurazione che permettono agli utenti di gestire il proprio account personale, le preferenze di sicurezza e le funzionalità che supportano i flussi di lavoro collaborativi.

#### 1.1.1. Impostazioni del profilo

Menu → Settings → Profile. Questa pagina si apre per impostazione predefinita quando si accede al menu Settings. Consente agli utenti di modificare le informazioni di base del profilo e dell'azienda.

I campi modificabili includono: il nome visualizzato dell'utente (Name), l'indirizzo email (Email Address), il nome dell'azienda (Company Name), il numero di telefono (Phone Number, facoltativo) e una breve descrizione nel campo About.
Per applicare le modifiche, clicchi su Save.
Il sistema applica tutte le modifiche contemporaneamente. È importante notare che il sistema non mostra alcun avviso se si abbandona la pagina con modifiche non salvate, pertanto gli utenti devono salvare manualmente.
L'email deve essere in un formato valido.
Per aggiornare l'immagine del profilo, clicchi sull'avatar per aprire la finestra di caricamento. I formati supportati sono JPG e PNG.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/n4NwWmNOPgAtHdMdd2XYw8IeaKeefh4uKw.png)

#### 1.1.2. Impostazioni di sicurezza

Menu → Settings → Security.
Questa pagina viene utilizzata per aggiornare la password dell'account.

I campi modificabili sono Current Password, New Password e Confirm New Password.
Comportamento dell'input: tutti i valori inseriti sono mascherati (visualizzati come puntini) e i valori dei campi non vengono memorizzati né salvati nella cache.
**Clicchi su Update** per applicare le modifiche.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/4_vsO-7JKhQeaATz0rzs8X97nn-JDns8Iw.png)
Aggiornamento riuscito: se la nuova password viene accettata, nella parte superiore dello schermo verrà mostrata una notifica verde di conferma e la password verrà aggiornata immediatamente per gli accessi futuri.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Lv9g42HJ-ap_ArFPBPd0525XLLSRHyDzCA.png)
Gestione degli errori: se la password attuale non è corretta, oppure se la nuova password e la conferma non coincidono, apparirà un messaggio di errore. In questo caso, tutti i campi della password verranno svuotati automaticamente e l'utente dovrà reinserire le informazioni da capo.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/6niT9qGiupLPyM0ijzwSXLeAhLO-NYguaA.png)

#### 1.1.3. Impostazioni delle notifiche

Menu → Settings → Notifications. Utilizzi questa sezione per gestire le notifiche via email.

Questa sezione contiene due caselle di controllo:

-   Allow Fozzels emails: se deselezionata, non verrà inviata alcuna comunicazione email relativa al prodotto (ad es. aggiornamenti, avvisi di sistema). Se selezionata, l'utente accetta di ricevere queste email.

-   Receive balance notifications: se deselezionata, non verrà inviata alcuna comunicazione email. Se selezionata, l'utente accetta di ricevere notifiche quando il saldo raggiunge 0 o meno, con un promemoria per effettuare una ricarica e continuare a lavorare.
**Clicchi su Update** per salvare le preferenze.

![](/img/kb/account-core-resources/profile-security-and-notifications-settings/JuH6V-gxtu1SYR1gzZ0qfO6fSEuVDSSVxQ.png)
1.1.4. Impostazioni del token Open AI

Menu → Settings → Open AI Token. Questa sezione viene utilizzata per collegare e gestire la chiave API OpenAI per la generazione di testi e immagini.

Il campo modificabile è Token, in cui inserire la chiave API OpenAI personale o aziendale.
È possibile memorizzare un solo token per account alla volta.
Il campo di input è in testo semplice, il che significa che il token è visibile durante la digitazione e rimane visibile dopo il salvataggio.
Elenco dei modelli: dopo aver salvato un token valido, sotto appare l'elenco dei modelli OpenAI disponibili.
Ogni modello include il nome (Name) e lo stato (Status, ad es. enabled, disabled, invalid).
**Utilizzi** il pulsante **Refresh** per aggiornare questo elenco, se necessario.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/BR86j8Sx5F-7Oh8IQl62gSgp1Y-WnINnHQ.png)
Salvataggio riuscito: clicchi su Save per inviare il token. Se il token è valido, una notifica verde conferma l'aggiornamento e l'elenco dei modelli verrà caricato di conseguenza.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Ex-tA3z01sWbqI0QlvqI_o7NICSECMzMRg.png)
Note sulla convalida del token: durante l'inserimento di un token possono verificarsi vari problemi, tra cui formato non valido, token scaduti o revocati, oppure errori di convalida lato backend. Se il token non è valido o non può essere verificato, il sistema mostra una notifica di errore appropriata (ad es. "Unable to validate token").
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/AAyYCYEC9SJuztUVuBCtVy_paCUppxN8iA.png)
In tutti i casi di errore, il token non viene salvato e il campo di input viene svuotato automaticamente.
