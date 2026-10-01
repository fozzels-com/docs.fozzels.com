---
id: '103000380488'
title: "4.7.3 Tag HTML consentiti per la generazione di testi con l'AI"
sidebar_position: 20
slug: /content-creation-flows/allowed-html-tags-for-ai-text-generation
description: >-
  Questa funzionalità Le consente di definire con precisione quali tag HTML
  possono essere utilizzati e mantenuti all'interno dei contenuti generati
  dall'Intelligenza Artificiale. Questa funzio
---

Questa funzionalità Le consente di definire con precisione quali tag HTML possono essere utilizzati e mantenuti all'interno dei contenuti generati dall'Intelligenza Artificiale. Questa funzionalità è attiva per gli attributi in cui è abilitata l'opzione **"Allow HTML"**.

![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/2zl4WJfftt48X66FBs1W8zAn4rbNhhqk1A.png)

Definendo questo elenco, sblocca potenti possibilità per generare contenuti con formattazioni specifiche o per incorporare contenuti multimediali direttamente nel testo generato.

## ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/KsO3jFsp7Ytx48uE5alhlIVzvjfJd8Trzw.png)
Come il sistema elabora i tag

Il sistema funziona come un filtro di sicurezza:

-   Rimuove automaticamente tutti i tag **non presenti** nell'elenco consentito.

-   Ciò garantisce che solo i tag necessari e sicuri vengano visualizzati correttamente nel Suo frontend.

## Liberare il potenziale creativo

Definire i tag consentiti significa non essere più limitati alla formattazione di base del testo. Può istruire l'AI a creare strutture complesse aggiungendo elementi dinamici e visivi direttamente nella Sua descrizione di prodotto:

-   **Contenuti interattivi:** incorpori video di YouTube (utilizzando il tag `iframe`) direttamente nella descrizione del prodotto.

-   **Elementi visivi ricchi:** integri gallerie di immagini o slider utilizzando il tag `img` racchiuso nella struttura richiesta (`div`, `section`).

-   **Struttura avanzata:** crei elementi interattivi, come accordion per le sezioni FAQ, utilizzando i tag `details` e `summary` (presenti nell'elenco predefinito) o tag di struttura personalizzati.

-   **Qualsiasi struttura:** può generare praticamente qualsiasi struttura HTML supportata dal Suo frontend semplicemente consentendo i tag necessari.

### 1\. Tag HTML predefiniti disponibili

Un elenco completo di tag HTML standard è disponibile per impostazione predefinita e può essere utilizzato immediatamente:

-   `a`, `abbr`, `acronym`, `article`, `aside`, `b`, `blockquote`, `br`, `cite`, `code`, `dd`, `details`, `div`, `dl`, `dt`, `em`, `footer`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `header`, `hr`, `i`, `li`, `mark`, `ol`, `p`, `q`, `s`, `section`, `span`, `strong`, `summary`, `table`, `td`, `tr`, `u`, `ul`.

### 2\. Aggiunga i Suoi tag HTML (Add Your Own HTML Tags)

Se necessita di tag per incorporare video, immagini o qualsiasi altra formattazione non standard, può aggiungerli a questo elenco.

**Come aggiungere tag personalizzati:**

1.  Digiti nel campo il nome del tag che desidera consentire (ad es. `iframe`, `img`, `video`).
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/17FvSVXKcc6eW4AU0v9BhkCkRR-NUtg57w.png)

2.  Prema Invio (se necessario, lo rimuova cliccando sul pulsante 'x').

3.  Clicchi sul pulsante **Save**.
    ![](/img/kb/content-creation-flows/allowed-html-tags-for-ai-text-generation/kMmnyMamV-Ef9IEE1_naDJ0llLk7bnh5YA.png)

> **Buono a sapersi!** Questo blocco serve ad aggiungere tag extra, non standard, fondamentali per realizzare la Sua visione creativa nel frontend. Aggiunga solo i tag necessari per garantire la sicurezza del codice.
