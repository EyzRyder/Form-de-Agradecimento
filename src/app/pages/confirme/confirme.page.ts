import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  constructor(
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    public router: Router) { }
  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'Carregou',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
  back() {
    this.router.navigateByUrl('/home')
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
