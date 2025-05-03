import { Component } from '@angular/core';
import { BigComponent } from '../big/big.component';
import { HugeComponent } from '../huge/huge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigComponent, HugeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
