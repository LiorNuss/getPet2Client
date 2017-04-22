import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ServerConnectorService{
  private serverURL : string = "http://127.0.0.1:4200";
  private http: Http;

  constructor(http: Http){
    this.http = http;
  }

  public getData(url:string, params?:URLSearchParams): Observable<any>{
    if(params){
      return this.http.get(`${this.serverURL}${url}`, {search: params}).map(response => response.json()).catch(this.handleError);
    }else{
      return this.http.get(`${this.serverURL}${url}`).map(response => response.json()).catch(this.handleError);
    }
  }

  public postDAta(url: string, body:any) : Observable<any>{
    return this.http.post(`${this.serverURL}${url}`, body).map(response=> response.json()).catch(this.handleError);
  }

  private handleError(error:any):Observable<any>{
    return Observable.throw(error.message || error);
  }
}
