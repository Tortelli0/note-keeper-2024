import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()

export class NotificacaoService {

  constructor(private snackbar: MatSnackBar) {}

  sucesso(mensagem: string): void {
    this.snackbar.open(mensagem, 'OK', {
      panelClass: ['notificacao-sucesso'],
      duration: 5000,
      verticalPosition: 'bottom',
    });
  }

  aviso(mensagem: string): void {
    this.snackbar.open(mensagem, 'OK', {
      panelClass: ['notificacao-aviso'],
      duration: 5000,
    });
  }

  erro(mensagem: string): void {
    this.snackbar.open(mensagem, 'OK', {
      panelClass: ['notificacao-erro'],
      duration: 5000,
    });
  }
}
