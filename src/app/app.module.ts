import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntroSecComponent } from './intro-sec/intro-sec.component';
import { AppSkillsComponent } from './app-skills/app-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skill/skill.component';
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroSecComponent,
    AppSkillsComponent,
    PortfolioComponent,
    FooterComponent,
    SkillComponent,
    PortfolioCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
