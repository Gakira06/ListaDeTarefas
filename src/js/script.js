//DECLARANDO VARIAVEL

let tarefas = [];


//FUNÇÃO VALIDAR CAMPO

const validarCampo=()=>{
    let valida = false;
    if(document.getElementById("task").value =="") valida = true;
    return valida
}


//FUNÇÃO VALIDAR TAREFA

function adicionarTarefa(){
    let linhas = document.getElementById("task")

    if(validarCampo()){
        Swal.fire({
            icon:"warning",
            title:"atenção",
            text:"Preencha o campo de tarefa", // Corrigido "Text" para "text"
            confirmButtonColor: "#0E477CFF",
            confirmButtonText:"OK" // Corrigido "confirmButtontext"
        })
    }
    else{
        tarefas.push(linhas.value);
        linhas.value="";
        listarTarefas();
        Swal.fire({
            icon:"success",
            title:"Tarefa adicionada com sucesso",
            showConfirmButton:false,
            timer:1500,
        });
    }
}

//LISTAR TAREFAS

function listarTarefas() {
    let valor = "";
    for (let i = 0; i < tarefas.length; i++) {
        valor += `
            <div class="tarefa">
                <p>${tarefas[i]}</p>
                <button onclick="removerTarefaEspecifica(${i})" class="buttonRemover">Remover</button>
            </div>
        `;
    }
    document.getElementById("lista").innerHTML = valor;
    // Salva as tarefas no localStorage sempre que listar
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Carrega as tarefas do localStorage ao iniciar a página
window.onload = function () {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        listarTarefas();
    }
};

function removerTarefaEspecifica(index) {
    tarefas.splice(index, 1);
    listarTarefas();
    Swal.fire(
        'Removido!',
        'A tarefa foi removida.',
        'success'
    );
}

// function removerTarefa() {
//     if (tarefas.length === 0) {
//         Swal.fire({
//             icon: 'info',
//             title: 'Nenhuma tarefa para remover!',
//             text: 'Sua lista de tarefas está vazia.',
//             confirmButtonColor: '#3085d6',
//             confirmButtonText: 'Ok'
//         });
//         return;
//     }

//     Swal.fire({
//         title: 'Tem certeza?',
//         text: "A última tarefa será removida!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Sim, remover!',
//         cancelButtonText: 'Cancelar'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             tarefas.pop();
//             listarTarefas();
//             Swal.fire(
//                 'Removido!',
//                 'A tarefa foi removida.',
//                 'success'
//             );
//         }
//     });
// }
