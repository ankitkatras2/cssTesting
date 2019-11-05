import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Import prism core */
import 'prismjs/prism';

/* Import the language you need to highlight */
import 'prismjs/components/prism-typescript';

import { TooltipModule } from 'primeng/tooltip';

import { PrismComponent } from '../app/angular-prism/angular-prism';
import { FlipButton3DComponent } from './flip-button3-d/flip-button3-d.component';
import { UnderwaterPatternComponent } from './underwater-pattern/underwater-pattern.component';
import { BoxesFloatUpComponent } from './boxes-float-up/boxes-float-up.component';
import { BorderAnimationButtonComponent } from './border-animation-button/border-animation-button.component';
import { PureCssNavBar1Component } from './pure-css-nav-bar1/pure-css-nav-bar1.component';
import { PureCssNavBar2Component } from './pure-css-nav-bar2/pure-css-nav-bar2.component';
import { SocialButtons1Component } from './social-buttons1/social-buttons1.component';
import { RadioButtons1Component } from './radio-buttons1/radio-buttons1.component';
import { InformationCardComponent } from './information-card/information-card.component';
import { BeforeAfterSliderComponent } from './before-after-slider/before-after-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PrismComponent,
    FlipButton3DComponent,
    UnderwaterPatternComponent,
    BoxesFloatUpComponent,
    BorderAnimationButtonComponent,
    PureCssNavBar1Component,
    PureCssNavBar2Component,
    SocialButtons1Component,
    RadioButtons1Component,
    InformationCardComponent,
    BeforeAfterSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
