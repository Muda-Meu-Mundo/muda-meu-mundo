import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  categoria: string= '';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoria = this.route.snapshot.paramMap.get('categoria');
  }

}
