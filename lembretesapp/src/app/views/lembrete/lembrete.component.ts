import { Component, OnInit } from '@angular/core';
import { Lembrete } from '../../model/lembrete';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LembretesService } from '../../services/lembretes.service';

@Component({
  selector: 'app-lembrete',
  imports: [CommonModule, FormsModule],
  templateUrl: './lembrete.component.html',
  styleUrl: './lembrete.component.css'
})
export class LembreteComponent implements OnInit {
  // Atributos
  lembretes = new Array<Lembrete>();
  selLembrete: Lembrete = null;
  modoEdicao = false;

  // Métodos
  constructor(private lembretesService: LembretesService) { }

  ngOnInit(): void {
    this.recarregarLembretes();
  }

  selecionarLembrete(lembrete: Lembrete): void {
    this.selLembrete = lembrete;
    this.modoEdicao = true;
  }

  novo(): void {
    this.selLembrete = new Lembrete();
    this.modoEdicao = false;
  }

  salvar(): void {
    if (this.modoEdicao) {
      this.lembretesService.atualizar(this.selLembrete);
    } else {
      this.lembretesService.inserir(this.selLembrete);
    }

    this.selLembrete = undefined;
    this.recarregarLembretes();
  }

  cancelar(): void {
    this.selLembrete = null;
  }

  remover(id: number): void {
    this.lembretesService.remover(id);
    this.recarregarLembretes();
  }

  recarregarLembretes(): void {
    this.lembretes = this.lembretesService.exibir();
  }

  getTagsArray(tagsString: string): string[] {
    if (!tagsString) return [];
    return tagsString.split(',').filter(tag => tag.trim() !== '');
  }

  scrollToForm() {
    setTimeout(() => {
      const formElement = document.querySelector('.lembrete-form');
      if (formElement) {
        formElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
}
