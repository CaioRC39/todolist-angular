export class Lembrete {
    // Atributos
    id: number;
    titulo: string;
    conteudo: string;
    tags: string;

    // Métodos

    // Método construtor
    constructor(id?: number, titulo?: string, conteudo?: string, tags?: string) {
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.tags = tags;
    }


}