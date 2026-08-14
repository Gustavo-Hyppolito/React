class Prato{
    constructor(nome,preco,categoria){
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }

    formatarPreco(){
        return R$ ${this.preco.toFixed(2).replace('.',',')}
    }
    aplicarDesconto(percentual){
        this.preco = this.preco * (1 - percentual/100)
    }
}

const Cardapio =[
    new Prato("feijoada completa", 42.90, "prato inicial"),
    new Prato("moqueca de peixe",58.00,"prato inicial"),
    new Prato("coxinha artesanal", 8.50,"petisco"),
    new Prato("brigadeiro gourmet",6.00,"sobremesa"),
    new Prato("morango do amor (pistache)", 15.00, "sobremesa"),
    new Prato ("suco de maracuja",12.00,"bebida"),
    new Prato ("feijoada",15.00,"Prato inicial")
    new Prato("coxinha",)
]


console.log("===pratos criados===")
Cardapio.forEach(p =>{
    console.log(${p.nome} -> ${p.formatarPreco()})
})

const containerCardapio = document.querySelector("#cardapio")

function criarCardPrato(prato){
    const card =document.createElement('article')
    card.className = 'card-prato col-12 col-md-6 col-lg-4 p-4 bg-white rounded-3 shadow-sm'

    card.innerHTML=
    `
    <H3 class="fs-4 fw-bold text-dark mb-2">${prato.nome}</H3>
    <span class = "categoria fs-6 d-block mb-3">${prato.categoria}</span>
    <div class = "preco fs-5 fw-bold text-success"> ${prato.formatarPreco()}</div>
    
    `
    card.addEventListener ('click',() =>{
        alert(
            `
            🍽️${prato.nome} \n\n
            categoria: ${prato.categoria} \n
            preco: ${prato.formatarPreco()}
            `
        )

    })
    return card 
}// fim da função criar card prato


function renderizarCardapio(){
    containerCardapio.innerHTML=''
    Cardapio.forEach(prato =>{
        const card = criarCardPrato(prato)

        containerCardapio.appendChild(card)
    })

}
renderizarCardapio()

Cardapio[0].aplicarDesconto(20)
renderizarCardapio()