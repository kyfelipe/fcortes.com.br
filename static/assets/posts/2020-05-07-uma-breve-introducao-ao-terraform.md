---
date: 2020-05-07 14:00:10
title: Uma breve introdução ao Terraform 
description: ""
author: Felipe Côrtes
category: terraform,devops,provisionamento
featuredImage: ../img/posts/uma-breve-introducao-ao-terraform/terraform_logo.png
---

![](/assets/img/posts/uma-breve-introducao-ao-terraform/terraform_logo.png)

Terraform é uma ferramenta de provisionamento de infraestrutura desenvolvida pela HashiCorp. O Terraform Utiliza a metodologia de *Infrastructure as Code*, mas o que é *Infrastructure as Code*?

## Infrastructure as Code (IaC)

*Infrastructure as Code* ou Infraestrutura como Código é uma metodologia de implementação e automação da infraestrutura, com ela as equipes podem usar ferramentas para criar, alterar e gerenciar a infraestrutura de uma maneira segura e repetitiva, sem perder o poder de controle, segurança, qualidade e disponibilidade. A Infraestrutura como código pode ser usada para recursos físicos, virtuais ou em nuvem.

## Introdução ao Terraform

Com o Terraform é possível gerenciar a infraestrutura entre diversos [provedores de nuvem](https://www.terraform.io/docs/providers/type/major-index.html) e cada provedores tem seus componentes, sendo eles recursos de cada provedor.

Para descrever o que será criado pelo Terraform utilizamos arquivos de configurações com a extensão .tf e no formato HCL (Hashicorp Configuration Language). Uma vez descrito o que será provisionado usarem comando do terraform para executarmos os scripts.

Para melhor compreensão do funcionamento do Terraform, usarei o script abaixo durante o artigo para provisionar uma instância no Amazon EC2. Ao decorrer da nossa jornada será explicado tudo apresentado abaixo.

```hcl
provider "aws" {
    version    = "~> 2.0"
    region     = "us-east-1"
    access_key = "my-access-key"
    secret_key = "my-secret-key"
}
```

```hcl
resource "aws_instance" "dev" {
    ami           = "ami-0a887e401f7654935"
    instance_type = "t2.micro"

    tags = {
        Name = "dev-machine"
    }
}
```

### Terraform init

O primeiro comando a ser executado em um novo projeto é o terraform init, que fará o download e instalação automática dos binários dos provedores utilizados no projeto. No exemplo prático que estaremos utilizando há apenas o provedor da AWS.

> A arquitetura do Terraform é baseada em plugins para dar suporte à inúmeros serviços e provedores em nuvem.

![Figura 1 - terraform init](/assets/img/posts/uma-breve-introducao-ao-terraform/terraform_init.png)

Os binários do plug-in do provedor da AWS podem ser encontrados na junto ao projeto na pasta .terraform. Se quiser mais informações sobre que estaremos utilizando pode acessar o [Terraform Registry](https://registry.terraform.io/) do módulo da [AWS](https://registry.terraform.io/providers/hashicorp/aws/2.50.0).

#### Provedor

Um provedor é responsável por criar e gerenciar recursos, o Terraform usa um provedor para ter interações com a API e expor seus os recursos.

Para o Terraform criar e gerenciar os recursos declarados no script é necessário passar obrigatoriamente a região, chave de acesso e a chave secreta, isso no caso da AWS.

```hcl
provider "aws" {
    version    = "~> 2.0"
    region     = "us-east-1"
    access_key = "my-access-key"
    secret_key = "my-secret-key"
}
```

### Terraform plan

O comando terraform plan é utilizado para termos uma prévia dos recursos que serão criados.

![Figura 2 - terraform plan](/assets/img/posts/uma-breve-introducao-ao-terraform/terraform_plan.png)

Após a execução do planejamento, a resposta recebida é que será adicionado um recurso quando aplicarmos o script, sendo ele um instância no Amazon EC2.

No exemplo que estamos utilizando é passado apenas os valores de nome, imagem e tipo da instância, porém o recurso que estamos utilizando para criar uma instância no Amazon EC2 não recebe apenas esses valores, se quiser saber todos os valores que são possíveis passar para este recurso é só acessar a [documentação](https://www.terraform.io/docs/providers/aws/r/instance.html).

#### Recurso

Um recurso pode ser um componente físico, como uma instância do EC2, ou um recurso lógico, como por exemplo, um usuário ou uma subnet.

O bloco de um recurso recebe dois valores antes de ser iniciado: o tipo de recurso e o nome do recurso. No nosso exemplo, o tipo de recurso é *aws_instance* e o nome é *dev*. O prefixo do tipo é mapeado para o provedor, no nosso caso, *aws_instance* informa automaticamente o Terraform que é gerenciado pelo provedor *aws*.

Dentro do bloco está a configuração para esse recurso, a configuração é diferente para cada recurso, qualquer dúvida recomendo consultar a documentação. Para nossa instância do EC2, especificamos uma AMI para Amazon Linux 2 e uma instância t2.micro, ambas estão dentro do *free tier*.

```hcl
resource "aws_instance" "dev" {
    ami           = "ami-0a887e401f7654935"
    instance_type = "t2.micro"

    tags = {
        Name = "dev-machine"
    }
}
```

### Terraform apply

Agora que vimos o planejamento do que será criado, vamos executar o comando terraform apply para aplicar a criação da instância no Amazon EC2. Isso pode levar de alguns segundos até a alguns minutos, variando de acordo com o tamanho da infraestrutura que estará provisionando.

Quando executar o comando terraform apply o prompt vai ser travado e irá esperar uma aprovação da alteração de estado que irá acontecer.

![Figura 3 - Confirmação do terraform apply](/assets/img/posts/uma-breve-introducao-ao-terraform/conf_terraform_apply.png)

Aprovando a criação do recurso começará a ser criado a nossa instância.

![Figura 4 - terraform apply finalizado](/assets/img/posts/uma-breve-introducao-ao-terraform/terraform_apply_finalizado.png)

Após a criação do recurso, podemos visualizar o resultado no console da AWS.

![Figura 5 - EC2 Dashboard](/assets/img/posts/uma-breve-introducao-ao-terraform/ec2_terraform.png)

### Arquivo de estado

Após criação da nossa instância no EC2, você deve estar se perguntando: Como destruir ou alterar o estado da infraestrutura que estamos gerenciando?

O Terraform guarda o estado da infraestrutura que estamos gerenciando em um arquivo com a extensão de .tfstate, que pode ser encontrado na raiz do projeto. Neste arquivo estará armazenado toda informação sobre a nossa infraestrutura. Então, se você apagar este arquivo perdemos as informações da infraestrutura que estamos gerenciando.

### Alterando a infraestrutura

A infraestrutura está constantemente mudando e o Terraform permite que em alguns casos, seja alterado apenas aquilo que deseja. Então, não será provisionado toda a infraestrutura novamente. Para vermos isso acontecendo vamos habilitar o monitoramento da nossa instância que por padrão, é desabilitado.

```hcl
resource "aws_instance" "dev" {
    ami           = "ami-0a887e401f7654935"
    instance_type = "t2.micro"
    monitoring    = true

    tags = {
        Name = "dev-machine"
    }
}
```

Após alterarmos o script e executaremos o comando terraform apply e você poderá ver que o Terraform não estará criando algo e sim alterando.

![Figura 6 - Alterando a infraestrutura com terraform apply](/assets/img/posts/uma-breve-introducao-ao-terraform/terraform_apply_changed.png)

Após a alteração da infraestrutura podemos ver o resultado no console da AWS e como queríamos foi habilitado o monitoramento.

![Figura 7 - EC2 Dashboard com monitoramento](/assets/img/posts/uma-breve-introducao-ao-terraform/e2_monitoring.jpg)

O monitoramento é um recurso simples, mas e se alteramos o tipo da instância, o que acontece? Quando isso ocorre a instância será recriada. Essa é uma ação da própria AWS, então é algo que não pode ser evitado.

### Terraform destroy

Para destruirmos a infraestrutura usamos o comando terraform destroy, e por se tratar de um comando que alterado o estado da nossa infraestrutura será necessário uma confirmação, igual ao terraform apply.

![Figura 8 - terraform destroy](/assets/img/posts/uma-breve-introducao-ao-terraform/terraform_destroy.png)

### Formatação e validação

O Terraform tem um comando para padronizar a formatação de seus arquivos, terraform fmt atualiza automaticamente todos os arquivos do diretório com a extensão *.tf*, padronizando sua formatação.

Para validação tem o comando *terraform validate* que irá garantir que sua configuração seja sintaticamente válida e consistente internamente, verificando erros nos módulos, nomes de atributos e tipos de valores.

## Conclusão

Com essa introdução você já tem o básico de como funciona o Terraform. Caso queira se aprofundar mais pode acessar o [Hashicorp Learn](https://learn.hashicorp.com/) e se tiver alguma dúvida, sugestão ou feedback fique a vontade para me mandar uma mensagem no [LinkedIn](https://www.linkedin.com/in/felipe-cortes/).
