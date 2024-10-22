import { Directive,ElementRef,Renderer2,HostListener,OnInit } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {

  constructor(private el:ElementRef, private render:Renderer2) { }

  ngOnInit(){
   this.setDefaultStyles();

  }

  private setDefaultStyles(){
    this.render.setStyle(this.el.nativeElement,'box-shadow','0 4px 8px rgba(0,0,0,0.1)');
    this.render.setStyle(this.el.nativeElement,'border-radius','10px');
    this.render.setStyle(this.el.nativeElement,'padding','16px');
    this.render.setStyle(this.el.nativeElement,'background-color','lightblue');
  }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.el.nativeElement,'box-shadow','0px 8px 10px rgba(0,0,0,0.3)');
    this.render.setStyle(this.el.nativeElement,'background-color','lightcoral');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setDefaultStyles();
  }

  
}
