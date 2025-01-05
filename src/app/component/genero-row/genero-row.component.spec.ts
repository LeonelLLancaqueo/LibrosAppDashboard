import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroRowComponent } from './genero-row.component';

describe('GeneroRowComponent', () => {
  let component: GeneroRowComponent;
  let fixture: ComponentFixture<GeneroRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
