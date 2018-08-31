import { resorts } from '../data/resorts';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class ResortDataService {

    private resorts: IResortItem[] = resorts;

    public constructor() {
    }

    public getResorts(): Observable<IResortItem[]> {
        return of(this.resorts).pipe(
            delay(2000)
        );
    }

}