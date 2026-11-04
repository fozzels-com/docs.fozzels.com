---
title: 4.1.2.c Come sincronizzare i contenuti generati con tutte le store view in Magento 2
sidebar_position: 4.5
slug: /content-creation-flows/sync-generated-content-to-all-store-views-magento-2
description: >-
  Con questa opzione attiva, ogni push del flow salva il testo generato nella
  store view del flow e anche come valore predefinito del prodotto per tutte le
  store view di Magento.
---

## Cosa fa questa opzione

Con questa opzione attiva, ogni push del flow salva il testo generato due volte: nella store view del flow e come valore predefinito del prodotto per **tutte le store view** di Magento.

Ogni store view che non ha un proprio valore per quell'attributo mostra subito il nuovo testo. Una store view che ha un proprio valore impostato in Magento continua a mostrare il proprio testo.

L'opzione è disponibile solo per le integrazioni Magento 2.

## Quando usarla

La attivi quando più store view devono mostrare lo stesso testo e non vuole eseguire un flow separato per ciascuna. Un caso tipico: due o più store view nella stessa lingua, ad esempio un negozio principale e un negozio outlet.

La lasci disattivata quando le Sue store view usano lingue diverse o richiedono testi diversi. In questo caso esegua un flow separato per ogni store view, come prima.

## Come attivarla

1.  Apra il flow e vada al passaggio **4 Automation**.

2.  Selezioni **Also save as the default value for all store views**. Sotto la casella appare una breve spiegazione.

3.  Salvi il flow.

L'opzione vale per ogni push di questo flow: un push manuale dopo la revisione, un push completamente automatico e **Synchronize again**. Un flow con più attributi sincronizza sempre tutti i suoi attributi insieme.

![La casella «Also save as the default value for all store views» al passaggio 4 Automation](/img/kb/content-creation-flows/sync-generated-content-to-all-store-views-magento-2/01-automation-default-value-checkbox.png)

## Come funzionano i valori delle store view

In Magento un attributo di prodotto ha un valore predefinito (visibile nello scope **All Store Views**) e può avere un proprio valore in qualsiasi store view. Nella pagina del prodotto, imposti lo **Scope** su una store view: se sotto un campo **Use Default Value** è selezionato, quella store view mostra il valore predefinito. Se non è selezionato, la store view ha un proprio valore e ignora quello predefinito.

Ecco cosa fa un push, con un flow su Default Store View e un negozio con altre due store view:

| Store view | Prima del push | Dopo il push | Use Default Value |
| --- | --- | --- | --- |
| All Store Views (predefinito) | Testo vecchio | **Testo nuovo** | — |
| Default Store View (quella del flow) | Testo vecchio | **Testo nuovo**, salvato come valore proprio | Non selezionato |
| Store view B, senza valore proprio | Testo vecchio (ereditato) | **Testo nuovo** (ereditato) | Selezionato |
| Store view C, con valore proprio | Il proprio testo | Il proprio testo, invariato | Non selezionato |

**Per far mostrare il nuovo testo a una store view**, apra il prodotto in Magento, imposti lo Scope su quella store view, selezioni **Use Default Value** per l'attributo e salvi. Da quel momento segue il valore predefinito.

## Una store view per attributo

Solo i flow di una store view possono salvare un determinato attributo come valore predefinito. In questo modo i flow di store view diverse non sovrascrivono a vicenda il testo predefinito.

*   **Più flow della stessa store view** possono avere l'opzione attiva per lo stesso attributo.
*   **I flow di store view diverse** possono avere l'opzione attiva solo per attributi diversi. Ad esempio, un flow sulla store view A sincronizza la descrizione e un flow sulla store view B sincronizza il meta title.

Se attiva l'opzione per un attributo che un flow di un'altra store view salva già come valore predefinito, il flow non viene salvato e mostra questo errore:

> The flow "&lt;flow name&gt;" of another store view already saves this attribute as the default value for all store views. Only one store view's flow can write the shared default of an attribute.

Per risolvere, rimuova gli attributi condivisi da questo flow, oppure disattivi l'opzione (o rimuova l'attributo) nel flow indicato nell'errore.

**Duplicando un flow in un'altra store view**, l'opzione viene disattivata nella copia e appare un avviso. La riattivi solo se nessun flow di un'altra store view salva gli stessi attributi come valore predefinito.

## Cosa sapere prima di attivarla

*   **All Store Views significa tutti i siti web.** Il valore predefinito vale per le store view di tutti i siti web del Suo Magento, non solo per il sito web del flow. Se i Suoi siti web usano lingue diverse, le store view senza un proprio valore mostreranno la lingua del flow.
*   **Vince l'ultimo push.** Se più flow della stessa store view sincronizzano lo stesso attributo, il valore predefinito contiene il testo dell'ultimo push, anche se un altro flow ha generato un testo più recente.
*   **La store view del flow smette di seguire il valore predefinito.** Dopo il primo push con questa opzione, la store view del flow ha un proprio valore. I valori predefiniti successivi non la raggiungono finché non seleziona Use Default Value in quella store view.
*   **Può avviare altri flow.** Un flow di un'altra store view che legge questo attributo nel suo prompt e ha attivo **Automatically create a new text when an attribute changes** considera il nuovo valore predefinito come una modifica. Dopo il pull successivo crea un nuovo testo, e consuma crediti, per ogni prodotto senza un proprio valore nella sua store view.
*   **Prodotti configurabili:** viene aggiornato solo il prodotto padre. Le varianti mantengono i propri testi, il che non è un problema perché la pagina del prodotto mostra i testi del padre.
*   **Disattivare l'opzione non annulla nulla.** I valori già salvati come predefiniti restano. I nuovi push vanno solo alla store view del flow.
*   **Rimuovere un attributo da un flow non cancella il valore predefinito.** L'ultimo valore sincronizzato resta finché un altro flow non ne sincronizza uno nuovo.
