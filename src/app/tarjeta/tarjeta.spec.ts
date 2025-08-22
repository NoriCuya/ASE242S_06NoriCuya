import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaComponent } from './tarjeta';

describe('Tarjeta', () => {
  let component: TarjetaComponent;
  let fixture: ComponentFixture<TarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
