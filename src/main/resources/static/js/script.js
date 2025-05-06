function carregarPresenca() {
    $.ajax({
        url: '/ListaPresenca/',
        type: 'GET',
        success: function (presenca) {
            let lista = '';
            presenca.forEach(p => {
                lista += `
                    <li class="list-group-item">
                        <strong>${p.nome}</strong> <br>
                        <small>${p.cargo}</small><br>
                        <small>${p.empresa}</small>
                    </li>`;
            });
            $('#listaPresenca').html(lista);
        }
    });
}

function adicionarPresenca() {
    const presenca = {
        nome: $('#nomeLista').val(),
        cargo: $('#cargoLista').val(),
        empresa: $('#empresaLista').val()
    };

    $.ajax({
        url: '/ListaPresenca/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(presenca),
        success: function () {
            $('#formLista')[0].reset();
            carregarPresenca();
        }
    });
}

$(document).ready(function () {
    carregarPresenca();
});
