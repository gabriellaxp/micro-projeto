import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUfComponentComponent } from './list-uf-component.component';

describe('ListUfComponentComponent', () => {
  let component: ListUfComponentComponent;
  let fixture: ComponentFixture<ListUfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUfComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
