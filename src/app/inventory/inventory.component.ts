import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../product.service";


interface Info {
  quantite: number;
  title: string;
  data?: any;
}


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private http: HttpClient, public service: ProductService) {
    this.a$ = http.get<Info[]>("https://api-privee/info");
  }

  @ViewChild("relance") relanceEl!: ElementRef;
  a$: Observable<Info[]>;
  infos: any;

  ngOnInit(): void {
    this.a$.subscribe((info) => (this.infos = info));
  }
  getInfoData(info: Info) {
    return info.data !== null;
  }
  @HostListener("mouseenter") mouseenter() {
    this.relanceEl.nativeElement.style.backgroundColor = "red";
  }
  @HostListener("mouseleave") mouseleave() {
    this.relanceEl.nativeElement.style.backgroundColor = "transparent";
  }
  // @HostListener('mouseexit') mouseexit() {
  // if(this.relanceEl) {
  // this.relanceEl.nativeElement.style.backgroundColor = 'yellow';
  // }
  // }
  command(info: Info) {
    this.http.post("https://api-privee/envoyer-commande", info);
  }
  cancel(info: Info) {
    this.http.post("https://api-privee/cancel-commande", info);
  }
  // permet de faire une relance
  rev(info: Info) {
    this.actionDeVerification();
    this.http.post("https://api-privee/relance", info);
  }
  public actionDeVerification() {
    //.....
    return true;
  }

}
