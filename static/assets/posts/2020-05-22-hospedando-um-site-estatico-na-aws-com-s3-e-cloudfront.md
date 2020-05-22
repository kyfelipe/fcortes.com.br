---
date: 2020-05-22 13:45:00
title: Hospedando um site estático na AWS com S3 e CloudFront
description: Usando o S3 e CloudFront para hospedagem de uma aplicação web estática (por exemplo, uma aplicação Angular ou React) com boas práticas de segurança
author: Felipe Côrtes
category: aws,s3,hospedagem
featuredImage: ../img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/destaque.jpg
---

![Foto de Christopher Gower](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/destaque.jpg)

É possível utilizar o Amazon S3 para hospedar um site e, junto a ele, temos a utilização do protocolo HTTPS e uma distribuição pelas várias regiões com o Amazon CloudFront. Até agora não disse nada de novo, mas há um detalhe que muitos esquecem na hora de realizar a hospedagem: o bucket fica com acesso totalmente público. Assim, nesse artigo vou um pouco além e abordo um pouco da `Bucket Policy` do Amazon S3 e mostrar como adicionar um domínio ao site com o Amazon Route 53.

## Um pouquinho sobre os serviços

Se você não conhece algum serviço que citei acima, vou explicar brevemente um pouco sobre cada um para que possa se ambientar.

- **[Amazon S3](https://aws.amazon.com/pt/s3/):** é um serviço de armazenamento de objetos que oferece escalabilidade, disponibilidade, segurança e performance. Neste serviço será onde armazenaremos os arquivos estáticos do site.
- **[Amazon CloudFront](https://aws.amazon.com/pt/cloudfront/):** é um serviço rápido de rede de entrega de conteúdo (CDN) que entrega dados, vídeos, aplicativos e APIs a clientes em todo o mundo com segurança, baixa latência e altas velocidades de transferência em um ambiente de uso facilitado. Resumindo, este serviço será o responsável por entregar os arquivos estáticos do site.
- **[Amazon Route 53](https://aws.amazon.com/pt/route53/):** é um web service Domain Name System (DNS) na nuvem altamente disponível e escalável. O Route 53 será o serviço que irá gerenciar o DNS.
- **[AWS Certificate Manager](https://aws.amazon.com/pt/certificate-manager/):** é um serviço que permite provisionar, gerenciar e implantar facilmente certificados Secure Sockets Layer (SSL)/Transport Layer Security (TLS) para uso com os serviços da AWS e os recursos internos conectados.

## Implantando e configurando o Amazon S3

Vamos começar criando um bucket:

- Navegue até o [serviço do S3](https://s3.console.aws.amazon.com/s3/home);
- Clique em `Create Bucket`;
- Adicione um nome exclusivo globalmente ao seu novo bucket, selecione a região de preferência e deixei ativo o `Block all public access`;
- Em seguida clique em `Create`.

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/1.png)

Nós não vamos utilizar o `Static website hosting` do S3 porque será necessário habilitar o acesso público dele. Utilizaremos o CloudFront para distribuir os arquivos estáticos do site e, nele, configurar o protocolo HTTPS e o domínio.

Agora vamos fazer o upload dos arquivos. Acessando o bucket criado, clique em `Upload`. Em seguida, adicione os arquivos desejados e clique em `Upload`.

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/2.png)

## Configurando o CloudFront

Vamos agora criar uma nova distribuição no CloudFront:

- Navegue até o [serviço CloudFront](https://console.aws.amazon.com/cloudfront/home), clique em `Create Distribution` e selecione o **método de entrega Web**.

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/3.png)

- Selecione o bucket recém-criado em `Origin Domain Name`;
- Em `Restrict Bucket Access` marque a opção `Yes` **e crie uma nova `Origin Access Identity` (caso não tenha uma);
- Marque também a opção `Yes, Update Bucket Policy` em `Grant Read Permissions on Bucket`;
- Indo para a etapa `Default Cache Behavior Settings`, em `Viewer Protocol Policy`, marque a opção `Redirect HTTP to HTTPS` (Com isso vamos força sempre o uso do HTTPS);
- **(Opcional)** Em `Default Cache Behavior Settings` tem uma opção chamada [Compress Objects Automatically](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html), ativando ela os arquivos serão sempre compactados com o gzip.

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/4.png)

- Agora em `Distribution Settings` defina em `Default Root Object` (como por exemplo o index.html);

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/5.png)

- Para finalizarmos, clique em `Create Distribution`.

Você pode notar que não configurei o CNAME, farei isso no final do artigo porque nem todos tem um domínio em mãos para testar.

## Ajustando a Bucket Policy

Vamos agora voltar para o bucket que criamos, em seguida vamos em `Permissions` e por fim em `Bucket Policy`. Aqui permitiremos que nossa distribuição no CloudFront acesse os arquivos do bucket adicionando essas permissões (Não esqueça de substituir o nome do bucket e o `Origin Access Identity`):

```json
{
    "Version": "2012-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement": [
        {
            "Sid": "AllowGetObject",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E17XLR7K1HVHSH"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::nome-super-unico/*"
        },
        {
            "Sid": "AllowListBucketContents",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E17XLR7K1HVHSH"
            },
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::nome-super-unico"
        }
    ]
}
```

Após salvar as alterações na `Bucket Policy` é possiver visualizar a aplicação com a URL do CloudFront, encontrada no campo `Domain Name` na distribuição criada.

## Configurando páginas de error

Para finalizar a hospedagem do nosso site (caso não queira configurar um domínio), vamos adicionar uma página de error customizada. Voltando ao CloudFront:

- Selecione a distribuição criada e clique em `Distribution Settings`;
- Vá para a aba `Error Pages` e clique em `Create Custom Error Response`;
- Vamos customizar o código de error 404 e redireciona-lo para uma página customizada;

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/6.png)

- Finalize clicando em `Create`.

# (Opcional) Configurando um domínio personalizado

A única coisa que falta agora é adicionar um domínio personalizado para que possa ser mais fácil o acesso de um eventual público. Neste exemplo não vou comprar um domínio dentro da AWS, e sim, utilizar um domínio comprado em outro provedor e permitir que a AWS gerencie.

- Navegue até o [servico Route 53](https://console.aws.amazon.com/route53/home);
- Vá em `Hosted zones` e clique em `Create Hosted Zone`;
- Em `Domain Name` adicione o endereçamento do seu domínio e clique em `Create`;

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/7.png)

- Em seguida pegue, os 4 valores no registro do tipo NS e adicione em nameservers no provedor aonde adquiriu seu domínio. Após isso, demora de 2 a 24 horas para que a alteração seja propagada;

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/8.png)

- Clique em `Create Record Set`;
- Adicione www no campo `Name`, CNAME no campo `Type` e em `Value` adicione o `Domain Name` da distribuição criada no CloudFront.

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/9.png)

Vamos agora emitir um certificado para nosso domínio:

- Vá até o serviço [AWS Certificate Manager](https://console.aws.amazon.com/acm/home) e clique em `Get Started`;
- Em `Request a certificate` deixe em `Request a public certificate` e clique em `Request a certificate`;
- O domínio que vamos adicionar em `Domain name` será o record que criamos no Route 53 com www. Em seguida clique em `Next`;

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/10.png)

- Em `Select validation method` marque a opção `DNS validation` e clique em `Next`;
- Nas etapas 3 e 4 clique em `Review` e depois em `Confirm and Request`;
- Na etapa de `Validation` clique em `Create record in Route 53` e depois em `Continue`.

Para que o certificado seja gerado demora até 30 minutos, fora o tempo que demora para propagar as alterações que fizemos no Route 53. A partir de agora recomendo esperar algumas horas antes de adicionar o domínio nas configurações do CloudFront Continuando:

- Navegue até o [serviço CloudFront](https://console.aws.amazon.com/cloudfront/home);
- Selecione a distribuição que criou e clique em `Distribution Settings`;
- Na aba General, clique em `Edit`;
- Em `Alternate Domain Names` adicionei o domínio e em `SSL Certificate`, marque a opção `Custom SSL Certificate` e adicionei o certificado que criamos no AWS Certificate Manager;

![](/assets/img/posts/hospedando-um-site-estatico-na-aws-com-s3-e-cloudfront/11.png)

- Para finalizar clique em `Yes, Edit`.

Quando voltar para a página inicial do CloudFront verá que o `Status` da distribuição está como `In Progress`. Quando mudar para `Deployed` é só acessar a url configurada.

---

Finalizado, agora é só desfrutar da aplicação.
