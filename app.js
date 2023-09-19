

    let listaAlunos = [ ["nome", "turma"],
                        ["nome", "turma"], 
                        ["nome", "turma"],
                        ["nome", "turma"],
                        ["nome", "turma"],
                        ["nome", "turma"]]; 
    
    let notas = [ ["nota1", "nota2", "media"]];



    function menuInicial() {
        let opcao;


        while (opcao != 5){

            opcao = parseInt(prompt("Informe a opção desejada:\n 1- Listar alunos \n2- Adicionar aluno \n3- Editar aluno \n4- Excluir aluno \n 5- Sair"));

            switch (opcao){
                case 1: listaAlunos();
                break;

                case 2: adiconarAluno();
                break;

                case 3: editarAluno();
                break;

                case 4: excluirAluno();
                break;

                case 5: alert("Saindo do Sistema");
                break;

                default: 
                alert("Opção Inválida")
                menuInicial();


            }

             
        }

    }

    function listarAlunos(){

    }

    function adiconarAluno() {

    }

    function excluirAluno() {

    }

    function editarAluno() {

    }


menuInicial();
