function notas(){

    let listaAlunos = [ ["Roberta", "1001"],
                        ["Danielle", "1002"], 
                        ["Pedro", "1002"],
                        ["Marcos", "1001"],
                        ["Felipe", "1001"],
                        ["Arthur", "1002"]]; 

    listaCompleta = ""

        
    
    

    let notas = [ ["nota1", "nota2", "media"]];



    function menuInicial() {
        let opcao;


        while (opcao != 5){

            opcao = parseInt(prompt("Informe a opção desejada:\n 1- Listar alunos \n2- Adicionar aluno \n3- Editar aluno \n4- Excluir aluno \n 5- Sair"));

            switch (opcao){
                case 1: listarAlunos();
                
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
        for(let i =0;i<listaAlunos.length; i++ ){
            //listaCompleta = listaCompleta + (i+1) + listaAlunos[i] + "\"
            
            let aluno = listaAlunos[i];
           alert(listaAlunos);


        }

        return listaAlunos;

    }

    function adiconarAluno() {

    }

    function excluirAluno() {

    }

    function editarAluno() {

    }
    
    menuInicial();
}

function media(){

    let media =( nota1 + nota2) /2;

    if(media>=6) {
        (alert(`aprovado`))
    }else {
        alert(`reprovado` )};

    


}





notas();

