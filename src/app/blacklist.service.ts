import {Inject, Injectable} from '@angular/core';
import {BlockListInterface} from './blocklist.interface';

@Injectable()
export class BlacklistService {
  constructor(private blockListLogger: BlockListInterface) {}
  logger(obj: any) {
    this.blockListLogger.blockListLogger(obj);
  }
}
