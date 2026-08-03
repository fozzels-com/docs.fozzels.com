---
id: '103000367838'
title: '1.2.1. Configurações de Perfil, Segurança e Notificações'
sidebar_position: 2
slug: /account-core-resources/profile-security-and-notifications-settings
description: >-
  Esta seção detalha as funções para gerenciar a conta de usuário, preferências
  de segurança, comportamento de notificações e configuração de chave de API
  pessoal no Fo
---

Esta seção detalha as funções para gerenciar a conta de usuário, preferências de segurança, comportamento de notificações e configuração de chave de API pessoal no Fozzels.
Para abrir a seção Configurações, use o link: `https://app.fozzels.com/user/settings/profile`.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Tc2cIujPZyK0-BRWvFlDJzAKwvlb1mCbBA.png)

### 1.1. Configurações do Usuário

A seção Configurações fornece acesso a opções de configuração principais que permitem aos usuários gerenciar sua conta pessoal, preferências de segurança e recursos que suportam fluxos de trabalho colaborativos.

#### 1.1.1. Configurações de Perfil

Menu → Configurações → Perfil. Esta página se abre por padrão ao acessar o menu Configurações. Ela permite aos usuários editar suas informações básicas de perfil e empresa.

Campos Editáveis incluem: o Nome de exibição do usuário, Endereço de E-mail, Razão Social, Número de Telefone (opcional) e uma breve descrição no campo Sobre.
Para aplicar qualquer alteração, clique em Salvar.
O sistema aplica todas as alterações de uma vez. É importante notar que o sistema não fornece um aviso ao navegar para fora com alterações não salvas, portanto os usuários devem salvar manualmente.
O E-mail deve estar em um formato válido.
Para atualizar a Foto de Perfil, clique na imagem do avatar para abrir a janela de upload. Os formatos suportados são JPG e PNG.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/n4NwWmNOPgAtHdMdd2XYw8IeaKeefh4uKw.png)

#### 1.1.2. Configurações de Segurança

Menu → Configurações → Segurança.
Esta página é usada para atualizar a senha da conta.

Os campos editáveis são Senha Atual, Nova Senha e Confirmar Nova Senha.
Comportamento de Entrada: Todos os valores de entrada são mascarados (mostrados como pontos) e os valores de campo não são armazenados ou em cache.
**Clique em Atualizar** para aplicar as alterações.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/4_vsO-7JKhQeaATz0rzs8X97nn-JDns8Iw.png)
Atualização Bem-sucedida: Se a nova senha for aceita, uma notificação de sucesso verde será mostrada no topo da tela e a senha será atualizada imediatamente para futuros logins.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Lv9g42HJ-ap_ArFPBPd0525XLLSRHyDzCA.png)
Tratamento de Erros: Se a senha atual estiver incorreta ou a nova senha e confirmação não corresponderem, uma mensagem de erro aparecerá. Neste caso, todos os campos de senha serão automaticamente limpos e o usuário deve inserir as informações novamente do zero.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/6niT9qGiupLPyM0ijzwSXLeAhLO-NYguaA.png)

#### 1.1.3. Configurações de Notificações

Menu → Configurações → Notificações. Use esta seção para gerenciar notificações de e-mail.

Esta seção contém duas caixas de seleção:

-   Permitir e-mails do Fozzels: Quando desmarcado, nenhuma comunicação de e-mail relacionada ao produto (por exemplo, atualizações, alertas do sistema) será enviada. Quando marcado, o usuário concorda em receber esses e-mails.

-   Receber notificações de saldo: Quando desmarcado, nenhuma comunicação de e-mail será enviada. Quando marcado, o usuário concorda em receber notificações quando seu saldo chegar a 0 ou menos, com um lembrete para recarregar e continuar o trabalho.
**Clique em Atualizar** para salvar preferências.

![](/img/kb/account-core-resources/profile-security-and-notifications-settings/JuH6V-gxtu1SYR1gzZ0qfO6fSEuVDSSVxQ.png)
1.1.4. Configurações de Token OpenAI

Menu → Configurações → Token OpenAI. Esta seção é usada para conectar e gerenciar a chave de API OpenAI para geração de texto e imagem.

O campo editável é Token, onde você insere sua chave de API OpenAI pessoal ou corporativa.
Apenas um token pode ser armazenado por conta por vez.
O campo de entrada é texto simples, significando que o token é visível conforme digitado e permanece visível após salvar.
Lista de Modelos: Após salvar um token válido, a lista de modelos OpenAI disponíveis aparece abaixo.
Cada modelo inclui seu Nome e Status (por exemplo, habilitado, desabilitado, inválido).
**Use** o botão **Atualizar** para atualizar esta lista se necessário.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/BR86j8Sx5F-7Oh8IQl62gSgp1Y-WnINnHQ.png)
Salvamento Bem-sucedido: Clique em Salvar para enviar o token. Se o token for válido, uma notificação verde confirma a atualização e a lista de modelos será carregada adequadamente.
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/Ex-tA3z01sWbqI0QlvqI_o7NICSECMzMRg.png)
Notas de Validação de Token: Vários problemas podem ocorrer ao inserir um token, incluindo formato inválido, tokens expirados ou revogados ou erros de validação de backend. Se o token não for válido ou não puder ser verificado, o sistema mostra uma notificação de erro apropriada (por exemplo, "Não é possível validar o token").
![](/img/kb/account-core-resources/profile-security-and-notifications-settings/AAyYCYEC9SJuztUVuBCtVy_paCUppxN8iA.png)
Em todos os casos de erro, o token não é salvo e o campo de entrada é automaticamente limpo.
