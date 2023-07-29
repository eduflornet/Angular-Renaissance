import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokerDirective {
  @Input() customImg: string = '';

  @HostListener('error') handleError(): void {

    const elNative = this.elHost.nativeElement;
    console.log('🔴 This image has been broken -->', this.elHost);
    elNative.src = this.customImg;

  }

  constructor(private elHost: ElementRef) { }

}
