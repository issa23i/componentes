// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-infinite-scroll',
//   templateUrl: './infinite-scroll.page.html',
//   styleUrls: ['./infinite-scroll.page.scss'],
// })
// export class InfiniteScrollPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild( IonInfiniteScroll ) inifiteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }


  loadData( event ) {

    // console.log(event);

    setTimeout(() => {

      if ( this.data.length > 50 ) {
        this.inifiteScroll.complete();
        this.inifiteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr );

      // event.target.complete();
      this.inifiteScroll.complete();
    }, 1500);

  }

}
