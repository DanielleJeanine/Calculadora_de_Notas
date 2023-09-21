function notas(){

    let listaAlunos = ["Roberta", "Danielle", "Pedro", "Marcos", "Felipe", "Arthur"];
    let listaTurma = ["1001", "1002","1003", "1004"];
    let listaNota1 = [];
    let listaNota2 = [];                     
    let listaMedia = [];
    let quantidadeAluno = listaAlunos.length;
    

        
    
    

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

        for(let i = 0; i < listaAlunos.length; i++){
           console.log(i + " Aluno: " + listaAlunos[i] + " Turma: " + listaTurma[i]);

        }
        // for(let i =0;i<listaAlunos.length; i++ ){
        //     //listaCompleta = listaCompleta + (i+1) + listaAlunos[i] + "\"
            
        //     let aluno = listaAlunos[i];
        //    con(listaAlunos);


        // }

        return listaAlunos;
        console.log(listaAlunos[2])

    }

    function adiconarAluno() {
        let nomeAluno = prompt("Informe o nome do aluno: ");
        listaAlunos.push(nomeAluno);
        let turma = prompt("Informe a turma: ");
        listaTurma.push(turma);

     }
        

    

    function excluirAluno() {

        let excluir =  [  listaAlunos ]
        
        excluir.splice( 1,1 )
        alert(excluir)
        console.log (excluir) // "excluir" tente novamente
         
    }

    function editarAluno() {

    }

    function adiconarNota(){

        let numeroAluno = parseInt(prompt("Informe o número aluno: "));
        let nota1 = parseFloat(prompt("Informe a primeira nota:"));
        let nota2 = parseFloat(prompt("Informe a segunda nota: "));
        let media = ( nota1 + nota2) /2;
        
        listaNota1[numeroAluno] = nota1;
        listaNota2[numeroAluno] = nota2;
        listaMedia[numeroAluno] = media;

        console.log("Aluno: " + listaAlunos[numeroAluno] + " Nota 1: " + listaNota1[numeroAluno] + " Nota 2: " + listaNota2[numeroAluno] + " Media" + listaMedia[numeroAluno])
    }

    notas()


    
   //menuInicial();
}

// function media(){

//     let media =;

//     if(media>=6) {
//         (alert(`aprovado`))
//     }else {
//         alert(`reprovado` )};

    


// }





notas();




