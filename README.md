<img src="/img/Captura de tela 2025-10-14 171634.png" width="800"/>

# ✅ Lista de Tarefas com Persistência de Dados

# 📖 Descrição do Projeto
Uma aplicação web clássica de "To-Do List", desenvolvida com foco na manipulação direta do DOM utilizando JavaScript puro (vanilla JS). O projeto permite ao usuário adicionar e remover tarefas de forma dinâmica e intuitiva, demonstrando sólidos conhecimentos dos fundamentos do desenvolvimento web front-end.

Um diferencial chave desta aplicação é a utilização do `localStorage` do navegador para garantir a persistência dos dados. Isso significa que as tarefas do usuário permanecem salvas mesmo após o fechamento ou atualização da página, melhorando significativamente a experiência de uso. Além disso, o projeto integra a biblioteca [SweetAlert2](https://sweetalert2.github.io/) para exibir alertas e confirmações elegantes, demonstrando atenção à interatividade e ao feedback visual para o usuário.

Dica: Para adicionar a imagem, tire um print da sua aplicação funcionando, adicione o arquivo ao seu repositório (em uma pasta img, por exemplo) e substitua URL_DA_SUA_IMAGEM_AQUI.png pelo nome do seu arquivo.

# 👨‍💻 Autor
Gabriel Akira Borges Kiyohara

# 🌐 Links
*   **Deploy (GitHub Pages):** [https://gakira06.github.io/ListaDeTarefas/src/pages/listaDeTarefas.html](https://gakira06.github.io/ListaDeTarefas/src/pages/listaDeTarefas.html)
*   **Repositório GitHub:** [https://github.com/Gakira06/ListaDeTarefas.git](https://github.com/Gakira06/ListaDeTarefas.git)

# ⚙️ Tecnologias Utilizadas

## Frontend

*   JavaScript (ES6+)
*   HTML5
*   CSS3

## Interatividade

*   SweetAlert2 (via CDN)

## Persistência

*   LocalStorage API do Navegador

# 🏗️ Arquitetura do Projeto
A aplicação é uma página estática cuja interatividade é totalmente controlada pelo JavaScript no lado do cliente.

*   **Manipulação do DOM:** O JavaScript é usado para ler a entrada do usuário, criar novos elementos HTML para as tarefas, adicioná-los à lista e removê-los quando solicitado.
*   **Gerenciamento de Estado Simples:** Um array em JavaScript (`tarefas`) atua como a "fonte da verdade", armazenando a lista de tarefas atual.
*   **Persistência de Dados:** A cada modificação (adição ou remoção), o array `tarefas` é convertido para uma string JSON e salvo no `localStorage`. Ao carregar a página, o script verifica se há dados salvos e os carrega de volta para o array, reconstruindo a lista.

# 🚀 Funcionalidades

*   **Adicionar Tarefas:** Campo de texto para inserir novas tarefas e adicioná-las à lista.
*   **Remover Tarefas:** Cada tarefa possui um botão individual para remoção.
*   **Persistência de Dados:** As tarefas são salvas no navegador e não se perdem ao recarregar a página.
*   **Validação de Entrada:** O sistema não permite a adição de tarefas com o campo de texto vazio.
*   **Alertas Interativos:** Uso do SweetAlert2 para fornecer feedback visual ao adicionar, remover ou tentar submeter um campo vazio.

# 🔮 Roadmap / Futuras Melhorias

*   Implementar a funcionalidade de editar tarefas existentes.
*   Adicionar um botão para marcar tarefas como "concluídas", com um efeito visual (ex: riscar o texto).
*   Criar filtros para visualizar todas as tarefas, apenas as ativas ou apenas as concluídas.
*   Adicionar a funcionalidade de arrastar e soltar (drag-and-drop) para reordenar as tarefas.
*   Refatorar o código para um framework moderno como React ou Vue.js.

# 🛠️ Como Rodar o Projeto Localmente
Este é um projeto simples de front-end e não requer um servidor ou processo de build.

1.  **Clone o repositório:**

Bash

git clone https://github.com/Gakira06/ListaDeTarefas.git

2.  **Navegue até o diretório do projeto:**

Bash

cd ListaDeTarefas

3.  **Abra o arquivo `src/pages/listaDeTarefas.html` diretamente no seu navegador de preferência.**

# 🤝 Como Contribuir

1.  Faça um fork do projeto.
2.  Crie uma branch para sua nova funcionalidade: `git checkout -b minha-feature`.
3.  Faça commit das suas alterações: `git commit -m "feat: Adiciona nova funcionalidade"`.
4.  Envie para a sua branch: `git push origin minha-feature`.
5.  Abra um Pull Request.

# 📞 Contato

**Gabriel Akira Borges Kiyohara**

*   **LinkedIn:** [linkedin.com/in/gabriel-akira-kiyohara](https://www.linkedin.com/in/gabriel-akira-kiyohara)
*   **GitHub:** [@Gakira06](https://github.com/Gakira06)

# 📄 Licença

Feito com ❤️ por Gabriel Akira Borges Kiyohara.

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
