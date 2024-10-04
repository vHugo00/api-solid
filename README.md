# APP

Aplicativo estilo Gympass.

## RFs (Requisitos Funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de Negócio)

- [ ] O usuário não pode se cadastrar com um e-mail já existente;
- [ ] O usuário não pode fazer dois check-ins no mesmo dia;
- [ ] O check-in só pode ser validado após 20 minutos da sua criação;
- [ ] Apenas administradores podem validar check-ins;
- [ ] Apenas administradores podem cadastrar academias;

## RNFs (Requisitos Não Funcionais)

- [ ] A senha do usuário deve estar criptografada;
- [ ] Os dados da aplicação devem estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados devem estar paginadas, com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
