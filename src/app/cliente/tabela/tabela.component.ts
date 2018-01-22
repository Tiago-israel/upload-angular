import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  public clientes : Cliente[];
  constructor(private clienteService : ClienteService) { }

  ngOnInit() {
    this.clienteService.queryAll().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  public buscar(id:number) {
    this.getFileDownload(id).subscribe(res => {
      let fileUrl = URL.createObjectURL(res);
      var link = document.createElement("a");
      link.download = name;
      link.href = fileUrl;
      link.click();
    });
  }
  public getFileDownload(id:number): any {
    return this.clienteService.getFile(id);
  }

}
