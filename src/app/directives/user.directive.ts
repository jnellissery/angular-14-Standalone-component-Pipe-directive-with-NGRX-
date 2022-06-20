import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUser]',
  standalone: true,
})
export class UserDirective {
  @HostListener('mouseenter')
  MouseEnter() {
    let docStyle = getComputedStyle(document.documentElement);
    let myVarVal= docStyle.getPropertyValue('--blue');
    this.elementref.nativeElement.style.backgroundColor =myVarVal;
  }
  @HostListener('mouseleave') mouserLeave() {
    this.elementref.nativeElement.style.backgroundColor = '';
  }
  
  constructor(private elementref: ElementRef) {}
}
