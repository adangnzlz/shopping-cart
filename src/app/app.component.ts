import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { fadeAnimation } from './animations/fade-in.animation';

import { Observable } from 'rxjs/Observable';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './services/loader.service';
import { log } from './decorators/log.decorator';
import { NgLog } from './decorators/nglog.decorator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./app.component.scss']
})
@NgLog()
export class AppComponent implements OnInit, AfterViewInit {



  expanded = false;
  objLoaderStatus: boolean;

  constructor( router: Router, private loaderService: LoaderService) {

    this.objLoaderStatus = false;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  // @log()
  ngOnInit(): void {
    this.loaderService.loaderStatus.subscribe((val: boolean) => {
      this.objLoaderStatus = val;
    });
  }

  onToggle() {
    this.expanded = !this.expanded;
  }
  closeMenu() {
    this.expanded = false;
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  ngAfterViewInit(): void {}
}
