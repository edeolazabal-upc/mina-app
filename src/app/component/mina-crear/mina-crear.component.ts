import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MinaService } from '../../service/mina.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mina-crear',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './mina-crear.component.html',
  styleUrl: './mina-crear.component.css'
})
export class MinaCrearComponent {
  minaForm: FormGroup;
  tiposMina = ['Tajo Abierto', 'Subterránea', 'Mixta'];


  constructor(
    private fb: FormBuilder,
    private minaService: MinaService,
    private snackBar: MatSnackBar
  ) {
    this.minaForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      tipo: ['', Validators.required],
      tonsProducidas: [0]  // opcional, con valor predeterminado de 0
    });
  }

  registrarMina() {
    if (this.minaForm.valid) {
        this.minaService.registrarMina(this.minaForm.value).subscribe(
        response => {
          this.snackBar.open('Mina registrada exitosamente', 'Cerrar', { duration: 3000 });
          this.minaForm.reset();
        },
        error => {
          this.snackBar.open('Error al registrar la mina', 'Cerrar', { duration: 3000 });
        }
      );
    }
  }  
}
