import {Injectable} from "@angular/core";
import {ServerConnectorService} from "./server-connector.service";
import {StaticData} from "../classes/static-data";
import {StaticCache} from "./static-cache";
@Injectable()
export class StaticDaoService{
  private serverConnector: ServerConnectorService;

  constructor(serverConnector: ServerConnectorService){
    this.serverConnector = serverConnector;
  }

  public getSizes(){
    this.serverConnector.getData("/sizes").subscribe(data => {
      (data as StaticData[]).forEach(size => StaticCache.sizes.push(size));
    });
  }
}
