import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]= [
    {
      icon:'american-football',
      name:'Action Sheet',
      redirecTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirecTo:'/alert'
    },
    {
      icon:'infinite-outline',
      name:'Infinite Scroll',
      redirecTo:'/infinite-scroll'
    },
    {
      icon:'filter-outline',
      name:'Segment',
      redirecTo:'/segment'
    },
    {
      icon:'options-outline',
      name:'Tab',
      redirecTo:'/tabs'
    }
  ];
   constructor() { }

   ngOnInit() {
   }

}
