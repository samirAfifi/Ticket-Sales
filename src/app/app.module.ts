import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { ChartComponent } from './Components/chart/chart.component';
import { CardComponent } from './Components/card/card.component';
import { TableComponent } from './Components/table/table.component';
import { QRCodeModule } from 'angularx-qrcode';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
   
    FormsModule,
    BrowserModule,
    QRCodeModule,
    InputSwitchModule,
    InputTextModule,
    TableModule,
    FileSaverModule 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
