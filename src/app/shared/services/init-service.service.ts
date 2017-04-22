import { Injectable } from '@angular/core';

import {StaticDaoService} from "./static-dao.service";

@Injectable()
export class InitServiceService{

  private staticDao : StaticDaoService;

  constructor(staticCache : StaticDaoService) {
    this.staticDao = staticCache;
  }

  initApp(): void{
    this.staticDao.getSizes();
  }

}
