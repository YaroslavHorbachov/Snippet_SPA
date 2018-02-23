import {Inject, Injectable} from '@angular/core';
import {BlacklistService} from './blacklist.service';

@Injectable()
export class BlackListNodeService {
  constructor(private blackListLogger: BlacklistService,
              @Inject('BlockList') private blockArray: string[]) {
  }
  loggerBlock(obj: any){
    this.blackListLogger.logger(obj);
    console.log(`Remember, you can't use help this animals ${[...this.blockArray]}`);
  }

}
