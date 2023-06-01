## Middleware

O middleware irá verificar o token de autenticação do usuário, e caso não haja algum irá redirecionar o usuário para a URL de login, salvando a URL original no cookie redirectTo.

Esse cookie será reaproveitado na rota de autenticação para verificar de onde o usuário está vindo da URL e redirecioná-lo de volta para a URL original com o login efetuado