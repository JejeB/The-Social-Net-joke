import { Component, OnInit } from '@angular/core';
import { ApigetService } from '../apiget.service';
import {Joke} from '../joke/joke'
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'cnt-scroller',
  template: `
  
  
  <cdk-virtual-scroll-viewport itemSize="100" class="fact-scroll-viewport" style="height: 200%">
  <div  *cdkVirtualFor="let currentJoke of dataSource">
    <div *ngIf="currentJoke">
      <cnt-joke [thejoke]="currentJoke">
    </cnt-joke>
   </div>
    
  </div>
  <div >
        API got a max request on 60 per minute please retry later
  <div class="spinner-border" role="status">
  <span class="sr-only"></span>
</div>

  </div>
  </cdk-virtual-scroll-viewport>
  
  `,
  styles: [
  ]
})
export class ScrollerComponent implements OnInit {

  dataSource: JokesDataSource;

  
  constructor(public apiget: ApigetService) { 
    this.dataSource=  new JokesDataSource(apiget);
  }

  ngOnInit(): void {
  
  }

}

export class JokesDataSource extends DataSource<Joke | undefined> {
  private cachedJokes = Array.from<Joke>({ length: 0 });
  private dataStream = new BehaviorSubject<(Joke | undefined)[]>(this.cachedJokes);
  private subscription = new Subscription();
 

  private pageSize = 10;
private lastPage = 0;
constructor(public apiget: ApigetService) {
  super();
  this._fetchFactPage();
}

private _fetchFactPage(): void {
  for (let i = 0; i < this.pageSize; ++i) {
   this.apiget.getJokes().subscribe(data =>{
     this.cachedJokes = this.cachedJokes.concat(data)
     this.dataStream.next(this.cachedJokes);
   });
  }
}

private _getPageForIndex(i: number): number {
  return Math.floor(i / this.pageSize);
}
  connect(collectionViewer: CollectionViewer): Observable<(Joke | undefined)[] | ReadonlyArray<Joke | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {
      const currentPage = this._getPageForIndex(range.end);

      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this._fetchFactPage();
      }
  
    
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }
}