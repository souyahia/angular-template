import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { OnDestroyComponent } from 'app/core/components/on-destroy.component';
import { filter, map, takeUntil } from 'rxjs';

interface NavItem {
  title: string;
  url: string;
}

@Component({
  selector: 'my-app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends OnDestroyComponent implements OnInit {
  public readonly links: NavItem[] = [
    { title: 'navbar.links.home', url: '/' },
    { title: 'navbar.links.example', url: '/example' },
  ];

  @ViewChild(NgbNav, { static: true })
  private ngbNav?: NgbNav;

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd),
        map((event) => event as NavigationEnd),
      )
      .subscribe((event) => this.updatedSelectedNavItem(event.url));
  }

  private updatedSelectedNavItem(url: string): void {
    this.ngbNav?.select(url);
  }
}
