import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IData, IInfo} from "./models/info.model";
import {catchError, map, Observable, shareReplay, tap, throwError} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {

  private readonly API_PRIVEE = 'api/infos.json'

  constructor(private http: HttpClient) {
  }

  infos$: Observable<IInfo<IData>[]> = this.http.get<IInfo<IData>[]>(this.API_PRIVEE).pipe(
    map((infos) => infos.filter((info) => info.quantite >= 1)),
    catchError(ProductService.handleError),
    shareReplay(1)
  )

  private static handleError(error: Error): Observable<never> {
    return throwError(() => {
      return 'Unknown Error'
    })
  }

  public actionDeVerification(info: IInfo<IData>): boolean {
     return !!info;
  }

  commander(info: IInfo<IData>): Observable<IInfo<IData>> {
    return this.http.post<{obj: IInfo<IData>}>(`${this.API_PRIVEE}/'envoyer-commande'`, info).pipe(
      map((obj) => {
        return {
          ...obj.obj
        }
      }),
      tap((value) => value && console.log('POST ', this.API_PRIVEE, value))
    )
  }

  annulerCommande(info: IInfo<IData>): Observable<IInfo<IData>> {
    return this.http.post<{obj: IInfo<IData>}>(`${this.API_PRIVEE}/'cancel-commande'`, info).pipe(
      map((obj) => {
        return {
          ...obj.obj
        }
      }),
      tap((value) => value && console.log('POST ', this.API_PRIVEE, value))
    )
  }

  relance(info: IInfo<IData>): Observable<IInfo<IData>> {
    return this.http.post<{obj: IInfo<IData>}>(`${this.API_PRIVEE}/'relance'`, info).pipe(
      map((obj) => {
        return {
          ...obj.obj
        }
      }),
     tap((value) => value && console.log('POST ', this.API_PRIVEE, value))
    )
  }
}
