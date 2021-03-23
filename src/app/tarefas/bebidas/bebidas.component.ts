import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-bebidas-tarefa',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
  	private router: Router) { }

  ngOnInit() {
  	this.tarefa = new Tarefa();
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
  	  this.tarefaService.cadastrar(this.tarefa);
  	  this.router.navigate(["/tarefas"]);
    }
  }

}
