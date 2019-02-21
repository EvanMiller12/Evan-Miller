import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./global/nav/nav.component";
import { SocialComponent } from "./global/social/social.component";
import { SkillsComponent } from "./skills/skills.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    ProjectsComponent,
    HomeComponent,
    SocialComponent,
    SkillsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
