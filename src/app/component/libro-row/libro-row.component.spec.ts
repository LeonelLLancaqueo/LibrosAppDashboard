import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroRowComponent } from './libro-row.component';

describe('LibroRowComponent', () => {
  let component: LibroRowComponent;
  let fixture: ComponentFixture<LibroRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
