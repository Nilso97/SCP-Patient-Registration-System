## SCP - Sistema de Cadastro de Pacientes (Backend)
Sistema Back-end desenvolvido em Node.js + MongoDB com fins didáticos, para realizar a manipulação de dados de Pacientes em uma Clínica Médica. Nela foram utilizados os serviços de Cloud da AWS - São Paulo, que o MongoDB Atlas utiliza por padrão para a criação de clusters para hospedagem de dados em nuvem de forma gratuita 👨🏻‍💻⚕️


Neste projeto pude aplicar a arquitetura do Padrão de Projetos MVC (Model, View, Controller) que estou estudando bastante no momento 📚

A aplicação está dividida em 6 rotas HTTP:
- Home Page (Página Principal do Sistema) => <strong>"/"</strong>
- Listar todos os Pacientes => <strong>"/list"</strong>
- Adicionar um novo Paciente => <strong>"/create"</strong>
- Buscar um Paciente através da ID => <strong>"/list/:id"</strong>
- Atualizar um Paciente através da ID => <strong>"/update/:id"</strong>
- Deletar um Paciente através da ID => <strong>"/delete/:id"</strong>

Todos os dados são armazenados em um Cluster criado no MongoDB para hospedagem dos mesmos, para cada um dos Pacientes será gerada automáticamente uma ID única e que através dela poderam ser realizadas as operções CRUD
![1](https://user-images.githubusercontent.com/96146165/187085250-b002a93e-f13a-4f04-bb4c-acbd8370dc79.png)

Testando as rotas utilizando o Insomnia:
![3](https://user-images.githubusercontent.com/96146165/187085259-b4fe6d1a-5857-4ecc-ac04-dccf8493c246.png)

