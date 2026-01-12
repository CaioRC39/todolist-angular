import { Component } from '@angular/core';
import { LembreteComponent } from "./views/lembrete/lembrete.component";

@Component({
  selector: 'app-root',
  imports: [LembreteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lembretesapp';
}
