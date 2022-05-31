import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appHighLight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'

  constructor() {}

  @HostListener("mouseenter") mouseenter(event: Event) {
    this.backgroundColor = 'red'
  }

  @HostListener("mouseleave") mouseleave(event: Event) {
    this.backgroundColor = 'transparent'
  }
}
