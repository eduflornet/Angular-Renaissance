import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroker]'
})
export class ImgBrokerDirective {
  @Input() customImg: string = '';

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('🔴 Esta imagen revento -->', this.elHost);
    elNative.src = this.customImg

  }

  constructor(private elHost: ElementRef) { }

}
