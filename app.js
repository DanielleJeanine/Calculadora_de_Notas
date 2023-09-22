function notas() {

    let listaAlunos = ["Roberta", "Danielle", "Pedro", "Marcos", "Felipe", "Arthur"];
    let listaTurma = ["1001", "1002", "1003", "1004", "1005", "1002"];
    let listaNota1 = [];
    let listaNota2 = [];
    let listaMedia = [];
    let listaStatus = [];
    let quantidadeAluno = listaAlunos.length;


    function menuInicial() {
        let opcao=0;


        while (opcao != 6) {

            opcao = parseInt(prompt("Informe a opção desejada:\n1- Listar alunos \n2- Adicionar aluno \n3- Editar aluno \n4- Excluir aluno \n5- Imprimir status do aluno \n6- Sair"));

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
                    imprimirStatus();
                    break;

                case 6: alert("Saindo do Sistema");
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
            resposta = (resposta + i + "- Aluno: " + listaAlunos[i] + " | Turma: " + listaTurma[i] + "\n");

        }
        alert(resposta);
    }

    function adiconarAluno() {
        let nomeAluno = prompt("Informe o nome do aluno: ");
        listaAlunos.push(nomeAluno);
        let turma = prompt("Informe a turma: ");
        listaTurma.push(turma);

        let decisao = prompt("Deseja adicionar mais um aluno? s/n");
        if (decisao == "s") {
            adiconarAluno();
        } else {
            alert("Aluno(s) adicionado(s) com sucesso!")
        }

        imprimirListaDeAlunos();



    }




    function excluirAluno() {

        imprimirListaDeAlunos();
        let numeroAluno = parseInt(prompt("Qual o número do aluno que deseja excluir?"));
        listaAlunos.splice(numeroAluno, 1);
        listaTurma.splice(numeroAluno, 1);
        listaNota1.splice(numeroAluno, 1);
        listaNota2.splice(numeroAluno, 1);
        listaMedia.splice(numeroAluno, 1);


    }

    function editarAluno() {
        imprimirListaDeAlunos();

        let numeroAluno = parseInt(prompt("Qual aluno vc deseja editar?"));
        let opcao = parseInt(prompt("O que deseja editar? \n 1-Editar nome do aluno \n 2-Editar turma \n 3-Adicionar Notas"));

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
                adiconarNota();

            default:
                alert("Opção inválida");
                editarAluno();
                break;
        }



    }

    function adiconarNota() {

        let numeroAluno = parseInt(prompt("Informe o número aluno: "));
        let nota1 = parseFloat(prompt("Informe a primeira nota:"));
        let nota2 = parseFloat(prompt("Informe a segunda nota: "));
        let media = (nota1 + nota2) / 2;
        let status;

        if (media < 5) {
            status = "Reprovado";
        } else if (media >= 5 || media < 7) {
            status = "De Recuperação"
        } else {
            status = "Aprovado"
        }

        listaNota1[numeroAluno] = nota1;
        listaNota2[numeroAluno] = nota2;
        listaMedia[numeroAluno] = media;
        listaStatus[numeroAluno] = status;

        console.log("Aluno: " + listaAlunos[numeroAluno] + "\n Nota 1: " + listaNota1[numeroAluno] + "\n Nota 2: " + listaNota2[numeroAluno] + "\nMedia: " + listaMedia[numeroAluno] + "\nStatus: " + listaStatus[numeroAluno])
    }

    function imprimirStatus() {
        for (let i = 0; i < listaAlunos.length; i++) {
            console.log(`Aluno: ${listaAlunos[i]}   |Turma: ${listaTurma[i]} 
            \nNota 1: ${listaNota1[i]} |Nota 2: ${listaNota2[i]} 
            \nMédia: ${listaMedia[i]}  |Status: ${listaStatus[i]}
            \n------------------------------------------------------- \n`)
        }

    }


    //imprimirListaDeAlunos();

    //adiconarNota();
    // imprimirListaDeAlunos();
    //adiconarAluno();
    //imprimirStatus();
    menuInicial();
}








notas();




