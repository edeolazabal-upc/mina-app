import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinaCrearComponent } from './mina-crear.component';

describe('MinaCrearComponent', () => {
  let component: MinaCrearComponent;
  let fixture: ComponentFixture<MinaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinaCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
