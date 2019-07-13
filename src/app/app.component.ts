import { Component } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
import { of , from,Subscription,interval,fromEvent} from 'rxjs'; 
import { map,takeUntil,delay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{


ngOnInit() {

const source1$ = interval(1000)
const source2$ = of(4,5,6).pipe( delay(5000))

//const source2$ = of(4).pipe( delay(5000))

source1$.pipe(
  takeUntil(source2$)
).subscribe( val => console.log(val))

                    // -----x----- //

                    console.log(" // -----x----- //")

const interval$ = interval(1000)
const clicks$   = fromEvent(document,'click')

const result$ = interval$.pipe(takeUntil(clicks$)).subscribe( val =>                                                                 console.log(val))
                                              


}

}


/*
 takeUntil()
 ---------------

public takeUntil(notifier: Observable): Observable<T>

 Emits the values emitted by the source Observable until a inner Observable emits a value.

 takeUntil subscribes and begins mirroring the source Observable. It also monitors a second Observable, notifier that you provide. If the notifier emits a value or a complete notification, the output Observable stops mirroring the source Observable and completes.

                      ***Code Explanation ***

 source1$ will start emitting values after every 1 second. Now takeUntil will subscribe to the inner ovbservable source2$ which will emit 4,5,6 & has delay of 5 sec => after 5 seconds the inner observable will start emitting.

 Till that time , our outer observable (source1$) will emit values. Once 5 seconds is completed our inner observable starts emitting the values at a single stretch & once it's completed our outer observabl;e stops emitting the values


*/






              
                          

            