import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { GenerationListComponent } from './generation-list.component';
import { GamesService } from '../shared/service/games.service';
import { GenerationPipe } from '../shared/pipe/generation.pipe';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { PrimengModule } from 'src/app/primeng.module';

describe('GenerationListComponent', () => {
  let component: GenerationListComponent;
  let fixture: ComponentFixture<GenerationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GenerationListComponent,
        GenerationPipe,
        NotFoundComponent,
        LoadingComponent,
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
    fixture = TestBed.createComponent(GenerationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be equal the cols', () => {
    const cols = [
      { field: 'name', header: 'Gerações' },
      { field: 'url', header: 'Ver detalhes' },
    ];
    expect(component.cols).toEqual(cols);
  });

  it('should loading to be true', () => {
    component.generationGames();
    expect(component.loading).toBeTrue();
  });
});
