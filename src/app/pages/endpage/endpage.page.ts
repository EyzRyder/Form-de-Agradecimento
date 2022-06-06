import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.page.html',
  styleUrls: ['./endpage.page.scss'],
})
export class EndpagePage implements OnInit {
  nome: string;
  curso: string;
  rm: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('paramNome');
    this.curso = this.activatedRoute.snapshot.paramMap.get('paramCurso');
    this.rm = this.activatedRoute.snapshot.paramMap.get('paramRm');
  }

}
