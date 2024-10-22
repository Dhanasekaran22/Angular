import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el:ElementRef,private render:Renderer2) {}

  @HostListener('mouseenter') onMouseEnter(){
    this.changeBgColor('yellow');
  }

  @HostListener('mouseleave') onMouseleave(){
    this.changeBgColor(null);
  }

  private changeBgColor(color:string|null){
    this.render.setStyle(this.el.nativeElement,'background-color',color);
  }

}
