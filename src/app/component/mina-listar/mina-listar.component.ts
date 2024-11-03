import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Mina } from '../../model/mina';
import { MinaService } from '../../service/mina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mina-listar',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './mina-listar.component.html',
  styleUrl: './mina-listar.component.css'
})
export class MinaListarComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'fechaInicio', 'tipo'];
  dataSource = new MatTableDataSource<Mina>();

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Configuración del paginator

  constructor(private minaService: MinaService, private router: Router) { }

ngOnInit() {
  this.cargarMinas()
}
cargarMinas() {
  this.minaService.listarMinas().subscribe(
    (response: Mina[]) => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.paginator._changePageSize(3); // Cambia el tamaño de página a 3 registros
    }); 
}

}
