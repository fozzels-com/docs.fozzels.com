---
id: '103000338038'
title: 2.4. Configurazione completa dell'integrazione con Shopware
sidebar_position: 6
slug: /integration-connectivity/full-integration-setup-with-shopware
description: >-
  Questa guida La accompagna nell'intera procedura di collegamento del Suo
  negozio online Shopware 6 con Fozzels. L'integrazione si compone di due parti:
  Parte 1: C
---

Questa guida La accompagna nell'intera procedura di collegamento del Suo negozio online Shopware 6 con Fozzels.
L'integrazione si compone di due parti:

# Parte 1: Crei un'integrazione in Shopware 6

In questa parte creerà un'integrazione API all'interno del pannello di amministrazione di Shopware 6. In questo modo vengono generate le credenziali di cui Fozzels ha bisogno per comunicare con il Suo negozio.

### 1\. Introduzione

Vada al pannello di amministrazione di Shopware 6. Di solito si trova all'[URL del Suo negozio](https://shopware6.fozzels.com/admin).

### 2\. Clicchi su "Impostazioni"

Clicchi su "Impostazioni".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/_APoVDYMLEb_oPJsWrg4Fj9HOyB2FWI6g.png)

### 3\. Clicchi su "Sistema"

Vada alle impostazioni di sistema.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NE3HjkKRNa353OQJJBzR8eeF_Y9XA9Mi_w.png)

###
4\. Clicchi su "Utenti e permessi"

Selezioni l'opzione Integrazioni dal menu Sistema.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/XBGWZJstYupsn7hsyrU1stHBQK9Hh8igVA.png)

### 5\. Scorra fino a "Ruoli" e clicchi su "Crea ruolo"

   Nella pagina Utenti e permessi, scorra fino alla sezione Ruoli e clicchi sul pulsante "Crea ruolo".

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/6gkkqh6BDu27YdBmfVYPA7aub9lZQr-Svw.png)

### 6. Inserisca il nome del ruolo

Nella scheda "Generale", inserisca un nome per il ruolo.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/NUafBeJNC09Mi86jv-EVOFyWLidctjzadA.png)

### 7\. Clicchi su "Permessi"

Vedrà la tabella dei permessi con tutte le caselle deselezionate. Abiliti i seguenti permessi:

**Cataloghi (Visualizza, Modifica, Crea, Elimina):**

-   Categorie
-   Gruppi di prodotti dinamici
-   Landing page
-   Produttori
-   Prodotti
-   Proprietà
-   Recensioni

**Contenuti:**

-   Media (Visualizza, Modifica, Crea, Elimina)
-   Shopping Experiences (Visualizza, Modifica)
-   Temi (Visualizza, Modifica)

**Altro** (Visualizza, Modifica, Crea, Elimina):

-   Canali di vendita

**Impostazioni:**

-   Valute (Visualizza, Modifica, Crea, Elimina)
-   Campi personalizzati (Visualizza, Modifica, Crea, Elimina)
-   Lingue (Visualizza, Modifica, Crea, Elimina)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/hUqHqVoOiZ0d2J1mJ2IWMFdxxBKX0tVq5g.jpeg)
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/PoONXWr6_1SjTd-6iea1UpNsFzfkwxRYpw.jpeg)

### 8. Salvi il ruolo

Dopo aver impostato tutti i permessi, clicchi su "Salva" per salvare il ruolo.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A8MHLjtMTc9IvBEae-ZW8vUS8I4hag_G8A.png)

###  **9.** Vada su Sistema > Integrazioni
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/A3DBstBn6Ru1Z0789w5hnvK7skD1VrNVhA.png)
**10.** **Clicchi su "Aggiungi integrazione"**

Clicchi sul pulsante "Aggiungi integrazione". Comparirà la finestra di dialogo "Crea integrazione":

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/URMEvVMGXkTNtDY6_YIfXEesdx7AwYJJ2g.png)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/3hNA53bC00sF1iGxrnL2kynScvKzSZfduA.png)

**11.** Compili i dettagli dell'integrazione

Inserisca un nome per l'integrazione. Quindi apra il menu a tendina "Ruoli" e selezioni il ruolo creato in precedenza.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/DZY9Dx_ZSKux2NMqdZxEYkFXqeT3JeZVlg.png)

###
12\.  Copi l'Access Key ID

Clicchi sull'icona di copia accanto all'**Access Key ID** per copiarlo negli appunti. Incolli questa chiave in un documento di testo per conservarla: Le servirà nella Parte 2.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Um8SIf9NDPTA8bYzQbm-H73d4wuiGheBbQ.png)

**13\.**  **Copi la Secret Access Key**

Faccia lo stesso per la **Secret access key**: clicchi per copiare la Secret access key negli appunti. Quindi incolli questo codice in un documento di testo, così da poterlo consultare e copiare in seguito.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ngrN_TmIbSpPn4vdjAU2urPJ3Orh3b1hcw.png)

### 14\. Clicchi su "Salva integrazione"

Salvi le impostazioni dell'integrazione.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/zFiTXyoLwZk0YUyHGn98o27cXlHx8DSBgA.png)

### 15\. Verifichi il messaggio di conferma

L'integrazione è ora creata e attiva.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/ddwo4oRoStm6_leYM-OMhtbNWvrs2B5OkA.png)

###

# Parte 2: Colleghi Fozzels a Shopware 6

Ora che ha creato l'integrazione in Shopware, configurerà la connessione sul lato Fozzels utilizzando le credenziali della Parte 1.

### **1.** Vada su [Fozzels.com](https://fozzels.com/)

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/QNYGtnmJc1jLtdHtrac2heMnCvr8OeCjOw.png)

###
**2.**  Clicchi su "Integrazioni"
    Nel menu di Fozzels, clicchi su Integrazioni.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p3WWrWl5kNt7ZpAfsTGCttAeYkIT1rVN6A.png)
3\. Clicchi su "Crea"
    Clicchi sul pulsante "Crea" per iniziare a configurare una nuova integrazione.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/pEdr2LbjwEBHYCnp6d9LPSj4r3fXHoqSRA.png)
4\. Selezioni il logo di Shopware

Scelga Shopware come tipo di integrazione cliccando sul logo di Shopware.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/wutV5JMQpq7oa9KVz1xOFlxcjZe7RktGOg.png)5\. Compili i dettagli dell'integrazione

Compili i seguenti campi nell'ordine indicato:

1\. Nome — Inserisca un nome per questa integrazione, ad esempio "Shopware 6".

2. URL — Inserisca l'URL del Suo negozio online Shopware 6 (ad es. https://your-store.com).

3. Access Key ID — Incolli l'Access Key ID copiato da Shopware nella Parte 1.

4. Secret Access Key — Incolli la Secret Access Key copiata da Shopware nella Parte 1.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/MN0itAjPFkZTRZVpISQu6IiUlmslBesN5w.png)

**6**. Una volta compilati tutti i campi, clicchi su "Salva". Dovrebbe comparire un pop-up "Operazione riuscita" che conferma il salvataggio della connessione.

### ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/Hx1KICwgA4nYaOgpQbjeLYyUYMAfwizHIA.png)

### 7\. Attivi l'integrazione
    Porti l'interruttore "Attiva" su on per attivare l'integrazione.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/CWqB7LNLotQ_hBy-B3upqEFOPuh8GzXOQg.png)
**8.** **Recuperi siti web e negozi**
    Clicchi sul pulsante "Recupera siti web e negozi". Fozzels recupererà da Shopware tutti i dati dei Suoi canali di vendita.
   ![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/AIptzp_eqV19f60Lq69A3HI-5-jXSkZ8RQ.png)
9\. Abiliti la connessione del negozio
    Porti l'interruttore Stato su on per il Suo negozio.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/gS02mVXwZyGcf2VSsypNVS3DoBaYSrKftQ.png)

10. Abiliti le viste negozio / i canali di vendita

    Abiliti le viste negozio o i canali di vendita disponibili che desidera utilizzare in Fozzels.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/1UtVxA_eP1gFWhRvGqpPE7G2CczT4WZGdg.png)

11. Recuperi i prodotti

###     Clicchi su "Recupera prodotti" per recuperare i dati dei Suoi prodotti da Shopware. L'operazione può richiedere del tempo, a seconda del numero di prodotti.

![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/0liK4TAMuGrDYFNClrrnT2GtrcZKZ6M2jA.png)
**12.** Clicchi su "Passaggio successivo"
    Prosegua al passaggio successivo per completare la configurazione.
![](/img/kb/integration-connectivity/full-integration-setup-with-shopware/p1QaQx8BXoBRslqVdOfwPVQzKjtqvAKl3A.png)

# Configurazione completata

Congratulazioni! Il Suo negozio Shopware 6 è ora completamente collegato a Fozzels. Può utilizzare questa integrazione per creare flussi di prodotto e gestire i contenuti dei Suoi prodotti direttamente dalla piattaforma Fozzels.

## Per iniziare

Ecco alcuni articoli aggiuntivi che potrebbero aiutarLa a iniziare a usare Fozzels:

-   [Creazione di un nuovo flusso di contenuti e impostazioni iniziali](/content-creation-flows/creating-a-new-content-flow-and-initial-settings)
-   [Creazione e filtraggio dei prompt. Editor di prompt drag & drop](/content-creation-flows/prompt-creation-filtering-drag-drop-prompt-editor)

-   [Quando vengono generati i nuovi prodotti: il ciclo di recupero spiegato](/content-creation-flows/when-do-new-products-get-generated-the-pull-cycle-explained)
-   [Azioni di massa e controllo operativo nelle liste batch / lista batch totale giornaliera](/content-creation-flows/mass-actions-and-operational-control-in-the-batch-lists-daily-total-batch-list)
-   [Definizione del flusso e tipi di contenuto (testo, immagine, video)](/content-creation-flows/flow-definition-and-content-types-text-image-video)

Oppure ci contatti direttamente: siamo sempre lieti di aiutarLa!

###
