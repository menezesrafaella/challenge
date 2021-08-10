import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

import { GenerationDetailComponent } from './generation-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { PrimengModule } from 'src/app/primeng.module';
import { GamesService } from '../shared/service/games.service';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

describe('GenerationDetailComponent', () => {
  let component: GenerationDetailComponent;
  let fixture: ComponentFixture<GenerationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GenerationDetailComponent,
        LoadingComponent,
        NotFoundComponent,
      ],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        PrimengModule,
        RouterModule.forRoot([]),
      ],
      providers: [GamesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to uppercase the first letter', () => {
    const word = 'teste';
    expect(component.firstLetter(word)).toEqual('Teste');
  });
});
