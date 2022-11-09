var STATUS_FATURA_EM_ABERTO = 1;
var STATUS_FATURA_PAGA = 2;

function onLoadPaginas() {
    atualizaBotaoStatus(STATUS_FATURA_EM_ABERTO);
}

function isLoadDadosFixos() {
    return true;
}

function atualizaFaturas(status) {
    port = "tbfatura?status=eq." + status + "&";

    // Atualiza os status dos botoes
    atualizaBotaoStatus(status);

    if (isLoadDadosFixos()) {
        // Carrega uma lista de dados fixos, para nao gastar todas as chamadas api
        var dadosFaturas = JSON.parse(LISTA_FATURAS);
        loadFaturas(dadosFaturas);
    } else {
        // Chama a api da Supabase
        data = {};
        callApi("GET", port, undefined, function (data) {
            loadFaturas(data);
        });
    }
}

function atualizaBotaoStatus(status) {
    if (status == STATUS_FATURA_EM_ABERTO) {
        document.querySelector("#cobranca-aberto").style.display = "block";
        document.querySelector("#cobranca-pago").style.display = "none";
    } else if (status == STATUS_FATURA_PAGA) {
        document.querySelector("#cobranca-aberto").style.display = "none";
        document.querySelector("#cobranca-pago").style.display = "block";
    }
}

function loadFaturas(data) {
    const faturas = data;

    let bodyTable = document.querySelector(".containerTable-body");
    // reset da tabela
    bodyTable.innerHTML = '';

    let temDados = false;
    if (parseInt(faturas.length) > 0) {
        temDados = true;
    }

    if (temDados) {
        faturas.forEach(function (oFatura, key) {
            const id = oFatura.id;
            const datapagamento = oFatura.datapagamento;
            const datavencimento = oFatura.datavencimento;
            const valorvencimento = oFatura.valorvencimento;
            const valorpagamento = oFatura.valorpagamento;

            const htmlBotaoBoletos = getHtmlBotaoBoletos(id);

            // colocando as faturas na tabela de html
            bodyTable.innerHTML += `<tr>
                                            <td>${id}</td>
                                            <td>${datapagamento}</td>
                                            <td>${datavencimento}</td>
                                            <td>${valorvencimento}</td>
                                            <td>${valorpagamento}</td>
                                            <td>${htmlBotaoBoletos}</td>
                                        </tr>`;

        });
    }
}

function getHtmlBotaoBoletos(idFatura) {
    return `
     <a title="Cobrancas pagas" href="#" class="open-detalheFatura title" data-toggle="modal" data-id="${idFatura}" data-target="#modalFatura">
        <p class="title">Detalhar</p>
    </a>
    `;
}

// Evento que trata o modal de detalhe da fatura
$(document).on("click", ".open-detalheFatura", function () {
    var idFatura = $(this).data('id');

    console.log("id fatura" + idFatura);

    // Seta o id da fatura no modal
    $(".modal-body #idfatura").val(idFatura);
});

function loadDadosFatura(idFatura) {
    // criar a tabela de detalhes da fatura

    // Chamar a api do supabase

    // criar a tabela de detalhes da fatura

    // Setar os dados da fatura no modal
}
