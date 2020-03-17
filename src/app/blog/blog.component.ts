import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from "lodash-es";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  private debounceOnScroll = _.debounce((event) => this.handleEvent(event), 50,
    {
      leading: false,
      trailing: true
    })

  @HostListener('window:mousewheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.debounceOnScroll(event);
  }

  constructor(private router: Router) {
  }

  handleEvent(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.router.navigate(['resume']);
    } else {
      this.router.navigate(['contact']);
    }
  }

  ngOnInit(): void {
  }
}
