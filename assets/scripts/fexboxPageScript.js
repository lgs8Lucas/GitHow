const space = $('#testSpace');
const selectDirection = $('#selectDirection')
const selectJustify = $('#selectJustify')
const selectAlign = $('#selectAlign')
const selectWidth = $('#selectWidth')
const selectHeight = $('#selectHeight')
const itens = [];

function attTestSpace() {
    space.empty().append(itens)
}

function criarItem() {
    itens.push($('<div class="item">'+(itens.length+1)+'</div>'));
    changeSize('width', selectWidth.val())
    changeSize('height', selectHeight.val())
    attTestSpace()
}

function removerItem() {
    itens.pop()
    attTestSpace()
}

function changeDirection() {
    space.css('flex-direction', selectDirection.val())
}

function changeJustify() {
    space.css('justify-content', selectJustify.val())
}

function changeAlign() {
    space.css('align-items', selectAlign.val())
}

function changeSize(opt, e) {
    switch (e) {
        case "1":
            itens.forEach(item => {
                item.css(opt, '100%')
            });
            break;
        case "2":
            itens.forEach(item => {
                item.css(opt, '100px')
            });
            break;
        case "3":
            itens.forEach(item => {
                item.css(opt, item.text()*75+'px')
            });
            break;
        default:
            break;
    }
    space.css('align-items', selectAlign.val())
}






selectDirection.on('change', changeDirection)
selectJustify.on('change', changeJustify)
selectAlign.on('change', changeAlign)
selectWidth.on('change', o=>{
    changeSize('width', selectWidth.val())
})
selectHeight.on('change', o=>{
    changeSize('height', selectHeight.val())
})









{
    changeSize('width', selectWidth.val())
    changeSize('height', selectHeight.val())
    changeAlign()
    changeJustify()
    changeDirection()
    criarItem()
    criarItem()
}
