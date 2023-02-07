import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  get isDarkMode(): boolean {
    return this.currentTheme === 'dark-theme';
  }

  private currentTheme = 'dark-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'dark-theme';
    this.renderer.setAttribute(this.document.body, 'class', `${this.currentTheme} mat-app-background`);
  }

  switchTheme() {
    this.currentTheme = this.isDarkMode ? 'light-theme' : 'dark-theme';
    this.renderer.setAttribute(this.document.body, 'class', `${this.currentTheme} mat-app-background`);
    localStorage.setItem('activeTheme', this.currentTheme);
  }
}
