import { Injectable } from "@angular/core";
import { AbstractHttpService } from "../shared/abstract-http.service";
import { Cliente } from "./model/cliente";
import { Http, RequestOptions,Headers, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClienteService extends AbstractHttpService<Cliente>{
    constructor(http: Http) {
        super('cliente', http);
    }

    public enviarDocumento(id: number, formData : FormData): void {
        console.log(formData);
        this.apiUrl += "cliente/"+id;
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.apiUrl, formData, options).subscribe();
    }

    public getFile(id: number) : Observable<Blob> {
        return this.http.get("http://localhost:8080/api/cliente/"+id, this.getOptions()).map(res => {
            return new Blob([res.blob()], { type: res.blob().type })
        });
    }

    public getOptions():RequestOptions{
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return new RequestOptions({headers: headers,responseType : ResponseContentType.Blob});
    }

}