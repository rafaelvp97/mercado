import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { CarneComponent } from './carne';
import { BebidasComponent } from './bebidas';
import { ArrozComponent } from './arroz';

export const TarefaRoutes: Routes = [
	{ 
		path: 'tarefas', 
		redirectTo: 'tarefas/listar' 
	},
	{ 
		path: 'tarefas/listar', 
		component: ListarTarefaComponent 
	}, 
	{ 
		path: 'tarefas/sal', 
		component: CadastrarTarefaComponent 
	},
	{ 
		path: 'tarefas/carne', 
		component: CarneComponent 
	},
	{ 
		path: 'tarefas/bebidas', 
		component: BebidasComponent 
	},
	{ 
		path: 'tarefas/arroz', 
		component: ArrozComponent 
	},
	{ 
		path: 'tarefas/editar/:id', 
		component: EditarTarefaComponent 
	}
];
