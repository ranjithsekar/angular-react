import(Injectectable) from '@angular/core';


@Injectable({ providedIn: 'root' })
export class CalcService {

    public add(a: number, b: number): number {
        return a + b;
    }

    public subtract(a: number, b: number): number {
        return a + b;
    }
}