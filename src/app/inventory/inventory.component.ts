import {ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../product.service";
import {IData, IInfo} from "../models/info.model";


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent {

  infos$: Observable<IInfo<IData>[]> = this.service.infos$

  constructor(public service: ProductService) {}


  getInfoData(info: IInfo<IData>) {
    return info.data !== null;
  }


  command(info: IInfo<IData>) {
    this.service.commander(info);
  }
  cancel(info: IInfo<IData>) {
    this.service.annulerCommande(info);
  }

  revival(info: IInfo<IData>) {
    this.service.actionDeVerification(info);
    this.service.relance(info);
  }


}
