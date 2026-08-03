---
id: '103000369006'
title: 3.3. Productfiltering voor inhoudsgeneratie
sidebar_position: 7
slug: /data-import-and-quality/product-filtering-for-content-generation
description: In deze gids wordt uitgelegd hoe u het filtermechanisme in Fozzels effectief kunt gebruiken om precies een subset van producten te selecteren op basis van kenmerkwaarden
keywords:
- invoerprompt
---

In deze gids wordt uitgelegd hoe u het filtermechanisme in Fozzels effectief kunt gebruiken om precies een subset van producten te selecteren op basis van kenmerkwaarden, zodat inhoudsgeneratie gericht en efficiënt is.

### 1\. Toegang tot de filteropties

Filteropties zijn beschikbaar op twee primaire locaties:

1.  **Inhoud Flow-creatie:** om de specifieke productbatch te definiëren die een stroom zal verwerken, **bewerk** een bestaande stroom (of maak een nieuwe) en **ga naar** het tabblad **"Flow Selection & Prompt"**.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/M8M8DSbeTwyMCzVdPZg-AgTrZhknUKlMaA.png)

2.  **Productcatalogus:**
    2.1 Zet de knop **"Advanced filter"** aan. Dit opent een deelvenster waar u **"Add condition"** en **"Add condition group"** kunt toevoegen voor complexe logica.
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/PCVDp6xbmqaVBtncYNWlb_f76UC2MmUI-g.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/IOHTRc5oV_-sARYVDZ-D0orkvhDrAYcI8A.png)
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/R1pQBNQNg8sWQ-DUNYyn1nSlXHg750rAUg.png)
        2.2 **Inline-filtering:** filter producten met behulp van invoervelden of vervolgkeuzemenu's die zich rechtstreeks in de kolomkoppen van de producttabel bevinden (beschikbaar voor kenmerken met de **Filterable**-vlag ingeschakeld).
    ![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/AgXgNaluOPoF0zxvvmWoytasp0fhtnppLg.png)

3.  _**Cruciaal:** in de catalogus kunt u inline-filters combineren door voorwaarden tegelijk op meerdere kolommen toe te passen (bijv. filteren op **SKU** **EN** op **Merk**)._

### 2\. Filteren op waardevoorwaarden

Dit filtertype is van toepassing op tekst-, numerieke en multi-select kenmerken.

1.  **Gelijk:** de kenmerkwaarde moet exact overeenkomen met de ingevoerde waarde. _Voorbeeld: toon alleen producten waarvan_ `kleur` _gelijk is aan_ `Blauw`.

2.  **Niet gelijk:** toon alle producten behalve die exact overeenkomen met de ingevoerde waarde. _Voorbeeld: toon alle producten waarvan_ `materiaal` _niet_ `katoen`.

3.  **Is leeg:** toon alleen producten waar het geselecteerde kenmerk geen waarde heeft (leeg is). _Voorbeeld: zoek producten met een lege_ `korte beschrijving`.

4.  **Is niet leeg:** toon alleen producten waar het geselecteerde kenmerk een ingevulde waarde bevat. _Voorbeeld: zoek producten met een ingevulde_ `fabrikantsnaam`.

5.  **Bevat:** de kenmerkwaarde moet het ingevoerde tekstfragment of getal bevatten. _Voorbeeld: zoek alle producten waarvan_ `naam` _het woord bevat_ `zomer`.

6.  **Bevat niet:** de kenmerkwaarde mag het ingevoerde tekstfragment niet bevatten. _Voorbeeld: sluit producten uit waarvan_ `SKU` _niet bevat_ `KORTING`.

7.  **In / Niet in:** de kenmerkwaarde moet overeenkomen met een van de meerdere ingevoerde waarden (gescheiden door komma's) of mag niet overeenkomen met een van deze waarden. _Voorbeeld (In): toon producten waarvan_ `grootte` _is_ `S, M, L`.

8.  **Begint met / Eindigt met:** zoek producten op basis van het begin- of eindteken van de waarde. _Voorbeeld: zoek producten waarvan_ `SKU` _begint met_ `P_`.

9.  **Is null / Is niet null:** technische voorwaarden om waarden op systeemniveau correct leeg of niet-leeg te behandelen.

### 3\. Filteren op datumvoorwaarden

Dit type is van toepassing op kenmerken met een datumnotatie, zodat u kunt filteren op basis van chronologie (bijv. `created_at`, `updated_at`).

1.  **Is leeg / Is niet leeg:** toont records waarbij het datumveld ontbreekt of ingevuld is. _Voorbeeld: zoek alle producten zonder_ `update date`.

2.  **Gelijk:** toont records waarbij de waarde exact overeenkomt met de ingevoerde datum. _Voorbeeld: zoek alle producten die zijn gemaakt op_ `01-01-2024`.

3.  **Minder:** toont records waarbij de datumwaarde chronologisch vóór de ingevoerde datum ligt. _Voorbeeld: zoek alle producten die zijn bijgewerkt vóór_ `vorige maand`.

4.  **Groter:** toont records waarbij de datumwaarde chronologisch na de ingevoerde datum ligt. _Voorbeeld: zoek alle nieuwe producten die na_ `gisteren` zijn bijgewerkt.

5.  **Kleiner of gelijk / Groter of gelijk:** bevat de ingevoerde datum in de resultatenverzameling. _Voorbeeld: zoek alle producten die op of na_ `01-01-2024` zijn bijgewerkt.

### 4\. Filteren op productafbeeldingen

Dit speciale filtertype is beschikbaar in de **catalogus** via het inline-filter in de kolom **Thumbnail**. Het is van cruciaal belang voor content-generatie-initiatieven die multimodale modellen gebruiken.

1.  **Afbeelding bestaat:** toon alleen die producten die een gekoppelde afbeelding hebben.

2.  **Afbeelding ontbreekt:** toon alleen die producten waarvoor een afbeelding ontbreekt.

![](/img/kb/data-import-and-quality/product-filtering-for-content-generation/8QgVAeRUMysJuzJ8692EqmUBXsfxeJ-Leg.png)

### 5\. Groeperingsvoorwaarden (geavanceerde logica)

U kunt zeer specifieke productbatches bouwen met behulp van meerdere voorwaarden en groepen.

1.  **Meerdere voorwaarden toevoegen:** om op meerdere kenmerken te filteren (bijv. `kleur = Blauw` **EN** `grootte = M`), klikt u eenvoudig meerdere keren op **"Add condition"**.

2.  **Voorwaardensgroep:** als u op **"Add condition group"** klikt, kunt u voorwaarden combineren met behulp van complexe logica (bijv. (`Categorie = Shirts` **EN** `Prijs > 50`) **OF** (`Categorie = Jassen`)).
