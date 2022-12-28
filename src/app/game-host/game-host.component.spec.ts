import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHostComponent } from './game-host.component';

describe('PreguntaRespuestaComponent', () => {
  let component: GameHostComponent;
  let fixture: ComponentFixture<GameHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
