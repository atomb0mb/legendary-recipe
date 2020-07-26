import {Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})

export class DropdownDirective implements OnInit{
    @HostBinding('class.open') isOpen = false;

 @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
 }

    ngOnInit(){

    }
}