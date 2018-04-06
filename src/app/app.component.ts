import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from './core-module/services/loader.service';
import { NgLog } from './shared-modules/common-util/decorators/nglog.decorator';
import { log } from './shared-modules/common-util/decorators/log.decorator';
import { environment } from '../environments/environment';
import { fadeAnimation } from './shared-modules/common-util/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./app.component.scss']
})

@NgLog(environment)
export class AppComponent implements OnInit {

  expanded = false;
  objLoaderStatus: boolean;

  constructor(router: Router, private loaderService: LoaderService) {

    this.objLoaderStatus = false;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  @log()
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
}
