const space = $('#testSpace');
const select = $
const itens = [];

function attTestSpace() {
    space.empty().append(itens)
}

function criarItem() {
    itens.push($('<div class="item">'+(itens.length+1)+'</div>'));
    attTestSpace()
}

function removerItem() {
    itens.pop()
    attTestSpace()
}

{
    criarItem()
    criarItem()
}

