function notas() {
  let listaAlunos = ["Roberta", "Danielle", "Pedro", "Marcos", "Felipe", "Arthur"];
  let listaTurma = ["1001", "1002", "1003", "1004", "1005", "1002"];
  let listaNota1 = [];
  let listaNota2 = [];
  let listaMedia = [];
  let listaStatus = [];

  function menuInicial() {
    let opcao = 0;

    while (opcao != 7) {
      opcao = parseInt(prompt("Informe a opção desejada:\n1- Listar alunos \n2- Adicionar aluno \n3- Editar aluno \n4- Excluir aluno \n5- Adicionar notas \n6- Imprimir status do aluno \n7- Sair"));

      switch (opcao) {
        case 1:
          imprimirListaDeAlunos();
          break;

        case 2:
          adiconarAluno();
          break;

        case 3:
          editarAluno();
          break;

        case 4:
          excluirAluno();
          break;

        case 5:
          adiconarNota();

          break;

        case 6:
          imprimirStatus();
          break;

        case 7:
          alert("Saindo do Sistema");
          break;

        default:
          alert("Opção Inválida");
          menuInicial();
      }
    }
  }

  function imprimirListaDeAlunos() {
    let resposta = "";
    for (let i = 0; i < listaAlunos.length; i++) {
      resposta =
        resposta +
        i +
        "- Aluno: " +
        listaAlunos[i] +
        " | Turma: " +
        listaTurma[i] +
        "\n";
    }
    alert(resposta);
  }

  function adiconarAluno() {
    let nomeAluno = prompt("Informe o nome do aluno: ");
    listaAlunos.push(nomeAluno); //adiciona nome do aluno no final da lista
    let turma = prompt("Informe a turma: ");
    listaTurma.push(turma); // adiciona turma no final da lista

    let decisao = prompt("Deseja adicionar mais um aluno? s/n");
    if (decisao == "s") { //Verifica se usuário quer adicionar mais um aluno e chama a função novamente
      adiconarAluno(); 
    } else {
      alert("Aluno(s) adicionado(s) com sucesso!");
    }

    imprimirListaDeAlunos();
  }

  function excluirAluno() {
    let numeroAluno = parseInt(prompt("Qual o número do aluno que deseja excluir? \n \n \n" + listaCompleta));
    //Pega o índice do aluno

    //É necessário adicionar o splice em todas as listas pq ao excluir a informção do meio da lista, 
    //os outros dados sobem de posição, dessa forma não há risco das notas ficarem desordenadas;

    listaAlunos.splice(numeroAluno, 1); //exclui o aluno de acordo com o índice;
    listaTurma.splice(numeroAluno, 1);//exclui a turma de acordo com o índice do aluno;
    listaNota1.splice(numeroAluno, 1);//exclui as notas de acordo com o índice;
    listaNota2.splice(numeroAluno, 1);
    listaMedia.splice(numeroAluno, 1);

    imprimirListaDeAlunos();
  }

  function adiconarNota() {
    let numeroAluno = parseInt(
      prompt("Informe o número aluno: \n\n\n" + listaCompleta)
    ); //pega o índice do aluno 
    let nota1 = parseFloat(prompt("Informe a primeira nota:")); // Lê nota 1
    let nota2 = parseFloat(prompt("Informe a segunda nota: ")); //Lê nota 2
    let media = (nota1 + nota2) / 2; //Calcula média automaticamente
    let status;

      //Diz se o aluno foi aprovado ou não de acordo com a média:
      //Menor que 5 é Reprovado, entre 5 e 7 está de Recuperação, maior que 7 está Aprovado
    if (media < 5) {
      status = "Reprovado";
    } else if (media >= 5 && media < 7) {
      status = "De Recuperação";
    } else {
      status = "Aprovado";
    }

    //Adiciona notas e média na posição da lista de acordo com o índice do aluno
    listaNota1[numeroAluno] = nota1;
    listaNota2[numeroAluno] = nota2;
    listaMedia[numeroAluno] = media;
    listaStatus[numeroAluno] = status;

    //Mostra dados do aluno com notas, média e status
    alert(
      "Aluno: " +
      listaAlunos[numeroAluno] +
      "\n Nota 1: " +
      listaNota1[numeroAluno] +
      "\n Nota 2: " +
      listaNota2[numeroAluno] +
      "\nMedia: " +
      listaMedia[numeroAluno] +
      "\nStatus: " +
      listaStatus[numeroAluno]
    );


    //Verifica se usuário quer adicionar notas em outros aluno e retorna a função
    let decisao = prompt("Deseja adicionar a nota de mais um aluno? s/n");
    if (decisao == "s") {
      adiconarNota();
    } else {
      alert("Notas adicionadas com sucesso!");
    }
    menuInicial;
  }


  function editarAluno() {
    let numeroAluno = parseInt(
      prompt("Qual aluno vc deseja editar?\n \n \n" + listaCompleta)
    );
    let opcao = parseInt(
      prompt(
        "O que deseja editar? \n 1-Editar nome do aluno \n 2-Editar turma \n 3-Adicionar Nota de 3ª chamada"
      )
    );

    switch (opcao) {
      case 1:
        let novoNome = prompt("Informe o novo nome do aluno:");
        listaAlunos[numeroAluno] = novoNome;
        break;

      case 2:
        let novaTurma = prompt("Informe a nova turma:");
        listaTurma[numeroAluno] = novaTurma;
        break;

      case 3:
        alert("Em construção");
        // let nota3 = parseFloat(prompt("Informa a nota da 3ª chamada: "));

        // if (listaNota1[numeroAluno] > listaNota2[numeroAluno]) {
        //     if (listaNota2[numeroAluno] < nota3) {
        //         listaNota2[numeroAluno] = nota3;
        //   } else {
        //      if (nota3 > listaNota1[numeroAluno]) {
        //       listaNota1[numeroAluno] = nota3;
        //     }
        //   }
        // }

        // alert(
        //     "Aluno: " +
        //       listaAlunos[numeroAluno] +
        //       "\n Nota 1: " +
        //       listaNota1[numeroAluno] +
        //       "\n Nota 2: " +
        //       listaNota2[numeroAluno] +
        //       "\nMedia: " +
        //       listaMedia[numeroAluno] +
        //       "\nStatus: " +
        //       listaStatus[numeroAluno]
        //   );
        break;

      default:
        alert("Opção inválida");
        editarAluno();
        break;
    }
  }

  function imprimirStatus() {

    //Cria uma tabela com todos os dados do aluno, mapeando cada item de acordo com o índice;

    let listaComNotas = "";

    for (let i = 0; i < listaAlunos.length; i++) {
      listaComNotas =
        listaComNotas +
        `Aluno: ${listaAlunos[i]}   |Turma: ${listaTurma[i]} 
            \nNota 1: ${listaNota1[i]} |Nota 2: ${listaNota2[i]} 
            \nMédia: ${listaMedia[i]}  |Status: ${listaStatus[i]}
            \n------------------------------------------------------- \n`;
    }

    alert(listaComNotas);
  }

  //Variável criada para mostrar lista simples junto com o prompt de comando
  //Para o usuário saber qual aluno ele irá editar, ou add as notas
  let listaCompleta = "";

  for (let i = 0; i < listaAlunos.length; i++) {
    listaCompleta =
      listaCompleta +
      i +
      "- Aluno: " +
      listaAlunos[i] +
      " | Turma: " +
      listaTurma[i] +
      "\n";
  }

  //imprimirListaDeAlunos();

  //adiconarNota();
  //adiconarAluno();
  //imprimirStatus();
  menuInicial();
}

notas();
