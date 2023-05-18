# MicroProjetoFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

npm -v 
6.14.17

node -v
v14.20.0

angular/cli
6.14.11

npm install -g typescript
npm install -g @angular/cli


criar um novo projeto

ng new micro-projeto-frontend

ng serve

ng generate component lista-uf-component
ng generate service servico/stados

npm install @angular-devkit/schematics @angular-devkit/schematics-cli @angular-devkit/core @schematics/angular
npm install @angular/material
npm install --save @angular/material @angular/animations @angular/cdk

npm start


create material.bibliotecas.modules.ts

```
import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkListboxModule} from '@angular/cdk/listbox';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import {DialogModule} from '@angular/cdk/dialog';

@NgModule({
  exports: [
    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkListboxModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    DialogModule,
  ]
})
export class MaterialBibliotecasModule {}
```

# Adicionando comandos para build e start do front
No packagen.json inserir
"build:prod": "ng build --configuration  production --base-href .",
"start-prod": "ng build --production --base-href . && static-server dist/ -p 4200"
no angular.json

na seção configurations
```
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environments.ts",
                  "with": "src/environments/environments.prod.ts"
                }
              ],
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
```

## Gerando um novo componente

ng g c list-uf-component


html

```
<div class="example-container">
    <mat-form-field hintLabel="Max 10 characters" appearance="fill">
      <mat-label>Insira um Texto</mat-label>
      <input matInput #input maxlength="10" placeholder="Hello">
      <mat-hint align="end">{{input.value.length}}/10</mat-hint>
    </mat-form-field>
  
    <mat-form-field appearance="fill">
      <mat-label>UF</mat-label>
      <mat-select>
        <mat-option *ngFor="let state of states" value="state.id">{{state.siglaUf}}</mat-option>
      </mat-select>
      <mat-hint align="end">Selecione um Estado clicando na seta ^</mat-hint>
    </mat-form-field>
  </div>
```
  
.scss

```
  .example-container mat-form-field + mat-form-field {
    margin: 100px 100px 100px 100px;
  }
```

criar uma pasta interfaces

criar arquivo states.ts dentro de interfaces 

```
  export interface Estados {
    id: string;
    siglaUf: string;
}
```

  .ts

```
  states: Estados[] = [];

  constructor(private stadosService: StadosService){
    this.buscarEstadosServico();
   }

  buscarEstadosServico(){
    this.stadosService.getServicoStados()
      .subscribe((response) => {
        this.states = response;
      });
  }
```

criar pasta environments dentro de src

criar arquivos environments.ts

```
  export const environment = {
    PRODUCTION: false,
    REST_URL: "http://localhost:8080"
}
```

criar arquivo environments.prod.ts

```
export const environment = {
    PRODUCTION: true,
    REST_URL: "http://localhost:8080"
}
```
```
ng generate service servico/estados
```

```
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';


   constructor(private http: HttpClient) { }

  getServicoStados(): Observable<Estados[]> {
    return this.http.get<Estados[]>(`${environment.REST_URL}/estados`)
      .pipe(
        tap({
          error: (error) => console.error(error)
        })
      );
  }
```

add em app.module

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


BrowserModule,
BrowserAnimationsModule,
AppRoutingModule,
FormsModule,
ReactiveFormsModule,
MaterialBibliotecasModule,
HttpClientModule
```

index.html
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MicroProjetoFrontend</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

app.routing.module.ts

```
const routes: Routes = [
  {
    path: '',
    component: ListUfComponentComponent
  }
];
```

build para subir no docker

npm run build:prod

docker build -t micro-projeto-frontend .

docker run -d -it -p 4200:80/tcp --name micro-projeto-frontend micro-projeto-frontend:latest
