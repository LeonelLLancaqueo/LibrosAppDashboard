import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorRowComponent } from './autor-row.component';

describe('AutorRowComponent', () => {
  let component: AutorRowComponent;
  let fixture: ComponentFixture<AutorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
