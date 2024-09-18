const nomes = "Ozzy, Serj, Slash, Kurt, Dio, Chester, Joey"

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)