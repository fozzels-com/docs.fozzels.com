---
id: '103000395378'
title: '2.7. Connecting Fozzels to Akeneo: The Complete Setup Guide'
sidebar_position: 17
slug: >-
  /integration-connectivity/connecting-fozzels-to-akeneo-the-complete-setup-guide
description: >-
  This guide explains how to establish a two-way connection between your Akeneo
  PIM and Fozzels. The integration requires creating two separate connections i
---

This guide explains how to establish a two-way connection between your Akeneo PIM and Fozzels. The integration requires creating two separate connections in Akeneo - one to allow Fozzels to send data into Akeneo, and one to allow Akeneo to export data to Fozzels. After both connections are created, you link them to your Fozzels account using the generated credentials.

**Prerequisites**

-   An active Akeneo account with administrator access
-   An active Fozzels account
-   Access to the Connection settings area in Akeneo

**Part 1: Akeneo Setup (Creating Connections)**

Step 1: Log In and Navigate to Connection Settings

1.  Open a browser and log in to your **Akeneo dashboard** using your administrator credentials.
2.  In the left-hand sidebar, navigate to **Connect → Connection settings**.

Step 2: Create the "Data Source" Connection (Fozzels IN)

This connection allows Fozzels to send data **into** Akeneo.

1.  Click the **Create** button in the top-right corner.
2.  Fill in the following fields:
    -   **Label:** `Fozzels IN`
    -   **Code:** `fozzels_in`
    -   **Flow Type:** select `Data source`
3.  Click **Save**.
4.  Scroll down to the **Permissions** section. In the **Role** dropdown, select `Administrator`.
5.  Click **Save** again.
6.  Keep this page open — you will need the **Client ID**, **Secret**, **Username**, and **Password** displayed on screen.

> **Tip:** Copy each credential into a temporary text file so you don't lose them when navigating away.

Step 3: Create the "Data Destination" Connection (Fozzels OUT)

This connection allows Akeneo to export data **to** Fozzels.

1.  Go back to **Connect → Connection settings** and click **Create**.
2.  Fill in the following fields:
    -   **Label:** `Fozzels OUT`
    -   **Code:** `fozzels_out`
    -   **Flow Type:** select `Data destination`
3.  Click **Save**.
4.  Under **Permissions**, set the **Role** to `Administrator`.
5.  Click **Save**.
6.  Copy the **Client ID**, **Secret**, **Username**, and **Password** for this connection.

> **Important:** Each connection generates its own unique set of credentials. Make sure you copy and label both sets separately — you will need to paste each into the correct field in Fozzels.

**Part 2: Fozzels Activation**

Step 4: Start a New Integration

1.  Log in to your **Fozzels account**.
2.  Navigate to the **Integrations** tab.
3.  Click **Create New Integration**.
4.  Select **Akeneo**.
    ![](./images/connecting-fozzels-to-akeneo-the-complete-setup-guide/H4jUsBP_CVGytKdGvILnXxxrewyuDwsEwA.png)

Step 5: Fill In Configuration Fields

On the integration setup page, fill in the following fields:

-   **Name:** enter a descriptive name for this integration (e.g. `Akeneo Connection`)
-   Your website's **URL**
-   **OUT connection (Data FROM Akeneo):** paste the credentials from the **Fozzels OUT** connection you created in Step 3
-   **IN connection (Data TO Akeneo):** paste the credentials from the **Fozzels IN** connection you created in Step 2

![](./images/connecting-fozzels-to-akeneo-the-complete-setup-guide/E3PznnpS3GxByBNHd8CfP3zkzZahhRaBWw.png)
Step 6: Save the Integration

1.  Click the **Save** button at the bottom of the page.

Your Fozzels account is now connected to Akeneo. Data can flow in both directions based on the connections you configured.

If you run into any issues during setup, reach out to our support team - we're happy to help.
