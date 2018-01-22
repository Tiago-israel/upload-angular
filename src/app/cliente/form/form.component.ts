import { Component, OnInit, ElementRef } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente : Cliente = new Cliente();
  public file : File;
  constructor(private clienteService : ClienteService,private element: ElementRef) { }

  ngOnInit() {
  }

  public salvarDocumento(){
    
  }

  public carregarArquivoEmMemoria(){
    let files = this.element.nativeElement.querySelector("#file").files;
    this.file = files[0];
    console.log(this.file);
  }


  myUploader($event) {
    console.log($event);
  }

  upload(id : number): void {
    console.log(this.file);
    let formData: FormData = new FormData();
    formData.append('arquivo', this.file,this.file.name);
    this.clienteService.enviarDocumento(id,formData);
  }

  public salvar(){
    console.log(this.cliente);
    this.clienteService.post(this.cliente).subscribe(cliente => {
      this.upload(cliente.id);
    });
  }

}
