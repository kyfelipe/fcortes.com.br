---
date: 2020-05-14 14:45:00
title: Velero - Uma solução de backup para seu cluster Kubernetes (1/2) 
description: Pensar em uma solução de backup é fundamental ao iniciar um processo seguro na construção de projetos de software
author: Felipe Côrtes
category: velero,kubernetes,backup
featuredImage: ../img/posts/velero-uma-solucao-de-backup-para-seu-cluster-kubernetes-parte-1/velero.jpg
---

![Foto de Vidar Nordli-Mathisen](/assets/img/posts/velero-uma-solucao-de-backup-para-seu-cluster-kubernetes-parte-1/velero.jpg)

A primeira parte deste artigo terá um foco totalmente voltado para a parte teórica, meu objetivo é deixa claro o que o Velero faz no momento de executar backups, restaurações e todas as operações relacionadas, antes de mostrar para você uma parte mais prática.

## O que é o Velero?

Velero, antes conhecido como Ark, é um projeto open source desenvolvido anteriormente pela Heptio e hoje mantido pela VMware. A ferramenta fornece uma solução de backup, restauração e migração dos recursos e volumes do Kubernetes de forma fácil, podendo ser executado em nuvem ou local. O Velero permite:

- Realizar backups e restauração do cluster em caso de perda;
- Migrar recursos entre clusters;
- Replicar o cluster.

O Velero consiste em:

- Um servidor executado no cluster;
- Um CLI local para executar os comandos no servidor.

## Como funciona o Velero?

Cada operação do Velero é um recurso personalizado definido no [CRD](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions) do Kubernetes e armazenado no etcd. O Velero também possui um controlador para processar os backups, restaurações e todas as operações relacionadas.

O Velero permite você fazer um backup ou restauração de todos os objetos em seu cluster ou se preferir é possível filtrar objetos por tipo, namespace ou labels.

### Backup

O backup é separado em dois armazenamentos: os recursos do Kubernetes são guardados em um `Object Storage`, como o [Amazon S3](https://aws.amazon.com/pt/s3/), [GCS (Google Cloud Storage)](https://cloud.google.com/storage), [Blob Storage](https://azure.microsoft.com/pt-br/services/storage/blobs/) e etc. Já os PVs/PVCs são armazenados utilizando snapshot de discos dos provedores cloud.

> Os backups do cluster não são estritamente atômicos. Se algum recurso do Kubernetes estiver sendo criado ou editado no momento do backup, ele pode não ser incluídos no backup. As chances de capturar informações inconsistentes são baixas, mas é possível.

### Fluxo de trabalho do backup

Quando é executado o comando para a criação de um backup, o seguinte fluxo é executado:

1. O CLI do Velero realiza uma chamada para a API do Kubernetes para criar um objeto do tipo Backup;
2. O BackupController dentro do cluster identifica o objeto do tipo Backup e executa uma validação;
3. Executando uma coleta dos dados da API do Kubernetes, o BackupController inicia o processo de backup;
4. O BackupController realiza uma chamada para o serviço de `Object Storage` - por exemplo, AWS S3 - para fazer o upload dos recursos;
5. O BackupController realiza uma chamada para o serviço de snapshots de discos, para ser feito snapshots dos PVs/PVCs.

![Velero Documentaion - Backup workflow](/assets/img/posts/velero-uma-solucao-de-backup-para-seu-cluster-kubernetes-parte-1/backup.png)

O Backup e BackupController são CRDs do Kubernetes criadas na instalação do Velero, outros tipos que veremos serão:

- **BackupLocation:** armazena informações do object storage que será usado para armazenar os recursos do backup.
- **SnapshotLocation:** armazena informações do serviço de snapshots de discos utilizado para armazenas os PVs/PVCs do backup.
- **Restore:** armazena informações do conteúdo que será restaurado de um backup.

### Agendamento de backups

A operação de agendamento permite fazer backup de seus dados em intervalos recorrentes. O primeiro backup é executado quando o agendamento é criado pela primeira vez e os backups subsequentes ocorrem no intervalo especificado no agendamento. Esses intervalos são especificados por uma expressão [cron](https://en.wikipedia.org/wiki/Cron).

Os backups agendados são salvos com o nome `<SCHEDULE NAME>-<TIMESTAMP>`, onde `<TIMESTAMP>` é formatado como YYYYMMDDhhmmss.

### Restauração

A operação de restauração permite restaurar todos os objetos e volumes persistentes a partir de um backup criado anteriormente, há possibilidade também de restaurar apenas um subconjunto filtrado de recursos e volumes persistentes. O Velero suporta vários remapeamentos de namespace - por exemplo, em uma única restauração, os objetos no namespace "abc" podem ser recriados no namespace "def" e os objetos no namespace "123" em "456".

O nome padrão de uma restauração é `<BACKUP NAME>-<TIMESTAMP>`, onde `<TIMESTAMP>` é formatado como YYYYMMDDhhmmss, é possível mudar isso e especificar um nome personalizado. 

Por padrão, os locais de armazenamento de backup são criados no modo de leitura e gravação, no entanto, durante uma restauração, é possível configurar um local de armazenamento de backup no modo somente de leitura, o que desativa a criação e exclusão de backup do local de armazenamento. Isso é muito útil para evitar que nenhum backup seja acidentalmente alterado ou excluído durante um cenário de restauração.

### Tempo de vida do backup

Ao criar um backup, é possível especificar o TTL (Time To Live). Quando o tempo definido expirar, será removido:

- O recurso Backup.
- Os arquivos de backup no object storage.
- Os snapshots.

O argumento TTL permite especificar o período de retenção do backup com o valor especificado em horas, minutos e segundos, como por exemplo `24h0m0s`, se não especificado, o valor default é 30 dias.

## Conclusão

Agora que está um pouco mais claro o funcionamento do Velero, a segunda parte deste artigo te espera com um teor mais prático.

## Bibliografia

Documentação do Velero - [https://velero.io/docs/](https://velero.io/docs/)
