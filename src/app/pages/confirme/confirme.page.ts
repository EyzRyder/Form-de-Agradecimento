import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirme',
  templateUrl: './confirme.page.html',
  styleUrls: ['./confirme.page.scss'],
})
export class ConfirmePage implements OnInit {
  nome: string;
  curso: string;
  rm: string;
  constructor(private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    public alertController: AlertController,
    public router: Router) { }
  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'Carregou',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async alertform() {
    const alert = await this.alertController.create({
      header: 'Exemplo Input',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Digite seu nome aqui'
        },
        {
          name: 'curso',
          type: 'text',
          placeholder: 'Digite seu curso aqui'
        },
        {
          name: 'rm',
          type: 'number',
          placeholder: 'rm',
          max: 30000,
          min: 1
        }
      ],
      buttons: [
        {
          text: 'ok',
          handler: (valor: any) => {
            this.nome = valor['nome'];
            this.curso = valor['curso'];
            this.rm = valor['rm'];
            this.router.navigateByUrl(`/confirme/${this.nome}/${this.curso}/${this.rm}`);

          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  telafinal() {
    this.exibirToast();
    this.router.navigateByUrl(`/endpage/${this.nome}/${this.curso}/${this.rm}`);
  }
  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('paramNome');
    this.curso = this.activatedRoute.snapshot.paramMap.get('paramCurso');
    this.rm = this.activatedRoute.snapshot.paramMap.get('paramRm');
  }
}
