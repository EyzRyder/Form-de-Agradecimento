import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string;
  curso: string;
  rm: string;
  constructor(
    public toastController: ToastController,
    public router: Router
  ) { }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'Carregou',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async exibirErro() {
    const toast = await this.toastController.create({
      message: 'Tem que preencher os dados',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  abriTela() {
    if (this.nome == undefined || this.curso == undefined || this.rm ==undefined) {
        this.exibirErro();
    } else {
      this.exibirToast();
      this.router.navigateByUrl(`/confirme/${this.nome}/${this.curso}/${this.rm}`);
    }
  }

}
