import { Component } from '@angular/core';
import { Estados } from '../interfaces/states';
import { StadosService } from '../servico/stados.service';
@Component({
  selector: 'app-list-uf-component',
  templateUrl: './list-uf-component.component.html',
  styleUrls: ['./list-uf-component.component.scss']
})
export class ListUfComponentComponent {

  states: Estados[] = [];

  constructor(private stadosService: StadosService){
    this.buscarEstadosServico();
   }

  buscarEstadosServico(){
    this.stadosService.getServicoStados()
      .subscribe((response) => {
        this.states = response;
      });
  }
}
