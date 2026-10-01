---
title: "2.11.2. Pimcore: esporre gli attributi tramite DataHub (flag di pubblicazione e galleria di immagini)"
sidebar_position: 24
slug: >-
  /integration-connectivity/pimcore-datahub-exposing-published-and-image-gallery
description: >-
  Fozzels rileva gli attributi di prodotti e categorie di Pimcore dal Suo endpoint
  GraphQL di DataHub. Questa guida spiega come esporre il flag di pubblicazione e
  la Sua galleria di immagini affinché Fozzels possa leggerli e scriverli.
---

A differenza delle piattaforme con uno schema di prodotto fisso, Pimcore Le consente di modellare le proprie classi di oggetti dati, per cui Fozzels non prevede un elenco fisso di attributi per questa piattaforma. Fozzels **rileva invece gli attributi tramite l'introspezione del Suo endpoint GraphQL di DataHub**: tutto ciò che la Schema Definition dell'endpoint espone è esattamente ciò che Fozzels vede.

Se un attributo manca in Fozzels, quasi sempre manca nel **Query Schema** dell'endpoint in Pimcore.

## Come lo schema corrisponde agli attributi di Fozzels

| Schema Definition di DataHub | Effetto in Fozzels |
| --- | --- |
| Campo nel **Query Schema** | L'attributo viene creato e i suoi valori vengono importati |
| Campo nel **Mutation Schema** | L'attributo viene contrassegnato come **scrivibile**, così i flussi possono inviarvi i contenuti generati |

> Un campo aggiunto **solo** al Mutation Schema non diventa mai un attributo: non c'è nulla da leggere. Aggiunga sempre prima il campo al Query Schema; lo aggiunga anche al Mutation Schema quando Fozzels deve scriverci.

Dopo **qualsiasi** modifica alla Schema Definition:

1. **Salvi** la configurazione di DataHub in Pimcore.
2. In Fozzels, apra l'integrazione e clicchi su **Synchronize**: in questo modo lo schema viene riletto e i nuovi attributi vengono creati.
3. Nella scheda **Attributes**, abiliti il nuovo attributo e imposti i flag **Filterable** / **Mutable** secondo necessità.

## Aggiungere il flag di pubblicazione

Lo stato di pubblicazione di Pimcore è una *colonna di sistema* e DataHub non la espone per impostazione predefinita: deve essere aggiunta esplicitamente allo schema.

**In Pimcore:**

1. Vada su **Settings → Data Hub** e apra la configurazione dell'endpoint utilizzato da Fozzels.
2. Apra la scheda **Schema Definition** e modifichi la configurazione dei campi della Sua classe **Product** (ripeta l'operazione per la classe Category se desidera averlo anche lì).
3. Nell'albero degli attributi, apra il gruppo **System** e aggiunga **`published`** alle colonne del **Query Schema**.
4. Lo aggiunga anche al **Mutation Schema** se Fozzels deve poter pubblicare/annullare la pubblicazione degli oggetti.
5. Salvi la configurazione.

**In Fozzels:** apra l'integrazione, clicchi su **Synchronize**, quindi abiliti il nuovo attributo `published` nella scheda **Attributes**.

> **Importante:** per impostazione predefinita Fozzels importa solo gli oggetti **pubblicati**, quindi l'attributo risulterebbe `true` su ogni prodotto. Per lavorare con entrambi gli stati, abiliti **Include unpublished objects** nelle impostazioni dell'integrazione in Fozzels. I prodotti non pubblicati arriveranno quindi come prodotti ordinari e l'attributo `published` permetterà di distinguerli: potrà filtrare in base ad esso e utilizzarlo nelle condizioni dei flussi.

## Esporre la galleria di immagini

### Lettura delle immagini dei prodotti

Fozzels costruisce la galleria multimediale di un prodotto a partire da **ogni campo di tipo immagine** esposto dal Query Schema: i nomi dei campi non sono rilevanti. Tipi di campo supportati:

- **Image**
- **Advanced Image** (immagine con hotspot/marcatori)
- **Image Gallery**

Aggiunga i Suoi campi immagine al **Query Schema** della classe Product, salvi e clicchi su **Synchronize** in Fozzels. Tutte le immagini di tutti i campi immagine esposti compaiono nella galleria del prodotto, e i testi alternativi esistenti vengono letti dalla voce di metadati `alt` della risorsa in ciascuna lingua del negozio.

### Invio delle immagini generate

Affinché Fozzels possa caricare in Pimcore le immagini generate dall'IA, l'endpoint necessita di tre elementi:

1. **Un campo Image Gallery scrivibile.** La classe Product deve avere un campo di tipo **Image Gallery**, esposto nel **Mutation Schema**. Fozzels lo riconosce dal tipo, quindi può avere qualsiasi nome. Le immagini generate vengono **aggiunte** alla galleria: le Sue immagini esistenti non vengono mai sostituite.
2. **Query e mutation delle risorse abilitate.** Nella Schema Definition, abiliti l'entità **Asset** sia per **query** sia per **mutation**. Fozzels la utilizza per archiviare il file dell'immagine (`createAsset`) e per leggere e scrivere i testi alternativi sulla risorsa (`getAsset` / `updateAsset`).
3. **Autorizzazioni del workspace.** Nella scheda **Security Definition** dell'endpoint, il workspace deve concedere:
   - **read + update** sugli oggetti prodotto,
   - **read** sul sottoalbero delle risorse che contiene le immagini dei Suoi prodotti,
   - **create** sulla cartella in cui devono essere salvate le nuove immagini, e **update** sulle risorse (per i testi alternativi).

**Dove vengono salvati i caricamenti:** un'immagine generata viene archiviata accanto alle immagini già presenti nella galleria del prodotto. Per i prodotti che non hanno ancora immagini, configuri l'impostazione **Asset folder** sull'integrazione in Fozzels (ad esempio `/products`): tale cartella deve esistere in Pimcore e il workspace deve consentire **create** al suo interno.

### Testi alternativi

Fozzels scrive i testi alternativi nei metadati della risorsa con il nome convenzionale **`alt`**, nella lingua del negozio. La lingua deve essere configurata nell'istanza Pimcore (**Settings → System Settings → Localization**); Pimcore scarta silenziosamente i metadati in lingue sconosciute, e Fozzels segnala questa situazione come errore anziché perdere il testo.

## Risoluzione dei problemi

| Messaggio in Fozzels | Causa | Soluzione |
| --- | --- | --- |
| Manca un attributo previsto | Campo non presente nel **Query Schema** (o presente solo nel Mutation Schema) | Lo aggiunga al Query Schema, salvi, **Synchronize** |
| *Pimcore non accetta scritture su … — il campo è di sola lettura su questo endpoint DataHub* | Campo non presente nel **Mutation Schema** | Lo aggiunga al Mutation Schema, salvi, **Synchronize** |
| *Pimcore non espone alcuna galleria di immagini scrivibile su …* | Nessun campo **Image Gallery** nel Mutation Schema | Aggiunga il campo galleria al Mutation Schema |
| *Nessuna cartella di risorse Pimcore è configurata per questa integrazione…* | Il prodotto non ha ancora immagini e l'impostazione **Asset folder** è vuota | Imposti l'**Asset folder** sull'integrazione in Fozzels |
| *La cartella di risorse Pimcore … non esiste in questa istanza* | Il percorso configurato è errato | Indichi nell'impostazione una cartella esistente nell'albero delle risorse di Pimcore |
| *Pimcore ha rifiutato di archiviare l'immagine …* | Il workspace non dispone di **create** sulla cartella di destinazione | Conceda create nella Security Definition dell'endpoint |
| *Pimcore ha accettato l'aggiornamento della risorsa … ma non ha conservato alcun testo alternativo per …* | La lingua del negozio non è configurata in Pimcore | Aggiunga la lingua in **Settings → System Settings → Localization** |
