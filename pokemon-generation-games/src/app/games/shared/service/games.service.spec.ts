import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { GamesService } from './games.service';
import { RouterModule } from '@angular/router';

describe('GamesService', () => {
  let httpTestingController: HttpTestingController;
  let service: GamesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(GamesService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return data when pass the id', () => {
    expect(service.getGameGenerationById(2)).toBeTruthy();
  });
});
